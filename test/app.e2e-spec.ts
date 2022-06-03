
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './../src/schema/app/app.module';
import { PostModule } from './../src/schema/post/post.module';
import * as request from 'supertest';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let httpServer: any;

  beforeAll(async () => {
    const testingModule = await Test.createTestingModule({
      imports: [AppModule, PostModule]
    })
    .compile();

    app = testingModule.createNestApplication();
    await app.init();

    httpServer = app.getHttpServer();
  })

  afterAll(async () => {
    await app.close();
  })

  it('/app/info (GET)', async () => {
    const response = await request(httpServer).get('/app/info');
    expect(response.status).toBe(200);
    expect(typeof response.text).toBe('string');
  });
});
