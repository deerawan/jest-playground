import {MyService} from './service';

export class MyController {

  constructor() {  }

  public async queryDataById(id: string) {
    const myService = new MyService();
    return myService.query(id);
  }
}
