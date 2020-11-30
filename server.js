const express =   require("express")
const dotenv =   require("dotenv")
const cors =  require("cors")
const colors =  require("colors")
const morgan =  require("morgan")
const errorHandler =  require("./middleware/error");


const app = express()



//load enviroment variables
dotenv.config({path:'./config/config.env'})

//Start database
const db   =  require("./config/db")
db()


//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan())
app.use(cors())
app.use(errorHandler)
//load routes
const standings =  require("./routes/standing")
//setup routes
app.get('/', (req,res)=>{res.send("welcome to PL STANDINGS!!")})
app.use('/api/v1/standings',standings)


const PORT   =  process.env.PORT || 5000



app.listen(PORT ,()=>{
       console.log(`listening on PORT ${PORT}`.underline.blue)
})



