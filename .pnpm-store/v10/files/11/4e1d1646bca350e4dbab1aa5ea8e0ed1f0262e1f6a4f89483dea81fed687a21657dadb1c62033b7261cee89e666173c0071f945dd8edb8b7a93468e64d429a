"use strict";

exports.__esModule = true;
exports.PERMANENT_CACHE_CONTROL_HEADER = exports.PERMAMENT_CACHING_HEADERS = exports.MUST_REVALIDATE_HEADERS = exports.BASE_HEADERS = void 0;
const BASE_HEADERS = [{
  key: `x-xss-protection`,
  value: `1; mode=block`
}, {
  key: `x-content-type-options`,
  value: `nosniff`
}, {
  key: `referrer-policy`,
  value: `same-origin`
}, {
  key: `x-frame-options`,
  value: `DENY`
}];
exports.BASE_HEADERS = BASE_HEADERS;
const MUST_REVALIDATE_HEADERS = [{
  key: `cache-control`,
  value: `public, max-age=0, must-revalidate`
}, ...BASE_HEADERS];
exports.MUST_REVALIDATE_HEADERS = MUST_REVALIDATE_HEADERS;
const PERMANENT_CACHE_CONTROL_HEADER = [{
  key: `cache-control`,
  value: `public, max-age=31536000, immutable`
}];
exports.PERMANENT_CACHE_CONTROL_HEADER = PERMANENT_CACHE_CONTROL_HEADER;
const PERMAMENT_CACHING_HEADERS = [...PERMANENT_CACHE_CONTROL_HEADER, ...BASE_HEADERS];
exports.PERMAMENT_CACHING_HEADERS = PERMAMENT_CACHING_HEADERS;
//# sourceMappingURL=constants.js.map