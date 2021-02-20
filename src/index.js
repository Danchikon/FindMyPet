const nodemailer = require('nodemailer')
const mongoose = require('mongoose')
const express = require('express')
const expressHandlebars = require('express-handlebars')
const path = require('path')

const postRouter = require("./routes/postRouter");
const homeRouter = require("./routes/homeRouter");
const uploadRoutes = require("./routes/uploadRouter");

const PORT = process.env.PORT || 3000
const URI = "mongodb+srv://Daniel:YSgUyU9bdikH8SG9@findmypetcluster.m9aqq.mongodb.net/findmypet_db";


const app = express()
const hbs = expressHandlebars.create({
  defaultLayout: 'main',
  extname: 'hbs'
})


app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))


app.use(postRouter)
app.use(homeRouter)
app.use(uploadRoutes)

app.use((req, res, next) => {
  res.status(404).send("Not Found")
})


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


app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
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