"use strict";

var cacheLoader = require('../cacheLoader');

module.exports = cacheLoader(function (bundle) {
  return fetch(bundle).then(function (res) {
    return res.text();
  });
});