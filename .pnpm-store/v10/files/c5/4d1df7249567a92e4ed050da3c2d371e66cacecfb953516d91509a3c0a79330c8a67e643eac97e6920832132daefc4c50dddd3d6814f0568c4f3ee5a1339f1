var normalizeUri = require('micromark/dist/util/normalize-uri')

exports.exit = {
  literalAutolinkEmail: literalAutolinkEmail,
  literalAutolinkHttp: literalAutolinkHttp,
  literalAutolinkWww: literalAutolinkWww
}

function literalAutolinkWww(token) {
  return anchorFromToken.call(this, token, 'http://')
}

function literalAutolinkEmail(token) {
  return anchorFromToken.call(this, token, 'mailto:')
}

function literalAutolinkHttp(token) {
  return anchorFromToken.call(this, token)
}

function anchorFromToken(token, protocol) {
  var url = this.sliceSerialize(token)
  this.tag(
    '<a href="' + this.encode(normalizeUri((protocol || '') + url)) + '">'
  )
  this.raw(this.encode(url))
  this.tag('</a>')
}
