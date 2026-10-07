'use strict'
var url = require('url')
var gitHosts = require('./git-host-info.js')
var GitHost = module.exports = require('./git-host.js')

var protocolToRepresentationMap = {
  'git+ssh:': 'sshurl',
  'git+https:': 'https',
  'ssh:': 'sshurl',
  'git:': 'git'
}

function protocolToRepresentation (protocol) {
  return protocolToRepresentationMap[protocol] || protocol.slice(0, -1)
}

var authProtocols = {
  'git:': true,
  'https:': true,
  'git+https:': true,
  'http:': true,
  'git+http:': true
}

var cache = {}

module.exports.fromUrl = function (giturl, opts) {
  if (typeof giturl !== 'string') return
  var key = giturl + JSON.stringify(opts || {})

  if (!(key in cache)) {
    cache[key] = fromUrl(giturl, opts)
  }

  return cache[key]
}

function fromUrl (giturl, opts) {
  if (giturl == null || giturl === '') return
  var url = fixupUnqualifiedGist(
    isGitHubShorthand(giturl) ? 'github:' + giturl : giturl
  )
  var parsed = parseGitUrl(url)
  var shortcutMatch = url.match(/^([^:]+):(?:[^@]+@)?(?:([^/]*)\/)?([^#]+)/)
  var matches = Object.keys(gitHosts).map(function (gitHostName) {
    try {
      var gitHostInfo = gitHosts[gitHostName]
      var auth = null
      if (parsed.auth && authProtocols[parsed.protocol]) {
        auth = parsed.auth
      }
      var committish = parsed.hash ? decodeURIComponent(parsed.hash.substr(1)) : null
      var user = null
      var project = null
      var defaultRepresentation = null
      if (shortcutMatch && shortcutMatch[1] === gitHostName) {
        user = shortcutMatch[2] && decodeURIComponent(shortcutMatch[2])
        project = decodeURIComponent(shortcutMatch[3].replace(/\.git$/, ''))
        defaultRepresentation = 'shortcut'
      } else {
        if (parsed.host && parsed.host !== gitHostInfo.domain && parsed.host.replace(/^www[.]/, '') !== gitHostInfo.domain) return
        if (!gitHostInfo.protocols_re.test(parsed.protocol)) return
        if (!parsed.path) return
        var pathmatch = gitHostInfo.pathmatch
        var matched = parsed.path.match(pathmatch)
        if (!matched) return
        /* istanbul ignore else */
        if (matched[1] !== null && matched[1] !== undefined) {
          user = decodeURIComponent(matched[1].replace(/^:/, ''))
        }
        project = decodeURIComponent(matched[2])
        defaultRepresentation = protocolToRepresentation(parsed.protocol)
      }
      return new GitHost(gitHostName, user, auth, project, committish, defaultRepresentation, opts)
    } catch (ex) {
      /* istanbul ignore else */
      if (ex instanceof URIError) {
      } else throw ex
    }
  }).filter(function (gitHostInfo) { return gitHostInfo })
  if (matches.length !== 1) return
  return matches[0]
}

function isGitHubShorthand (arg) {
  // Note: This does not fully test the git ref format.
  // See https://www.kernel.org/pub/software/scm/git/docs/git-check-ref-format.html
  //
  // The only way to do this properly would be to shell out to
  // git-check-ref-format, and as this is a fast sync function,
  // we don't want to do that.  Just let git fail if it turns
  // out that the commit-ish is invalid.
  // GH usernames cannot start with . or -
  return /^[^:@%/\s.-][^:@%/\s]*[/][^:@\s/%]+(?:#.*)?$/.test(arg)
}

function fixupUnqualifiedGist (giturl) {
  // necessary for round-tripping gists
  var parsed = url.parse(giturl)
  if (parsed.protocol === 'gist:' && parsed.host && !parsed.path) {
    return parsed.protocol + '/' + parsed.host
  } else {
    return giturl
  }
}

function parseGitUrl (giturl) {
  var matched = giturl.match(/^([^@]+)@([^:/]+):[/]?((?:[^/]+[/])?[^/]+?)(?:[.]git)?(#.*)?$/)
  if (!matched) {
    var legacy = url.parse(giturl)
    // If we don't have url.URL, then sorry, this is just not fixable.
    // This affects Node <= 6.12.
    if (legacy.auth && typeof url.URL === 'function') {
      // git urls can be in the form of scp-style/ssh-connect strings, like
      // git+ssh://user@host.com:some/path, which the legacy url parser
      // supports, but WhatWG url.URL class does not.  However, the legacy
      // parser de-urlencodes the username and password, so something like
      // https://user%3An%40me:p%40ss%3Aword@x.com/ becomes
      // https://user:n@me:p@ss:word@x.com/ which is all kinds of wrong.
      // Pull off just the auth and host, so we dont' get the confusing
      // scp-style URL, then pass that to the WhatWG parser to get the
      // auth properly escaped.
      var authmatch = giturl.match(/[^@]+@[^:/]+/)
      /* istanbul ignore else - this should be impossible */
      if (authmatch) {
        var whatwg = new url.URL(authmatch[0])
        legacy.auth = whatwg.username || ''
        if (whatwg.password) legacy.auth += ':' + whatwg.password
      }
    }
    return legacy
  }
  return {
    protocol: 'git+ssh:',
    slashes: true,
    auth: matched[1],
    host: matched[2],
    port: null,
    hostname: matched[2],
    hash: matched[4],
    search: null,
    query: null,
    pathname: '/' + matched[3],
    path: '/' + matched[3],
    href: 'git+ssh://' + matched[1] + '@' + matched[2] +
          '/' + matched[3] + (matched[4] || '')
  }
}
