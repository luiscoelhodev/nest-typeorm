import { Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/param/:id')
  getParamRoute(@Param('id', ParseIntPipe) id: string) {
    return this.appService.getParamRoute(id)
  }

  @Get('query')
  @UsePipes(new ValidationPipe({ transform: true }))
  getQueryRoute(@Query('query') query: number) {
    return { query, typeOfQuery: Object.prototype.toString.call(query) }
  }

  @Get('/active/:active')
  @UsePipes(new ValidationPipe({ transform: true }))
  getActiveParamRoute(@Param('active') active: boolean) {
    return { active, typeOfActive: Object.prototype.toString.call(active) }
  }
}
