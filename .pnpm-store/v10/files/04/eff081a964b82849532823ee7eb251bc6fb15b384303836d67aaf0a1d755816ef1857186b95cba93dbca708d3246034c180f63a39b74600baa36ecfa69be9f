const regex = require('./regex.js')

module.exports = BananaSlug

const own = Object.hasOwnProperty

function BananaSlug () {
  const self = this

  if (!(self instanceof BananaSlug)) return new BananaSlug()

  self.reset()
}

/**
 * Generate a unique slug.
 * @param  {string} value String of text to slugify
 * @param  {boolean} [false] Keep the current case, otherwise make all lowercase
 * @return {string}       A unique slug string
 */
BananaSlug.prototype.slug = function (value, maintainCase) {
  const self = this
  let slug = slugger(value, maintainCase === true)
  const originalSlug = slug

  while (own.call(self.occurrences, slug)) {
    self.occurrences[originalSlug]++
    slug = originalSlug + '-' + self.occurrences[originalSlug]
  }

  self.occurrences[slug] = 0

  return slug
}

/**
 * Reset - Forget all previous slugs
 * @return void
 */
BananaSlug.prototype.reset = function () {
  this.occurrences = Object.create(null)
}

function slugger (string, maintainCase) {
  if (typeof string !== 'string') return ''
  if (!maintainCase) string = string.toLowerCase()
  return string.replace(regex, '').replace(/ /g, '-')
}

BananaSlug.slug = slugger
