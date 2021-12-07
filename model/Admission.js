const mongoose = require("mongoose");
const optionSchema = new mongoose.Schema({
  grade: { type: String, required: true },
  fees: { type: Number, required: true },
  seats: { type: Number,required: true },
});
const gradeSchema = new mongoose.Schema({
  category: { type: String, required: true },
  options: [optionSchema],
});
module.exports = mongoose.model("admission", gradeSchema);
