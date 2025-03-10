import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.testItOut)
    //...
    // console.log('test');

  }

  testItOut(req, respo, next) {
    respo.send('<h1>hello</h1>')
    console.log('log');
    
  }

}