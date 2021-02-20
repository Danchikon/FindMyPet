const nodemailer = require('nodemailer')
const mongoose = require('mongoose')
const express = require('express')
const { Post } = require('./models/post')

const app = express()
const PORT = process.env.PORT || 4000

const URI = "mongodb+srv://User:772298NOne@findmypetcluster.m9aqq.mongodb.net/posts";

app.use(express.static('public'))

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'findmypetscom@gmail.com',
    pass: 'findmypetscom1999'
  }
})


const mailOptions = {
  from: 'findmypetscom@gmail.com',
  to: 'denis200358@gmail.com',
  subject: 'ПРивіт',
  text: 'БОБЕР ЗАГУБИВСЯ'
}


app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log('connected')
})


async function start() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
    })


    app.listen(PORT, () => {
      console.log(`App listening at http://localhost:${PORT}`)

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error)
        } else {
          console.log('Email sent: ' + info.response)
        }
      })

    })

  } catch (e) {
    Console.log('Error', e)
  }
} 


start()