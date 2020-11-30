const mongoose  = require("mongoose")
const Schema  =  mongoose.Schema


const  standingSchema =  new  Schema({
    team:{
        type:String,
        required:[true,'please add name']     },
 
        sh:{
          type:String,
          required:[true,'please add shorthand']
  },

  MP:{
       type:Number,
       required:[true,'please add Matched played']
  },
  W:{
      type:Number,
      required:[true,'please add Wins']
  },
  D:{
      type:Number,
      required:[true,'please add Draws']
  },
  L:{
      type:Number,
      required:[true,'please add Loses']
  },
  GF:{
      type:Number,
      required:[true,'please add  goals scored']
  },
  GA:{
      type:Number,
      required:[true,'please add goals allowed']
  },
  GD:{
      type:Number,
      required:[true,'please add goal difference']
  },
  Pts:{
      type:Number,
      required:[true,'please add  total points']    },
})


module.exports = mongoose.model('standings',standingSchema)