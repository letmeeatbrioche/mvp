require('dotenv').config()
const express = require('express');
const app = express();
const Test = require('./db.js');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/cats', (req, res) => {
  console.log('req.body:', req.body);
  Test.create(req.body)
  .then(() => res.send())
  .catch((err) => console.log('Error with post route ==>', err));
})

app.listen(process.env.SERVERPORT, () => {
  console.log(`Example app listening on port ${process.env.SERVERPORT}`);
});