const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json());

//IMPORT ROUTES
const costsRoute = require('./routes/costs');
const runningCostsRoute = require('./routes/runningCosts');
const countersRoute = require('./routes/counters');

app.use('/costs', costsRoute);
app.use('/runningCosts', runningCostsRoute);
app.use('/counters', countersRoute);

//Connect to database
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('======= connected to db ========')
);

//How do we start Listening to the server
app.listen(8000);