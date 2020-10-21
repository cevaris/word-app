const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(require('./routes/root'));
app.use(require('./routes/words'));

// start the server listening for requests
app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));