module.exports = {
  prefix(prop) {
    let match = prop.match(/^(-\w+-)/)
    if (match) {
      return match[0]
    }

    return ''
  },

  unprefixed(prop) {
    return prop.replace(/^-\w+-/, '')
  }
}
