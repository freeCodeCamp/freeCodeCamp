let FractionJs = require('fraction.js')

let Prefixer = require('./prefixer')
let utils = require('./utils')

const REGEXP = /(min|max)-resolution\s*:\s*\d*\.?\d+(dppx|dpcm|dpi|x)/gi
const SPLIT = /(min|max)-resolution(\s*:\s*)(\d*\.?\d+)(dppx|dpcm|dpi|x)/i

class Resolution extends Prefixer {
  /**
   * Remove prefixed queries
   */
  clean(rule) {
    if (!this.bad) {
      this.bad = []
      for (let prefix of this.prefixes) {
        this.bad.push(this.prefixName(prefix, 'min'))
        this.bad.push(this.prefixName(prefix, 'max'))
      }
    }

    rule.params = utils.editList(rule.params, queries => {
      return queries.filter(query => this.bad.every(i => !query.includes(i)))
    })
  }

  /**
   * Return prefixed query name
   */
  prefixName(prefix, name) {
    if (prefix === '-moz-') {
      return name + '--moz-device-pixel-ratio'
    } else {
      return prefix + name + '-device-pixel-ratio'
    }
  }

  /**
   * Return prefixed query
   */
  prefixQuery(prefix, name, colon, value, units) {
    value = new FractionJs(value)

    // 1dpcm = 2.54dpi
    // 1dppx = 96dpi
    if (units === 'dpi') {
      value = value.div(96)
    } else if (units === 'dpcm') {
      value = value.mul(2.54).div(96)
    }
    value = value.simplify()

    if (prefix === '-o-') {
      value = value.n + '/' + value.d
    }
    return this.prefixName(prefix, name) + colon + value
  }

  /**
   * Add prefixed queries
   */
  process(rule) {
    let parent = this.parentPrefix(rule)
    let prefixes = parent ? [parent] : this.prefixes

    rule.params = utils.editList(rule.params, (origin, prefixed) => {
      for (let query of origin) {
        if (
          !query.includes('min-resolution') &&
          !query.includes('max-resolution')
        ) {
          prefixed.push(query)
          continue
        }

        for (let prefix of prefixes) {
          let processed = query.replace(REGEXP, str => {
            let parts = str.match(SPLIT)
            return this.prefixQuery(
              prefix,
              parts[1],
              parts[2],
              parts[3],
              parts[4]
            )
          })
          prefixed.push(processed)
        }
        prefixed.push(query)
      }

      return utils.uniq(prefixed)
    })
  }
}

module.exports = Resolution
