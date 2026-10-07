let { execSync } = require('child_process')
let escalade = require('escalade/sync')
let { existsSync, readFileSync, writeFileSync } = require('fs')
let { join } = require('path')
let pico = require('picocolors')

const { detectEOL, detectIndent } = require('./utils')

function BrowserslistUpdateError(message) {
  this.name = 'BrowserslistUpdateError'
  this.message = message
  this.browserslist = true
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, BrowserslistUpdateError)
  }
}

BrowserslistUpdateError.prototype = Error.prototype

// Check if HADOOP_HOME is set to determine if this is running in a Hadoop environment
const IsHadoopExists = !!process.env.HADOOP_HOME
const yarnCommand = IsHadoopExists ? 'yarnpkg' : 'yarn'

/* c8 ignore next 3 */
function defaultPrint(str) {
  process.stdout.write(str)
}

function detectLockfile() {
  let packageDir = escalade('.', (dir, names) => {
    return names.indexOf('package.json') !== -1 ? dir : ''
  })

  if (!packageDir) {
    throw new BrowserslistUpdateError(
      'Cannot find package.json. ' +
        'Is this the right directory to run `npx update-browserslist-db` in?'
    )
  }

  let lockfileNpm = join(packageDir, 'package-lock.json')
  let lockfileShrinkwrap = join(packageDir, 'npm-shrinkwrap.json')
  let lockfileYarn = join(packageDir, 'yarn.lock')
  let lockfilePnpm = join(packageDir, 'pnpm-lock.yaml')
  let lockfileBun = join(packageDir, 'bun.lock')
  let lockfileBunBinary = join(packageDir, 'bun.lockb')

  if (existsSync(lockfilePnpm)) {
    return { file: lockfilePnpm, mode: 'pnpm' }
  } else if (existsSync(lockfileBun) || existsSync(lockfileBunBinary)) {
    return { file: lockfileBun, mode: 'bun' }
  } else if (existsSync(lockfileNpm)) {
    return { file: lockfileNpm, mode: 'npm' }
  } else if (existsSync(lockfileYarn)) {
    let lock = { file: lockfileYarn, mode: 'yarn' }
    lock.content = readFileSync(lock.file).toString()
    lock.version = /# yarn lockfile v1/.test(lock.content) ? 1 : 2
    return lock
  } else if (existsSync(lockfileShrinkwrap)) {
    return { file: lockfileShrinkwrap, mode: 'npm' }
  }
  throw new BrowserslistUpdateError(
    'No lockfile found. Run "npm install", "yarn install" or "pnpm install"'
  )
}

function getLatestInfo(lock) {
  if (lock.mode === 'yarn') {
    if (lock.version === 1) {
      return JSON.parse(
        execSync(yarnCommand + ' info caniuse-lite --json').toString()
      ).data
    } else {
      return JSON.parse(
        execSync(yarnCommand + ' npm info caniuse-lite --json').toString()
      )
    }
  }
  if (lock.mode === 'pnpm') {
    return JSON.parse(execSync('pnpm info caniuse-lite --json').toString())
  }
  if (lock.mode === 'bun') {
    return JSON.parse(execSync(' bun info caniuse-lite --json').toString())
  }

  return JSON.parse(execSync('npm show caniuse-lite --json').toString())
}

function getBrowsers() {
  let browserslist = require('browserslist')
  return browserslist().reduce((result, entry) => {
    if (!result[entry[0]]) {
      result[entry[0]] = []
    }
    result[entry[0]].push(entry[1])
    return result
  }, {})
}

function diffBrowsers(old, current) {
  let browsers = Object.keys(old).concat(
    Object.keys(current).filter(browser => old[browser] === undefined)
  )
  return browsers
    .map(browser => {
      let oldVersions = old[browser] || []
      let currentVersions = current[browser] || []
      let common = oldVersions.filter(v => currentVersions.includes(v))
      let added = currentVersions.filter(v => !common.includes(v))
      let removed = oldVersions.filter(v => !common.includes(v))
      return removed
        .map(v => pico.red('- ' + browser + ' ' + v))
        .concat(added.map(v => pico.green('+ ' + browser + ' ' + v)))
    })
    .reduce((result, array) => result.concat(array), [])
    .join('\n')
}

function updateNpmLockfile(lock, latest) {
  let metadata = { latest, versions: [] }
  let content = deletePackage(JSON.parse(lock.content), metadata)
  metadata.content = JSON.stringify(content, null, detectIndent(lock.content))
  return metadata
}

function deletePackage(node, metadata) {
  if (node.dependencies) {
    if (node.dependencies['caniuse-lite']) {
      let version = node.dependencies['caniuse-lite'].version
      metadata.versions[version] = true
      delete node.dependencies['caniuse-lite']
    }
    for (let i in node.dependencies) {
      node.dependencies[i] = deletePackage(node.dependencies[i], metadata)
    }
  }
  if (node.packages) {
    for (let path in node.packages) {
      if (path.endsWith('/caniuse-lite')) {
        metadata.versions[node.packages[path].version] = true
        delete node.packages[path]
      }
    }
  }
  return node
}

let yarnVersionRe = /version "(.*?)"/

