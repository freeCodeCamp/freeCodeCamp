'use strict'

module.exports = testFile => {
  // Ignore coverage on files that do not have a direct corollary.
  if (testFile.startsWith('test/')) return false

  // Indicate the matching name, sans '.test.js', should be checked for coverage.
  return testFile.replace(/\.test\.js$/, '.js')
}
