#!/usr/bin/env node

let mode = process.argv[2]
if (mode === '--info') {
  process.stdout.write(require('../')().info() + '\n')
} else if (mode === '--version') {
  process.stdout.write(
    'autoprefixer ' + require('../package.json').version + '\n'
  )
} else {
  process.stdout.write(
    'autoprefix\n' +
      '\n' +
      'Options:\n' +
      '  --info    Show target browsers and used prefixes\n' +
      '  --version Show version number\n' +
      '  --help    Show help\n' +
      '\n' +
      'Usage:\n' +
      '  autoprefixer --info\n'
  )
}
