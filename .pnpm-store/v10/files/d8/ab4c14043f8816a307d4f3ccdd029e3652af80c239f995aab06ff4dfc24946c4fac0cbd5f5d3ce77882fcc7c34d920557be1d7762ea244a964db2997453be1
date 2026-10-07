const FIFO = require('fast-fifo')
const EventEmitter = require('bare-events')
const path = require('bare-path')
const { isURL, fileURLToPath } = require('bare-url')
const { Readable, Writable } = require('bare-stream')
const binding = require('./binding')
const constants = require('./lib/constants')
const FileError = require('./lib/errors')

const isWindows = Bare.platform === 'win32'

exports.constants = constants

class FileRequest {
  static borrow() {
    if (this._free.length > 0) return this._free.pop()
    return new FileRequest()
  }

  static return(req) {
    if (this._free.length < 32) this._free.push(req.reset())
    else req.destroy()
  }

  constructor() {
    this._reset()
    this._handle = binding.requestInit(this, this._onresult)
  }

  get handle() {
    return this._handle
  }

  retain(value) {
    this._retain = value // Tie the lifetime of `value` to the lifetime of `this`
  }

  reset() {
    if (this._handle === null) return this

    binding.requestReset(this._handle)

    this._reset()

    return this
  }

  destroy() {
    if (this._handle === null) return this

    binding.requestDestroy(this._handle)

    this._reset()
    this._handle = null

    return this
  }

  then(resolve, reject) {
    return this._promise.then(resolve, reject)
  }

  return() {
    if (this._handle === null) return this

    FileRequest.return(this)

    return this
  }

  _reset() {
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve
      this._reject = reject
    })
    this._retain = null
  }

  _onresult(err, status) {
    if (err) this._reject(err)
    else this._resolve(status)
  }
}

FileRequest._free = []

function ok(result, cb) {
  if (typeof result === 'function') {
    cb = result
    result = undefined
  }

  if (cb) cb(null, result)
  else return result
}

function fail(err, cb) {
  if (cb) cb(err)
  else throw err
}

function done(err, result, cb) {
  if (typeof result === 'function') {
    cb = result
    result = undefined
  }

  if (err) fail(err, cb)
  else return ok(result, cb)
}

async function open(filepath, flags = 'r', mode = 0o666, cb) {
  if (typeof flags === 'function') {
    cb = flags
    flags = 'r'
    mode = 0o666
  } else if (typeof mode === 'function') {
    cb = mode
    mode = 0o666
  }

  if (typeof flags === 'string') flags = toFlags(flags)
  if (typeof mode === 'string') mode = toMode(mode)

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let fd
  let err = null
  try {
    binding.open(req.handle, filepath, flags, mode)

    fd = await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'open',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, fd, cb)
}

