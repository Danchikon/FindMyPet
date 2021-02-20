const { Router } = require('express')
const Post = require('./models/post')
const homeController = require("./controllers/homeController.js");

const homeRouter = Router()


homeRouter.get('/home/posts', homeController.getPosts())

homeRouter.get('/home', homeController.getHome())


module.exports = postRouter