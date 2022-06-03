import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}
  
  // app
  get env(): string {
    return this.configService.get<string>('app.env');
  }  
  get name(): string {
    return this.configService.get<string>('app.name');
  }
  get port(): number {
   return Number(this.configService.get<number>('app.port'));
  }
  get apiGlobalPrefix(): string {
    return this.configService.get<string>('app.apiGlobalPrefix');
  }
  get version(): string {    
    const version = require('./../../../package.json').version || '';
    return version;
  }  
  get redisHost(): string {
    return this.configService.get<string>('app.redisHost');
  }  
  get redisPort(): string {
    return this.configService.get<string>('app.redisPort');
  }      
}