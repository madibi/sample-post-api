import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import appConfiguration from './app-configuration';
import { AppConfigService } from './app-config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [
        appConfiguration,
      ],
      validationSchema: Joi.object({
        APP_ENV: Joi.string()
          .valid('development', 'provision', 'stage', 'production')          
          .required().default('production'),         
        APP_NAME: Joi.string().default('no name'),
        APP_PORT: Joi.number().default(3000),
        APP_API_GLOBAL_PREFIX: Joi.string(),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}