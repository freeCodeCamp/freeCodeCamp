'use strict'

let Warning = require('./warning')

class Result {
  get content() {
    return this.css
  }

  constructor(processor, root, opts) {
    this.processor = processor
    this.messages = []
    this.root = root
    this.opts = opts
    this.css = ''
    this.map = undefined
  }

  toString() {
    return this.css
  }

  warn(text, opts = {}) {
    if (!opts.plugin) {
      if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
        opts.plugin = this.lastPlugin.postcssPlugin
      }
    }

    let warning = new Warning(text, opts)
    this.messages.push(warning)

    return warning
  }

  warnings() {
    return this.messages.filter(i => i.type === 'warning')
  }
}

module.exports = Result
Result.default = Result
