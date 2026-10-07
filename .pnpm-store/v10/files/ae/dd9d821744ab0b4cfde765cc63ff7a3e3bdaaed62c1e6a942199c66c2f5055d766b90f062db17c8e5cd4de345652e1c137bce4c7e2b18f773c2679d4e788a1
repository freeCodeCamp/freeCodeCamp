const EventEmitter = require('bare-events')
const fs = require('.')

class FileHandle extends EventEmitter {
  constructor(fd) {
    super()

    this.fd = fd
  }

  async close() {
    await fs.close(this.fd)

    this.fd = -1
    this.emit('close')
  }

  async read(buffer, ...args) {
    return {
      bytesRead: await fs.read(this.fd, buffer, ...args),
      buffer
    }
  }

  async readv(buffers, ...args) {
    return {
      bytesRead: await fs.readv(this.fd, buffers, ...args),
      buffers
    }
  }

  async write(buffer, ...args) {
    return {
      bytesWritten: await fs.write(this.fd, buffer, ...args),
      buffer
    }
  }

  async writev(buffers, ...args) {
    return {
      bytesWritten: await fs.writev(this.fd, buffers, ...args),
      buffers
    }
  }

  async stat() {
    return fs.fstat(this.fd)
  }

  async chmod(mode) {
    await fs.fchmod(this.fd, mode)
  }

  async chown(uid, gid) {
    await fs.fchown(this.fd, uid, gid)
  }

  async datasync() {
    return fs.fdatasync(this.fd)
  }

  async sync() {
    return fs.fsync(this.fd)
  }

  async truncate(len) {
    await fs.ftruncate(this.fd, len)
  }

  async utimes(atime, mtime) {
    await fs.futimes(this.fd, atime, mtime)
  }

  createReadStream(opts) {
    return fs.createReadStream(null, { ...opts, fd: this.fd })
  }

  createWriteStream(opts) {
    return fs.createWriteStream(null, { ...opts, fd: this.fd })
  }

  async [Symbol.asyncDispose]() {
    await this.close()
  }
}

exports.open = async function open(filepath, flags, mode) {
  return new FileHandle(await fs.open(filepath, flags, mode))
}

exports.access = fs.access
exports.appendFile = fs.appendFile
exports.chmod = fs.chmod
exports.chown = fs.chown
exports.constants = fs.constants
exports.copyFile = fs.copyFile
exports.cp = fs.cp
exports.lchown = fs.lchown
exports.lutimes = fs.lutimes
exports.link = fs.link
exports.lstat = fs.lstat
exports.mkdir = fs.mkdir
exports.mkdtemp = fs.mkdtemp
exports.opendir = fs.opendir
exports.readFile = fs.readFile
exports.readdir = fs.readdir
exports.readlink = fs.readlink
exports.realpath = fs.realpath
exports.rename = fs.rename
exports.rm = fs.rm
exports.rmdir = fs.rmdir
exports.stat = fs.stat
exports.statfs = fs.statfs
exports.truncate = fs.truncate
exports.symlink = fs.symlink
exports.unlink = fs.unlink
exports.utimes = fs.utimes
exports.watch = fs.watch
exports.writeFile = fs.writeFile
