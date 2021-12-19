// *import modules
const { Router } = require("express");

// *instantiate router
const router=Router();

// *import controller
const controller=require("../controller/controller");

router.get("/horoscope",controller.getHoroscope);

module.exports=router;