import { Schema } from "mongoose";

export const BurgerSchema = new Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true }

})