const express =   require("express")
const dotenv =   require("dotenv")
const app = express()



//load enviroment variables
dotenv.config({path:'./config/config.env'})

//Middleware
app.use(express.urlencoded())
app.use(express.json())

//load routes

//setup routes
app.use('/', (req,res)=>{res.send("welcome to PL STANDINGS!!")})

const PORT   =  process.env.PORT || 5000



app.listen(PORT ,()=>{
       console.log(`listening on PORT ${PORT}`)
})