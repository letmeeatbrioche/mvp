require('dotenv').config()
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect(`mongodb://${process.env.DBHOST}:${process.env.DBPORT}/test`);
}

main()
.then(() => console.log('Connected to database!'))
.catch(err => console.log(err));

const testSchema = new mongoose.Schema({
  name: String
});

const Test = mongoose.model('Test', testSchema);

async function add() {
  try {
    await Test.create({name: 'this is test 3'});
  } catch(err) {
    console.log('Error adding THIRD TEST to database ==>', err);
  } try {
    await Test.create({name: 'this is TEST 4'});
  } catch(err) {
    console.log('Error adding FOURTH TEST to database ==>', err);
  } try {
    let tests = await Test.find({});
    console.log('All tests:', tests);
  } catch(err) {
    console.log('Error getting all tests from database ==>', err);
  }
}

add();