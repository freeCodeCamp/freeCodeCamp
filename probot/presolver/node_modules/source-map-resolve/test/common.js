// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

function u(url) {
  return "code\n/*# sourceMappingURL=" + url + " */"
}

function read(x) {
  return function() {
    return x
  }
}

function Throws(x) {
  throw new Error(x)
}

function identity(x) {
  return x
}

module.exports = {
  u:        u,
  read:     read,
  Throws:   Throws,
  identity: identity
}
