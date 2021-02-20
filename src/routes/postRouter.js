const { Router } = require('express')
const postController = require("../controllers/postController");

const postRouter = Router()


postRouter.get('/post/:postId', postController.getPost)

postRouter.get('/create/post', postController.createPost)

postRouter.post('/create/post', postController.postPost)


module.exports = postRouter