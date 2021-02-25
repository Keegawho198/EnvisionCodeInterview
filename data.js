// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    message: String
  },
  { timestamps: true },

  // {
  //   '_id': document_id,
  //   'timestamp': timestamp,
  //   'direction': entry_or_exit,
  //   'object': object_type(person, car, etc),
  //   'locationName': city_name
  //   }

);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);