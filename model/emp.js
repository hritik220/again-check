const mongoose = require("mongoose")

let empschema = mongoose.Schema

let empdata = new empschema({
    name : String,
    email : String,
    salary : Number,
    city : String
})
let empmodel = mongoose.model("employee",empdata)
module.exports = empmodel