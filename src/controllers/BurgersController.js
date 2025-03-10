import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      // .get('', this.testItOut)
      .get('', this.grabBurgers)
      .post('', this.buildBurger)
      .delete('/:burgerId', this.removeBurger) // what if there is no extra link supplied, will it delete all? // NOTE :burgerId creates the parameter
      .delete('', this.removeAllBurgers)
      .put('/:burgerId', this.updateBurger)
    //...
    // console.log('test');

  }
  async updateBurger(request, response, next) {
    try {
      const burgerID = request.params.burgerId
      const newPrice = request.body.price
      const updatedBurger = await burgerService.update(burgerID, newPrice)
      response.send(updatedBurger)

    } catch (error) {
      throw new Error(error);

    }
  }

  async removeAllBurgers(request, response, next) {
    try {
      const burgers = request.body
      const deletedBurgers = await burgerService.deleteAll()
      response.send(deletedBurgers)

    } catch (error) {
      throw new Error("Dang it, we couldnt remove everything!");

    }
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

  async removeBurger(request, response, remove) {
    try {
      const burgerToDeleteID = request.params.burgerId
      const burger = burgerService.removeBurger(burgerToDeleteID)
      response.send(burger) // no roman, you cant add a fun message here
    } catch (error) {
      throw new Error("No burger can be deleted with whatever you gave me");
    }
  }


}