const path = require('path')

const postInstallScriptPath = path.join(__dirname, '..', 'dist', 'scripts', 'postinstall.js')
const localInstallScriptPath = path.join(__dirname, '..', 'dist', 'scripts', 'localinstall.js')

try {
  // that's when we develop in the monorepo, `dist` does not exist yet
  // so we compile postinstall script and trigger it immediately after
  if (require('../package.json').version === '0.0.0') {
    const execa = require('execa')
    const buildScriptPath = path.join(__dirname, '..', 'helpers', 'build.ts')

    execa.sync('pnpm', ['tsx', buildScriptPath], {
      // for the sake of simplicity, we IGNORE_EXTERNALS in our own setup
      // ie. when the monorepo installs, the postinstall is self-contained
      env: { DEV: true, IGNORE_EXTERNALS: true },
      stdio: 'inherit',
    })

    // if enabled, it will install engine overrides into the cache dir
    execa.sync('node', [localInstallScriptPath], {
      stdio: 'inherit',
    })
  }
} catch {}

// that's the normal path, when users get this package ready/installed
require(postInstallScriptPath)
