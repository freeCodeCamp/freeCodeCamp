'use strict'
var gitHosts = require('./git-host-info.js')
/* eslint-disable node/no-deprecated-api */

// copy-pasta util._extend from node's source, to avoid pulling
// the whole util module into peoples' webpack bundles.
/* istanbul ignore next */
var extend = Object.assign || function _extend (target, source) {
  // Don't do anything if source isn't an object
  if (source === null || typeof source !== 'object') return target

  var keys = Object.keys(source)
  var i = keys.length
  while (i--) {
    target[keys[i]] = source[keys[i]]
  }
  return target
}

module.exports = GitHost
function GitHost (type, user, auth, project, committish, defaultRepresentation, opts) {
  var gitHostInfo = this
  gitHostInfo.type = type
  Object.keys(gitHosts[type]).forEach(function (key) {
    gitHostInfo[key] = gitHosts[type][key]
  })
  gitHostInfo.user = user
  gitHostInfo.auth = auth
  gitHostInfo.project = project
  gitHostInfo.committish = committish
  gitHostInfo.default = defaultRepresentation
  gitHostInfo.opts = opts || {}
}

GitHost.prototype.hash = function () {
  return this.committish ? '#' + this.committish : ''
}

GitHost.prototype._fill = function (template, opts) {
  if (!template) return
  var vars = extend({}, opts)
  vars.path = vars.path ? vars.path.replace(/^[/]+/g, '') : ''
  opts = extend(extend({}, this.opts), opts)
  var self = this
  Object.keys(this).forEach(function (key) {
    if (self[key] != null && vars[key] == null) vars[key] = self[key]
  })
  var rawAuth = vars.auth
  var rawcommittish = vars.committish
  var rawFragment = vars.fragment
  var rawPath = vars.path
  var rawProject = vars.project
  Object.keys(vars).forEach(function (key) {
    var value = vars[key]
    if ((key === 'path' || key === 'project') && typeof value === 'string') {
      vars[key] = value.split('/').map(function (pathComponent) {
        return encodeURIComponent(pathComponent)
      }).join('/')
    } else {
      vars[key] = encodeURIComponent(value)
    }
  })
  vars['auth@'] = rawAuth ? rawAuth + '@' : ''
  vars['#fragment'] = rawFragment ? '#' + this.hashformat(rawFragment) : ''
  vars.fragment = vars.fragment ? vars.fragment : ''
  vars['#path'] = rawPath ? '#' + this.hashformat(rawPath) : ''
  vars['/path'] = vars.path ? '/' + vars.path : ''
  vars.projectPath = rawProject.split('/').map(encodeURIComponent).join('/')
  if (opts.noCommittish) {
    vars['#committish'] = ''
    vars['/tree/committish'] = ''
    vars['/committish'] = ''
    vars.committish = ''
  } else {
    vars['#committish'] = rawcommittish ? '#' + rawcommittish : ''
    vars['/tree/committish'] = vars.committish
      ? '/' + vars.treepath + '/' + vars.committish
      : ''
    vars['/committish'] = vars.committish ? '/' + vars.committish : ''
    vars.committish = vars.committish || 'master'
  }
  var res = template
  Object.keys(vars).forEach(function (key) {
    res = res.replace(new RegExp('[{]' + key + '[}]', 'g'), vars[key])
  })
  if (opts.noGitPlus) {
    return res.replace(/^git[+]/, '')
  } else {
    return res
  }
}

GitHost.prototype.ssh = function (opts) {
  return this._fill(this.sshtemplate, opts)
}

GitHost.prototype.sshurl = function (opts) {
  return this._fill(this.sshurltemplate, opts)
}

GitHost.prototype.browse = function (P, F, opts) {
  if (typeof P === 'string') {
    if (typeof F !== 'string') {
      opts = F
      F = null
    }
    return this._fill(this.browsefiletemplate, extend({
      fragment: F,
      path: P
    }, opts))
  } else {
    return this._fill(this.browsetemplate, P)
  }
}

GitHost.prototype.docs = function (opts) {
  return this._fill(this.docstemplate, opts)
}

GitHost.prototype.bugs = function (opts) {
  return this._fill(this.bugstemplate, opts)
}

GitHost.prototype.https = function (opts) {
  return this._fill(this.httpstemplate, opts)
}

GitHost.prototype.git = function (opts) {
  return this._fill(this.gittemplate, opts)
}

GitHost.prototype.shortcut = function (opts) {
  return this._fill(this.shortcuttemplate, opts)
}

GitHost.prototype.path = function (opts) {
  return this._fill(this.pathtemplate, opts)
}

GitHost.prototype.tarball = function (opts_) {
  var opts = extend({}, opts_, { noCommittish: false })
  return this._fill(this.tarballtemplate, opts)
}

GitHost.prototype.file = function (P, opts) {
  return this._fill(this.filetemplate, extend({ path: P }, opts))
}

GitHost.prototype.getDefaultRepresentation = function () {
  return this.default
}

GitHost.prototype.toString = function (opts) {
  if (this.default && typeof this[this.default] === 'function') return this[this.default](opts)
  return this.sshurl(opts)
}
