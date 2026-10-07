"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearBuildCaches = clearBuildCaches;
exports.createBuildCache = createBuildCache;
const buildCaches = [];

function createBuildCache() {
  let cache = new Map();
  buildCaches.push(cache);
  return cache;
}

function clearBuildCaches() {
  for (let cache of buildCaches) {
    cache.clear();
  }
}