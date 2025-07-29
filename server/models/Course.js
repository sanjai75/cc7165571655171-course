const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    course: String,
    code: String,
    instructor: String,
    credits: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);