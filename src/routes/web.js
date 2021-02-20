const { Router } = require("express");
const router = Router();
const homeController = require("../controllers/homeController");
const uploadController = require("../controllers/uploadController");


router.get("/", homeController.getHome);

router.post("/upload", uploadController.uploadFile);


module.exports = router;
