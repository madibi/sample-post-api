import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Post } from '../entities/post.entity';
import { PostService } from '../services/post.service';

@Controller('posts')
@ApiTags('posts')
export class PostController {

    constructor(private readonly postService: PostService) {}    

    @Get()
    async posts(      
    ): Promise<Post[]> {
      const res = await this.postService.posts();
      if (res.status) {
        return res.object;
      } else {
        throw new HttpException(res.message, res.httpStatus);
      } 
    }     
  
    @Get(':id')
    async post(   
      @Param('id') id: string,
    ): Promise<Post> {
      const res = await this.postService.post(id);
      if (res.status) {
        return res.object;
      } else {
        throw new HttpException(res.message, res.httpStatus);
      } 
    }           
}