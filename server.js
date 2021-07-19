const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 8080;

require('./db');

const indexRouter = require('./routes/index');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.use('/', indexRouter);

app.listen(port, console.log(`Server online. http://localhost:${port}`));