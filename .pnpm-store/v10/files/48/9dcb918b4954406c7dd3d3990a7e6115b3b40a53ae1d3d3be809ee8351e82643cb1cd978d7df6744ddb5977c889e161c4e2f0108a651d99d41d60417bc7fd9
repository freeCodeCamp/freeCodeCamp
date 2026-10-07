var parse = require('url').parse;

exports.pathMatch = function (url, path) {
  try {
    return parse(url).pathname === path;
  } catch (e) {
    return false;
  }
};
