// /backend/data.js
const { time } = require("console");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  // {
  //   id: Number,
  //   message: String
  // },
  // { timestamps: true },

  {
    '_id': Number,
    'timestamp': Number,
    'direction': String,
    'object': String,
    'locationName': String
    }

);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);