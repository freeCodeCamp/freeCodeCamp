"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _reporter = _interopRequireDefault(require("../reporter"));
var _default = async (root, cmd) => {
  switch (cmd) {
    case `docs`:
      console.log(`
Using a plugin:
- What is a Plugin? (https://www.gatsbyjs.com/docs/what-is-a-plugin/)
- Using a Plugin in Your Site (https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/using-a-plugin-in-your-site/)
- Loading Plugins from Your Local Plugins Folder (https://www.gatsbyjs.com/docs/loading-plugins-from-your-local-plugins-folder/)
- Plugin Library (https://www.gatsbyjs.com/plugins/)

Creating a plugin:
- Naming a Plugin (https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/naming-a-plugin/)
- Files Gatsby Looks for in a Plugin (https://www.gatsbyjs.com/docs/files-gatsby-looks-for-in-a-plugin/)
- Creating a Generic Plugin (https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/creating-a-generic-plugin/)
- Creating a Local Plugin (https://www.gatsbyjs.com/docs/creating-a-local-plugin/)
- Creating a Source Plugin (https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/creating-a-source-plugin/)
- Creating a Transformer Plugin (https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/creating-a-transformer-plugin/)
- Submit to Plugin Library (https://www.gatsbyjs.com/contributing/submit-to-plugin-library/)
- Maintaining a Plugin (https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/maintaining-a-plugin/)
`);
      return;
    case `ls`:
      {
        try {
          const plugins = await (0, _gatsbyCoreUtils.listPlugins)({
            root
          });
          let list = ``;
          plugins.forEach(plugin => list += `- ${plugin}\n`);
          console.log(`
Following plugins are installed:

${list}
        `);
        } catch {
          _reporter.default.error(`There was a problem parsing your \`gatsby-config.js\` file.\nIt may be malformed. Or, the syntax you're using is not currently supported by this command.`);
        }
        return;
      }
    default:
      _reporter.default.error(`Unknown command ${cmd}`);
  }
  return;
};
exports.default = _default;