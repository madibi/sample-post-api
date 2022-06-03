import { OmitType } from '@nestjs/swagger';
import { Post } from './post.dto';

export class UpdatePost extends OmitType(Post, 
    ['id'] as const)
    {}
