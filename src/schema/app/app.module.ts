import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { AppConfigModule } from '../../config/app/app-config.module';
import { SwaggerConfigModule } from '../../config/swagger/swagger-config.module';
import { sqlLite } from './../../config/database/database.config';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from '../post/post.module';

@Module({
  imports: [
    HttpModule,
    AppConfigModule,
    SwaggerConfigModule,
    TypeOrmModule.forRoot(sqlLite),
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
