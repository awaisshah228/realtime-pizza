// importing lib

require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const cors= require('cors')
const cookieParser=require('cookie-parser')

// variables
const app=express()
const port=process.env.PORT || 5000
const mongo_uri=process.env.MONGO_DB_URL

//middleware
app.use(cors({
    origin : ["http://localhost:3000"],
    credentials : true
}))
app.use(cookieParser())
app.use(express.json())
// database connection
mongoose.connect(mongo_uri,{ useNewUrlParser: true, useUnifiedTopology: true },err=>{
    if(err) throw err
    // console.log("Connected ")

})


//router
app.get('/',(req,res)=>{
    res.json({msg : "Hello"})
})

// listening to port
const db=mongoose.connection
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
  app.listen(3000, () => {
    console.log("Server is running at port 3000");
  });
});
