import { dbContext } from "../db/DbContext.js"

class BurgerService {
  async update(id) {
    const burger = await dbContext.Burger.findByIdAndUpdate(id)
    burger.price = 1
    return burger

  }
  async deleteAll() {
    return await dbContext.Burger.deleteMany()
  }
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