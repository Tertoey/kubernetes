const express = require('express');
const app = express();
const data = require('./route/data')
const lineChat = require('./route/lineChat')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
// const mongoConnect = process.env.MONGO_URL || 'mongodb://localhost:27017/myDb'
const mongoConnect = 'mongodb+srv://klo123645:Klo123645@cluster0.9djy9xz.mongodb.net/userDB?retryWrites=true&w=majority'

require('dotenv').config()
app.use(lineChat)
app.use(cors())
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
console.log(mongoConnect)
mongoose.connect(
  mongoConnect,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  
  mongoose.connection.on('connected', () => {
    console.log('Connectedd to MongoDB successfully!');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error('MongoDBd connection error:', err);
  });

app.use(data)
 
module.exports = app