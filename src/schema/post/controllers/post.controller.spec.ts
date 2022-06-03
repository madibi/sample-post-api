import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import { PostService } from './../services/post.service';
import { CheckOutObject } from './../../common/models/classes/check-out-object.class';

describe('PostController', () => {
  let postController: PostController;
  let postService: PostService;

  const mockPost = { id: 1, userId: 1, title: '', body: '' };
  const checkOutObject = new CheckOutObject<any>();
  const mockPostService = {
    posts: jest.fn(() => { 
      checkOutObject.object = [mockPost];
      return checkOutObject;
    }),
    post: jest.fn(() => { 
      checkOutObject.object = mockPost;
      return checkOutObject;      
     }),
  };

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [
          {
              provide: PostService,
              useValue: mockPostService
          },          
        ],
    })
    .compile();

    postController = testingModule.get<PostController>(PostController);
    postService = testingModule.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(postController).toBeDefined();
  });

  it('should get the posts',async () => {
    expect(await postController.posts()).toEqual([mockPost]);
  });

  it('should get the post',async () => {
    expect(await postController.post('')).toEqual(mockPost);
  });
});