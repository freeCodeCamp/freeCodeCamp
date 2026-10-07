import { isAbsoluteUrl } from './isAbsoluteUrl.mjs';
function getAbsoluteUrl(path, baseUrl) {
  if (isAbsoluteUrl(path)) {
    return path;
  }
  if (path.startsWith("*")) {
    return path;
  }
  const origin = baseUrl || typeof location !== "undefined" && location.href;
  return origin ? (
    // Encode and decode the path to preserve escaped characters.
    decodeURI(new URL(encodeURI(path), origin).href)
  ) : path;
}
export {
  getAbsoluteUrl
};
//# sourceMappingURL=getAbsoluteUrl.mjs.map