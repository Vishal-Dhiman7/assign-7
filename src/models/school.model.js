const db = require("../config/db");
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

// var connection = mongoose.createConnection(db.url);
const schoolSchema = mongoose.Schema({
    name : String,
    currentClass : Number,
    division : String
})

const counterSchema = mongoose.Schema({
    seq : String,_id : Number
})

module.exports = mongoose.model("counter",counterSchema);

module.exports = mongoose.model("student",schoolSchema);