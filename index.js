const mongoose = require('mongoose')
const express = require('express')
const expressHandlebars = require('express-handlebars')
const path = require('path')
const helpers = require('handlebars-helpers')

const postRouter = require("./routes/postRouter");
const homeRouter = require("./routes/homeRouter");

const PORT = process.env.PORT || 3000
const URI = "mongodb+srv://Daniel:YSgUyU9bdikH8SG9@findmypetcluster.m9aqq.mongodb.net/findmypet_db";

const comparison = helpers.comparison()

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

app.use((req, res, next) => {
  res.status(404)

  res.render('404')
})


async function start() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
    })


    app.listen(PORT, () => {
      console.log(`App listening at http://localhost:${PORT}`)

    })

  } catch (e) {
    Console.log('Error', e)
  }
} 


start()