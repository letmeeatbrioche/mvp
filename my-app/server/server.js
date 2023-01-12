require('dotenv').config()
const express = require('express');
const app = express();
const Cat = require('./db.js');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/cats', (req, res) => {
  console.log('req.body:', req.body);
  Cat.create(req.body)
  .then(() => res.send())
  .catch((err) => console.log('Error with post route ==>', err));
})

app.get('/cats/names', (req, res) => {
  Cat.aggregate([{$sample: {size: 5}}])
  .then((cats) => cats.map((cat) => cat.name))
  .then((name) => res.json(name))
  .catch((err) => {
    console.log('Error getting cat names ==>', err);
    res.sendStatus(500);
  })
})

app.listen(process.env.SERVERPORT, () => {
  console.log(`Example app listening on port ${process.env.SERVERPORT}`);
});