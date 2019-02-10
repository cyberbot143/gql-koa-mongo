import mongoose from "mongoose";
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const GadgetSchema = new Schema({
  id: Number,
  name: String,
  release_date: Date,
  by_company: String,
  price: Number
});

export default mongoose.model("Gadget", GadgetSchema);
