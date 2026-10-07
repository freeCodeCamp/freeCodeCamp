let Selector = require('../selector')

class Fullscreen extends Selector {
  /**
   * Return different selectors depend on prefix
   */
  prefixed(prefix) {
    if (prefix === '-webkit-') {
      return ':-webkit-full-screen'
    }
    if (prefix === '-moz-') {
      return ':-moz-full-screen'
    }
    return `:${prefix}fullscreen`
  }
}

Fullscreen.names = [':fullscreen']

module.exports = Fullscreen
