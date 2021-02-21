const { Post } = require("../models/Post");
const upload = require("../middleware/upload")
const nodemailer = require('nodemailer')


async function post(type, req, res) {
    await upload(req, res)

    // console.log(req.file)

    const { 
        namePost,
        owner, 
        phone, 
        email,  
        city, 
        street,
        animal, 
        typeAnimal,
        weight, 
        animalInfo,
        lat, 
        lng 
    } = req.body

    // console.log(req.body)

    const post = new Post({
        type: type,
        title: namePost,
        author: owner,
        city: city,
        street: street,
        animal: animal, 
        typeAnimal: typeAnimal,
        phone: phone,
        email: email,
        weight: weight,
        description: animalInfo,
        coords: { 
            lat: lat,
            lng: lng
        } 
    })
     
    await post.save((err) => {
        if(err) return console.log(err)
    });

    res.redirect(`/post/${post._id}`)
}


exports.postFind = async (req, res) => {
    post("find", req, res)
}
exports.postLost = async (req, res) => {
    post("lost", req, res)
}


exports.sendPost = async (req, res) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'findmypetscom@gmail.com',
          pass: 'findmypetscom1999'
        }
    })

    const postId = req.params["postId"]
    const post = await Post.findById(postId).lean()
      
    const mailOptions = {
        from: 'findmypetscom@gmail.com',
        to: post.email,
        subject: 'ПРивіт',
        text: 'БОБЕР ЗАГУБИВСЯ'
    }

    

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error)
        } else {
          console.log('Email sent: ' + info.response)
        }
    })

    res.redirect(`/post/${post._id}`)
}


exports.createPost = async (req, res) => {
    res.render('creating_post', { })
}

exports.getPost = async (req, res) => {
  
    const postId = req.params["postId"]
    const post = await Post.findById(postId).lean()

    Post.updateOne( {_id: postId}, {views: post.views + 1}, (err, result) => {
        if(err) return console.log(err);
        // console.log(result);
    })

    // console.log(post)

    res.render('post_page', {
        post: post
    })
}