const mongoose = require("mongoose")

let empschema = mongoose.Schema

let empdata = new empschema({
    name : String,
    email : String,
    contact : Number,
    state : String
})
let empmodel = mongoose.model("student",empdata)
module.exports = empmodel