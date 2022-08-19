
const express= require("express")
const route = require("./route/route")
const app = express()
let port = 3000

const mongoose = require("mongoose")

app.use(express.json())

mongoose.connect("mongodb+srv://REYNIL310609:OnIYmcfVuOkV0Dkr@cluster0.csvzw.mongodb.net/SleepMode?retryWrites=true&w=majority",{useNewUrlparser:true})
.then(_=>console.log("Mongodb connected"))
.catch(err=>console.log(err) )


app.use("/",route)

app.listen(3000,_=> console.log(`server running on port ${port}`))

