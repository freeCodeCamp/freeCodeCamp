'use strict';

var app = require('express')();

app.use('/status/:status', function (req, res) {
  res.status(Number(req.params.status));
  res.send();
});

module.exports = app;
