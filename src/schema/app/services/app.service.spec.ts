import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;


  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      providers: [
        AppService
      ],
    })
      .compile();

    appService = testingModule.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(appService).toBeDefined();
  });

  describe('info', () => {
    it('should return "app describe"', async () => {
      expect(await appService.info()).toBe('Web - Full-Stack NestJS + Angular/ReactJS Test Assignment');
    });
  });
});
