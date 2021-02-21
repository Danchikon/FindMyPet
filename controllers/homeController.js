const { Post } = require("../models/Post");


exports.getPosts = async (req, res) => {
    
    const posts = await Post.find({}).lean()

    // console.log(posts)

    res.render('index', {
        posts: posts
    })
}
