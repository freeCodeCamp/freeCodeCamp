import fs from 'node:fs'
import path from 'node:path'
import colors from 'picocolors'
import confirm from '@inquirer/confirm'
import { invariant } from './invariant.js'
import { SERVICE_WORKER_BUILD_PATH } from '../config/constants.js'

export async function init(args) {
  const CWD = args.cwd || process.cwd()
  const publicDir = args._[1] ? normalizePath(args._[1]) : undefined

  const packageJsonPath = path.resolve(CWD, 'package.json')
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
  const savedWorkerDirectories = Array.prototype
    .concat((packageJson.msw && packageJson.msw.workerDirectory) || [])
    .map(normalizePath)

  if (publicDir) {
    // If the public directory was provided, copy the worker script
    // to that directory only. Even if there are paths stored in "msw.workerDirectory",
    // those will not be touched.
    await copyWorkerScript(publicDir, CWD)
    const relativePublicDir = path.relative(CWD, publicDir)
    printSuccessMessage([publicDir])

    if (args.save) {
      // Only save the public path if it's not already saved in "package.json".
      if (!savedWorkerDirectories.includes(relativePublicDir)) {
        saveWorkerDirectory(packageJsonPath, relativePublicDir)
      }
    }
    // Explicitly check if "save" was not provided (was null).
    // You can also provide the "--no-save" option, and then "args.save"
    // will equal to false.
    else if (args.save == null) {
      // eslint-disable-next-line no-console
      console.log(`\
      ${colors.cyan(
        'INFO',
      )} In order to ease the future updates to the worker script,
      we recommend saving the path to the worker directory in your package.json.`)

      // If the "--save" flag was not provided, prompt to save
      // the public path.
      promptWorkerDirectoryUpdate(
        `Do you wish to save "${relativePublicDir}" as the worker directory?`,
        packageJsonPath,
        relativePublicDir,
      )
    }

    return
  }

  // Calling "init" without a public directory but with the "--save" flag is a no-op.
  invariant(
    args.save == null,
    'Failed to copy the worker script: cannot call the "init" command without a public directory but with the "--save" flag. Either drop the "--save" flag to copy the worker script to all paths listed in "msw.workerDirectory", or add an explicit public directory to the command, like "npx msw init ./public".',
  )

  // If the public directory was not provided, check any existing
  // paths in "msw.workerDirectory". When called without the public
  // directory, the "init" command must copy the worker script
  // to all the paths stored in "msw.workerDirectory".
  if (savedWorkerDirectories.length > 0) {
    const copyResults = await Promise.allSettled(
      savedWorkerDirectories.map((destination) => {
        return copyWorkerScript(destination, CWD).catch((error) => {
          // Inject the absolute destination path onto the copy function rejections
          // so it's available in the failed paths array below.
          throw [toAbsolutePath(destination, CWD), error]
        })
      }),
    )
    const successfulPaths = copyResults
      .filter((result) => result.status === 'fulfilled')
      .map((result) => result.value)
    const failedPathsWithErrors = copyResults
      .filter((result) => result.status === 'rejected')
      .map((result) => result.reason)

    // Notify about failed copies, if any.
    if (failedPathsWithErrors.length > 0) {
      printFailureMessage(failedPathsWithErrors)
    }

    // Notify about successful copies, if any.
    if (successfulPaths.length > 0) {
      printSuccessMessage(successfulPaths)
    }
  }
}

/**
 * @param {string} maybeAbsolutePath
 * @param {string} cwd
 * @returns {string}
 */
function toAbsolutePath(maybeAbsolutePath, cwd) {
  return path.isAbsolute(maybeAbsolutePath)
    ? maybeAbsolutePath
    : path.resolve(cwd, maybeAbsolutePath)
}

/**
 * @param {string} destination
 * @param {string} cwd
 * @returns {Promise<string>}
 */
async function copyWorkerScript(destination, cwd) {
  // When running as a part of "postinstall" script, "cwd" equals the library's directory.
  // The "postinstall" script resolves the right absolute public directory path.
  const absolutePublicDir = toAbsolutePath(destination, cwd)

  if (!fs.existsSync(absolutePublicDir)) {
    await fs.promises
      .mkdir(absolutePublicDir, { recursive: true })
      .catch((error) => {
        throw new Error(
          invariant(
            false,
            'Failed to copy the worker script at "%s": directory does not exist and could not be created.\nMake sure to include a relative path to the public directory of your application.\n\nSee the original error below:\n\n%s',
            absolutePublicDir,
            error,
          ),
        )
      })
  }

  // eslint-disable-next-line no-console
  console.log('Copying the worker script at "%s"...', absolutePublicDir)

  const workerFilename = path.basename(SERVICE_WORKER_BUILD_PATH)
  const workerDestinationPath = path.resolve(absolutePublicDir, workerFilename)

  fs.copyFileSync(SERVICE_WORKER_BUILD_PATH, workerDestinationPath)

  return workerDestinationPath
}

/**
 * @param {Array<string>} paths
 */
function printSuccessMessage(paths) {
  // eslint-disable-next-line no-console
  console.log(`
${colors.green('Worker script successfully copied!')}
${paths.map((path) => colors.gray(`  - ${path}\n`))}
Continue by describing the network in your application:


${colors.red(colors.bold('https://mswjs.io/docs/quick-start'))}
`)
}

function printFailureMessage(pathsWithErrors) {
  // eslint-disable-next-line no-console
  console.error(`\
${colors.red('Copying the worker script failed at following paths:')}
${pathsWithErrors
  .map(([path, error]) => colors.gray(`  - ${path}`) + '\n' + `  ${error}`)
  .join('\n\n')}
  `)
}

/**
 * @param {string} packageJsonPath
 * @param {string} publicDir
 */
function saveWorkerDirectory(packageJsonPath, publicDir) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

  // eslint-disable-next-line no-console
  console.log(
    colors.gray('Updating "msw.workerDirectory" at "%s"...'),
    packageJsonPath,
  )

  const prevWorkerDirectory = Array.prototype.concat(
    (packageJson.msw && packageJson.msw.workerDirectory) || [],
  )
  const nextWorkerDirectory = Array.from(
    new Set(prevWorkerDirectory).add(publicDir),
  )

  const nextPackageJson = Object.assign({}, packageJson, {
    msw: {
      workerDirectory: nextWorkerDirectory,
    },
  })

  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(nextPackageJson, null, 2),
    'utf8',
  )
}

/**
 * @param {string} message
 * @param {string} packageJsonPath
 * @param {string} publicDir
 * @returns {void}
 */
function promptWorkerDirectoryUpdate(message, packageJsonPath, publicDir) {
  return confirm({
    theme: {
      prefix: colors.yellowBright('?'),
    },
    message,
  }).then((answer) => {
    if (answer) {
      saveWorkerDirectory(packageJsonPath, publicDir)
    }
  })
}

/**
 * Normalizes the given path, replacing ambiguous path separators
 * with the platform-specific path separator.
 * @param {string} input Path to normalize.
 * @returns {string}
 */
function normalizePath(input) {
  return input.replace(/[\\|/]+/g, path.sep)
}
