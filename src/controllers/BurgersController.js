import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      // .get('', this.testItOut)
      .get('', this.grabBurgers)
    //...
    // console.log('test');

  }

  testItOut(req, respo, next) {
    respo.send('<h1>hello</h1>')
    console.log('log');

  }

  async grabBurgers(request, response, next) {
    try {
      const burgers = await burgerService.grabBurgers()
      response.send(burgers)
    } catch (error) {
      console.log('Oh no!', error);

    }
  }

}