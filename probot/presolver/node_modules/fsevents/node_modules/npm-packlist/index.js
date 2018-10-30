'use strict'

// Do a two-pass walk, first to get the list of packages that need to be
// bundled, then again to get the actual files and folders.
// Keep a cache of node_modules content and package.json data, so that the
// second walk doesn't have to re-do all the same work.

const bundleWalk = require('npm-bundled')
const BundleWalker = bundleWalk.BundleWalker
const BundleWalkerSync = bundleWalk.BundleWalkerSync

const ignoreWalk = require('ignore-walk')
const IgnoreWalker = ignoreWalk.Walker
const IgnoreWalkerSync = ignoreWalk.WalkerSync

const rootBuiltinRules = Symbol('root-builtin-rules')
const packageNecessaryRules = Symbol('package-necessary-rules')
const path = require('path')

const defaultRules = [
  '.npmignore',
  '.gitignore',
  '**/.git/',
  '**/.svn/',
  '**/.hg/',
  '**/CVS/',
  '/.lock-wscript',
  '/.wafpickle-*',
  '/build/config.gypi',
  'npm-debug.log',
  '**/.npmrc',
  '.*.swp',
  '.DS_Store',
  '._*',
  '*.orig',
  'package-lock.json'
]

// a decorator that applies our custom rules to an ignore walker
const npmWalker = Class => class Walker extends Class {
  constructor (opt) {
    opt = opt || {}

    // the order in which rules are applied.
    opt.ignoreFiles = [
      rootBuiltinRules,
      'package.json',
      '.npmignore',
      '.gitignore',
      packageNecessaryRules
    ]

    opt.includeEmpty = false
    opt.path = opt.path || process.cwd()
    opt.follow = path.basename(opt.path) === 'node_modules'
    super(opt)

    // ignore a bunch of things by default at the root level.
    // also ignore anything in node_modules, except bundled dependencies
    if (!this.parent) {
      this.bundled = opt.bundled || []
      this.bundledScopes = Array.from(new Set(
        this.bundled.filter(f => /^@/.test(f))
        .map(f => f.split('/')[0])))
      const rules = defaultRules.join('\n') + '\n'
      this.packageJsonCache = opt.packageJsonCache || new Map()
      super.onReadIgnoreFile(rootBuiltinRules, rules, _=>_)
    } else {
      this.bundled = []
      this.bundledScopes = []
      this.packageJsonCache = this.parent.packageJsonCache
    }
  }

  filterEntry (entry, partial) {
    // get the partial path from the root of the walk
    const p = this.path.substr(this.root.length + 1)
    const pkgre = /^node_modules\/(@[^\/]+\/?[^\/]+|[^\/]+)(\/.*)?$/
    const isRoot = !this.parent
    const pkg = isRoot && pkgre.test(entry) ?
      entry.replace(pkgre, '$1') : null
    const rootNM = isRoot && entry === 'node_modules'
    const rootPJ = isRoot && entry === 'package.json'

    return (
      // if we're in a bundled package, check with the parent.
      /^node_modules($|\/)/i.test(p) ? this.parent.filterEntry(
          this.basename + '/' + entry, partial)

      // if package is bundled, all files included
      // also include @scope dirs for bundled scoped deps
      // they'll be ignored if no files end up in them.
      // However, this only matters if we're in the root.
      // node_modules folders elsewhere, like lib/node_modules,
      // should be included normally unless ignored.
      : pkg ? -1 !== this.bundled.indexOf(pkg) ||
        -1 !== this.bundledScopes.indexOf(pkg)

      // only walk top node_modules if we want to bundle something
      : rootNM ? !!this.bundled.length

      // always include package.json at the root.
      : rootPJ ? true

      // otherwise, follow ignore-walk's logic
      : super.filterEntry(entry, partial)
    )
  }

  filterEntries () {
    if (this.ignoreRules['package.json'])
      this.ignoreRules['.gitignore'] = this.ignoreRules['.npmignore'] = null
    else if (this.ignoreRules['.npmignore'])
      this.ignoreRules['.gitignore'] = null
    this.filterEntries = super.filterEntries
    super.filterEntries()
  }

  addIgnoreFile (file, then) {
    const ig = path.resolve(this.path, file)
    if (this.packageJsonCache.has(ig))
      this.onPackageJson(ig, this.packageJsonCache.get(ig), then)
    else
      super.addIgnoreFile(file, then)
  }

  onPackageJson (ig, pkg, then) {
    this.packageJsonCache.set(ig, pkg)

    // if there's a browser or main, make sure we don't ignore it
    const rules = [
      pkg.browser ? '!' + pkg.browser : '',
      pkg.main ? '!' + pkg.main : '',
      '!@(readme|license|licence|notice|changes|changelog|history){,.*}'
    ].filter(f => f).join('\n') + '\n'
    super.onReadIgnoreFile(packageNecessaryRules, rules, _=>_)

    if (Array.isArray(pkg.files))
      super.onReadIgnoreFile('package.json', '*\n' + pkg.files.map(
        f => '!' + f + '\n!' + f.replace(/\/+$/, '') + '/**'
      ).join('\n') + '\n', then)
    else
      then()
  }

  // override parent onstat function to nix all symlinks
  onstat (st, entry, file, dir, then) {
    if (st.isSymbolicLink())
      then()
    else
      super.onstat(st, entry, file, dir, then)
  }

  onReadIgnoreFile (file, data, then) {
    if (file === 'package.json')
      try {
        this.onPackageJson(file, JSON.parse(data), then)
      } catch (er) {
        // ignore package.json files that are not json
        then()
      }
    else
      super.onReadIgnoreFile(file, data, then)
  }

  sort (a, b) {
    return sort(a, b)
  }
}

class Walker extends npmWalker(IgnoreWalker) {
  walker (entry, then) {
    new Walker(this.walkerOpt(entry)).on('done', then).start()
  }
}

class WalkerSync extends npmWalker(IgnoreWalkerSync) {
  walker (entry, then) {
    new WalkerSync(this.walkerOpt(entry)).start()
    then()
  }
}

const walk = (options, callback) => {
  options = options || {}
  const p = new Promise((resolve, reject) => {
    const bw = new BundleWalker(options).start()
    bw.on('done', bundled => {
      options.bundled = bundled
      options.packageJsonCache = bw.packageJsonCache
      new Walker(options).on('done', resolve).on('error', reject).start()
    })
  })
  return callback ? p.then(res => callback(null, res), callback) : p
}

const walkSync = options => {
  options = options || {}
  const bw = new BundleWalkerSync(options).start()
  options.bundled = bw.result
  options.packageJsonCache = bw.packageJsonCache
  const walker = new WalkerSync(options)
  walker.start()
  return walker.result
}

// package.json first, node_modules last, files before folders, alphasort
const sort = (a, b) =>
  a === 'package.json' ? -1
  : b === 'package.json' ? 1
  : /^node_modules/.test(a) && !/^node_modules/.test(b) ? 1
  : /^node_modules/.test(b) && !/^node_modules/.test(a) ? -1
  : path.dirname(a) === '.' && path.dirname(b) !== '.' ? -1
  : path.dirname(b) === '.' && path.dirname(a) !== '.' ? 1
  : a.localeCompare(b)

module.exports = walk
walk.sync = walkSync
walk.Walker = Walker
walk.WalkerSync = WalkerSync
