const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(require('./routes/root'));
app.use(require('./routes/words'));

module.exports = app;