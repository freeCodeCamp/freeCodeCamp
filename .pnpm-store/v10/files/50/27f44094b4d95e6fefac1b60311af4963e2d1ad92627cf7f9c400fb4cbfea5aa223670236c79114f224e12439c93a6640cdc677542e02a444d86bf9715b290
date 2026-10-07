import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

// When executing the "postinstall" script, the "process.cwd" equals
// the package directory, not the parent project where the package is installed.
// NPM stores the parent project directory in the "INIT_CWD" env variable.
const parentPackageCwd = process.env.INIT_CWD

function postInstall() {
  const packageJson = JSON.parse(
    fs.readFileSync(path.resolve(parentPackageCwd, 'package.json'), 'utf8'),
  )

  if (!packageJson.msw || !packageJson.msw.workerDirectory) {
    return
  }

  const cliExecutable = path.resolve(process.cwd(), 'cli/index.js')

  try {
    /**
     * @note Call the "init" command directly. It will now copy the worker script
     * to all saved paths in "msw.workerDirectory"
     */
    execFileSync(process.execPath, [cliExecutable, 'init'], {
      cwd: parentPackageCwd,
    })
  } catch (error) {
    console.error(
      `[MSW] Failed to automatically update the worker script.\n\n${error}`,
    )
  }
}

postInstall()
