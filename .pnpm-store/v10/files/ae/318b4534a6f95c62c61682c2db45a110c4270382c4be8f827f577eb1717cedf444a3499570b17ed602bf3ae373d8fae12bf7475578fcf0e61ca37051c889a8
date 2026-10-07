var ccount = require('ccount')
var findAndReplace = require('mdast-util-find-and-replace')
var unicodePunctuation = require('micromark/dist/character/unicode-punctuation')
var unicodeWhitespace = require('micromark/dist/character/unicode-whitespace')

exports.transforms = [transformGfmAutolinkLiterals]
exports.enter = {
  literalAutolink: enterLiteralAutolink,
  literalAutolinkEmail: enterLiteralAutolinkValue,
  literalAutolinkHttp: enterLiteralAutolinkValue,
  literalAutolinkWww: enterLiteralAutolinkValue
}
exports.exit = {
  literalAutolink: exitLiteralAutolink,
  literalAutolinkEmail: exitLiteralAutolinkEmail,
  literalAutolinkHttp: exitLiteralAutolinkHttp,
  literalAutolinkWww: exitLiteralAutolinkWww
}

function enterLiteralAutolink(token) {
  this.enter({type: 'link', title: null, url: '', children: []}, token)
}

function enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token)
}

function exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token)
}

function exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token)
  this.stack[this.stack.length - 1].url = 'http://' + this.sliceSerialize(token)
}

function exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token)
}

function exitLiteralAutolink(token) {
  this.exit(token)
}

function transformGfmAutolinkLiterals(tree) {
  findAndReplace(
    tree,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/i, findUrl],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/, findEmail]
    ],
    {ignore: ['link', 'linkReference']}
  )
}

function findUrl($0, protocol, domain, path, match) {
  var prefix = ''
  var parts
  var result

  // Not an expected previous character.
  if (!previous(match)) {
    return false
  }

  // Treat `www` as part of the domain.
  if (/^w/i.test(protocol)) {
    domain = protocol + domain
    protocol = ''
    prefix = 'http://'
  }

  if (!isCorrectDomain(domain)) {
    return false
  }

  parts = splitUrl(domain + path)

  if (!parts[0]) return false

  result = {
    type: 'link',
    title: null,
    url: prefix + protocol + parts[0],
    children: [{type: 'text', value: protocol + parts[0]}]
  }

  if (parts[1]) {
    result = [result, {type: 'text', value: parts[1]}]
  }

  return result
}

function findEmail($0, atext, label, match) {
  // Not an expected previous character.
  if (!previous(match, true) || /[_-]$/.test(label)) {
    return false
  }

  return {
    type: 'link',
    title: null,
    url: 'mailto:' + atext + '@' + label,
    children: [{type: 'text', value: atext + '@' + label}]
  }
}

function isCorrectDomain(domain) {
  var parts = domain.split('.')

  if (
    parts.length < 2 ||
    (parts[parts.length - 1] &&
      (/_/.test(parts[parts.length - 1]) ||
        !/[a-zA-Z\d]/.test(parts[parts.length - 1]))) ||
    (parts[parts.length - 2] &&
      (/_/.test(parts[parts.length - 2]) ||
        !/[a-zA-Z\d]/.test(parts[parts.length - 2])))
  ) {
    return false
  }

  return true
}

function splitUrl(url) {
  var trail = /[!"&'),.:;<>?\]}]+$/.exec(url)
  var closingParenIndex
  var openingParens
  var closingParens

  if (trail) {
    url = url.slice(0, trail.index)
    trail = trail[0]
    closingParenIndex = trail.indexOf(')')
    openingParens = ccount(url, '(')
    closingParens = ccount(url, ')')

    while (closingParenIndex !== -1 && openingParens > closingParens) {
      url += trail.slice(0, closingParenIndex + 1)
      trail = trail.slice(closingParenIndex + 1)
      closingParenIndex = trail.indexOf(')')
      closingParens++
    }
  }

  return [url, trail]
}

function previous(match, email) {
  var code = match.input.charCodeAt(match.index - 1)
  return (
    (code !== code || unicodeWhitespace(code) || unicodePunctuation(code)) &&
    (!email || code !== 47)
  )
}
