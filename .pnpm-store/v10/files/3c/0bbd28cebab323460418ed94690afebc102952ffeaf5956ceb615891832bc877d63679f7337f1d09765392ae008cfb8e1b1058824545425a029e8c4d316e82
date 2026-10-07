// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

//
// Changes from joyent/node:
//
// 1. No leading slash in paths,
//    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
//
// 2. Backslashes are not replaced with slashes,
//    so `http:\\example.org\` is treated like a relative path
//
// 3. Trailing colon is treated like a part of the path,
//    i.e. in `http://example.org:foo` pathname is `:foo`
//
// 4. Nothing is URL-encoded in the resulting object,
//    (in joyent/node some chars in auth and paths are encoded)
//
// 5. `url.parse()` does not have `parseQueryString` argument
//
// 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
//    which can be constructed using other parts of the url.
//

function Url () {
  this.protocol = null
  this.slashes = null
  this.auth = null
  this.port = null
  this.hostname = null
  this.hash = null
  this.search = null
  this.pathname = null
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
const protocolPattern = /^([a-z0-9.+-]+:)/i
const portPattern = /:[0-9]*$/

// Special case for a simple path URL
/* eslint-disable-next-line no-useless-escape */
const simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/

// RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
const delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t']

// RFC 2396: characters not allowed for various reasons.
const unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims)

// Allowed by RFCs, but cause of XSS attacks.  Always escape these.
const autoEscape = ['\''].concat(unwise)
// Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
const nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape)
const hostEndingChars = ['/', '?', '#']
const hostnameMaxLen = 255
const hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/
const hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
// protocols that can allow "unsafe" and "unwise" chars.
// protocols that never have a hostname.
const hostlessProtocol = {
  javascript: true,
  'javascript:': true
}
// protocols that always contain a // bit.
const slashedProtocol = {
  http: true,
  https: true,
  ftp: true,
  gopher: true,
  file: true,
  'http:': true,
  'https:': true,
  'ftp:': true,
  'gopher:': true,
  'file:': true
}

function urlParse (url, slashesDenoteHost) {
  if (url && url instanceof Url) return url

  const u = new Url()
  u.parse(url, slashesDenoteHost)
  return u
}

Url.prototype.parse = function (url, slashesDenoteHost) {
  let lowerProto, hec, slashes
  let rest = url

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim()

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    const simplePath = simplePathPattern.exec(rest)
    if (simplePath) {
      this.pathname = simplePath[1]
      if (simplePath[2]) {
        this.search = simplePath[2]
      }
      return this
    }
  }

  let proto = protocolPattern.exec(rest)
  if (proto) {
    proto = proto[0]
    lowerProto = proto.toLowerCase()
    this.protocol = proto
    rest = rest.substr(proto.length)
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  /* eslint-disable-next-line no-useless-escape */
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    slashes = rest.substr(0, 2) === '//'
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2)
      this.slashes = true
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {
    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    let hostEnd = -1
    for (let i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i])
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec
      }
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    let auth, atSign
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@')
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd)
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign)
      rest = rest.slice(atSign + 1)
      this.auth = auth
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1
    for (let i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i])
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec
      }
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1) {
      hostEnd = rest.length
    }

    if (rest[hostEnd - 1] === ':') { hostEnd-- }
    const host = rest.slice(0, hostEnd)
    rest = rest.slice(hostEnd)

    // pull out port.
    this.parseHost(host)

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || ''

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    const ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']'

    // validate a little.
    if (!ipv6Hostname) {
      const hostparts = this.hostname.split(/\./)
      for (let i = 0, l = hostparts.length; i < l; i++) {
        const part = hostparts[i]
        if (!part) { continue }
        if (!part.match(hostnamePartPattern)) {
          let newpart = ''
          for (let j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x'
            } else {
              newpart += part[j]
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            const validParts = hostparts.slice(0, i)
            const notHost = hostparts.slice(i + 1)
            const bit = part.match(hostnamePartStart)
            if (bit) {
              validParts.push(bit[1])
              notHost.unshift(bit[2])
            }
            if (notHost.length) {
              rest = notHost.join('.') + rest
            }
            this.hostname = validParts.join('.')
            break
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = ''
    }

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2)
    }
  }

  // chop off from the tail first.
  const hash = rest.indexOf('#')
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash)
    rest = rest.slice(0, hash)
  }
  const qm = rest.indexOf('?')
  if (qm !== -1) {
    this.search = rest.substr(qm)
    rest = rest.slice(0, qm)
  }
  if (rest) { this.pathname = rest }
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = ''
  }

  return this
}

Url.prototype.parseHost = function (host) {
  let port = portPattern.exec(host)
  if (port) {
    port = port[0]
    if (port !== ':') {
      this.port = port.substr(1)
    }
    host = host.substr(0, host.length - port.length)
  }
  if (host) { this.hostname = host }
}

export default urlParse
