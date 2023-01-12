const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
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
    await Test.create({name: 'this is test 1'});
  } catch(err) {
    console.log('Error adding FIRST TEST to database ==>', err);
  } try {
    await Test.create({name: 'this is TEST 2'});
  } catch(err) {
    console.log('Error adding SECOND TEST to database ==>', err);
  } try {
    let tests = await Test.find({});
    console.log('All tests:', tests);
  } catch(err) {
    console.log('Error getting all tests from database ==>', err);
  }
}

add();