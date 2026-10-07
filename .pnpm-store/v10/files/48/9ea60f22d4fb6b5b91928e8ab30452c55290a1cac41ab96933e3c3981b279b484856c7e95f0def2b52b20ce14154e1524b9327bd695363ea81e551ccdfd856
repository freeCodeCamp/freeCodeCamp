var chownr = require('chownr')
var tar = require('tar-stream')
var pump = require('pump')
var mkdirp = require('mkdirp-classic')
var fs = require('fs')
var path = require('path')
var os = require('os')

var win32 = os.platform() === 'win32'

var noop = function () {}

var echo = function (name) {
  return name
}

var normalize = !win32 ? echo : function (name) {
  return name.replace(/\\/g, '/').replace(/[:?<>|]/g, '_')
}

var statAll = function (fs, stat, cwd, ignore, entries, sort) {
  var queue = entries || ['.']

  return function loop (callback) {
    if (!queue.length) return callback()
    var next = queue.shift()
    var nextAbs = path.join(cwd, next)

    stat.call(fs, nextAbs, function (err, stat) {
      if (err) return callback(err)

      if (!stat.isDirectory()) return callback(null, next, stat)

      fs.readdir(nextAbs, function (err, files) {
        if (err) return callback(err)

        if (sort) files.sort()
        for (var i = 0; i < files.length; i++) {
          if (!ignore(path.join(cwd, next, files[i]))) queue.push(path.join(next, files[i]))
        }

        callback(null, next, stat)
      })
    })
  }
}

var strip = function (map, level) {
  return function (header) {
    header.name = header.name.split('/').slice(level).join('/')

    var linkname = header.linkname
    if (linkname && (header.type === 'link' || path.isAbsolute(linkname))) {
      header.linkname = linkname.split('/').slice(level).join('/')
    }

    return map(header)
  }
}

exports.pack = function (cwd, opts) {
  if (!cwd) cwd = '.'
  if (!opts) opts = {}

  var xfs = opts.fs || fs
  var ignore = opts.ignore || opts.filter || noop
  var map = opts.map || noop
  var mapStream = opts.mapStream || echo
  var statNext = statAll(xfs, opts.dereference ? xfs.stat : xfs.lstat, cwd, ignore, opts.entries, opts.sort)
  var strict = opts.strict !== false
  var umask = typeof opts.umask === 'number' ? ~opts.umask : ~processUmask()
  var dmode = typeof opts.dmode === 'number' ? opts.dmode : 0
  var fmode = typeof opts.fmode === 'number' ? opts.fmode : 0
  var pack = opts.pack || tar.pack()
  var finish = opts.finish || noop

  if (opts.strip) map = strip(map, opts.strip)

  if (opts.readable) {
    dmode |= parseInt(555, 8)
    fmode |= parseInt(444, 8)
  }
  if (opts.writable) {
    dmode |= parseInt(333, 8)
    fmode |= parseInt(222, 8)
  }

  var onsymlink = function (filename, header) {
    xfs.readlink(path.join(cwd, filename), function (err, linkname) {
      if (err) return pack.destroy(err)
      header.linkname = normalize(linkname)
      pack.entry(header, onnextentry)
    })
  }

  var onstat = function (err, filename, stat) {
    if (err) return pack.destroy(err)
    if (!filename) {
      if (opts.finalize !== false) pack.finalize()
      return finish(pack)
    }

    if (stat.isSocket()) return onnextentry() // tar does not support sockets...

    var header = {
      name: normalize(filename),
      mode: (stat.mode | (stat.isDirectory() ? dmode : fmode)) & umask,
      mtime: stat.mtime,
      size: stat.size,
      type: 'file',
      uid: stat.uid,
      gid: stat.gid
    }

    if (stat.isDirectory()) {
      header.size = 0
      header.type = 'directory'
      header = map(header) || header
      return pack.entry(header, onnextentry)
    }

    if (stat.isSymbolicLink()) {
      header.size = 0
      header.type = 'symlink'
      header = map(header) || header
      return onsymlink(filename, header)
    }

    // TODO: add fifo etc...

    header = map(header) || header

    if (!stat.isFile()) {
      if (strict) return pack.destroy(new Error('unsupported type for ' + filename))
      return onnextentry()
    }

    var entry = pack.entry(header, onnextentry)
    if (!entry) return

    var rs = mapStream(xfs.createReadStream(path.join(cwd, filename), { start: 0, end: header.size > 0 ? header.size - 1 : header.size }), header)

    rs.on('error', function (err) { // always forward errors on destroy
      entry.destroy(err)
    })

    pump(rs, entry)
  }

  var onnextentry = function (err) {
    if (err) return pack.destroy(err)
    statNext(onstat)
  }

  onnextentry()

  return pack
}

var head = function (list) {
  return list.length ? list[list.length - 1] : null
}

var processGetuid = function () {
  return process.getuid ? process.getuid() : -1
}

var processUmask = function () {
  return process.umask ? process.umask() : 0
}

