module.exports = emphasis
emphasis.peek = emphasisPeek

var checkEmphasis = require('../util/check-emphasis')
var phrasing = require('../util/container-phrasing')

// To do: there are cases where emphasis cannot “form” depending on the
// previous or next character of sequences.
// There’s no way around that though, except for injecting zero-width stuff.
// Do we need to safeguard against that?
function emphasis(node, _, context) {
  var marker = checkEmphasis(context)
  var exit = context.enter('emphasis')
  var value = phrasing(node, context, {before: marker, after: marker})
  exit()
  return marker + value + marker
}

function emphasisPeek(node, _, context) {
  return context.options.emphasis || '*'
}
