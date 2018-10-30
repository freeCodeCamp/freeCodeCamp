var createHash = require('crypto').createHash;

function get_header(header, credentials, opts) {
  var type = header.split(' ')[0],
      user = credentials[0],
      pass = credentials[1];

  if (type == 'Digest') {
    return digest.generate(header, user, pass, opts.method, opts.path);
  } else if (type == 'Basic') {
    return basic(user, pass);
  }
}

////////////////////
// basic

function md5(string) {
  return createHash('md5').update(string).digest('hex');
}

function basic(user, pass) {
  var str  = typeof pass == 'undefined' ? user : [user, pass].join(':');
  return 'Basic ' + new Buffer(str).toString('base64');
}

////////////////////
// digest
// logic inspired from https://github.com/simme/node-http-digest-client

var digest = {};

digest.parse_header = function(header) {
  var challenge = {},
      matches   = header.match(/([a-z0-9_-]+)="?([a-z0-9=\/\.@\s-]+)"?/gi);

  for (var i = 0, l = matches.length; i < l; i++) {
    var parts = matches[i].split('='),
        key   = parts.shift(),
        val   = parts.join('=').replace(/^"/, '').replace(/"$/, '');

    challenge[key] = val;
  }

  return challenge;
}

digest.update_nc = function(nc) {
  var max = 99999999;
  nc++;

  if (nc > max)
    nc = 1;

  var padding = new Array(8).join('0') + '';
  nc = nc + '';
  return padding.substr(0, 8 - nc.length) + nc;
}

digest.generate = function(header, user, pass, method, path) {

  var nc        = 1,
      cnonce    = null,
      challenge = digest.parse_header(header);

  var ha1  = md5(user + ':' + challenge.realm + ':' + pass),
      ha2  = md5(method.toUpperCase() + ':' + path),
      resp = [ha1, challenge.nonce];

  if (typeof challenge.qop === 'string') {
    cnonce = md5(Math.random().toString(36)).substr(0, 8);
    nc     = digest.update_nc(nc);
    resp   = resp.concat(nc, cnonce);
  }

  resp = resp.concat(challenge.qop, ha2);

  var params = {
    uri      : path,
    realm    : challenge.realm,
    nonce    : challenge.nonce,
    username : user,
    response : md5(resp.join(':'))
  }

  if (challenge.qop) {
    params.qop = challenge.qop;
  }

  if (challenge.opaque) {
    params.opaque = challenge.opaque;
  }

  if (cnonce) {
    params.nc = nc;
    params.cnonce = cnonce;
  }

  header = []
  for (var k in params)
    header.push(k + '="' + params[k] + '"')

  return 'Digest ' + header.join(', ');
}

module.exports = {
  header : get_header,
  basic  : basic,
  digest : digest.generate
}
