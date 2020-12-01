const  Standings =  require("../models/Standing")
const asyncHandler =  require("../middleware/async")
const errorResponse =   require("../middleware/error");
const ErrorResponse = require("../utils/errorResponse");
const fs =  require("fs")
const  color =   require("colors")
const { Error } = require("mongoose");

//@desc gets all standings
//@route GET  /api/v1/standings
//@access Public
exports.getStandings  =  asyncHandler(async(req,res,next)=>{
 
     const  results =  await Standings.find({}).sort({Pts:-1,GD:-1})
     
     if(!results){
    return new errorResponse(`Standing wit name of ${req.params.sh} not found`,404)
    } 
    
     res.status(200).json({success:true,length:results.length,data:results})

});


//@desc updates a specific standing 
//@routern UPDATE /api/v1/stanfings/:id
//@access  private
exports.updateStanding =  asyncHandler(async(req,res,next)=>{
     
    const sh =  req.params.sh
    if(!sh){
         return new ErrorResponse('no shorthand provided',404)
    }
    const  team  =  await  Standings.findOneAndUpdate({sh:sh},req.body,{
         new:true,
         runValidators:true
    });
  
    if(!team){
        return new ErrorResponse(`no standing for team ${team} was found`,404)
    }

    res.status(200).json({success:true})

});


//@desc gets the top6 teams in the  standings
//@route GET api/v1/standings/top
//@access  public
exports.getTop6 =  asyncHandler(async(req,res,next)=>{
     let st =  await Standings.find({}).sort({Pts:-1,GD:-1})
      
     if(!st){
        return new ErrorResponse("no standings where found",404)  
     }
     st  =  st.splice(0,6)
     
     res.status(200).json({success:true,data:st})
     
});

//@desc gets the relagation zone teams
//@route GET /api/v1/standing/relagation
//@access Public
exports.getRelagationZone =  asyncHandler(async(req,res,next)=>{
  
     let rel =  await Standings.find({}).sort({Pts:-1,GD:-1})
    
     if(!rel){
         return new errorResponse("no standings where found",404)
     }

      rel =  rel.splice(17,20)

      res.status(200).json({success:true,data:rel})
});


//@desc seeder for the databae
//@route POST  /api/v1/standings/
//@access private
exports.seeder =  async(req,res,next) =>{
try {
    const teams =  JSON.parse(fs.readFileSync('../_data/standings.json','utf-8'))
    await Standings.create(teams)
    console.log('Data Imported....'.green.inverse)
    res.status(200).json({success:true})
} catch (error) {
     res.status(500).json({error}) 
}    
}

//@desc seeder for the database
//@route DELETE  /api/v1/standings/
//@access private
exports.deleteStandings = asyncHandler(async(req,res,next)=>{
    await Standings.deleteMany()
    console.log('Data deleted....'.green.inverse)
    
    res.status(200).json({success:true})
    
   
   });