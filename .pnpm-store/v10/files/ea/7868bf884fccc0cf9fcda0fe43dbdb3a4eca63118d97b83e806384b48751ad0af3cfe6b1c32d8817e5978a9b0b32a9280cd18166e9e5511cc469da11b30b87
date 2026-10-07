module.exports = Pager

function Pager (pageSize, opts) {
  if (!(this instanceof Pager)) return new Pager(pageSize, opts)

  this.length = 0
  this.updates = []
  this.path = new Uint16Array(4)
  this.pages = new Array(32768)
  this.maxPages = this.pages.length
  this.level = 0
  this.pageSize = pageSize || 1024
  this.deduplicate = opts ? opts.deduplicate : null
  this.zeros = this.deduplicate ? alloc(this.deduplicate.length) : null
}

Pager.prototype.updated = function (page) {
  while (this.deduplicate && page.buffer[page.deduplicate] === this.deduplicate[page.deduplicate]) {
    page.deduplicate++
    if (page.deduplicate === this.deduplicate.length) {
      page.deduplicate = 0
      if (page.buffer.equals && page.buffer.equals(this.deduplicate)) page.buffer = this.deduplicate
      break
    }
  }
  if (page.updated || !this.updates) return
  page.updated = true
  this.updates.push(page)
}

Pager.prototype.lastUpdate = function () {
  if (!this.updates || !this.updates.length) return null
  var page = this.updates.pop()
  page.updated = false
  return page
}

Pager.prototype._array = function (i, noAllocate) {
  if (i >= this.maxPages) {
    if (noAllocate) return
    grow(this, i)
  }

  factor(i, this.path)

  var arr = this.pages

  for (var j = this.level; j > 0; j--) {
    var p = this.path[j]
    var next = arr[p]

    if (!next) {
      if (noAllocate) return
      next = arr[p] = new Array(32768)
    }

    arr = next
  }

  return arr
}

Pager.prototype.get = function (i, noAllocate) {
  var arr = this._array(i, noAllocate)
  var first = this.path[0]
  var page = arr && arr[first]

  if (!page && !noAllocate) {
    page = arr[first] = new Page(i, alloc(this.pageSize))
    if (i >= this.length) this.length = i + 1
  }

  if (page && page.buffer === this.deduplicate && this.deduplicate && !noAllocate) {
    page.buffer = copy(page.buffer)
    page.deduplicate = 0
  }

  return page
}

Pager.prototype.set = function (i, buf) {
  var arr = this._array(i, false)
  var first = this.path[0]

  if (i >= this.length) this.length = i + 1

  if (!buf || (this.zeros && buf.equals && buf.equals(this.zeros))) {
    arr[first] = undefined
    return
  }

  if (this.deduplicate && buf.equals && buf.equals(this.deduplicate)) {
    buf = this.deduplicate
  }

  var page = arr[first]
  var b = truncate(buf, this.pageSize)

  if (page) page.buffer = b
  else arr[first] = new Page(i, b)
}

Pager.prototype.toBuffer = function () {
  var list = new Array(this.length)
  var empty = alloc(this.pageSize)
  var ptr = 0

  while (ptr < list.length) {
    var arr = this._array(ptr, true)
    for (var i = 0; i < 32768 && ptr < list.length; i++) {
      list[ptr++] = (arr && arr[i]) ? arr[i].buffer : empty
    }
  }

  return Buffer.concat(list)
}

function grow (pager, index) {
  while (pager.maxPages < index) {
    var old = pager.pages
    pager.pages = new Array(32768)
    pager.pages[0] = old
    pager.level++
    pager.maxPages *= 32768
  }
}

function truncate (buf, len) {
  if (buf.length === len) return buf
  if (buf.length > len) return buf.slice(0, len)
  var cpy = alloc(len)
  buf.copy(cpy)
  return cpy
}

function alloc (size) {
  if (Buffer.alloc) return Buffer.alloc(size)
  var buf = new Buffer(size)
  buf.fill(0)
  return buf
}

function copy (buf) {
  var cpy = Buffer.allocUnsafe ? Buffer.allocUnsafe(buf.length) : new Buffer(buf.length)
  buf.copy(cpy)
  return cpy
}

function Page (i, buf) {
  this.offset = i * buf.length
  this.buffer = buf
  this.updated = false
  this.deduplicate = 0
}

function factor (n, out) {
  n = (n - (out[0] = (n & 32767))) / 32768
  n = (n - (out[1] = (n & 32767))) / 32768
  out[3] = ((n - (out[2] = (n & 32767))) / 32768) & 32767
}
