"use strict";

exports.__esModule = true;
exports.getPublicPath = void 0;
const trimSlashes = part => part.replace(/(^\/)|(\/$)/g, ``);
const isURL = possibleUrl => [`http://`, `https://`, `//`].some(expr => possibleUrl.startsWith(expr));
const getPublicPath = ({
  assetPrefix,
  pathPrefix,
  prefixPaths
}) => {
  if (prefixPaths && (assetPrefix || pathPrefix)) {
    const normalized = [assetPrefix, pathPrefix].filter(part => part ? part.length > 0 : false).map(part => trimSlashes(part)).join(`/`);
    return isURL(normalized) ? normalized : `/${normalized}`;
  }
  return ``;
};
exports.getPublicPath = getPublicPath;
//# sourceMappingURL=get-public-path.js.map