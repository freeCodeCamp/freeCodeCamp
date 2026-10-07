const npmConf = require('@pnpm/npm-conf')

module.exports = function getRegistryUrl (scope, npmrc) {
  const rc = npmrc ? { config: { get: (key) => npmrc[key] } } : npmConf()
  const url = rc.config.get(scope + ':registry') || rc.config.get('registry') || npmConf.defaults.registry
  return url.slice(-1) === '/' ? url : url + '/'
}
