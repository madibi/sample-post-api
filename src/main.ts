import { NestFactory } from '@nestjs/core';
import { AppModule } from './schema/app/app.module';
import { AppConfigService } from './config/app/app-config.service';
import { SwaggerConfigService } from './config/swagger/swagger-config.service';
import { HttpResponseInterceptor } from './interceptors/http-response.interceptor';
import { FallbackExceptionFilter } from './filters/fallback.filter';
import { HttpExceptionFilter } from './filters/http.filter';
import { ValidationFilter } from './filters/validation.filter';
import { ValidationError, ValidationPipe } from '@nestjs/common';
import { ValidationException } from './filters/validation.exception';
import { Logger as NestLogger } from '@nestjs/common';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';

async function bootstrap() {
  const nestLogger = new NestLogger('BOOTSTRAP');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const appConfigService = app.get<AppConfigService>(AppConfigService);
  const swaggerConfig = app.get<SwaggerConfigService>(SwaggerConfigService);
  app.enableCors();
  app.useStaticAssets(join(__dirname, process.env.SERVER_STATIC_URL, '_INDEX'));
  app.setGlobalPrefix(appConfigService.apiGlobalPrefix);
  app.useGlobalInterceptors(new HttpResponseInterceptor());
  app.useGlobalFilters(
    new FallbackExceptionFilter(),
    new HttpExceptionFilter(),
    new ValidationFilter(),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const messages = errors.map(
          (error) => `${Object.values(error.constraints).join(', ')}`,
        );
        return new ValidationException(messages);
      },
    }),
  );
  swaggerConfig.init(app);
  await app.listen(appConfigService.port).then(() => {
    nestLogger.log(`server listen to: ${appConfigService.port} 🚀`);
  });
}
bootstrap();
