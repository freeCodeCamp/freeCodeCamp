var reIpv4FirstPass = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/

var reSubnetString = /\/\d{1,3}(?=%|$)/
var reForwardSlash = /\//
var reZone = /%.*$/
var reBadCharacters = /([^0-9a-f:/%])/i
var reBadAddress = /([0-9a-f]{5,}|:{3,}|[^:]:$|^:[^:]|\/$)/i

function validate4 (input) {
  if (!(reIpv4FirstPass.test(input))) return false

  var parts = input.split('.')

  if (parts.length !== 4) return false

  if (parts[0][0] === '0' && parts[0].length > 1) return false
  if (parts[1][0] === '0' && parts[1].length > 1) return false
  if (parts[2][0] === '0' && parts[2].length > 1) return false
  if (parts[3][0] === '0' && parts[3].length > 1) return false

  var n0 = Number(parts[0])
  var n1 = Number(parts[1])
  var n2 = Number(parts[2])
  var n3 = Number(parts[3])

  return (n0 >= 0 && n0 < 256 && n1 >= 0 && n1 < 256 && n2 >= 0 && n2 < 256 && n3 >= 0 && n3 < 256)
}

function validate6 (input) {
  var withoutSubnet = input.replace(reSubnetString, '')
  var hasSubnet = (input.length !== withoutSubnet.length)

  // FIXME: this should probably be an option in the future
  if (hasSubnet) return false

  if (!hasSubnet) {
    if (reForwardSlash.test(input)) return false
  }

  var withoutZone = withoutSubnet.replace(reZone, '')
  var lastPartSeparator = withoutZone.lastIndexOf(':')

  if (lastPartSeparator === -1) return false

  var lastPart = withoutZone.substring(lastPartSeparator + 1)
  var hasV4Part = validate4(lastPart)
  var address = (hasV4Part ? withoutZone.substring(0, lastPartSeparator + 1) + '1234:5678' : withoutZone)

  if (reBadCharacters.test(address)) return false
  if (reBadAddress.test(address)) return false

  var halves = address.split('::')

  if (halves.length > 2) return false

  if (halves.length === 2) {
    var first = (halves[0] === '' ? [] : halves[0].split(':'))
    var last = (halves[1] === '' ? [] : halves[1].split(':'))
    var remainingLength = 8 - (first.length + last.length)

    if (remainingLength <= 0) return false
  } else {
    if (address.split(':').length !== 8) return false
  }

  return true
}

function validate (input) {
  return validate4(input) || validate6(input)
}

module.exports = function validator (options) {
  if (!options) options = {}

  if (options.version === 4) return validate4
  if (options.version === 6) return validate6
  if (options.version == null) return validate

  throw new Error('Unknown version: ' + options.version)
}

module.exports['__all_regexes__'] = [
  reIpv4FirstPass,
  reSubnetString,
  reForwardSlash,
  reZone,
  reBadCharacters,
  reBadAddress
]
