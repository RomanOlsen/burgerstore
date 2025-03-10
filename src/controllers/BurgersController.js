import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      // .get('', this.testItOut)
      .get('', this.grabBurgers)
      .post('', this.buildBurger)
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

  async buildBurger(request, response, next) {
    try {
      const burgerData = request.body
      const burger = await burgerService.buildBurger(burgerData)
      response.send(burger) // this is important! or else will keep loading/sending without a proper stop (even if technically works)

    } catch (error) {
      console.log('cannot make burger', error);
      throw new Error("No burger can be made with whatever you gave me");


    }
  }

}