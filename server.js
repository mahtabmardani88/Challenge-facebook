const express = require('express');
const routes = require('./routes/routes');
const mongos = require('./config/mongos');


const app = express();
require("dotenv").config();

app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}`));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on ${port}`));
