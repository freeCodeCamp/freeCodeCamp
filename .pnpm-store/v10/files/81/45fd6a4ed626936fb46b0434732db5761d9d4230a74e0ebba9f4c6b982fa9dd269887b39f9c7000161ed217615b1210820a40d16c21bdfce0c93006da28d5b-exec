#!/usr/bin/env node

'use strict';

const { parse } = require('..');
const readline = require('readline');

if (process.argv.length > 2) {
  // URL(s) was specified in the command arguments
  console.log(
    JSON.stringify(parse(process.argv[process.argv.length - 1]), null, 2),
  );
} else {
  // No arguments were specified, read URLs from each line of STDIN
  const rlInterface = readline.createInterface({
    input: process.stdin,
  });
  rlInterface.on('line', function (line) {
    console.log(JSON.stringify(parse(line), null, 2));
  });
}
