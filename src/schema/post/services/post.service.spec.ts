import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { PostRepository } from '../repositories/post.repository';
import { PostService } from './post.service';
import { CheckOutObject } from './../../common/models/classes/check-out-object.class';

describe('PostService', () => {
  let postService: PostService;
  const mockPost = { id: 1, userId: 1, title: '', body: '' };
  const checkOutObject = new CheckOutObject<any>();
  const mockPostRepository = {
    find: jest.fn(() => {return [mockPost]}),
    findOne: jest.fn(() => {return mockPost}),
  };

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      providers: [
        PostService,
        {
          provide: getRepositoryToken(PostRepository),
          useValue: mockPostRepository,
        },
      ],
    })
      .compile();

      postService = testingModule.get<PostService>(PostService);
  });

  afterAll(async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
  });

  it('should be defined', async () => {
    expect(postService).toBeDefined();
  });

  it('should get posts', async () => {
    checkOutObject.object = [mockPost];
    expect(await postService.posts()).toEqual(checkOutObject);
  });  

  it('should get post', async () => {
    checkOutObject.object = mockPost;
    expect(await postService.post('')).toEqual(checkOutObject);
  });  
});
