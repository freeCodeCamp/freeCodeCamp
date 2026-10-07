import { match } from "path-to-regexp";
import { getCleanUrl } from "@mswjs/interceptors";
import { normalizePath } from './normalizePath.mjs';
function coercePath(path) {
  return path.replace(
    /([:a-zA-Z_-]*)(\*{1,2})+/g,
    (_, parameterName, wildcard) => {
      const expression = "(.*)";
      if (!parameterName) {
        return expression;
      }
      return parameterName.startsWith(":") ? `${parameterName}${wildcard}` : `${parameterName}${expression}`;
    }
  ).replace(/([^/])(:)(?=(?:\d+|\(\.\*\))(?=\/|$))/, "$1\\$2").replace(/^([^/]+)(:)(?=\/\/)/, "$1\\$2");
}
function matchRequestUrl(url, path, baseUrl) {
  const normalizedPath = normalizePath(path, baseUrl);
  const cleanPath = typeof normalizedPath === "string" ? coercePath(normalizedPath) : normalizedPath;
  const cleanUrl = getCleanUrl(url);
  const result = match(cleanPath, { decode: decodeURIComponent })(cleanUrl);
  const params = result && result.params || {};
  return {
    matches: result !== false,
    params
  };
}
function isPath(value) {
  return typeof value === "string" || value instanceof RegExp;
}
export {
  coercePath,
  isPath,
  matchRequestUrl
};
//# sourceMappingURL=matchRequestUrl.mjs.map