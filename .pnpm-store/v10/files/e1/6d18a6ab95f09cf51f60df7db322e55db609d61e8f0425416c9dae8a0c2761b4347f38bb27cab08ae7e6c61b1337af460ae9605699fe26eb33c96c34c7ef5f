/*
 * Copyright Joyent, Inc. and other Node contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 * NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

'use strict';

var punycode = require('punycode/');

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

/*
 * define these here so at least they only have to be
 * compiled once on the first module load.
 */
var protocolPattern = /^([a-z0-9.+-]+:)/i,
  portPattern = /:[0-9]*$/,

  // Special case for a simple path URL
  simplePathPattern = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,

  /*
   * RFC 2396: characters reserved for delimiting URLs.
   * We actually just auto-escape these.
   */
  delims = [
    '<', '>', '"', '`', ' ', '\r', '\n', '\t'
  ],

  // RFC 2396: characters not allowed for various reasons.
  unwise = [
    '{', '}', '|', '\\', '^', '`'
  ].concat(delims),

  // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
  autoEscape = ['\''].concat(unwise),
  /*
   * Characters that are never ever allowed in a hostname.
   * Note that any invalid chars are also handled, but these
   * are the ones that are *expected* to be seen, so we fast-path
   * them.
   */
  nonHostChars = [
    '%', '/', '?', ';', '#'
  ].concat(autoEscape),
  hostEndingChars = [
    '/', '?', '#'
  ],
  hostnameMaxLen = 255,
  hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
  hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
  // protocols that can allow "unsafe" and "unwise" chars.
  unsafeProtocol = {
    javascript: true,
    'javascript:': true
  },
  // protocols that never have a hostname.
  hostlessProtocol = {
    javascript: true,
    'javascript:': true
  },
  // protocols that always contain a // bit.
  slashedProtocol = {
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
  },
  querystring = require('qs');

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && typeof url === 'object' && url instanceof Url) { return url; }

  var u = new Url();
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
  if (typeof url !== 'string') {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  /*
   * Copy chrome, IE, opera backslash-handling behavior.
   * Back slashes before the query string get converted to forward slashes
   * See: https://code.google.com/p/chromium/issues/detail?id=25916
   */
  var queryIndex = url.indexOf('?'),
    splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#',
    uSplit = url.split(splitter),
    slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  /*
   * trim before proceeding.
   * This is to support parse stuff like "  http://foo.com  \n"
   */
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  /*
   * figure out if it's got a host
   * user@server is *always* interpreted as a hostname, and url
   * resolution will treat //foo/bar as host=foo,path=bar because that's
   * how the browser resolves relative URLs.
   */
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@/]+@[^@/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] && (slashes || (proto && !slashedProtocol[proto]))) {

    /*
     * there's a hostname.
     * the first instance of /, ?, ;, or # ends the host.
     *
     * If there is an @ in the hostname, then non-host chars *are* allowed
     * to the left of the last @ sign, unless some host-ending character
     * comes *before* the @-sign.
     * URLs are obnoxious.
     *
     * ex:
     * http://a@b@c/ => user:a@b host:c
     * http://a@b?@c => user:a host:c path:/?@c
     */

    /*
     * v0.12 TODO(isaacs): This is not quite how Chrome does things.
     * Review our test case against browsers more comprehensively.
     */

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) { hostEnd = hec; }
    }

    /*
     * at this point, either we have an explicit point where the
     * auth portion cannot go past, or the last @ char is the decider.
     */
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      /*
       * atSign must be in auth portion.
       * http://a@b/c@d => host:b auth:a path:/c@d
       */
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    /*
     * Now we have a portion which is definitely the auth.
     * Pull that off.
     */
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) { hostEnd = hec; }
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1) { hostEnd = rest.length; }

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    /*
     * we've indicated that there is a hostname,
     * so even if it's empty, it has to be present.
     */
    this.hostname = this.hostname || '';

    /*
     * if hostname begins with [ and ends with ]
     * assume that it's an IPv6 address.
     */
    var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) { continue; }
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              /*
               * we replace non-ASCII char with a temporary placeholder
               * we need this to make sure size of hostname is not
               * broken by replacing non-ASCII by nothing
               */
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      /*
       * IDNA Support: Returns a punycoded representation of "domain".
       * It only converts parts of the domain name that
       * have non-ASCII characters, i.e. it doesn't matter if
       * you call it with a domain that already is ASCII-only.
       */
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    /*
     * strip [ and ] from the hostname
     * the host field still retains them, though
     */
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  /*
   * now rest is set to the post-host stuff.
   * chop off any delim chars.
   */
  if (!unsafeProtocol[lowerProto]) {

    /*
     * First, make 100% sure that any "autoEscape" chars get
     * escaped, even if encodeURIComponent doesn't think they
     * need to be.
     */
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1) { continue; }
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }

  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) { this.pathname = rest; }
  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  // to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  /*
   * ensure it's an object, and not a string url.
   * If it's an obj, this is a no-op.
   * this way, you can call url_format() on strings
   * to clean up potentially wonky urls.
   */
  if (typeof obj === 'string') { obj = urlParse(obj); }
  if (!(obj instanceof Url)) { return Url.prototype.format.call(obj); }
  return obj.format();
}

