module.exports.cli = require('./bin/cmd')

module.exports.linter = Linter

var deglob = require('deglob')
var os = require('os')
var path = require('path')
var pkgConf = require('pkg-conf')

var HOME_OR_TMP = os.homedir() || os.tmpdir()

var DEFAULT_PATTERNS = [
  '**/*.js',
  '**/*.jsx'
]

var DEFAULT_IGNORE = [
  '**/*.min.js',
  '**/bundle.js',
  'coverage/**',
  'node_modules/**',
  'vendor/**'
]

function Linter (opts) {
  if (!(this instanceof Linter)) return new Linter(opts)
  if (!opts) opts = {}

  this.cmd = opts.cmd || 'standard'
  this.eslint = opts.eslint
  this.cwd = opts.cwd
  if (!this.eslint) throw new Error('opts.eslint option is required')
  this.customParseOpts = opts.parseOpts

  this.eslintConfig = Object.assign({
    cache: true,
    cacheLocation: path.join(HOME_OR_TMP, '.standard-cache/'),
    envs: [],
    fix: false,
    globals: [],
    ignore: false,
    plugins: [],
    useEslintrc: false
  }, opts.eslintConfig)
}

/**
 * Lint text to enforce JavaScript Style.
 *
 * @param {string} text                   file text to lint
 * @param {Object=} opts                  options object
 * @param {boolean=} opts.fix             automatically fix problems
 * @param {Array.<string>=} opts.globals  custom global variables to declare
 * @param {Array.<string>=} opts.plugins  custom eslint plugins
 * @param {Array.<string>=} opts.envs     custom eslint environment
 * @param {string=} opts.parser           custom js parser (e.g. babel-eslint)
 * @param {string=} opts.filename         path of the file containing the text being linted
 */
Linter.prototype.lintTextSync = function (text, opts) {
  opts = this.parseOpts(opts)
  return new this.eslint.CLIEngine(opts.eslintConfig).executeOnText(text, opts.filename)
}

Linter.prototype.lintText = function (text, opts, cb) {
  if (typeof opts === 'function') return this.lintText(text, null, opts)
  var result
  try {
    result = this.lintTextSync(text, opts)
  } catch (err) {
    return process.nextTick(cb, err)
  }
  process.nextTick(cb, null, result)
}

/**
 * Lint files to enforce JavaScript Style.
 *
 * @param {Array.<string>} files          file globs to lint
 * @param {Object=} opts                  options object
 * @param {Array.<string>=} opts.ignore   file globs to ignore (has sane defaults)
 * @param {string=} opts.cwd              current working directory (default: process.cwd())
 * @param {boolean=} opts.fix             automatically fix problems
 * @param {Array.<string>=} opts.globals  custom global variables to declare
 * @param {Array.<string>=} opts.plugins  custom eslint plugins
 * @param {Array.<string>=} opts.envs     custom eslint environment
 * @param {string=} opts.parser           custom js parser (e.g. babel-eslint)
 * @param {function(Error, Object)} cb    callback
 */
Linter.prototype.lintFiles = function (files, opts, cb) {
  var self = this
  if (typeof opts === 'function') return self.lintFiles(files, null, opts)
  opts = self.parseOpts(opts)

  if (typeof files === 'string') files = [ files ]
  if (files.length === 0) files = DEFAULT_PATTERNS

  var deglobOpts = {
    ignore: opts.ignore,
    cwd: opts.cwd,
    useGitIgnore: true,
    usePackageJson: false
  }

  deglob(files, deglobOpts, function (err, allFiles) {
    if (err) return cb(err)

    var result
    try {
      result = new self.eslint.CLIEngine(opts.eslintConfig).executeOnFiles(allFiles)
    } catch (err) {
      return cb(err)
    }

    if (opts.fix) {
      self.eslint.CLIEngine.outputFixes(result)
    }

    return cb(null, result)
  })
}

Linter.prototype.parseOpts = function (opts) {
  var self = this

  if (!opts) opts = {}
  opts = Object.assign({}, opts)
  opts.eslintConfig = Object.assign({}, self.eslintConfig)
  opts.eslintConfig.fix = !!opts.fix

  if (!opts.cwd) opts.cwd = self.cwd || process.cwd()
  var packageOpts = pkgConf.sync(self.cmd, { cwd: opts.cwd })

  if (!opts.ignore) opts.ignore = []
  addIgnore(packageOpts.ignore)
  addIgnore(DEFAULT_IGNORE)

  addGlobals(packageOpts.globals || packageOpts.global)
  addGlobals(opts.globals || opts.global)

  addPlugins(packageOpts.plugins || packageOpts.plugin)
  addPlugins(opts.plugins || opts.plugin)

  addEnvs(packageOpts.envs || packageOpts.env)
  addEnvs(opts.envs || opts.env)

  setParser(packageOpts.parser || opts.parser)

  if (self.customParseOpts) {
    var filepath = pkgConf.filepath(packageOpts)
    var rootDir = filepath ? path.dirname(filepath) : opts.cwd
    opts = self.customParseOpts(opts, packageOpts, rootDir)
  }

  function addIgnore (ignore) {
    if (!ignore) return
    opts.ignore = opts.ignore.concat(ignore)
  }

  function addGlobals (globals) {
    if (!globals) return
    opts.eslintConfig.globals = self.eslintConfig.globals.concat(globals)
  }

  function addPlugins (plugins) {
    if (!plugins) return
    opts.eslintConfig.plugins = self.eslintConfig.plugins.concat(plugins)
  }

  function addEnvs (envs) {
    if (!envs) return
    if (!Array.isArray(envs) && typeof envs !== 'string') {
      // envs can be an object in `package.json`
      envs = Object.keys(envs).filter(function (env) { return envs[env] })
    }
    opts.eslintConfig.envs = self.eslintConfig.envs.concat(envs)
  }

  function setParser (parser) {
    if (!parser) return
    opts.eslintConfig.parser = parser
  }

  return opts
}
