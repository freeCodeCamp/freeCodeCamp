// @ts-check
const childProcess = require('child_process')
const { promisify } = require('util')
const fs = require('fs')
const path = require('path')
const c = require('./colors')

const exec = promisify(childProcess.exec)

function debug(message, ...optionalParams) {
  if (process.env.DEBUG && process.env.DEBUG === 'prisma:postinstall') {
    console.log(message, ...optionalParams)
  }
}
/**
 * Adds `package.json` to the end of a path if it doesn't already exist'
 * @param {string} pth
 */
function addPackageJSON(pth) {
  if (pth.endsWith('package.json')) return pth
  return path.join(pth, 'package.json')
}

/**
 * Looks up for a `package.json` which is not `@prisma/cli` or `prisma` and returns the directory of the package
 * @param {string | null} startPath - Path to Start At
 * @param {number} limit - Find Up limit
 * @returns {string | null}
 */
function findPackageRoot(startPath, limit = 10) {
  if (!startPath || !fs.existsSync(startPath)) return null
  let currentPath = startPath
  // Limit traversal
  for (let i = 0; i < limit; i++) {
    const pkgPath = addPackageJSON(currentPath)
    if (fs.existsSync(pkgPath)) {
      try {
        const pkg = require(pkgPath)
        if (pkg.name && !['@prisma/cli', 'prisma'].includes(pkg.name)) {
          return pkgPath.replace('package.json', '')
        }
      } catch {} // eslint-disable-line no-empty
    }
    currentPath = path.join(currentPath, '../')
  }
  return null
}

/**
 * The `postinstall` hook of client sets up the ground and env vars for the `prisma generate` command,
 * and runs it, showing a warning if the schema is not found.
 * - initializes the ./node_modules/.prisma/client folder with the default index(-browser).js/index.d.ts,
 *   which define a `PrismaClient` class stub that throws an error if instantiated before the `prisma generate`
 *   command is successfully executed.
 * - sets the path of the root of the project (TODO: to verify) to the `process.env.PRISMA_GENERATE_IN_POSTINSTALL`
 *   variable, or `'true'` if the project root cannot be found.
 * - runs `prisma generate`, passing through additional information about the command that triggered the generation,
 *   which is useful for debugging/telemetry. It tries to use the local `prisma` package if it is installed, otherwise it
 *   falls back to the global `prisma` package. If neither options are available, it warns the user to install `prisma` first.
 */
async function main() {
  if (process.env.INIT_CWD) {
    process.chdir(process.env.INIT_CWD) // necessary, because npm chooses __dirname as process.cwd()
    // in the postinstall hook
  }

  await createDefaultGeneratedThrowFiles()

  // TODO: consider using the `which` package
  const localPath = getLocalPackagePath()

  // Only execute if !localpath
  const installedGlobally = localPath ? undefined : await isInstalledGlobally()

  // this is needed, so we can find the correct schemas in yarn workspace projects
  const root = findPackageRoot(localPath)

  process.env.PRISMA_GENERATE_IN_POSTINSTALL = root ? root : 'true'

  debug({
    localPath,
    installedGlobally,
    init_cwd: process.env.INIT_CWD,
    PRISMA_GENERATE_IN_POSTINSTALL: process.env.PRISMA_GENERATE_IN_POSTINSTALL,
  })
  try {
    if (localPath) {
      await run('node', [localPath, 'generate', '--postinstall', doubleQuote(getPostInstallTrigger())])
      return
    }
    if (installedGlobally) {
      await run('prisma', ['generate', '--postinstall', doubleQuote(getPostInstallTrigger())])
      return
    }
  } catch (e) {
    // if exit code = 1 do not print
    if (e && e !== 1) {
      console.error(e)
    }
    debug(e)
  }

  if (!localPath && !installedGlobally) {
    console.error(
      `${c.yellow(
        'warning',
      )} In order to use "@prisma/client", please install Prisma CLI. You can install it with "npm add -D prisma".`,
    )
  }
}

function getLocalPackagePath() {
  try {
    const packagePath = require.resolve('prisma/package.json')
    if (packagePath) {
      return require.resolve('prisma')
    }
  } catch (e) {} // eslint-disable-line no-empty

  // TODO: consider removing this
  try {
    const packagePath = require.resolve('@prisma/cli/package.json')
    if (packagePath) {
      return require.resolve('@prisma/cli')
    }
  } catch (e) {} // eslint-disable-line no-empty

  return null
}

async function isInstalledGlobally() {
  try {
    const result = await exec('prisma -v')
    if (result.stdout.includes('@prisma/client')) {
      return true
    } else {
      console.error(`${c.yellow('warning')} You still have the ${c.bold('prisma')} cli (Prisma 1) installed globally.
Please uninstall it with either ${c.green('npm remove -g prisma')} or ${c.green('yarn global remove prisma')}.`)
    }
  } catch (e) {
    return false
  }
}

