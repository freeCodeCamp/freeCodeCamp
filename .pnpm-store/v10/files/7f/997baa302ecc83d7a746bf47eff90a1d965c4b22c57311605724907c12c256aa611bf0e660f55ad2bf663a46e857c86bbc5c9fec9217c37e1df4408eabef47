let Declaration = require('../declaration')

class WritingMode extends Declaration {
  insert(decl, prefix, prefixes) {
    if (prefix === '-ms-') {
      let cloned = this.set(this.clone(decl), prefix)

      if (this.needCascade(decl)) {
        cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
      }
      let direction = 'ltr'

      decl.parent.nodes.forEach(i => {
        if (i.prop === 'direction') {
          if (i.value === 'rtl' || i.value === 'ltr') direction = i.value
        }
      })

      cloned.value = WritingMode.msValues[direction][decl.value] || decl.value
      return decl.parent.insertBefore(decl, cloned)
    }

    return super.insert(decl, prefix, prefixes)
  }
}

WritingMode.names = ['writing-mode']

WritingMode.msValues = {
  ltr: {
    'horizontal-tb': 'lr-tb',
    'vertical-lr': 'tb-lr',
    'vertical-rl': 'tb-rl'
  },
  rtl: {
    'horizontal-tb': 'rl-tb',
    'vertical-lr': 'bt-lr',
    'vertical-rl': 'bt-rl'
  }
}

module.exports = WritingMode
