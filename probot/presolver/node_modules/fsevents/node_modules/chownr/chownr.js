module.exports = chownr
chownr.sync = chownrSync

var fs = require("fs")
, path = require("path")

function chownr (p, uid, gid, cb) {
  fs.readdir(p, function (er, children) {
    // any error other than ENOTDIR means it's not readable, or
    // doesn't exist.  give up.
    if (er && er.code !== "ENOTDIR") return cb(er)
    if (er || !children.length) return fs.chown(p, uid, gid, cb)

    var len = children.length
    , errState = null
    children.forEach(function (child) {
      var pathChild = path.resolve(p, child);
      fs.lstat(pathChild, function(er, stats) {
        if (er)
          return cb(er)
        if (!stats.isSymbolicLink())
          chownr(pathChild, uid, gid, then)
        else
          then()
        })
    })
    function then (er) {
      if (errState) return
      if (er) return cb(errState = er)
      if (-- len === 0) return fs.chown(p, uid, gid, cb)
    }
  })
}

function chownrSync (p, uid, gid) {
  var children
  try {
    children = fs.readdirSync(p)
  } catch (er) {
    if (er && er.code === "ENOTDIR") return fs.chownSync(p, uid, gid)
    throw er
  }
  if (!children.length) return fs.chownSync(p, uid, gid)

  children.forEach(function (child) {
    var pathChild = path.resolve(p, child)
    var stats = fs.lstatSync(pathChild)
    if (!stats.isSymbolicLink())
      chownrSync(pathChild, uid, gid)
  })
  return fs.chownSync(p, uid, gid)
}