if (!process.env.PRISMA_SKIP_POSTINSTALL_GENERATE) {
  main()
    .catch((e) => {
      if (e.stderr) {
        if (e.stderr.includes(`Can't find schema.prisma`)) {
          console.error(
            `${c.yellow('warning')} @prisma/client needs a ${c.bold('schema.prisma')} to function, but couldn't find it.
        Please either create one manually or use ${c.bold('prisma init')}.
        Once you created it, run ${c.bold('prisma generate')}.
        To keep Prisma related things separate, we recommend creating it in a subfolder called ${c.underline(
          './prisma',
        )} like so: ${c.underline('./prisma/schema.prisma')}\n`,
          )
        } else {
          console.error(e.stderr)
        }
      } else {
        console.error(e)
      }
      process.exit(0)
    })
    .finally(() => {
      debug(`postinstall trigger: ${getPostInstallTrigger()}`)
    })
}

function run(cmd, params, cwd = process.cwd()) {
  const child = childProcess.spawn(cmd, params, {
    stdio: ['pipe', 'inherit', 'inherit'],
    cwd,
  })

  return new Promise((resolve, reject) => {
    child.on('close', () => {
      resolve(undefined)
    })
    child.on('exit', (code) => {
      if (code === 0) {
        resolve(undefined)
      } else {
        reject(code)
      }
    })
    child.on('error', () => {
      reject()
    })
  })
}

/**
 * Copies our default "throw" files into the default generation folder. These
 * files are dummy and informative because they just throw an error to let the
 * user know that they have forgotten to run `prisma generate` or that they
 * don't have a a schema file yet. We only add these files at the default
 * location `node_modules/.prisma/client`.
 */
async function createDefaultGeneratedThrowFiles() {
  try {
    const dotPrismaClientDir = path.join(__dirname, '../../../.prisma/client')

    await makeDir(dotPrismaClientDir)

    const defaultFileConfig = {
      js: path.join(__dirname, 'default-index.js'),
      ts: path.join(__dirname, 'default-index.d.ts'),
    }

    /**
     * @type {Record<string, { js?: string; ts?: string } | undefined>}
     */
    const defaultFiles = {
      index: defaultFileConfig,
      edge: defaultFileConfig,
      default: defaultFileConfig,
      wasm: defaultFileConfig,
      'index-browser': {
        js: path.join(__dirname, 'default-index.js'),
        ts: undefined,
      },
    }

    for (const file of Object.keys(defaultFiles)) {
      const { js, ts } = defaultFiles[file] ?? {}
      const dotPrismaJsFilePath = path.join(dotPrismaClientDir, `${file}.js`)
      const dotPrismaTsFilePath = path.join(dotPrismaClientDir, `${file}.d.ts`)

      if (js && !fs.existsSync(dotPrismaJsFilePath) && fs.existsSync(js)) {
        await fs.promises.copyFile(js, dotPrismaJsFilePath)
      }

      if (ts && !fs.existsSync(dotPrismaTsFilePath) && fs.existsSync(ts)) {
        await fs.promises.copyFile(ts, dotPrismaTsFilePath)
      }
    }
  } catch (e) {
    console.error(e)
  }
}

// TODO: can this be replaced some utility eg. mkdir
function makeDir(input) {
  const make = async (pth) => {
    try {
      await fs.promises.mkdir(pth)

      return pth
    } catch (error) {
      if (error.code === 'EPERM') {
        throw error
      }

      if (error.code === 'ENOENT') {
        if (path.dirname(pth) === pth) {
          throw new Error(`operation not permitted, mkdir '${pth}'`)
        }

        if (error.message.includes('null bytes')) {
          throw error
        }

        await make(path.dirname(pth))

        return make(pth)
      }

      try {
        const stats = await fs.promises.stat(pth)
        if (!stats.isDirectory()) {
          throw new Error('The path is not a directory')
        }
      } catch (_) {
        throw error
      }

      return pth
    }
  }

  return make(path.resolve(input))
}

/**
 * Get the command that triggered this postinstall script being run. If there is
 * an error while attempting to get this value then the string constant
 * 'ERROR_WHILE_FINDING_POSTINSTALL_TRIGGER' is returned.
 * This information is just necessary for telemetry.
 * This is passed to `prisma generate` as a string like `--postinstall value`.
 */
