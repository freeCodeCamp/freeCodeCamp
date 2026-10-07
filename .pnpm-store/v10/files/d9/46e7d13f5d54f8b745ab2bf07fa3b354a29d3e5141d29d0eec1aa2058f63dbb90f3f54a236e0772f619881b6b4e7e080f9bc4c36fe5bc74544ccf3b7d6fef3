const {
  applyExtends,
  cjsPlatformShim,
  Parser,
  processArgv,
} = require('../build/index.cjs');

module.exports = {
  applyExtends: (config, cwd, mergeExtends) => {
    return applyExtends(config, cwd, mergeExtends, cjsPlatformShim);
  },
  hideBin: processArgv.hideBin,
  Parser,
};