exports.extract = function (cwd, opts) {
  if (!cwd) cwd = '.'
  if (!opts) opts = {}

  var xfs = opts.fs || fs
  var ignore = opts.ignore || opts.filter || noop
  var map = opts.map || noop
  var mapStream = opts.mapStream || echo
  var own = opts.chown !== false && !win32 && processGetuid() === 0
  var extract = opts.extract || tar.extract()
  var stack = []
  var now = new Date()
  var umask = typeof opts.umask === 'number' ? ~opts.umask : ~processUmask()
  var dmode = typeof opts.dmode === 'number' ? opts.dmode : 0
  var fmode = typeof opts.fmode === 'number' ? opts.fmode : 0
  var strict = opts.strict !== false

  if (opts.strip) map = strip(map, opts.strip)

  if (opts.readable) {
    dmode |= parseInt(555, 8)
    fmode |= parseInt(444, 8)
  }
  if (opts.writable) {
    dmode |= parseInt(333, 8)
    fmode |= parseInt(222, 8)
  }

  var utimesParent = function (name, cb) { // we just set the mtime on the parent dir again everytime we write an entry
    var top
    while ((top = head(stack)) && name.slice(0, top[0].length) !== top[0]) stack.pop()
    if (!top) return cb()
    xfs.utimes(top[0], now, top[1], cb)
  }

  var utimes = function (name, header, cb) {
    if (opts.utimes === false) return cb()

    if (header.type === 'directory') return xfs.utimes(name, now, header.mtime, cb)
    if (header.type === 'symlink') return utimesParent(name, cb) // TODO: how to set mtime on link?

    xfs.utimes(name, now, header.mtime, function (err) {
      if (err) return cb(err)
      utimesParent(name, cb)
    })
  }

  var chperm = function (name, header, cb) {
    var link = header.type === 'symlink'

    /* eslint-disable node/no-deprecated-api */
    var chmod = link ? xfs.lchmod : xfs.chmod
    var chown = link ? xfs.lchown : xfs.chown
    /* eslint-enable node/no-deprecated-api */

    if (!chmod) return cb()

    var mode = (header.mode | (header.type === 'directory' ? dmode : fmode)) & umask

    if (chown && own) chown.call(xfs, name, header.uid, header.gid, onchown)
    else onchown(null)

    function onchown (err) {
      if (err) return cb(err)
      if (!chmod) return cb()
      chmod.call(xfs, name, mode, cb)
    }
  }

  extract.on('entry', function (header, stream, next) {
    header = map(header) || header
    header.name = normalize(header.name)
    var name = path.join(cwd, path.join('/', header.name))

    if (ignore(name, header)) {
      stream.resume()
      return next()
    }

    var stat = function (err) {
      if (err) return next(err)
      utimes(name, header, function (err) {
        if (err) return next(err)
        if (win32) return next()
        chperm(name, header, next)
      })
    }

    var onsymlink = function () {
      if (win32) return next() // skip symlinks on win for now before it can be tested
      xfs.unlink(name, function () {
        var dst = path.resolve(path.dirname(name), header.linkname)
        if (!inCwd(dst, cwd)) return next(new Error(name + ' is not a valid symlink'))

        xfs.symlink(header.linkname, name, stat)
      })
    }

    var onlink = function () {
      if (win32) return next() // skip links on win for now before it can be tested
      xfs.unlink(name, function () {
        var srcpath = path.join(cwd, path.join('/', header.linkname))

        xfs.realpath(srcpath, function (err, dst) {
          if (err || !inCwd(dst, cwd)) return next(new Error(name + ' is not a valid hardlink'))

          xfs.link(dst, name, function (err) {
            if (err && err.code === 'EPERM' && opts.hardlinkAsFilesFallback) {
              stream = xfs.createReadStream(srcpath)
              return onfile()
            }

            stat(err)
          })
        })
      })
    }

    var onfile = function () {
      var ws = xfs.createWriteStream(name)
      var rs = mapStream(stream, header)

      ws.on('error', function (err) { // always forward errors on destroy
        rs.destroy(err)
      })

      pump(rs, ws, function (err) {
        if (err) return next(err)
        ws.on('close', stat)
      })
    }

    if (header.type === 'directory') {
      stack.push([name, header.mtime])
      return mkdirfix(name, {
        fs: xfs, own: own, uid: header.uid, gid: header.gid
      }, stat)
    }

    var dir = path.dirname(name)

    validate(xfs, dir, path.join(cwd, '.'), function (err, valid) {
      if (err) return next(err)
      if (!valid) return next(new Error(dir + ' is not a valid path'))

      mkdirfix(dir, {
        fs: xfs, own: own, uid: header.uid, gid: header.gid
      }, function (err) {
        if (err) return next(err)

        switch (header.type) {
          case 'file': return onfile()
          case 'link': return onlink()
          case 'symlink': return onsymlink()
        }

        if (strict) return next(new Error('unsupported type for ' + name + ' (' + header.type + ')'))

        stream.resume()
        next()
      })
    })
  })

  if (opts.finish) extract.on('finish', opts.finish)

  return extract
}

function validate (fs, name, root, cb) {
  if (name === root) return cb(null, true)
  fs.lstat(name, function (err, st) {
    if (err && err.code !== 'ENOENT') return cb(err)
    if (err || st.isDirectory()) return validate(fs, path.join(name, '..'), root, cb)
    cb(null, false)
  })
}

function mkdirfix (name, opts, cb) {
  mkdirp(name, { fs: opts.fs }, function (err, made) {
    if (!err && made && opts.own) {
      chownr(made, opts.uid, opts.gid, cb)
    } else {
      cb(err)
    }
  })
}

function inCwd (dst, cwd) {
  cwd = path.resolve(cwd)
  return cwd === dst || dst.startsWith(cwd + path.sep)
}
