const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// TO-DO
/**
 * Create a caching system:
 * Store keys as numbers of 5 digits with leading zeros(?)
 * Store key values as hashes with a hashing function
 * Store key-value cache pairs in a database (mongo?)
 */