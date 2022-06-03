import { PartialType } from '@nestjs/swagger';
import { Post as PostEntity } from './../../entities/post.entity';

export class Post extends PartialType(PostEntity) {}
