#!/usr/bin/env node

'use strict';

process.title = 'mime';
let mime = require('.');
let pkg = require('./package.json');
let args = process.argv.splice(2);

if (args.includes('--version') || args.includes('-v') || args.includes('--v')) {
  console.log(pkg.version);
  process.exit(0);
} else if (args.includes('--name') || args.includes('-n') || args.includes('--n')) {
  console.log(pkg.name);
  process.exit(0);
} else if (args.includes('--help') || args.includes('-h') || args.includes('--h')) {
  console.log(pkg.name + ' - ' + pkg.description + '\n');
  console.log(`Usage:

  mime [flags] [path_or_extension]

  Flags:
    --help, -h                     Show this message
    --version, -v                  Display the version
    --name, -n                     Print the name of the program

  Note: the command will exit after it executes if a command is specified
  The path_or_extension is the path to the file or the extension of the file.

  Examples:
    mime --help
    mime --version
    mime --name
    mime -v
    mime src/log.js
    mime new.py
    mime foo.sh
  `);
  process.exit(0);
}

let file = args[0];
let type = mime.getType(file);

process.stdout.write(type + '\n');

