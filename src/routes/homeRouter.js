const { Router } = require('express')
const Post = require('../models/Post')
const homeController = require("../controllers/homeController");

const homeRouter = Router()


homeRouter.get('/home/posts', homeController.getPosts)

homeRouter.get('/home', homeController.getHome)


module.exports = homeRouter