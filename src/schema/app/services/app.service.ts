import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  info(): string {
    return 'Web - Full-Stack NestJS + Angular/ReactJS Test Assignment';
  }
}
