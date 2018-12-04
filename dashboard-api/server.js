const fs = require('fs');
const express = require('express');

const app = express();
const { catchAll, pareto, pr, search, info, getCurrData } = require('./routes');

app.use(express.static('public'));
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET');
  next();
});

app.get('/', (request, response) => response.sendFile(__dirname + '/views/index.html'));

app.use('/pr', pr);
app.use('/search', search);
app.use('/pareto', pareto);
app.use('/info', info);
app.use('/getCurrData', getCurrData);
app.use('*', catchAll);

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});