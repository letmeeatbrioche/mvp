require('dotenv').config()
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect(`mongodb://${process.env.DBHOST}:${process.env.DBPORT}/cats`);
}

main()
.then(() => console.log('Connected to database!'))
.catch(err => console.log(err));

const catsSchema = new mongoose.Schema({
  name: String
});

const Cat = mongoose.model('Cat', catsSchema);

module.exports = Cat;