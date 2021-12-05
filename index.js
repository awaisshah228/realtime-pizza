// importing lib

require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const cors= require('cors')
const cookieParser=require('cookie-parser')
const session=require('express-session')
const flash=require('express-flash')
const MongoStore= require ('connect-mongo')

// variables
const app=express()
const port=process.env.PORT || 5000
const mongo_uri=process.env.MONGO_DB_URL


//middleware
app.use(cors({
    origin : ["http://localhost:3001"],
    credentials : true
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// database connection
mongoose.connect(mongo_uri,{ useNewUrlParser: true, useUnifiedTopology: true },
  // err=>{
  //   if(err) throw err
    // console.log("Connected ")

// }
)
//session config
const db=mongoose.connection
// let mongoStore=new MongoStore({
//   mongooseConnection : db,
//   collection : "sessions"
// })

app.use(session({
  secret : process.env.SECRET_KEY,
  resave:false,
  store: MongoStore.create({mongoUrl: process.env.MONGO_DB_URL}),
  saveUninitialized:false,
  cookie: {maxAge : 1000*60*60*24}
}))



//router
app.get('/',(req,res)=>{
    res.json({msg : "Hello"})
})
app.use('/api', require("./routes/menuRouter"))

// listening to port
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
  app.listen(3000, () => {
    console.log("Server is running at port 3000");
  });
});
