const express =  require("express")
const router =   express.Router()
  
const  {getStandings , updateStanding , getTop6,getRelagationZone} =  require("../controllers/standing")

router
    .route("/")
        .get(getStandings)

router
    .route('/top')  
        .get(getTop6)

router
    .route("/:sh")
        .put(updateStanding)

router
    .route('/relegation')
        .get(getRelagationZone)


module.exports = router;