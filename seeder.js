const db = require("./config/db")
const colors = require("colors")
const dotenv =  require("dotenv")
const mongoose =  require("mongoose")
const fs =  require("fs")

//load enviromental variables
dotenv.config({path:"./config/config.env"})


//connect to database
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,
    useCreateIndex:true,useFindAndModify:true,useUnifiedTopology:true})

//import the standing model
 const Standing =   require("./models/Standing")

// load  the json data 
const standings =  JSON.parse(fs.readFileSync(`${__dirname}/_data/standings.json`,'utf-8'))

//Import Data  
 const  importData = async() =>{
     try {
          await Standing.create(standings)
          console.log('Data Imported....'.green.inverse)
          process.exit()
     } catch (err) {
          console.log(err)
     }
 }

 //Delete Data
 const deleteData =  async()=>{
    try {
         await Standing.deleteMany()
         console.log('Data Deleted....'.red.inverse)
         process.exit()
    } catch (err) {
         console.log(err)
    }
}


if(process.argv[2]=== '-i'){
    importData();
}else if(process.argv[2]==='-d'){
      deleteData();
}

    

