const mongos = require('mongos');
require("dotenv").config();
const url = process.env.MONGODB_URI;

mongos.connect(`${url}`)
    .then(() => console.log('Connected to the database'))
    .catch(err => console.log(err));

module.exports = mongos;
