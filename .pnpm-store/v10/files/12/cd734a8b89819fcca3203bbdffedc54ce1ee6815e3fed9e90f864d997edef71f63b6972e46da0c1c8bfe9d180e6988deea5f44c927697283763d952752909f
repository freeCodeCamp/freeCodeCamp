let Value = require('../value')

class ImageSet extends Value {
  /**
   * Use non-standard name for WebKit and Firefox
   */
  replace(string, prefix) {
    let fixed = super.replace(string, prefix)
    if (prefix === '-webkit-') {
      fixed = fixed.replace(/("[^"]+"|'[^']+')(\s+\d+\w)/gi, 'url($1)$2')
    }
    return fixed
  }
}

ImageSet.names = ['image-set']

module.exports = ImageSet
