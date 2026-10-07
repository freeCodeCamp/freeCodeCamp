// Core state object
//

import Token from '../token.mjs'

function StateCore (src, md, env) {
  this.src = src
  this.env = env
  this.tokens = []
  this.inlineMode = false
  this.md = md // link to parser instance
}

// re-export Token class to use in core rules
StateCore.prototype.Token = Token

export default StateCore
