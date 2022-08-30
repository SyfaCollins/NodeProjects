/** @format */
/**
 * This is the last piece of the pizzle
 * This is the architecture of the request
 * also known as the schema.
 * 
 * It holds a calls in a mongoose library that
 * helps in building the pieces and validation 
 *
 */
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a name "],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
