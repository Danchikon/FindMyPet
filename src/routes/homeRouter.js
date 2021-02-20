const { Router } = require('express')
const Post = require('../models/Post')
const homeController = require("../controllers/homeController");

const homeRouter = Router()


homeRouter.get('/', homeController.getPosts)


module.exports = homeRouter