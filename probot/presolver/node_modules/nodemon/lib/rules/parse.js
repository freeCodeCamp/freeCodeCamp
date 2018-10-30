'use strict';
var fs = require('fs');

/**
 * Parse the nodemon config file, supporting both old style
 * plain text config file, and JSON version of the config
 *
 * @param  {String}   filename
 * @param  {Function} callback
 */
function parse(filename, callback) {
  var rules = {
    ignore: [],
    watch: [],
  };

  fs.readFile(filename, 'utf8', function (err, content) {

    if (err) {
      return callback(err);
    }

    var json = null;
    try {
      json = JSON.parse(content);
    } catch (e) {}

    if (json !== null) {
      rules = {
        ignore: json.ignore || [],
        watch: json.watch || [],
      };

      return callback(null, rules);
    }

    // otherwise return the raw file
    return callback(null, { raw: content.split(/\n/) });
  });
}

module.exports = parse;

