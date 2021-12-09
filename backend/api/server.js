// require('rootpath')();
const express = require('express')

const app = express();

const cors = require('cors')

// import { urlencoded, json } from 'body-parser';

// app.use(urlencoded({ extended: false }));
// app.use(json());
app.use(cors());

// api routes
app.use('/news', require('./app.controller'));

// start server

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));

module.exports = app;