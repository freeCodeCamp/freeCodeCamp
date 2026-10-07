#!/usr/bin/env node


'use strict';

/*eslint-disable no-console*/


var fs       = require('fs');
var argparse = require('argparse');
var yaml     = require('..');


////////////////////////////////////////////////////////////////////////////////


var cli = new argparse.ArgumentParser({
  prog:     'js-yaml',
  add_help:  true
});

cli.add_argument('-v', '--version', {
  action: 'version',
  version: require('../package.json').version
});

cli.add_argument('-c', '--compact', {
  help:   'Display errors in compact mode',
  action: 'store_true'
});

// deprecated (not needed after we removed output colors)
// option suppressed, but not completely removed for compatibility
cli.add_argument('-j', '--to-json', {
  help:   argparse.SUPPRESS,
  dest:   'json',
  action: 'store_true'
});

cli.add_argument('-t', '--trace', {
  help:   'Show stack trace on error',
  action: 'store_true'
});

cli.add_argument('file', {
  help:   'File to read, utf-8 encoded without BOM',
  nargs:  '?',
  default: '-'
});


////////////////////////////////////////////////////////////////////////////////


var options = cli.parse_args();


////////////////////////////////////////////////////////////////////////////////

function readFile(filename, encoding, callback) {
  if (options.file === '-') {
    // read from stdin

    var chunks = [];

    process.stdin.on('data', function (chunk) {
      chunks.push(chunk);
    });

    process.stdin.on('end', function () {
      return callback(null, Buffer.concat(chunks).toString(encoding));
    });
  } else {
    fs.readFile(filename, encoding, callback);
  }
}

readFile(options.file, 'utf8', function (error, input) {
  var output, isYaml;

  if (error) {
    if (error.code === 'ENOENT') {
      console.error('File not found: ' + options.file);
      process.exit(2);
    }

    console.error(
      options.trace && error.stack ||
      error.message ||
      String(error));

    process.exit(1);
  }

  try {
    output = JSON.parse(input);
    isYaml = false;
  } catch (err) {
    if (err instanceof SyntaxError) {
      try {
        output = [];
        yaml.loadAll(input, function (doc) { output.push(doc); }, {});
        isYaml = true;

        if (output.length === 0) output = null;
        else if (output.length === 1) output = output[0];

      } catch (e) {
        if (options.trace && err.stack) console.error(e.stack);
        else console.error(e.toString(options.compact));

        process.exit(1);
      }
    } else {
      console.error(
        options.trace && err.stack ||
        err.message ||
        String(err));

      process.exit(1);
    }
  }

  if (isYaml) console.log(JSON.stringify(output, null, '  '));
  else console.log(yaml.dump(output));
});
