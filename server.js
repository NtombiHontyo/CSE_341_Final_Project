const express = require('express');
const app = express();
const mongodb = require('./data/database.js');
const bodyParser = require('body-parser')

const port = 3000;

app.use(bodyParser.json())
    .use('/', require('./routes')); //Routes

// Server Start
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.port || port);
    console.log(`Connected to DB and listening on ${process.env.port || 3000}`);
  }
});