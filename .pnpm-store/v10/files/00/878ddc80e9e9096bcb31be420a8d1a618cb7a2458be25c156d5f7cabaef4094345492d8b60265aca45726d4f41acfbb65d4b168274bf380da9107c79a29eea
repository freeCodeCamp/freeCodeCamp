"use strict";

exports.__esModule = true;
exports.createHeadersMatcher = void 0;
var _reachRouter = require("@gatsbyjs/reach-router");
var _rankRoute = require("../rank-route");
// We don't care if the path has a trailing slash or not, but to be able to compare stuff we need to normalize it
const normalizePath = input => input.endsWith(`/`) ? input : `${input}/`;
const createHeadersMatcher = (headers, pathPrefix) => {
  function stripPathPrefix(path) {
    if (pathPrefix && path.startsWith(pathPrefix)) {
      path = path.slice(pathPrefix.length);
    }
    return path;
  }

  // Split the incoming user headers into two buckets:
  // - dynamicHeaders: Headers with dynamic paths (e.g. /* or /:tests)
  // - staticHeaders: Headers with fully static paths (e.g. /static/)
  // Also add a score using the rankRoute function to each header
  let dynamicHeaders = [];
  const staticHeaders = new Map();

  // If no custom headers are defined by the user in the gatsby-config, we can return only the default headers
  if (!headers || headers.length === 0) {
    return (_path, defaultHeaders) => defaultHeaders;
  }
  for (const header of headers) {
    const source = stripPathPrefix(header.source);
    if (source.includes(`:`) || source.includes(`*`)) {
      // rankRoute is the internal function that also "match" uses
      const score = (0, _rankRoute.rankRoute)(source);
      dynamicHeaders.push({
        ...header,
        score,
        source
      });
    } else {
      staticHeaders.set(normalizePath(source), {
        ...header,
        source
      });
    }
  }

  // Sort the dynamic headers by score, moving the ones with the highest specificity to the end of the array
  // If the score is the same, do a lexigraphic comparison of the source
  dynamicHeaders = dynamicHeaders.sort((a, b) => {
    const order = a.score - b.score;
    if (order !== 0) {
      return order;
    }
    return a.source.localeCompare(b.source);
  });
  return (path, defaultHeaders) => {
    path = stripPathPrefix(path);

    // Create a map of headers for the given path
    // The key will be the header key. Since a key may only appear once in a map, the last header with the same key will win
    const uniqueHeaders = new Map();

    // 1. Add default headers
    for (const h of defaultHeaders) {
      uniqueHeaders.set(h.key, h.value);
    }

    // 2. Add dynamic headers that match the current path
    for (const d of dynamicHeaders) {
      if ((0, _reachRouter.match)(d.source, path)) {
        for (const h of d.headers) {
          uniqueHeaders.set(h.key, h.value);
        }
      }
    }
    const staticEntry = staticHeaders.get(normalizePath(path));

    // 3. Add static headers that match the current path
    if (staticEntry) {
      for (const h of staticEntry.headers) {
        uniqueHeaders.set(h.key, h.value);
      }
    }

    // Convert the map back to an array of objects
    return Array.from(uniqueHeaders.entries()).map(([key, value]) => {
      return {
        key,
        value
      };
    });
  };
};
exports.createHeadersMatcher = createHeadersMatcher;
//# sourceMappingURL=create-headers.js.map