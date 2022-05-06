const express = require("express");
const app = express();
const mongoose = require("mongoose");
const WeekModels = require("./models/Week");

require("dotenv").config();

const cors = require("cors");
const { exists } = require("./models/Week");

app.use(express.json());
app.use(cors());

/// DATABASE CONNECTION
mongoose.connect(
  "mongodb+srv://Link...................."
);

app.post("/UpdateOrAdd", async(req, res) => {
  const record= req.body;
  const newDay = new WeekModels(record);

  console.log(record.day);
  console.log(record.first_name);
  console.log(record.second_name);
  const filter = { day: record.day };
  const update = { first_name: record.first_name, second_name: record.second_name, exc_name:record.exc_name};

  // `doc` is the document _before_ `update` was applied
  let doc = await WeekModels.findOneAndUpdate(filter, update);

  if(doc === null){
    await newDay.save();
    console.log("ADDED");
    res.status(204).send(null);
  }else{
    console.log("UPDATED");
    res.send(doc);
  }

});

app.get("/getWeek", (req, res) => {
  WeekModels.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
      //console.log(result);
      console.log("END GET");
    }
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log("You are connected!");
});
