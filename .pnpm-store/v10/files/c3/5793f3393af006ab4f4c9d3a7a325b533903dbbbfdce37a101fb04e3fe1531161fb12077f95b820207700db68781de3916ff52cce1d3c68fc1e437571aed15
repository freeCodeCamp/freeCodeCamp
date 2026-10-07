let { execSync } = require('child_process')
let pico = require('picocolors')

try {
  let version = parseInt(execSync('npm -v'))
  if (version <= 6) {
    process.stderr.write(
      pico.red(
        'Update npm or call ' +
          pico.yellow('npx browserslist@latest --update-db') +
          '\n'
      )
    )
    process.exit(1)
  }
  // eslint-disable-next-line no-unused-vars
} catch (e) {}
