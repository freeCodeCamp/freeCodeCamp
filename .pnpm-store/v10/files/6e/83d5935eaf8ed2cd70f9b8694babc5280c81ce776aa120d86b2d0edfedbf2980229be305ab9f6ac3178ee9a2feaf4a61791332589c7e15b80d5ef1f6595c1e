"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;
var _assertString = _interopRequireDefault(require("./util/assertString"));
var _checkHost = _interopRequireDefault(require("./util/checkHost"));
var _includesString = _interopRequireDefault(require("./util/includesString"));
var _isFQDN = _interopRequireDefault(require("./isFQDN"));
var _isIP = _interopRequireDefault(require("./isIP"));
var _merge = _interopRequireDefault(require("./util/merge"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/*
options for isURL method

protocols - valid protocols can be modified with this option.
require_tld - If set to false isURL will not check if the URL's host includes a top-level domain.
require_protocol - if set to true isURL will return false if protocol is not present in the URL.
require_host - if set to false isURL will not check if host is present in the URL.
require_port - if set to true isURL will check if port is present in the URL.
require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option.
allow_underscores - if set to true, the validator will allow underscores in the URL.
host_whitelist - if set to an array of strings or regexp, and the domain matches none of the strings
                 defined in it, the validation fails.
host_blacklist - if set to an array of strings or regexp, and the domain matches any of the strings
                 defined in it, the validation fails.
allow_trailing_dot - if set to true, the validator will allow the domain to end with
                     a `.` character.
allow_protocol_relative_urls - if set to true protocol relative URLs will be allowed.
allow_fragments - if set to false isURL will return false if fragments are present.
allow_query_components - if set to false isURL will return false if query components are present.
disallow_auth - if set to true, the validator will fail if the URL contains an authentication
                component, e.g. `http://username:password@example.com`
validate_length - if set to false isURL will skip string length validation. `max_allowed_length`
                  will be ignored if this is set as `false`.
max_allowed_length - if set, isURL will not allow URLs longer than the specified value (default is
                     2084 that IE maximum URL length).

*/

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_port: false,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false,
  allow_fragments: true,
  allow_query_components: true,
  validate_length: true,
  max_allowed_length: 2084
};
var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
function isURL(url, options) {
  (0, _assertString.default)(url);
  if (!url || /[\s<>]/.test(url)) {
    return false;
  }
  if (url.indexOf('mailto:') === 0) {
    return false;
  }
  options = (0, _merge.default)(options, default_url_options);
  if (options.validate_length && url.length > options.max_allowed_length) {
    return false;
  }
  if (!options.allow_fragments && (0, _includesString.default)(url, '#')) {
    return false;
  }
  if (!options.allow_query_components && ((0, _includesString.default)(url, '?') || (0, _includesString.default)(url, '&'))) {
    return false;
  }
  var protocol, auth, host, hostname, port, port_str, split, ipv6;
  split = url.split('#');
  url = split.shift();
  split = url.split('?');
  url = split.shift();

  // Replaced the 'split("://")' logic with a regex to match the protocol.
  // This correctly identifies schemes like `javascript:` which don't use `//`.
  // However, we need to be careful not to confuse authentication credentials (user:password@host)
  // with protocols. A colon before an @ symbol might be part of auth, not a protocol separator.
  var protocol_match = url.match(/^([a-z][a-z0-9+\-.]*):/i);
  var had_explicit_protocol = false;
  var cleanUpProtocol = function cleanUpProtocol(potential_protocol) {
    had_explicit_protocol = true;
    protocol = potential_protocol.toLowerCase();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      // The identified protocol is not in the allowed list.
      return false;
    }

    // Remove the protocol from the URL string.
    return url.substring(protocol_match[0].length);
  };
  if (protocol_match) {
    var potential_protocol = protocol_match[1];
    var after_colon = url.substring(protocol_match[0].length);

    // Check if what follows looks like authentication credentials (user:password@host)
    // rather than a protocol. This happens when:
    // 1. There's no `//` after the colon (protocols like `http://` have this)
    // 2. There's an `@` symbol before any `/`
    // 3. The part before `@` contains only valid auth characters (alphanumeric, -, _, ., %, :)
    var starts_with_slashes = after_colon.slice(0, 2) === '//';
    if (!starts_with_slashes) {
      var first_slash_position = after_colon.indexOf('/');
      var before_slash = first_slash_position === -1 ? after_colon : after_colon.substring(0, first_slash_position);
      var at_position = before_slash.indexOf('@');
      if (at_position !== -1) {
        var before_at = before_slash.substring(0, at_position);
        var valid_auth_regex = /^[a-zA-Z0-9\-_.%:]*$/;
        var is_valid_auth = valid_auth_regex.test(before_at);

        // Check if this contains URL-encoded content that could be malicious
        // For example: javascript:%61%6c%65%72%74%28%31%29@example.com
        // The encoded part decodes to: alert(1)
        var has_encoded_content = /%[0-9a-fA-F]{2}/.test(before_at);
        if (is_valid_auth && !has_encoded_content) {
          // This looks like authentication (e.g., user:password@host), not a protocol
          if (options.require_protocol) {
            return false;
          }

          // Don't consume the colon; let the auth parsing handle it later
        } else {
          // This looks like a malicious protocol (e.g., javascript:alert();@host)
          // or URL-encoded protocol handler (e.g., javascript:%61%6c%65%72%74%28%31%29@host)
          url = cleanUpProtocol(potential_protocol);
          if (url === false) {
            return false;
          }
        }
      } else {
        // No @ symbol found. Check if this could be a port number instead of a protocol.
        // If what's after the colon is numeric (or starts with a digit and contains only
        // valid port characters until a path separator), it's likely hostname:port, not a protocol.
        var looks_like_port = /^[0-9]/.test(after_colon);
        if (looks_like_port) {
          // This looks like hostname:port, not a protocol
          if (options.require_protocol) {
            return false;
          }
          // Don't consume anything; let it be parsed as hostname:port
        } else {
          // This is definitely a protocol
          url = cleanUpProtocol(potential_protocol);
          if (url === false) {
            return false;
          }
        }
      }
    } else {
      // Starts with '//', this is definitely a protocol like http://
      url = cleanUpProtocol(potential_protocol);
      if (url === false) {
        return false;
      }
    }
  } else if (options.require_protocol) {
    return false;
  }

  // Handle leading '//' only as protocol-relative when there was NO explicit protocol.
  // If there was an explicit protocol, '//' is the normal separator
  // and should be stripped unconditionally.
  if (url.slice(0, 2) === '//') {
    if (!had_explicit_protocol && !options.allow_protocol_relative_urls) {
      return false;
    }
    url = url.slice(2);
  }
  if (url === '') {
    return false;
  }
  split = url.split('/');
  url = split.shift();
  if (url === '' && !options.require_host) {
    return true;
  }
  split = url.split('@');
  if (split.length > 1) {
    if (options.disallow_auth) {
      return false;
    }
    if (split[0] === '') {
      return false;
    }
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
    var _auth$split = auth.split(':'),
      _auth$split2 = _slicedToArray(_auth$split, 2),
      user = _auth$split2[0],
      password = _auth$split2[1];
    if (user === '' && password === '') {
      return false;
    }
  }
  hostname = split.join('@');
  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }
  if (port_str !== null && port_str.length > 0) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  } else if (options.require_port) {
    return false;
  }
  if (options.host_whitelist) {
    return (0, _checkHost.default)(host, options.host_whitelist);
  }
  if (host === '' && !options.require_host) {
    return true;
  }
  if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
    return false;
  }
  host = host || ipv6;
  if (options.host_blacklist && (0, _checkHost.default)(host, options.host_blacklist)) {
    return false;
  }
  return true;
}
module.exports = exports.default;
module.exports.default = exports.default;