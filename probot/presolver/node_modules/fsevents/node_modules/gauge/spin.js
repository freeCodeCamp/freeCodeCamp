'use strict'

module.exports = function spin (spinstr, spun) {
  return spinstr[spun % spinstr.length]
}
