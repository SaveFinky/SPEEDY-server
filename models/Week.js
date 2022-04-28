const mongoose = require("mongoose");

const WeekSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: false,
  },
  second_name: {
    type: String,
    required: false,
  },
  exc_name: {
    type: String,
    required: false,
  }
});

const WeekModel = mongoose.model("week", WeekSchema);

module.exports = WeekModel;
