const express =  require("express")
const router =   express.Router()
  
const {getStandings , updateStanding , getTop6 ,
    getRelagationZone ,seeder, deleteStandings } =  require("../controllers/standing")

router
    .route("/")
        .get(getStandings)
        .post(seeder)
        .delete(deleteStandings)

router
    .route('/top')  
        .get(getTop6)

router
    .route("/:sh")
        .put(updateStanding)

router
    .route('/relegation')
        .get(getRelagationZone)

router

        
module.exports = router;