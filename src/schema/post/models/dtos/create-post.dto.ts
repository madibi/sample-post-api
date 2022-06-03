import { OmitType } from "@nestjs/swagger";
import { Post } from "./post.dto";

export class CreatePost extends OmitType(Post, 
['id'] as const)
{}
