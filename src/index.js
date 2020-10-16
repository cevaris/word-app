const express = require('express');
const app = express();

app.use(require('./routes/root'));
app.use(require('./routes/words'));

// start the server listening for requests
app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));