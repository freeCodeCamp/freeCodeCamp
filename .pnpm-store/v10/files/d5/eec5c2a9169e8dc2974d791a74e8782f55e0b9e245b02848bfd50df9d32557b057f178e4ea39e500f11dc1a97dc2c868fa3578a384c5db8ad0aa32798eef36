const cacheLoader = require('../cacheLoader');

module.exports = cacheLoader(function loadHTMLBundle(bundle) {
  return fetch(bundle).then(function (res) {
    return res.text();
  });
});
