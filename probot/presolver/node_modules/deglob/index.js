module.exports = deglob

var findRoot = require('find-root')
var fs = require('fs')
var glob = require('glob')
var ignorePkg = require('ignore')
var os = require('os')
var parallel = require('run-parallel')
var path = require('path')
var pkgConfig = require('pkg-config')
var uniq = require('uniq')

function deglob (files, opts, cb) {
  if (typeof opts === 'function') return deglob(files, null, opts)
  opts = parseOpts(opts)

  if (typeof files === 'string') files = [ files ]
  if (files.length === 0) return nextTick(cb, null, [])

  // traverse filesystem
  parallel(files.map(function (pattern) {
    return function (callback) {
      glob(pattern, {
        cwd: opts.cwd,
        ignore: opts._ignore,
        nodir: true
      }, callback)
    }
  }), function (err, results) {
    if (err) return cb(err)

    // flatten nested arrays
    var files = results.reduce(function (files, result) {
      result.forEach(function (file) {
        files.push(path.resolve(opts.cwd, file))
      })
      return files
    }, [])

    // de-dupe
    files = uniq(files)

    if (opts._gitignore) {
      files = toRelative(opts.cwd, files)
      if (os.platform() === 'win32') files = toUnix(files)
      files = opts._gitignore.filter(files)
      files = toAbsolute(opts.cwd, files)
      if (os.platform() === 'win32') files = toWin32(files)
    }

    return cb(null, files)
  })
}

function parseOpts (opts) {
  if (!opts) opts = {}
  opts = Object.assign({
    useGitIgnore: true,
    usePackageJson: true,
    configKey: 'config',
    gitIgnoreFile: '.gitignore'
  }, opts)

  if (!opts.cwd) opts.cwd = process.cwd()

  opts._ignore = []
  opts._gitignore = ignorePkg()

  function addIgnorePattern (patterns) {
    opts._ignore = opts._ignore.concat(patterns)
    opts._gitignore.addPattern(patterns)
  }

  if (opts.ignore) addIgnorePattern(opts.ignore)

  // return if we're not looking for packageJson or gitIgnore
  if (!opts.useGitIgnore && !opts.usePackageJson) {
    return opts
  }

  // Find package.json in the project root
  var root
  try {
    root = findRoot(opts.cwd)
  } catch (e) {}

  if (root) {
    if (opts.usePackageJson) {
      var packageOpts = pkgConfig(opts.configKey, { root: false, cwd: opts.cwd })
      if (packageOpts && packageOpts.ignore) {
        // Use ignore patterns from package.json ("config.ignore" property)
        addIgnorePattern(packageOpts.ignore)
      }
    }

    if (opts.useGitIgnore) {
      // Use ignore patterns from project root .gitignore
      var gitignore
      try {
        gitignore = fs.readFileSync(path.join(root, opts.gitIgnoreFile), 'utf8')
      } catch (e) {}
      if (gitignore) opts._gitignore.addPattern(gitignore.split(/\r?\n/))
    }
  }

  return opts
}

function toAbsolute (cwd, files) {
  return files.map(function (file) {
    return path.join(cwd, file)
  })
}

function toRelative (cwd, files) {
  return files.map(function (file) {
    return path.relative(cwd, file)
  })
}

function toUnix (files) {
  return files.map(function (file) {
    return file.replace(/\\/g, '/')
  })
}

function toWin32 (files) {
  return files.map(function (file) {
    return file.replace(/\//g, '\\')
  })
}

function nextTick (cb, err, val) {
  process.nextTick(function () {
    cb(err, val)
  })
}
