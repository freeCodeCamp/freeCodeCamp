import { cleanUrl } from '../url/cleanUrl.mjs';
import { getAbsoluteUrl } from '../url/getAbsoluteUrl.mjs';
function normalizePath(path, baseUrl) {
  if (path instanceof RegExp) {
    return path;
  }
  const maybeAbsoluteUrl = getAbsoluteUrl(path, baseUrl);
  return cleanUrl(maybeAbsoluteUrl);
}
export {
  normalizePath
};
//# sourceMappingURL=normalizePath.mjs.map