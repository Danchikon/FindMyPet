const { Router } = require('express')
const Post = require('./models/post')
const postController = require("./controllers/postController.js");

const postRouter = Router()


postRouter.get('/post', postController.getPost())

postRouter.post('/create', postController.addPost())


module.exports = postRouter