function openSync(filepath, flags = 'r', mode = 0o666) {
  if (typeof flags === 'string') flags = toFlags(flags)
  if (typeof mode === 'string') mode = toMode(mode)

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    return binding.openSync(req.handle, filepath, flags, mode)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'open',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function close(fd, cb) {
  const req = FileRequest.borrow()

  let err = null
  try {
    binding.close(req.handle, fd)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'close', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function closeSync(fd) {
  const req = FileRequest.borrow()

  try {
    binding.closeSync(req.handle, fd)
  } catch (e) {
    throw new FileError(e.message, { operation: 'close', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function access(filepath, mode = constants.F_OK, cb) {
  if (typeof mode === 'function') {
    cb = mode
    mode = constants.F_OK
  }

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.access(req.handle, filepath, mode)

    await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'access',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function accessSync(filepath, mode = constants.F_OK) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.accessSync(req.handle, filepath, mode)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'access',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function exists(filepath, cb) {
  let ok = true
  try {
    await access(filepath)
  } catch {
    ok = false
  }

  return done(null, ok, cb)
}

function existsSync(filepath) {
  try {
    accessSync(filepath)
  } catch {
    return false
  }

  return true
}

async function read(fd, buffer, offset = 0, len = buffer.byteLength - offset, pos = -1, cb) {
  if (typeof offset === 'function') {
    cb = offset
    offset = 0
    len = buffer.byteLength
    pos = -1
  } else if (typeof len === 'function') {
    cb = len
    len = buffer.byteLength - offset
    pos = -1
  } else if (typeof pos === 'function') {
    cb = pos
    pos = -1
  }

  if (typeof pos !== 'number') pos = -1

  const req = FileRequest.borrow()

  let bytes
  let err = null
  try {
    binding.read(req.handle, fd, buffer, offset, len, pos)

    bytes = await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'read', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, bytes, cb)
}

function readSync(fd, buffer, offset = 0, len = buffer.byteLength - offset, pos = -1) {
  const req = FileRequest.borrow()

  try {
    return binding.readSync(req.handle, fd, buffer, offset, len, pos)
  } catch (e) {
    throw new FileError(e.message, { operation: 'read', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function readv(fd, buffers, pos = -1, cb) {
  if (typeof pos === 'function') {
    cb = pos
    pos = -1
  }

  if (typeof pos !== 'number') pos = -1

  const req = FileRequest.borrow()

  let bytes
  let err = null
  try {
    binding.readv(req.handle, fd, buffers, pos)

    bytes = await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'readv', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, bytes, cb)
}

function readvSync(fd, buffers, pos = -1) {
  if (typeof pos !== 'number') pos = -1

  const req = FileRequest.borrow()

  try {
    return binding.readvSync(req.handle, fd, buffers, pos)
  } catch (e) {
    throw new FileError(e.message, { operation: 'readv', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function write(fd, data, offset, len, pos = -1, cb) {
  if (typeof data === 'string') {
    let encoding = len
    cb = pos
    pos = offset

    if (typeof pos === 'function') {
      cb = pos
      pos = -1
      encoding = 'utf8'
    } else if (typeof encoding === 'function') {
      cb = encoding
      encoding = 'utf8'
    }

    if (typeof pos === 'string') {
      encoding = pos
      pos = -1
    }

    data = Buffer.from(data, encoding)
    offset = 0
    len = data.byteLength
  } else if (typeof offset === 'function') {
    cb = offset
    offset = 0
    len = data.byteLength
    pos = -1
  } else if (typeof len === 'function') {
    cb = len
    len = data.byteLength - offset
    pos = -1
  } else if (typeof pos === 'function') {
    cb = pos
    pos = -1
  }

  if (typeof offset !== 'number') offset = 0
  if (typeof len !== 'number') len = data.byteLength - offset
  if (typeof pos !== 'number') pos = -1

  const req = FileRequest.borrow()

  let bytes
  let err = null
  try {
    binding.write(req.handle, fd, data, offset, len, pos)

    bytes = await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'write', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, bytes, cb)
}

function writeSync(fd, data, offset, len, pos = -1) {
  if (typeof data === 'string') {
    let encoding = len
    pos = offset

    if (typeof pos === 'string') {
      encoding = pos
      pos = -1
    }

    data = Buffer.from(data, encoding)
    offset = 0
    len = data.byteLength
  }

  if (typeof offset !== 'number') offset = 0
  if (typeof len !== 'number') len = data.byteLength - offset
  if (typeof pos !== 'number') pos = -1

  const req = FileRequest.borrow()

  try {
    return binding.writeSync(req.handle, fd, data, offset, len, pos)
  } catch (e) {
    throw new FileError(e.message, { operation: 'write', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function writev(fd, buffers, pos = -1, cb) {
  if (typeof pos === 'function') {
    cb = pos
    pos = -1
  }

  if (typeof pos !== 'number') pos = -1

  const req = FileRequest.borrow()

  let bytes
  let err = null
  try {
    binding.writev(req.handle, fd, buffers, pos)

    bytes = await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'writev', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, bytes, cb)
}

function writevSync(fd, buffers, pos = -1) {
  if (typeof pos !== 'number') pos = -1

  const req = FileRequest.borrow()

  try {
    return binding.writevSync(req.handle, fd, buffers, pos)
  } catch (e) {
    throw new FileError(e.message, { operation: 'writev', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function stat(filepath, cb) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let st
  let err = null
  try {
    binding.stat(req.handle, filepath)

    await req

    st = new Stats(...binding.requestResultStat(req.handle))
  } catch (e) {
    err = new FileError(e.message, { operation: 'stat', code: e.code, path: filepath })
  } finally {
    req.return()
  }

  return done(err, st, cb)
}

function statSync(filepath) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.statSync(req.handle, filepath)

    return new Stats(...binding.requestResultStat(req.handle))
  } catch (e) {
    throw new FileError(e.message, { operation: 'stat', code: e.code, path: filepath })
  } finally {
    req.return()
  }
}

async function lstat(filepath, cb) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let st
  let err = null
  try {
    binding.lstat(req.handle, filepath)

    await req

    st = new Stats(...binding.requestResultStat(req.handle))
  } catch (e) {
    err = new FileError(e.message, { operation: 'lstat', code: e.code, path: filepath })
  } finally {
    req.return()
  }

  return done(err, st, cb)
}

function lstatSync(filepath) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.lstatSync(req.handle, filepath)

    return new Stats(...binding.requestResultStat(req.handle))
  } catch (e) {
    throw new FileError(e.message, { operation: 'lstat', code: e.code, path: filepath })
  } finally {
    req.return()
  }
}

async function fstat(fd, cb) {
  const req = FileRequest.borrow()

  let st
  let err = null
  try {
    binding.fstat(req.handle, fd)

    await req

    st = new Stats(...binding.requestResultStat(req.handle))
  } catch (e) {
    err = new FileError(e.message, { operation: 'fstat', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, st, cb)
}

function fstatSync(fd) {
  const req = FileRequest.borrow()

  try {
    binding.fstatSync(req.handle, fd)

    return new Stats(...binding.requestResultStat(req.handle))
  } catch (e) {
    throw new FileError(e.message, { operation: 'fstat', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function statfs(filepath, cb) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let st
  let err = null
  try {
    binding.statfs(req.handle, filepath)

    await req

    st = new StatFs(...binding.requestResultStatfs(req.handle))
  } catch (e) {
    err = new FileError(e.message, { operation: 'statfs', code: e.code, path: filepath })
  } finally {
    req.return()
  }

  return done(err, st, cb)
}

function statfsSync(filepath) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.statfsSync(req.handle, filepath)

    return new StatFs(...binding.requestResultStatfs(req.handle))
  } catch (e) {
    throw new FileError(e.message, { operation: 'statfs', code: e.code, path: filepath })
  } finally {
    req.return()
  }
}

async function ftruncate(fd, len = 0, cb) {
  if (typeof len === 'function') {
    cb = len
    len = 0
  }

  if (typeof len !== 'number') len = 0

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.ftruncate(req.handle, fd, len)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'ftruncate', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function ftruncateSync(fd, len = 0) {
  if (typeof len !== 'number') len = 0

  const req = FileRequest.borrow()

  try {
    binding.ftruncateSync(req.handle, fd, len)
  } catch (e) {
    throw new FileError(e.message, { operation: 'ftruncate', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function truncate(filepath, len, cb) {
  let fd = -1
  let err

  try {
    fd = await open(filepath, 'r+')

    await ftruncate(fd, len)
  } catch (e) {
    err = e
  } finally {
    if (fd !== -1) await close(fd)
  }

  return done(err, cb)
}

function truncateSync(filepath, len) {
  let fd = -1
  let err

  try {
    fd = openSync(filepath, 'r+')

    ftruncateSync(fd, len)
  } catch (e) {
    err = e
  } finally {
    if (fd !== -1) closeSync(fd)
  }
}

async function chmod(filepath, mode, cb) {
  if (typeof mode === 'string') mode = toMode(mode)

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.chmod(req.handle, filepath, mode)

    await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'chmod',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function chmodSync(filepath, mode) {
  if (typeof mode === 'string') mode = toMode(mode)

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.chmodSync(req.handle, filepath, mode)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'chmod',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function fchmod(fd, mode, cb) {
  if (typeof mode === 'string') mode = toMode(mode)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.fchmod(req.handle, fd, mode)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'fchmod', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function fchmodSync(fd, mode) {
  if (typeof mode === 'string') mode = toMode(mode)

  const req = FileRequest.borrow()

  try {
    binding.fchmodSync(req.handle, fd, mode)
  } catch (e) {
    throw new FileError(e.message, { operation: 'fchmod', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function chown(filepath, uid, gid, cb) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.chown(req.handle, filepath, uid, gid)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'chown', code: e.code, path: filepath })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function chownSync(filepath, uid, gid) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.chownSync(req.handle, filepath, uid, gid)
  } catch (e) {
    throw new FileError(e.message, { operation: 'chownSync', code: e.code, path: filepath })
  } finally {
    req.return()
  }
}

async function lchown(filepath, uid, gid, cb) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.lchown(req.handle, filepath, uid, gid)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'lchown', code: e.code, path: filepath })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function lchownSync(filepath, uid, gid) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.lchownSync(req.handle, filepath, uid, gid)
  } catch (e) {
    throw new FileError(e.message, { operation: 'lchownSync', code: e.code, path: filepath })
  } finally {
    req.return()
  }
}

async function fchown(fd, uid, gid, cb) {
  const req = FileRequest.borrow()

  let err = null
  try {
    binding.fchown(req.handle, fd, uid, gid)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'fchown', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function fchownSync(fd, uid, gid) {
  const req = FileRequest.borrow()

  try {
    binding.fchownSync(req.handle, fd, uid, gid)
  } catch (e) {
    throw new FileError(e.message, { operation: 'fchownSync', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function utimes(filepath, atime, mtime, cb) {
  if (typeof atime !== 'number') atime = atime.getTime() / 1000
  if (typeof mtime !== 'number') mtime = mtime.getTime() / 1000

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.utimes(req.handle, filepath, atime, mtime)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'utimes', code: e.code, path: filepath })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function utimesSync(filepath, atime, mtime) {
  if (typeof atime !== 'number') atime = atime.getTime() / 1000
  if (typeof mtime !== 'number') mtime = mtime.getTime() / 1000

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.utimesSync(req.handle, filepath, atime, mtime)
  } catch (e) {
    throw new FileError(e.message, { operation: 'utimes', code: e.code, path: filepath })
  } finally {
    req.return()
  }
}

async function lutimes(filepath, atime, mtime, cb) {
  if (typeof atime !== 'number') atime = atime.getTime() / 1000
  if (typeof mtime !== 'number') mtime = mtime.getTime() / 1000

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.lutimes(req.handle, filepath, atime, mtime)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'lutimes', code: e.code, path: filepath })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function lutimesSync(filepath, atime, mtime) {
  if (typeof atime !== 'number') atime = atime.getTime() / 1000
  if (typeof mtime !== 'number') mtime = mtime.getTime() / 1000

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.lutimesSync(req.handle, filepath, atime, mtime)
  } catch (e) {
    throw new FileError(e.message, { operation: 'lutimes', code: e.code, path: filepath })
  } finally {
    req.return()
  }
}

async function futimes(fd, atime, mtime, cb) {
  if (typeof atime !== 'number') atime = atime.getTime() / 1000
  if (typeof mtime !== 'number') mtime = mtime.getTime() / 1000

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.futimes(req.handle, fd, atime, mtime)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'futimes', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function futimesSync(fd, atime, mtime) {
  if (typeof atime !== 'number') atime = atime.getTime() / 1000
  if (typeof mtime !== 'number') mtime = mtime.getTime() / 1000

  const req = FileRequest.borrow()

  try {
    binding.futimesSync(req.handle, fd, atime, mtime)
  } catch (e) {
    throw new FileError(e.message, { operation: 'futimesSync', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function link(src, dst, cb) {
  src = toNamespacedPath(src)
  dst = toNamespacedPath(dst)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.link(req.handle, src, dst)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'link', code: e.code, path: src, destination: dst })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function linkSync(src, dst) {
  src = toNamespacedPath(src)
  dst = toNamespacedPath(dst)

  const req = FileRequest.borrow()

  try {
    binding.linkSync(req.handle, src, dst)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'linkSync',
      code: e.code,
      path: src,
      destination: dst
    })
  } finally {
    req.return()
  }
}

async function mkdir(filepath, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = { mode: 0o777 }
  }

  if (typeof opts === 'number') opts = { mode: opts }
  else if (!opts) opts = {}

  const mode = typeof opts.mode === 'number' ? opts.mode : 0o777

  filepath = toNamespacedPath(filepath)

  if (opts.recursive) {
    let err = null
    try {
      try {
        await mkdir(filepath, { mode })
      } catch (err) {
        if (err.code !== 'ENOENT') {
          if (!(await stat(filepath)).isDirectory()) throw err
        } else {
          while (filepath.endsWith(path.sep)) filepath = filepath.slice(0, -1)
          const i = filepath.lastIndexOf(path.sep)
          if (i <= 0) throw err

          await mkdir(filepath.slice(0, i), { mode, recursive: true })

          try {
            await mkdir(filepath, { mode })
          } catch (err) {
            if (!(await stat(filepath)).isDirectory()) throw err
          }
        }
      }
    } catch (e) {
      err = e
    }

    return done(err, cb)
  }

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.mkdir(req.handle, filepath, mode)

    await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'mkdir',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function mkdirSync(filepath, opts) {
  if (typeof opts === 'number') opts = { mode: opts }
  else if (!opts) opts = {}

  const mode = typeof opts.mode === 'number' ? opts.mode : 0o777

  filepath = toNamespacedPath(filepath)

  if (opts.recursive) {
    try {
      mkdirSync(filepath, { mode })
    } catch (err) {
      if (err.code !== 'ENOENT') {
        if (!statSync(filepath).isDirectory()) throw err
      } else {
        while (filepath.endsWith(path.sep)) filepath = filepath.slice(0, -1)
        const i = filepath.lastIndexOf(path.sep)
        if (i <= 0) throw err

        mkdirSync(filepath.slice(0, i), { mode, recursive: true })

        try {
          mkdirSync(filepath, { mode })
        } catch (err) {
          if (!statSync(filepath).isDirectory()) throw err
        }
      }
    }

    return
  }

  const req = FileRequest.borrow()

  try {
    binding.mkdirSync(req.handle, filepath, mode)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'mkdir',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function mkdtemp(prefix, cb) {
  prefix = toNamespacedPath(prefix)

  const req = FileRequest.borrow()

  let res
  let err = null
  try {
    binding.mkdtemp(req.handle, prefix + 'XXXXXX')

    await req

    res = binding.requestResultPath(req.handle)
  } catch (e) {
    err = new FileError(e.message, { operation: 'mkdtemp', code: e.code, path: prefix })
  } finally {
    req.return()
  }

  return done(err, res, cb)
}

function mkdtempSync(prefix) {
  prefix = toNamespacedPath(prefix)

  const req = FileRequest.borrow()

  try {
    binding.mkdtempSync(req.handle, prefix + 'XXXXXX')

    return binding.requestResultPath(req.handle)
  } catch (e) {
    throw new FileError(e.message, { operation: 'mkdtempSync', code: e.code, path: prefix })
  } finally {
    req.return()
  }
}

async function rmdir(filepath, cb) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.rmdir(req.handle, filepath)

    await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'rmdir',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function rmdirSync(filepath) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.rmdirSync(req.handle, filepath)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'rmdir',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function rm(filepath, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (!opts) opts = {}

  filepath = toNamespacedPath(filepath)

  let err = null
  try {
    const st = await lstat(filepath)

    if (st.isDirectory()) {
      if (opts.recursive) {
        try {
          await rmdir(filepath)
        } catch (err) {
          if (err.code !== 'ENOTEMPTY') throw err

          const files = await readdir(filepath)

          for (const file of files) {
            await rm(filepath + path.sep + file, opts)
          }

          await rmdir(filepath)
        }
      } else {
        throw new FileError('is a directory', {
          operation: 'rm',
          code: 'EISDIR',
          path: filepath
        })
      }
    } else {
      await unlink(filepath)
    }
  } catch (e) {
    if (e.code !== 'ENOENT' || !opts.force) err = e
  }

  return done(err, cb)
}

function rmSync(filepath, opts) {
  if (!opts) opts = {}

  filepath = toNamespacedPath(filepath)

  try {
    const st = lstatSync(filepath)

    if (st.isDirectory()) {
      if (opts.recursive) {
        try {
          rmdirSync(filepath)
        } catch (err) {
          if (err.code !== 'ENOTEMPTY') throw err

          const files = readdirSync(filepath)

          for (const file of files) {
            rmSync(filepath + path.sep + file, opts)
          }

          rmdirSync(filepath)
        }
      } else {
        throw new FileError('is a directory', {
          operation: 'rm',
          code: 'EISDIR',
          path: filepath
        })
      }
    } else {
      unlinkSync(filepath)
    }
  } catch (err) {
    if (err.code !== 'ENOENT' || !opts.force) throw err
  }
}

async function unlink(filepath, cb) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.unlink(req.handle, filepath)

    await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'unlink',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function unlinkSync(filepath) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.unlinkSync(req.handle, filepath)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'unlink',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function rename(src, dst, cb) {
  src = toNamespacedPath(src)
  dst = toNamespacedPath(dst)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.rename(req.handle, src, dst)

    await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'rename',
      code: e.code,
      path: src,
      destination: dst
    })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function renameSync(src, dst) {
  src = toNamespacedPath(src)
  dst = toNamespacedPath(dst)

  const req = FileRequest.borrow()

  try {
    binding.renameSync(req.handle, src, dst)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'rename',
      code: e.code,
      path: src,
      destination: dst
    })
  } finally {
    req.return()
  }
}

async function copyFile(src, dst, mode = 0, cb) {
  if (typeof mode === 'function') {
    cb = mode
    mode = 0
  }

  src = toNamespacedPath(src)
  dst = toNamespacedPath(dst)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.copyfile(req.handle, src, dst, mode)

    await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'copyfile',
      code: e.code,
      path: src,
      destination: dst
    })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function copyFileSync(src, dst, mode = 0) {
  src = toNamespacedPath(src)
  dst = toNamespacedPath(dst)

  const req = FileRequest.borrow()

  try {
    binding.copyfileSync(req.handle, src, dst, mode)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'copyfile',
      code: e.code,
      path: src,
      destination: dst
    })
  } finally {
    req.return()
  }
}

async function cp(src, dst, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (!opts) opts = {}

  src = toNamespacedPath(src)
  dst = toNamespacedPath(dst)

  let err = null
  try {
    const st = await lstat(src)

    if (st.isDirectory()) {
      if (opts.recursive !== true) {
        throw new FileError('is a directory', { operation: 'cp', code: 'EISDIR', path: src })
      }

      try {
        await lstat(dst)
      } catch (e) {
        if (e.code !== 'ENOENT') throw e

        await mkdir(dst, { mode: st.mode, recursive: true })
      }

      const dir = await opendir(src)
      for await (const { name } of dir) {
        await cp(path.join(src, name), path.join(dst, name), opts)
      }
    } else if (st.isFile()) {
      await copyFile(src, dst)
      await chmod(dst, st.mode)
    }
  } catch (e) {
    err = e
  }

  return done(err, cb)
}

function cpSync(src, dst, opts = {}) {
  src = toNamespacedPath(src)
  dst = toNamespacedPath(dst)

  const st = lstatSync(src)

  if (st.isDirectory()) {
    if (opts.recursive !== true) {
      throw new FileError('is a directory', { operation: 'cp', code: 'EISDIR', path: src })
    }

    try {
      lstatSync(dst)
    } catch (e) {
      if (e.code !== 'ENOENT') throw e

      mkdirSync(dst, { mode: st.mode, recursive: true })
    }

    const dir = opendirSync(src)
    for (const { name } of dir) {
      cpSync(path.join(src, name), path.join(dst, name), opts)
    }
  } else if (st.isFile()) {
    copyFileSync(src, dst)
    chmodSync(dst, st.mode)
  }
}

async function realpath(filepath, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  const { encoding = 'utf8' } = opts

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let res
  let err = null
  try {
    binding.realpath(req.handle, filepath)

    await req

    res = Buffer.from(binding.requestResultString(req.handle))

    if (encoding !== 'buffer') res = res.toString(encoding)
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'realpath',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, res, cb)
}

function realpathSync(filepath, opts) {
  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  const { encoding = 'utf8' } = opts

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.realpathSync(req.handle, filepath)

    let res = Buffer.from(binding.requestResultString(req.handle))

    if (encoding !== 'buffer') res = res.toString(encoding)

    return res
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'realpath',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function readlink(filepath, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  const { encoding = 'utf8' } = opts

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let res
  let err = null
  try {
    binding.readlink(req.handle, filepath)

    await req

    res = Buffer.from(binding.requestResultString(req.handle))

    if (encoding !== 'buffer') res = res.toString(encoding)
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'readlink',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, res, cb)
}

function readlinkSync(filepath, opts) {
  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  const { encoding = 'utf8' } = opts

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.readlinkSync(req.handle, filepath)

    let res = Buffer.from(binding.requestResultString(req.handle))

    if (encoding !== 'buffer') res = res.toString(encoding)

    return res
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'readlink',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function fsync(fd, cb) {
  const req = FileRequest.borrow()

  let err = null
  try {
    binding.fsync(req.handle, fd)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'fsync', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function fsyncSync(fd) {
  const req = FileRequest.borrow()

  try {
    binding.fsyncSync(req.handle, fd)
  } catch (e) {
    throw new FileError(e.message, { operation: 'fsyncSync', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function fdatasync(fd, cb) {
  const req = FileRequest.borrow()

  let err = null
  try {
    binding.fdatasync(req.handle, fd)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'fdatasync', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function fdatasyncSync(fd) {
  const req = FileRequest.borrow()

  try {
    binding.fdatasyncSync(req.handle, fd)
  } catch (e) {
    throw new FileError(e.message, { operation: 'fdatasyncSync', code: e.code, fd })
  } finally {
    req.return()
  }
}

function normalizeSymlinkTarget(target, type, filepath) {
  if (isWindows) {
    if (type === constants.UV_FS_SYMLINK_JUNCTION) target = path.resolve(filepath, '..', target)

    if (path.isAbsolute(target)) return path.toNamespacedPath(target)

    return target.replace(/\//g, path.sep)
  }

  return target
}

async function symlink(target, filepath, type, cb) {
  if (typeof type === 'function') {
    cb = type
    type = null
  }

  filepath = toNamespacedPath(filepath)

  if (typeof type === 'string') {
    switch (type) {
      case 'dir':
        type = constants.UV_FS_SYMLINK_DIR
        break
      case 'junction':
        type = constants.UV_FS_SYMLINK_JUNCTION
        break
      case 'file':
      default:
        type = 0
        break
    }
  } else if (typeof type !== 'number') {
    if (isWindows) {
      target = path.resolve(filepath, '..', target)

      try {
        type = (await stat(target)).isDirectory()
          ? constants.UV_FS_SYMLINK_DIR
          : constants.UV_FS_SYMLINK_JUNCTION
      } catch {
        type = 0
      }
    } else {
      type = 0
    }
  }

  target = normalizeSymlinkTarget(target, type, filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.symlink(req.handle, target, filepath, type)

    await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'symlink',
      code: e.code,
      path: target,
      destination: filepath
    })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function symlinkSync(target, filepath, type) {
  filepath = toNamespacedPath(filepath)

  if (typeof type === 'string') {
    switch (type) {
      case 'dir':
        type = constants.UV_FS_SYMLINK_DIR
        break
      case 'junction':
        type = constants.UV_FS_SYMLINK_JUNCTION
        break
      case 'file':
      default:
        type = 0
        break
    }
  } else if (typeof type !== 'number') {
    if (isWindows) {
      target = path.resolve(filepath, '..', target)

      try {
        type = statSync(target).isDirectory()
          ? constants.UV_FS_SYMLINK_DIR
          : constants.UV_FS_SYMLINK_JUNCTION
      } catch {
        type = 0
      }
    } else {
      type = 0
    }
  }

  target = normalizeSymlinkTarget(target, type, filepath)

  const req = FileRequest.borrow()

  try {
    binding.symlinkSync(req.handle, target, filepath, type)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'symlink',
      code: e.code,
      path: target,
      destination: filepath
    })
  } finally {
    req.return()
  }
}

async function opendir(filepath, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let dir
  let err = null
  try {
    binding.opendir(req.handle, filepath)

    await req

    dir = new Dir(filepath, binding.requestResultDir(req.handle), opts)
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'opendir',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, dir, cb)
}

function opendirSync(filepath, opts) {
  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.opendirSync(req.handle, filepath)

    return new Dir(filepath, binding.requestResultDir(req.handle), opts)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'opendir',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function readdir(filepath, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  const { withFileTypes = false } = opts

  filepath = toNamespacedPath(filepath)

  let result = []
  let err = null
  try {
    const dir = await opendir(filepath)

    for await (const entry of dir) {
      result.push(withFileTypes ? entry : entry.name)
    }
  } catch (e) {
    result = []
    err = e
  }

  return done(err, result, cb)
}

function readdirSync(filepath, opts) {
  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  const { withFileTypes = false } = opts

  filepath = toNamespacedPath(filepath)

  const dir = opendirSync(filepath, opts)
  const result = []

  for (const entry of dir) {
    result.push(withFileTypes ? entry : entry.name)
  }

  return result
}

async function readFile(filepath, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  const { encoding = 'buffer' } = opts

  let fd = -1
  let buffer = null
  let err = null
  try {
    fd = await open(filepath, opts.flag || 'r')

    const st = await fstat(fd)

    let len = 0

    if (st.size === 0) {
      const buffers = []

      while (true) {
        buffer = Buffer.allocUnsafe(8192)
        const r = await read(fd, buffer)
        len += r
        if (r === 0) break
        buffers.push(buffer.subarray(0, r))
      }

      buffer = Buffer.concat(buffers)
    } else {
      buffer = Buffer.allocUnsafe(st.size)

      while (true) {
        const r = await read(fd, len ? buffer.subarray(len) : buffer)
        len += r
        if (r === 0 || len === buffer.byteLength) break
      }

      if (len !== buffer.byteLength) buffer = buffer.subarray(0, len)
    }

    if (encoding !== 'buffer') buffer = buffer.toString(encoding)
  } catch (e) {
    err = e
  } finally {
    if (fd !== -1) await close(fd)
  }

  return done(err, buffer, cb)
}

function readFileSync(filepath, opts) {
  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  const { encoding = 'buffer' } = opts

  let fd = -1
  try {
    fd = openSync(filepath, opts.flag || 'r')

    const st = fstatSync(fd)

    let buffer
    let len = 0

    if (st.size === 0) {
      const buffers = []

      while (true) {
        buffer = Buffer.allocUnsafe(8192)
        const r = readSync(fd, buffer)
        len += r
        if (r === 0) break
        buffers.push(buffer.subarray(0, r))
      }

      buffer = Buffer.concat(buffers)
    } else {
      buffer = Buffer.allocUnsafe(st.size)

      while (true) {
        const r = readSync(fd, len ? buffer.subarray(len) : buffer)
        len += r
        if (r === 0 || len === buffer.byteLength) break
      }

      if (len !== buffer.byteLength) buffer = buffer.subarray(0, len)
    }

    if (encoding !== 'buffer') buffer = buffer.toString(encoding)

    return buffer
  } finally {
    if (fd !== -1) closeSync(fd)
  }
}

async function writeFile(filepath, data, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  if (typeof data === 'string') data = Buffer.from(data, opts.encoding)

  let fd = -1
  let len = 0
  let err = null
  try {
    fd = await open(filepath, opts.flag || 'w', opts.mode || 0o666)

    while (true) {
      len += await write(fd, len ? data.subarray(len) : data)
      if (len === data.byteLength) break
    }
  } catch (e) {
    err = e
  } finally {
    if (fd !== -1) await close(fd)
  }

  return done(err, len, cb)
}

function writeFileSync(filepath, data, opts) {
  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  if (typeof data === 'string') data = Buffer.from(data, opts.encoding)

  let fd = -1
  try {
    fd = openSync(filepath, opts.flag || 'w', opts.mode || 0o666)

    let len = 0

    while (true) {
      len += writeSync(fd, len ? data.subarray(len) : data)
      if (len === data.byteLength) break
    }
  } finally {
    if (fd !== -1) closeSync(fd)
  }
}

function appendFile(filepath, data, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  if (!opts.flag) opts = { ...opts, flag: 'a' }

  return writeFile(filepath, data, opts, cb)
}

function appendFileSync(filepath, data, opts) {
  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  if (!opts.flag) opts = { ...opts, flag: 'a' }

  return writeFileSync(filepath, data, opts)
}

function watch(filepath, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  filepath = toNamespacedPath(filepath)

  return new Watcher(filepath, opts, cb)
}

class Stats {
  constructor(
    dev,
    mode,
    nlink,
    uid,
    gid,
    rdev,
    blksize,
    ino,
    size,
    blocks,
    atimeMs,
    mtimeMs,
    ctimeMs,
    birthtimeMs
  ) {
    this.dev = dev
    this.mode = mode
    this.nlink = nlink
    this.uid = uid
    this.gid = gid
    this.rdev = rdev
    this.blksize = blksize
    this.ino = ino
    this.size = size
    this.blocks = blocks
    this.atimeMs = atimeMs
    this.mtimeMs = mtimeMs
    this.ctimeMs = ctimeMs
    this.birthtimeMs = birthtimeMs
    this.atime = new Date(atimeMs)
    this.mtime = new Date(mtimeMs)
    this.ctime = new Date(ctimeMs)
    this.birthtime = new Date(birthtimeMs)
  }

  isDirectory() {
    return (this.mode & constants.S_IFMT) === constants.S_IFDIR
  }

  isFile() {
    return (this.mode & constants.S_IFMT) === constants.S_IFREG
  }

  isBlockDevice() {
    return (this.mode & constants.S_IFMT) === constants.S_IFBLK
  }

  isCharacterDevice() {
    return (this.mode & constants.S_IFMT) === constants.S_IFCHR
  }

  isFIFO() {
    return (this.mode & constants.S_IFMT) === constants.S_IFIFO
  }

  isSymbolicLink() {
    return (this.mode & constants.S_IFMT) === constants.S_IFLNK
  }

  isSocket() {
    return (this.mode & constants.S_IFMT) === constants.S_IFSOCK
  }
}

class StatFs {
  constructor(type, bsize, blocks, bfree, bavail, files, ffree) {
    this.type = type
    this.bsize = bsize
    this.blocks = blocks
    this.bfree = bfree
    this.bavail = bavail
    this.files = files
    this.ffree = ffree
  }
}

class Dir {
  constructor(path, handle, opts = {}) {
    const { encoding = 'utf8', bufferSize = 32 } = opts

    this.path = path

    this._encoding = encoding
    this._capacity = bufferSize
    this._buffer = new FIFO()
    this._ended = false
    this._handle = handle
  }

  async read(cb) {
    if (this._buffer.length) return ok(this._buffer.shift(), cb)
    if (this._ended) return ok(null, cb)

    const req = FileRequest.borrow()

    let entries
    let err = null
    try {
      req.retain(binding.readdir(req.handle, this._handle, this._capacity))

      await req

      entries = binding.requestResultDirents(req.handle)
    } catch (e) {
      err = new FileError(e.message, {
        operation: 'readdir',
        code: e.code,
        path: this.path
      })
    } finally {
      req.return()
    }

    if (err) return fail(err, cb)

    if (entries.length === 0) {
      this._ended = true

      return ok(null, cb)
    }

    for (const entry of entries) {
      let name = Buffer.from(entry.name)

      if (this._encoding !== 'buffer') name = name.toString(this._encoding)

      this._buffer.push(new Dirent(this.path, name, entry.type))
    }

    return ok(this._buffer.shift(), cb)
  }

  readSync() {
    if (this._buffer.length) return this._buffer.shift()
    if (this._ended) return null

    const req = FileRequest.borrow()

    let entries
    try {
      req.retain(binding.readdirSync(req.handle, this._handle, this._capacity))

      entries = binding.requestResultDirents(req.handle)
    } catch (e) {
      throw new FileError(e.message, {
        operation: 'readdir',
        code: e.code,
        path: this.path
      })
    } finally {
      req.return()
    }

    if (entries.length === 0) {
      this._ended = true

      return null
    }

    for (const entry of entries) {
      let name = Buffer.from(entry.name)

      if (this._encoding !== 'buffer') name = name.toString(this._encoding)

      this._buffer.push(new Dirent(this.path, name, entry.type))
    }

    return this._buffer.shift()
  }

  async close(cb) {
    const req = FileRequest.borrow()

    let err = null
    try {
      binding.closedir(req.handle, this._handle)

      await req
    } catch (e) {
      err = new FileError(e.message, {
        operation: 'closedir',
        code: e.code,
        path: this.path
      })
    } finally {
      req.return()
    }

    this._handle = null

    return done(err, cb)
  }

  closeSync() {
    const req = FileRequest.borrow()

    try {
      binding.closedirSync(req.handle, this._handle)
    } catch (e) {
      throw new FileError(e.message, {
        operation: 'closedir',
        code: e.code,
        path: this.path
      })
    } finally {
      req.return()
    }

    this._handle = null
  }

  [Symbol.dispose]() {
    this.closeSync()
  }

  async [Symbol.asyncDispose]() {
    await this.close()
  }

  *[Symbol.iterator]() {
    while (true) {
      const entry = this.readSync()
      if (entry === null) break
      yield entry
    }

    this.closeSync()
  }

  async *[Symbol.asyncIterator]() {
    while (true) {
      const entry = await this.read()
      if (entry === null) break
      yield entry
    }

    await this.close()
  }
}

class Dirent {
  constructor(parentPath, name, type) {
    this.parentPath = parentPath
    this.name = name
    this.type = type
  }

  isFile() {
    return this.type === constants.UV_DIRENT_FILE
  }

  isDirectory() {
    return this.type === constants.UV_DIRENT_DIR
  }

  isSymbolicLink() {
    return this.type === constants.UV_DIRENT_LINK
  }

  isFIFO() {
    return this.type === constants.UV_DIRENT_FIFO
  }

  isSocket() {
    return this.type === constants.UV_DIRENT_SOCKET
  }

  isCharacterDevice() {
    return this.type === constants.UV_DIRENT_CHAR
  }

  isBlockDevice() {
    return this.type === constants.UV_DIRENT_BLOCK
  }
}

class FileReadStream extends Readable {
  constructor(path, opts = {}) {
    const { eagerOpen = true } = opts

    super({ eagerOpen, ...opts })

    this.path = path
    this.fd = typeof opts.fd === 'number' ? opts.fd : -1
    this.flags = opts.flags || 'r'
    this.mode = opts.mode || 0o666

    this._offset = opts.start || 0
    this._missing = 0

    if (opts.length) {
      this._missing = opts.length
    } else if (typeof opts.end === 'number') {
      this._missing = opts.end - this._offset + 1
    } else {
      this._missing = -1
    }
  }

  async _open(cb) {
    let err

    if (this.fd === -1) {
      err = null
      try {
        this.fd = await open(this.path, this.flags, this.mode)
      } catch (e) {
        err = e
      }

      if (err) return cb(err)
    }

    let st
    err = null
    try {
      st = await fstat(this.fd)
    } catch (e) {
      err = e
    }

    if (err) return cb(err)

    if (this._missing === -1) this._missing = st.size

    if (st.size < this._offset) {
      this._offset = st.size
      this._missing = 0
    } else if (st.size < this._offset + this._missing) {
      this._missing = st.size - this._offset
    }

    cb(null)
  }

  async _read(size) {
    if (this._missing <= 0) return this.push(null)

    const data = Buffer.allocUnsafe(Math.min(this._missing, size))

    let len
    let err = null
    try {
      len = await read(this.fd, data, 0, data.byteLength, this._offset)
    } catch (e) {
      err = e
    }

    if (err) return this.destroy(err)

    if (len === 0) return this.push(null)

    if (this._missing < len) len = this._missing

    this._missing -= len
    this._offset += len

    this.push(data.subarray(0, len))
  }

  async _destroy(err, cb) {
    if (this.fd === -1) return cb(err)

    try {
      await close(this.fd)
    } catch (e) {
      err = err || e
    }

    cb(err)
  }
}

class FileWriteStream extends Writable {
  constructor(path, opts = {}) {
    const { eagerOpen = true } = opts

    super({ eagerOpen, ...opts })

    this.path = path
    this.fd = typeof opts.fd === 'number' ? opts.fd : -1
    this.flags = opts.flags || 'w'
    this.mode = opts.mode || 0o666
  }

  async _open(cb) {
    if (this.fd !== -1) return cb(null)

    let err = null
    try {
      this.fd = await open(this.path, this.flags, this.mode)
    } catch (e) {
      err = e
    }

    cb(err)
  }

  async _writev(batch, cb) {
    let err = null
    try {
      await writev(
        this.fd,
        batch.map(({ chunk }) => chunk)
      )
    } catch (e) {
      err = e
    }

    cb(err)
  }

  async _destroy(err, cb) {
    if (this.fd === -1) return cb(err)

    try {
      await close(this.fd)
    } catch (e) {
      err = err || e
    }

    cb(err)
  }
}

class Watcher extends EventEmitter {
  constructor(path, opts, onchange) {
    if (typeof opts === 'function') {
      onchange = opts
      opts = {}
    }

    if (!opts) opts = {}

    const { persistent = true, recursive = false, encoding = 'utf8' } = opts

    super()

    this._closed = false
    this._encoding = encoding
    this._handle = binding.watcherInit(path, recursive, this, this._onevent, this._onclose)

    if (!persistent) this.unref()

    if (onchange) this.on('change', onchange)
  }

  close() {
    if (this._closed) return
    this._closed = true

    binding.watcherClose(this._handle)
  }

  ref() {
    if (this._handle) binding.watcherRef(this._handle)
    return this
  }

  unref() {
    if (this._handle) binding.watcherUnref(this._handle)
    return this
  }

  [Symbol.asyncIterator]() {
    const buffer = []
    let done = false
    let error = null
    let next = null

    this.on('change', (eventType, filename) => {
      if (next) {
        next.resolve({ done: false, value: { eventType, filename } })
        next = null
      } else {
        buffer.push({ eventType, filename })
      }
    })
      .on('error', (err) => {
        done = true
        error = err

        if (next) {
          next.reject(error)
          next = null
        }
      })
      .on('close', () => {
        done = true

        if (next) {
          next.resolve({ done })
          next = null
        }
      })

    return {
      next: () =>
        new Promise((resolve, reject) => {
          if (error) return reject(error)

          if (buffer.length) return resolve({ done: false, value: buffer.shift() })

          if (done) return resolve({ done })

          next = { resolve, reject }
        })
    }
  }

  _onevent(err, events, filename) {
    if (err) {
      this.close()
      this.emit('error', err)
    } else {
      const path =
        this._encoding === 'buffer'
          ? Buffer.from(filename)
          : Buffer.from(filename).toString(this._encoding)

      if (events & binding.UV_RENAME) {
        this.emit('change', 'rename', path)
      }

      if (events & binding.UV_CHANGE) {
        this.emit('change', 'change', path)
      }
    }
  }

  _onclose() {
    this._handle = null

    this.emit('close')
  }
}

exports.access = access
exports.appendFile = appendFile
exports.chmod = chmod
exports.chown = chown
exports.close = close
exports.copyFile = copyFile
exports.cp = cp
exports.exists = exists
exports.fchmod = fchmod
exports.fchown = fchown
exports.fdatasync = fdatasync
exports.fstat = fstat
exports.fsync = fsync
exports.ftruncate = ftruncate
exports.futimes = futimes
exports.lchown = lchown
exports.lutimes = lutimes
exports.link = link
exports.lstat = lstat
exports.mkdir = mkdir
exports.mkdtemp = mkdtemp
exports.open = open
exports.opendir = opendir
exports.read = read
exports.readFile = readFile
exports.readdir = readdir
exports.readlink = readlink
exports.readv = readv
exports.realpath = realpath
exports.rename = rename
exports.rm = rm
exports.rmdir = rmdir
exports.stat = stat
exports.statfs = statfs
exports.symlink = symlink
exports.truncate = truncate
exports.unlink = unlink
exports.utimes = utimes
exports.watch = watch
exports.write = write
exports.writeFile = writeFile
exports.writev = writev

exports.accessSync = accessSync
exports.appendFileSync = appendFileSync
exports.chmodSync = chmodSync
exports.chownSync = chownSync
exports.closeSync = closeSync
exports.copyFileSync = copyFileSync
exports.cpSync = cpSync
exports.existsSync = existsSync
exports.fchmodSync = fchmodSync
exports.fchownSync = fchownSync
exports.fdatasyncSync = fdatasyncSync
exports.fstatSync = fstatSync
exports.fsyncSync = fsyncSync
exports.ftruncateSync = ftruncateSync
exports.futimesSync = futimesSync
exports.lchownSync = lchownSync
exports.lutimesSync = lutimesSync
exports.linkSync = linkSync
exports.lstatSync = lstatSync
exports.mkdirSync = mkdirSync
exports.mkdtempSync = mkdtempSync
exports.openSync = openSync
exports.opendirSync = opendirSync
exports.readFileSync = readFileSync
exports.readSync = readSync
exports.readdirSync = readdirSync
exports.readlinkSync = readlinkSync
exports.readvSync = readvSync
exports.realpathSync = realpathSync
exports.renameSync = renameSync
exports.rmSync = rmSync
exports.rmdirSync = rmdirSync
exports.statSync = statSync
exports.statfsSync = statfsSync
exports.symlinkSync = symlinkSync
exports.truncateSync = truncateSync
exports.unlinkSync = unlinkSync
exports.utimesSync = utimesSync
exports.writeFileSync = writeFileSync
exports.writeSync = writeSync
exports.writevSync = writevSync

exports.promises = require('./promises')

exports.Stats = Stats
exports.StatFs = StatFs
exports.Dir = Dir
exports.Dirent = Dirent
exports.Watcher = Watcher

exports.ReadStream = FileReadStream

exports.createReadStream = function createReadStream(path, opts) {
  return new FileReadStream(path, opts)
}

exports.WriteStream = FileWriteStream

exports.createWriteStream = function createWriteStream(path, opts) {
  return new FileWriteStream(path, opts)
}

function toNamespacedPath(filepath) {
  if (typeof filepath !== 'string') {
    if (isURL(filepath)) filepath = fileURLToPath(filepath)
    else filepath = filepath.toString()
  }

  return path.toNamespacedPath(filepath)
}

function toFlags(flags) {
  switch (flags) {
    case 'r':
      return constants.O_RDONLY
    case 'rs': // Fall through.
    case 'sr':
      return constants.O_RDONLY | constants.O_SYNC
    case 'r+':
      return constants.O_RDWR
    case 'rs+': // Fall through.
    case 'sr+':
      return constants.O_RDWR | constants.O_SYNC

    case 'w':
      return constants.O_TRUNC | constants.O_CREAT | constants.O_WRONLY
    case 'wx': // Fall through.
    case 'xw':
      return constants.O_TRUNC | constants.O_CREAT | constants.O_WRONLY | constants.O_EXCL

    case 'w+':
      return constants.O_TRUNC | constants.O_CREAT | constants.O_RDWR
    case 'wx+': // Fall through.
    case 'xw+':
      return constants.O_TRUNC | constants.O_CREAT | constants.O_RDWR | constants.O_EXCL

    case 'a':
      return constants.O_APPEND | constants.O_CREAT | constants.O_WRONLY
    case 'ax': // Fall through.
    case 'xa':
      return constants.O_APPEND | constants.O_CREAT | constants.O_WRONLY | constants.O_EXCL
    case 'as': // Fall through.
    case 'sa':
      return constants.O_APPEND | constants.O_CREAT | constants.O_WRONLY | constants.O_SYNC

    case 'a+':
      return constants.O_APPEND | constants.O_CREAT | constants.O_RDWR
    case 'ax+': // Fall through.
    case 'xa+':
      return constants.O_APPEND | constants.O_CREAT | constants.O_RDWR | constants.O_EXCL
    case 'as+': // Fall through.
    case 'sa+':
      return constants.O_APPEND | constants.O_CREAT | constants.O_RDWR | constants.O_SYNC
    default:
      return 0
  }
}

function toMode(mode) {
  return parseInt(mode, 8)
}
