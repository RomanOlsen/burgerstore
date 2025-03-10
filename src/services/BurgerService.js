import { dbContext } from "../db/DbContext.js"

class BurgerService {
  async grabBurgers() {
    const burgers = await dbContext.Burger.find()
    return burgers
  }

}

export const burgerService = new BurgerService()