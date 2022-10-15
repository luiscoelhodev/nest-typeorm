import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getParamRoute(id: string) {
    return { id: id, type: Object.prototype.toString.call(id) };
  }
}
