const { Router } = require('express')
const postController = require("../controllers/postController");

const postRouter = Router()


postRouter.get('/post/:postId', postController.getPost)

postRouter.get('/create/post/find', postController.createPost)
postRouter.get('/create/post/lost', postController.createPost)

postRouter.post('/create/post/find', postController.postFind)
postRouter.post('/create/post/lost', postController.postLost)

postRouter.post('/post/:postId', postController.sendPost)

module.exports = postRouter