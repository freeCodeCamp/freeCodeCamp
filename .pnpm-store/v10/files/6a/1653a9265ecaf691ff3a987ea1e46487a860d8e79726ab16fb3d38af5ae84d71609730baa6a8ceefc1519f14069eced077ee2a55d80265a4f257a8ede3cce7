// TODO: consolidate on using a helpers file at some point in the future, which
// is the approach currently used to export Parser and applyExtends for ESM:
const {applyExtends, cjsPlatformShim, Parser, Yargs, processArgv} = require('./build/index.cjs')
Yargs.applyExtends = (config, cwd, mergeExtends) => {
  return applyExtends(config, cwd, mergeExtends, cjsPlatformShim)
}
Yargs.hideBin = processArgv.hideBin
Yargs.Parser = Parser
module.exports = Yargs
