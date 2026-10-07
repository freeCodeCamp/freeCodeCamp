const Stream = require('stream')

class MuteStream extends Stream {
  #isTTY = null

  constructor (opts = {}) {
    super(opts)
    this.writable = this.readable = true
    this.muted = false
    this.on('pipe', this._onpipe)
    this.replace = opts.replace

    // For readline-type situations
    // This much at the start of a line being redrawn after a ctrl char
    // is seen (such as backspace) won't be redrawn as the replacement
    this._prompt = opts.prompt || null
    this._hadControl = false
  }

  #destSrc (key, def) {
    if (this._dest) {
      return this._dest[key]
    }
    if (this._src) {
      return this._src[key]
    }
    return def
  }

  #proxy (method, ...args) {
    if (typeof this._dest?.[method] === 'function') {
      this._dest[method](...args)
    }
    if (typeof this._src?.[method] === 'function') {
      this._src[method](...args)
    }
  }

  get isTTY () {
    if (this.#isTTY !== null) {
      return this.#isTTY
    }
    return this.#destSrc('isTTY', false)
  }

  // basically just get replace the getter/setter with a regular value
  set isTTY (val) {
    this.#isTTY = val
  }

  get rows () {
    return this.#destSrc('rows')
  }

  get columns () {
    return this.#destSrc('columns')
  }

  mute () {
    this.muted = true
  }

  unmute () {
    this.muted = false
  }

  _onpipe (src) {
    this._src = src
  }

  pipe (dest, options) {
    this._dest = dest
    return super.pipe(dest, options)
  }

  pause () {
    if (this._src) {
      return this._src.pause()
    }
  }

  resume () {
    if (this._src) {
      return this._src.resume()
    }
  }

  write (c) {
    if (this.muted) {
      if (!this.replace) {
        return true
      }
      // eslint-disable-next-line no-control-regex
      if (c.match(/^\u001b/)) {
        if (c.indexOf(this._prompt) === 0) {
          c = c.slice(this._prompt.length)
          c = c.replace(/./g, this.replace)
          c = this._prompt + c
        }
        this._hadControl = true
        return this.emit('data', c)
      } else {
        if (this._prompt && this._hadControl &&
          c.indexOf(this._prompt) === 0) {
          this._hadControl = false
          this.emit('data', this._prompt)
          c = c.slice(this._prompt.length)
        }
        c = c.toString().replace(/./g, this.replace)
      }
    }
    this.emit('data', c)
  }

  end (c) {
    if (this.muted) {
      if (c && this.replace) {
        c = c.toString().replace(/./g, this.replace)
      } else {
        c = null
      }
    }
    if (c) {
      this.emit('data', c)
    }
    this.emit('end')
  }

  destroy (...args) {
    return this.#proxy('destroy', ...args)
  }

  destroySoon (...args) {
    return this.#proxy('destroySoon', ...args)
  }

  close (...args) {
    return this.#proxy('close', ...args)
  }
}

module.exports = MuteStream
