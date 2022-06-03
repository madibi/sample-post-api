import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './../services/app.service';

describe('AppController', () => {
  let appController: AppController;

  const mockAppService = {
    info: jest.fn(() => {
          return '';
      })
  };

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
          {
              provide: AppService,
              useValue: mockAppService
          },          
        ],
    })
    .overrideProvider(AppService).useValue(mockAppService)
    .compile();

    appController = testingModule.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });

  describe('app controller', () => {
    it('info should be string', async () => {
      expect(typeof appController.info()).toBe('string'); 
    });
  });
});