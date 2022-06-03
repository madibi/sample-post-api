import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CheckOutObject } from "./../../common/models/classes/check-out-object.class";
import { Post } from "../entities/post.entity";
import { PostRepository } from "../repositories/post.repository";


@Injectable()
export class PostService {

  constructor(
    @InjectRepository(PostRepository)
    private postRepository: PostRepository,
  ) { }

  async posts(): Promise<CheckOutObject<Post[]>> {
    const checkOutObject = new CheckOutObject<Post[]>(); 
    checkOutObject.object = await this.postRepository.find();
    return checkOutObject;
  }

  async post(id: string): Promise<CheckOutObject<Post>> {
    const checkOutObject = new CheckOutObject<Post>(); 
    const res = await this.postRepository.findOne(
      { where:
          { id }
      }
  );

  if (res) {
    checkOutObject.object = res;
  } else {
    checkOutObject.status = false;
    checkOutObject.message = "Not Found Post";
    checkOutObject.httpStatus = HttpStatus.NOT_FOUND;
  } 
    return checkOutObject;
  }  
}