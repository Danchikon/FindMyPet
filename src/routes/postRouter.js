const { Router } = require('express')
const Post = require('../models/Post')
const postController = require("../controllers/postController");

const postRouter = Router()


postRouter.get('/post', postController.getPost)

postRouter.post('/create', postController.addPost)


module.exports = postRouter