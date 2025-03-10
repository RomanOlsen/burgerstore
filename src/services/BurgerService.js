import { dbContext } from "../db/DbContext.js"

class BurgerService {
  async grabBurgers() {
    const burgers = await dbContext.Burger.find() // mongooses term to get everything
    return burgers
  }

  async buildBurger(burgerData) {
    const freshBurger = await dbContext.Burger.create(burgerData)
    return freshBurger
  }
  async removeBurger(burgerToDeleteID) {
    const burgerToRemove = await dbContext.Burger.findById(burgerToDeleteID).deleteOne()
    return burgerToRemove
  }
}

export const burgerService = new BurgerService()