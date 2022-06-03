import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppConfigService } from './app-config.service';

describe('AppConfigService', () => {

  let appConfigService: AppConfigService;

  const mockConfigService = {
    get: jest.fn((key: string) => {
      return '';
    })
  };  

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      providers: [
        AppConfigService,  
        ConfigService     
      ],
    })
    .overrideProvider(ConfigService)
    .useValue(mockConfigService)    
    .compile();

    appConfigService = testingModule.get<AppConfigService>(AppConfigService);
  });

  it('should be defined', () => {
    expect(appConfigService).toBeDefined();
  });  

  it('should return env', async() => {
    expect(typeof appConfigService.env).toBe('string');
  });  

  it('should return name', () => {
    expect(typeof appConfigService.name).toBe('string');
  });  

  it('should return port', () => {
    expect(typeof appConfigService.port).toBe('number');
  });  
  
  it('should return apiGlobalPrefix', () => {
    expect(typeof appConfigService.apiGlobalPrefix).toBe('string');
  });  
  
  it('should return version', () => {
    expect(typeof appConfigService.version).toBe('string');
  });  
  
  it('should return redisHost', () => {
    expect(typeof appConfigService.redisHost).toBe('string');
  });
  
  it('should return redisPort', () => {
    expect(typeof appConfigService.redisPort).toBe('string');
  });  
});
