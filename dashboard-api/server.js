const config = require('./config/config');
// config should be imported before importing any other file
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// const provideErrorMiddleware = require('./routes/error');
// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

const app = express();
const { catchAll, pareto, pr, search, info } = require('./routes');

 // view engine setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../dashboard-client/build')));
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  response.header('Access-Control-Allow-Methods', 'GET');
  next();
});

// app.get('/health-check', (req, res) => res.send('OK'));
app.use('/pr', pr);
app.use('/search', search);
app.use('/pareto', pareto);
app.use('/info', info);

const htmlpath = path.join(__dirname, '../dashboard-client/build/index.html');
app.get('/', (request, response) => response.sendFile(htmlpath));
app.use('*', catchAll);
// provideErrorMiddleware(app);

// connect to mongo db
const mongoUri = config.mongo.host;
const promise = mongoose.connect(mongoUri, { useNewUrlParser: true });
promise.then(() => {
  console.log('MongoDB is connected');
}).catch((err) => {
  console.log(err);
  console.log('MongoDB connection unsuccessful');
});

const listener = app.listen(config.port, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
