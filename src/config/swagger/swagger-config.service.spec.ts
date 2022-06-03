import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Test, TestingModule } from '@nestjs/testing';
import { SwaggerConfigService } from './swagger-config.service';
import { AppModule } from './../../schema/app/app.module';

describe('AppConfigService', () => {

  let swaggerConfigService: SwaggerConfigService;
  
  const mockConfigService = {
    get: jest.fn((key: string) => {
      return '';
    })    
  };  

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      providers: [
        SwaggerConfigService,  
        ConfigService     
      ],
    })
    .overrideProvider(ConfigService)
    .useValue(mockConfigService)    
    .compile();

    swaggerConfigService = testingModule.get<SwaggerConfigService>(SwaggerConfigService);
    swaggerConfigService.init = jest.fn()
      .mockImplementation(() => {return ''});
  });

  it('should be defined', () => {
    expect(swaggerConfigService).toBeDefined();
  });  

  it('should return isEnable', async() => {
    expect(typeof swaggerConfigService.isEnable).toBe('boolean');
  });  

  it('should return title', () => {
    expect(typeof swaggerConfigService.title).toBe('string');
  });  

  it('should return description', () => {
    expect(typeof swaggerConfigService.description).toBe('string');
  });  
  
  it('should return version', () => {
    expect(typeof swaggerConfigService.version).toBe('string');
  });  
  
  it('should return version', () => {
    expect(typeof swaggerConfigService.version).toBe('string');
  });  
  
  it('should return preFix', () => {
    expect(typeof swaggerConfigService.preFix).toBe('string');
  });
  
  it('should init', async () => {
    const mockApp: any = '';    
    expect(typeof swaggerConfigService.init(mockApp)).toBeDefined();
  });
});


