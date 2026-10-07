"use strict";

exports.__esModule = true;
exports.deleteModuleCache = deleteModuleCache;
exports.renderHTML = renderHTML;
var _parseError = require("./parse-error");
async function renderHTML({
  path,
  componentPath,
  htmlComponentRendererPath,
  publicDir,
  isClientOnlyPage = false,
  error = undefined,
  directory,
  serverData
}) {
  try {
    const htmlComponentRenderer = require(htmlComponentRendererPath);
    if (process.env.GATSBY_EXPERIMENTAL_DEV_SSR) {
      return await htmlComponentRenderer.default({
        pagePath: path,
        isClientOnlyPage,
        publicDir,
        error,
        serverData
      });
    } else {
      return await htmlComponentRenderer.default({
        pagePath: path,
        publicDir,
        isClientOnlyPage: true
      });
    }
  } catch (err) {
    const error = (0, _parseError.parseError)({
      err,
      directory,
      componentPath,
      htmlComponentRendererPath
    });
    throw error;
  }
}
function deleteModuleCache(htmlComponentRendererPath) {
  delete require.cache[require.resolve(htmlComponentRendererPath)];
}
//# sourceMappingURL=render-dev-html-child.js.map