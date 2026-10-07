module.exports = formatPretty

var toHexadecimal = require('./to-hexadecimal')
var toDecimal = require('./to-decimal')
var toNamed = require('./to-named')

// Encode `character` according to `options`.
function formatPretty(code, next, options) {
  var named
  var numeric
  var decimal

  if (options.useNamedReferences || options.useShortestReferences) {
    named = toNamed(
      code,
      next,
      options.omitOptionalSemicolons,
      options.attribute
    )
  }

  if (options.useShortestReferences || !named) {
    numeric = toHexadecimal(code, next, options.omitOptionalSemicolons)

    // Use the shortest numeric reference when requested.
    // A simple algorithm would use decimal for all code points under 100, as
    // those are shorter than hexadecimal:
    //
    // * `&#99;` vs `&#x63;` (decimal shorter)
    // * `&#100;` vs `&#x64;` (equal)
    //
    // However, because we take `next` into consideration when `omit` is used,
    // And it would be possible that decimals are shorter on bigger values as
    // well if `next` is hexadecimal but not decimal, we instead compare both.
    if (options.useShortestReferences) {
      decimal = toDecimal(code, next, options.omitOptionalSemicolons)

      if (decimal.length < numeric.length) {
        numeric = decimal
      }
    }
  }

  return named &&
    (!options.useShortestReferences || named.length < numeric.length)
    ? named
    : numeric
}
