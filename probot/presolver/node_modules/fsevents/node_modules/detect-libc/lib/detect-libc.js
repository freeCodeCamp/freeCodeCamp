'use strict';

var platform = require('os').platform();
var spawnSync = require('child_process').spawnSync;
var readdirSync = require('fs').readdirSync;

var GLIBC = 'glibc';
var MUSL = 'musl';

var spawnOptions = {
  encoding: 'utf8',
  env: process.env
};

if (!spawnSync) {
  spawnSync = function () {
    return { status: 126, stdout: '', stderr: '' };
  };
}

function contains (needle) {
  return function (haystack) {
    return haystack.indexOf(needle) !== -1;
  };
}

function versionFromMuslLdd (out) {
  return out.split(/[\r\n]+/)[1].trim().split(/\s/)[1];
}

function safeReaddirSync (path) {
  try {
    return readdirSync(path);
  } catch (e) {}
  return [];
}

var family = '';
var version = '';
var method = '';

if (platform === 'linux') {
  // Try getconf
  var glibc = spawnSync('getconf', ['GNU_LIBC_VERSION'], spawnOptions);
  if (glibc.status === 0) {
    family = GLIBC;
    version = glibc.stdout.trim().split(' ')[1];
    method = 'getconf';
  } else {
    // Try ldd
    var ldd = spawnSync('ldd', ['--version'], spawnOptions);
    if (ldd.status === 0 && ldd.stdout.indexOf(MUSL) !== -1) {
      family = MUSL;
      version = versionFromMuslLdd(ldd.stdout);
      method = 'ldd';
    } else if (ldd.status === 1 && ldd.stderr.indexOf(MUSL) !== -1) {
      family = MUSL;
      version = versionFromMuslLdd(ldd.stderr);
      method = 'ldd';
    } else {
      // Try filesystem (family only)
      var lib = safeReaddirSync('/lib');
      if (lib.some(contains('-linux-gnu'))) {
        family = GLIBC;
        method = 'filesystem';
      } else if (lib.some(contains('libc.musl-'))) {
        family = MUSL;
        method = 'filesystem';
      } else if (lib.some(contains('ld-musl-'))) {
        family = MUSL;
        method = 'filesystem';
      } else {
        var usrSbin = safeReaddirSync('/usr/sbin');
        if (usrSbin.some(contains('glibc'))) {
          family = GLIBC;
          method = 'filesystem';
        }
      }
    }
  }
}

var isNonGlibcLinux = (family !== '' && family !== GLIBC);

module.exports = {
  GLIBC: GLIBC,
  MUSL: MUSL,
  family: family,
  version: version,
  method: method,
  isNonGlibcLinux: isNonGlibcLinux
};