function updateYarnLockfile(lock, latest) {
  let blocks = lock.content.split(/(\n{2,})/).map(block => {
    return block.split('\n')
  })
  let versions = {}
  blocks.forEach(lines => {
    if (lines[0].indexOf('caniuse-lite@') !== -1) {
      let match = yarnVersionRe.exec(lines[1])
      versions[match[1]] = true
      if (match[1] !== latest.version) {
        lines[1] = lines[1].replace(
          /version "[^"]+"/,
          'version "' + latest.version + '"'
        )
        lines[2] = lines[2].replace(
          /resolved "[^"]+"/,
          'resolved "' + latest.dist.tarball + '"'
        )
        if (lines.length === 4) {
          lines[3] = latest.dist.integrity
            ? lines[3].replace(
                /integrity .+/,
                'integrity ' + latest.dist.integrity
              )
            : ''
        }
      }
    }
  })
  let content = blocks.map(lines => lines.join('\n')).join('')
  return { content, versions }
}

function updateLockfile(lock, latest) {
  if (!lock.content) lock.content = readFileSync(lock.file).toString()

  let updatedLockFile
  if (lock.mode === 'yarn') {
    updatedLockFile = updateYarnLockfile(lock, latest)
  } else {
    updatedLockFile = updateNpmLockfile(lock, latest)
  }
  updatedLockFile.content = updatedLockFile.content.replace(
    /\n/g,
    detectEOL(lock.content)
  )
  return updatedLockFile
}

function updatePackageManually(print, lock, latest) {
  let lockfileData = updateLockfile(lock, latest)
  let caniuseVersions = Object.keys(lockfileData.versions).sort()
  if (caniuseVersions.length === 1 && caniuseVersions[0] === latest.version) {
    print(
      'Installed version:  ' +
        pico.bold(pico.green(caniuseVersions[0])) +
        '\n' +
        pico.bold(pico.green('caniuse-lite is up to date')) +
        '\n'
    )
    return
  }

  if (caniuseVersions.length === 0) {
    caniuseVersions[0] = 'none'
  }
  print(
    'Installed version' +
      (caniuseVersions.length === 1 ? ':  ' : 's: ') +
      pico.bold(pico.red(caniuseVersions.join(', '))) +
      '\n' +
      'Removing old caniuse-lite from lock file\n'
  )
  writeFileSync(lock.file, lockfileData.content)

  let install =
    lock.mode === 'yarn' ? yarnCommand + ' add -W' : lock.mode + ' install'
  print(
    'Installing new caniuse-lite version\n' +
      pico.yellow('$ ' + install + ' caniuse-lite baseline-browser-mapping') +
      '\n'
  )
  try {
    execSync(install + ' caniuse-lite baseline-browser-mapping')
  } catch (e) /* c8 ignore start */ {
    print(
      pico.red(
        '\n' +
          e.stack +
          '\n\n' +
          'Problem with `' +
          install +
          ' caniuse-lite` call. ' +
          'Run it manually.\n'
      )
    )
    process.exit(1)
  } /* c8 ignore end */

  let del =
    lock.mode === 'yarn' ? yarnCommand + ' remove -W' : lock.mode + ' uninstall'
  print(
    'Cleaning package.json dependencies from caniuse-lite\n' +
      pico.yellow('$ ' + del + ' caniuse-lite baseline-browser-mapping') +
      '\n'
  )
  execSync(del + ' caniuse-lite baseline-browser-mapping')
}

function updateWith(print, cmd) {
  print('Updating caniuse-lite version\n' + pico.yellow('$ ' + cmd) + '\n')
  try {
    execSync(cmd)
  } catch (e) /* c8 ignore start */ {
    print(pico.red(e.stdout.toString()))
    print(
      pico.red(
        '\n' +
          e.stack +
          '\n\n' +
          'Problem with `' +
          cmd +
          '` call. ' +
          'Run it manually.\n'
      )
    )
    process.exit(1)
  } /* c8 ignore end */
}

module.exports = function updateDB(print = defaultPrint) {
  let lock = detectLockfile()
  let latest = getLatestInfo(lock)

  let listError
  let oldList
  try {
    oldList = getBrowsers()
  } catch (e) {
    listError = e
  }

  print('Latest version:     ' + pico.bold(pico.green(latest.version)) + '\n')

  if (lock.mode === 'yarn' && lock.version !== 1) {
    updateWith(
      print,
      yarnCommand + ' up -R caniuse-lite baseline-browser-mapping'
    )
  } else if (lock.mode === 'pnpm') {
    let lockContent = readFileSync(lock.file).toString()
    let packages = lockContent.includes('baseline-browser-mapping')
      ? 'caniuse-lite baseline-browser-mapping'
      : 'caniuse-lite'
    updateWith(print, 'pnpm up --depth=Infinity --no-save ' + packages)
  } else if (lock.mode === 'bun') {
    updateWith(print, 'bun update caniuse-lite baseline-browser-mapping')
  } else {
    updatePackageManually(print, lock, latest)
  }

  print('caniuse-lite has been successfully updated\n')

  let newList
  if (!listError) {
    try {
      newList = getBrowsers()
    } catch (e) /* c8 ignore start */ {
      listError = e
    } /* c8 ignore end */
  }

  if (listError) {
    if (listError.message.includes("Cannot find module 'browserslist'")) {
      print(
        pico.gray(
          'Install `browserslist` to your direct dependencies ' +
            'to see target browser changes\n'
        )
      )
    } else {
      print(
        pico.gray(
          'Problem with browser list retrieval.\n' +
            'Target browser changes won’t be shown.\n'
        )
      )
    }
  } else {
    let changes = diffBrowsers(oldList, newList)
    if (changes) {
      print('\nTarget browser changes:\n')
      print(changes + '\n')
    } else {
      print('\n' + pico.green('No target browser changes') + '\n')
    }
  }
}
