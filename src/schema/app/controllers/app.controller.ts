import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './../services/app.service';

@Controller('app')
@ApiTags('app')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    ) {}

  @Get('info')
  info(): string {
    return this.appService.info();
  }
}
