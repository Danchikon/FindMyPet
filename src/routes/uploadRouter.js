const { Router } = require("express")
const router = Router()
const uploadController = require("../controllers/uploadController")

router.post("/upload", uploadController.uploadFile)


module.exports = router
