module.exports = function (scope, npmrc) {
  var rc = npmrc || require('rc')('npm', {registry: 'https://registry.npmjs.org/'})
  var url = rc[scope + ':registry'] || rc.registry
  return url.slice(-1) === '/' ? url : url + '/'
}
