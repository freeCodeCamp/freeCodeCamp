function Caseless (dict) {
  this.dict = dict || {}
}
Caseless.prototype.set = function (name, value, clobber) {
  if (typeof name === 'object') {
    for (var i in name) {
      this.set(i, name[i], value)
    }
  } else {
    if (typeof clobber === 'undefined') clobber = true
    var has = this.has(name)

    if (!clobber && has) this.dict[has] = this.dict[has] + ',' + value
    else this.dict[has || name] = value
    return has
  }
}
Caseless.prototype.has = function (name) {
  var keys = Object.keys(this.dict)
    , name = name.toLowerCase()
    ;
  for (var i=0;i<keys.length;i++) {
    if (keys[i].toLowerCase() === name) return keys[i]
  }
  return false
}
Caseless.prototype.get = function (name) {
  name = name.toLowerCase()
  var result, _key
  var headers = this.dict
  Object.keys(headers).forEach(function (key) {
    _key = key.toLowerCase()
    if (name === _key) result = headers[key]
  })
  return result
}
Caseless.prototype.swap = function (name) {
  var has = this.has(name)
  if (has === name) return
  if (!has) throw new Error('There is no header than matches "'+name+'"')
  this.dict[name] = this.dict[has]
  delete this.dict[has]
}
Caseless.prototype.del = function (name) {
  var has = this.has(name)
  return delete this.dict[has || name]
}

module.exports = function (dict) {return new Caseless(dict)}
module.exports.httpify = function (resp, headers) {
  var c = new Caseless(headers)
  resp.setHeader = function (key, value, clobber) {
    if (typeof value === 'undefined') return
    return c.set(key, value, clobber)
  }
  resp.hasHeader = function (key) {
    return c.has(key)
  }
  resp.getHeader = function (key) {
    return c.get(key)
  }
  resp.removeHeader = function (key) {
    return c.del(key)
  }
  resp.headers = c.dict
  return c
}
