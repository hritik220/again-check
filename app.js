const express = require('express')
const mongoose = require("mongoose")
const multer = require('multer')
const bodyParser = require('body-parser')
const path = require('path')
const employeedata = require('./model/emp')
const studentdata = require('./model/student')
const app = express()

const port = process.env.PORT || "8000";
 
app.set("view engine","ejs")
app.set('views','./views')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var storage = multer.diskStorage({
destination : (req,file,cb)=>{
    cb(null,"./upload/")
},
filename : (req,file,cb)=>{
     cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname))
}
})

var upload = multer({storage:storage,
fileFilter:(req,file,cb)=>{
   cb(null,false)
}
}).single("myfile")


mongoose.connect("mongodb+srv://babuhathua:1234567890@cluster0-kik5i.mongodb.net/Hritik?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
console.log("database successfully connected!")
}).catch((e)=>{
  console.log(e.message)
})

app.get('/',(req,res)=>{
    res.render("student")
})

app.post('/std',upload,(req,res)=>{
   console.log("Working perfectly!")
})

app.listen(port,()=>{
    console.log(`Successfully listening on port ${port}`)
})


