const express = require('express');
const app = express();

module.exports = app;

const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// const router = require('./server/api');
// app.use('/api', router);
app.use('/envelopes', require('./server/envelopes'));



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


