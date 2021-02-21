const { Post } = require("../models/Post");


exports.postPost = async (req, res) => {
    const { 
        name, 
        phone, 
        email, 
        city, 
        animal, 
        color, 
        weight, 
        size, 
        description 
    } = req.body

    const post = new Post({
       
        phone: phone,
        email: email,
    })
     
    post.save((err) => {
        if(err) return console.log(err)
    });

    console.log(name, phone, email)

    res.redirect('/home')
}

exports.createPost = async (req, res) => {
    res.render('creating_post', { })
}

exports.getPost = async (req, res) => {
    const postId = req.params["postId"]
    const post = await Post.findById(postId).lean()

    console.log(post)

    res.render('post_page', {
        post: post
    })
}