function getPostInstallTrigger() {
  /*
  npm_config_argv` is not officially documented so here are our research notes

  `npm_config_argv` is available to the postinstall script when the containing package has been installed by npm into some project.

  An example of its value:

  ```
  npm_config_argv: '{"remain":["../test"],"cooked":["add","../test"],"original":["add","../test"]}',
  ```

  We are interesting in the data contained in the "original" field.

  Trivia/Note: `npm_config_argv` is not available when running e.g. `npm install` on the containing package itself (e.g. when working on it)

  Yarn mimics this data and environment variable. Here is an example following `yarn add` for the same package:

  ```
  npm_config_argv: '{"remain":[],"cooked":["add"],"original":["add","../test"]}'
  ```

  Other package managers like `pnpm` have not been tested.
  */

  const maybe_npm_config_argv_string = process.env.npm_config_argv

  if (maybe_npm_config_argv_string === undefined) {
    return UNABLE_TO_FIND_POSTINSTALL_TRIGGER__ENVAR_MISSING
  }

  let npm_config_argv
  try {
    npm_config_argv = JSON.parse(maybe_npm_config_argv_string)
  } catch (e) {
    return `${UNABLE_TO_FIND_POSTINSTALL_TRIGGER_JSON_PARSE_ERROR}: ${maybe_npm_config_argv_string}`
  }

  if (typeof npm_config_argv !== 'object' || npm_config_argv === null) {
    return `${UNABLE_TO_FIND_POSTINSTALL_TRIGGER_JSON_SCHEMA_ERROR}: ${maybe_npm_config_argv_string}`
  }

  const npm_config_argv_original_arr = npm_config_argv.original

  if (!Array.isArray(npm_config_argv_original_arr)) {
    return `${UNABLE_TO_FIND_POSTINSTALL_TRIGGER_JSON_SCHEMA_ERROR}: ${maybe_npm_config_argv_string}`
  }

  const npm_config_argv_original = npm_config_argv_original_arr.filter((arg) => arg !== '').join(' ')

  const command =
    npm_config_argv_original === ''
      ? getPackageManagerName()
      : [getPackageManagerName(), npm_config_argv_original].join(' ')

  return command
}

/**
 * Wrap double quotes around the given string.
 */
function doubleQuote(x) {
  return `"${x}"`
}

/**
 * Get the package manager name currently being used. If parsing fails, then the following pattern is returned:
 * UNKNOWN_NPM_CONFIG_USER_AGENT(<string received>).
 */
function getPackageManagerName() {
  const userAgent = process.env.npm_config_user_agent
  if (!userAgent) return 'MISSING_NPM_CONFIG_USER_AGENT'

  const name = parsePackageManagerName(userAgent)
  if (!name) return `UNKNOWN_NPM_CONFIG_USER_AGENT(${userAgent})`

  return name
}

/**
 * Parse package manager name from useragent. If parsing fails, `null` is returned.
 */
function parsePackageManagerName(userAgent) {
  let packageManager = null

  // example: 'yarn/1.22.4 npm/? node/v13.11.0 darwin x64'
  // References:
  // - https://pnpm.io/only-allow-pnpm
  // - https://github.com/cameronhunter/npm-config-user-agent-parser
  if (userAgent) {
    const matchResult = userAgent.match(/^([^/]+)\/.+/)
    if (matchResult) {
      packageManager = matchResult[1].trim()
    }
  }

  return packageManager
}

// prettier-ignore
const UNABLE_TO_FIND_POSTINSTALL_TRIGGER__ENVAR_MISSING = 'UNABLE_TO_FIND_POSTINSTALL_TRIGGER__ENVAR_MISSING'
// prettier-ignore
const UNABLE_TO_FIND_POSTINSTALL_TRIGGER_JSON_PARSE_ERROR = 'UNABLE_TO_FIND_POSTINSTALL_TRIGGER_JSON_PARSE_ERROR'
// prettier-ignore
const UNABLE_TO_FIND_POSTINSTALL_TRIGGER_JSON_SCHEMA_ERROR = 'UNABLE_TO_FIND_POSTINSTALL_TRIGGER_JSON_SCHEMA_ERROR'

// expose for testing

exports.UNABLE_TO_FIND_POSTINSTALL_TRIGGER__ENVAR_MISSING = UNABLE_TO_FIND_POSTINSTALL_TRIGGER__ENVAR_MISSING
exports.UNABLE_TO_FIND_POSTINSTALL_TRIGGER_JSON_PARSE_ERROR = UNABLE_TO_FIND_POSTINSTALL_TRIGGER_JSON_PARSE_ERROR
exports.UNABLE_TO_FIND_POSTINSTALL_TRIGGER_JSON_SCHEMA_ERROR = UNABLE_TO_FIND_POSTINSTALL_TRIGGER_JSON_SCHEMA_ERROR
exports.getPostInstallTrigger = getPostInstallTrigger
