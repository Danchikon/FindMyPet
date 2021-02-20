const nodemailer = require('nodemailer');
const express = require('express')
const app = express()

const PORT = 3000

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'findmypetscom@gmail.com',
    pass: 'findmypetscom1999'
  }
});

const mailOptions = {
  from: 'findmypetscom@gmail.com',
  to: 'denis200358@gmail.com',
  subject: 'ПРивіт',
  text: 'БОБЕР ЗАГУБИВСЯ'
};


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})