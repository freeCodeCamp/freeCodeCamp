"use strict";

exports.__esModule = true;
const Template = require(`webpack/lib/Template`);

/**
 * Loader that creates virtual file with imports to client components
 */
module.exports = function virtual() {
  const {
    modules
  } = this.getOptions();
  const requests = modules.split(`,`);
  const code = requests.filter(Boolean)
  // Filter out css files on the server
  .map(request => {
    const chunkName = Template.toPath(request);
    return `import(/* webpackChunkName: "${chunkName}" */ ${JSON.stringify(request)})`;
  }).join(`;\n`);
  return code;
};
//# sourceMappingURL=client-components-requires-writer-loader.js.map