Url.prototype.format = function () {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
    pathname = this.pathname || '',
    hash = this.hash || '',
    host = false,
    query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query && typeof this.query === 'object' && Object.keys(this.query).length) {
    query = querystring.stringify(this.query, {
      arrayFormat: 'repeat',
      addQueryPrefix: false
    });
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') { protocol += ':'; }

  /*
   * only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
   * unless they had them to begin with.
   */
  if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') { pathname = '/' + pathname; }
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') { hash = '#' + hash; }
  if (search && search.charAt(0) !== '?') { search = '?' + search; }

  pathname = pathname.replace(/[?#]/g, function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function (relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) { return relative; }
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function (relative) {
  if (typeof relative === 'string') {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  /*
   * hash is always overridden, no matter what.
   * even href="" will remove it.
   */
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol') { result[rkey] = relative[rkey]; }
    }

    // urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
      result.pathname = '/';
      result.path = result.pathname;
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    /*
     * if it's a known url protocol, then changing
     * the protocol does weird things
     * first, if it's not file:, then we MUST have a host,
     * and if there was a path
     * to begin with, then we MUST have a path.
     * if it is file:, then the host is dropped,
     * because that's known to be hostless.
     * anything else is assumed to be absolute.
     */
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift())) { }
      if (!relative.host) { relative.host = ''; }
      if (!relative.hostname) { relative.hostname = ''; }
      if (relPath[0] !== '') { relPath.unshift(''); }
      if (relPath.length < 2) { relPath.unshift(''); }
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
    isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
    mustEndAbs = isRelAbs || isSourceAbs || (result.host && relative.pathname),
    removeAllDots = mustEndAbs,
    srcPath = result.pathname && result.pathname.split('/') || [],
    relPath = relative.pathname && relative.pathname.split('/') || [],
    psychotic = result.protocol && !slashedProtocol[result.protocol];

  /*
   * if the url is a non-slashed url, then relative
   * links like ../.. should be able
   * to crawl up to the hostname, as well.  This is strange.
   * result.protocol has already been set by now.
   * Later on, put the first path part into the host field.
   */
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') { srcPath[0] = result.host; } else { srcPath.unshift(result.host); }
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') { relPath[0] = relative.host; } else { relPath.unshift(relative.host); }
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = relative.host || relative.host === '' ? relative.host : result.host;
    result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    /*
     * it's relative
     * throw away the existing file, and take the new path instead.
     */
    if (!srcPath) { srcPath = []; }
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (relative.search != null) {
    /*
     * just pull out the search.
     * like href='?foo'.
     * Put this after the other two cases because it simplifies the booleans
     */
    if (psychotic) {
      result.host = srcPath.shift();
      result.hostname = result.host;
      /*
       * occationaly the auth can get stuck only in host
       * this especially happens in cases like
       * url.resolveObject('mailto:local1@domain1', 'local2@domain2')
       */
      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.hostname = authInHost.shift();
        result.host = result.hostname;
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    // to support http.request
    if (result.pathname !== null || result.search !== null) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    /*
     * no path at all.  easy.
     * we've already handled the other stuff above.
     */
    result.pathname = null;
    // to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  /*
   * if a url ENDs in . or .., then it must get a trailing slash.
   * however, if it ends in anything else non-slashy,
   * then it must NOT get a trailing slash.
   */
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === '';

  /*
   * strip single dots, resolve double dots to parent dir
   * if the path tries to go above the root, `up` ends up > 0
   */
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' || (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
    result.host = result.hostname;
    /*
     * occationaly the auth can get stuck only in host
     * this especially happens in cases like
     * url.resolveObject('mailto:local1@domain1', 'local2@domain2')
     */
    var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.hostname = authInHost.shift();
      result.host = result.hostname;
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (srcPath.length > 0) {
    result.pathname = srcPath.join('/');
  } else {
    result.pathname = null;
    result.path = null;
  }

  // to support request.http
  if (result.pathname !== null || result.search !== null) {
    result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function () {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) { this.hostname = host; }
};

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;
