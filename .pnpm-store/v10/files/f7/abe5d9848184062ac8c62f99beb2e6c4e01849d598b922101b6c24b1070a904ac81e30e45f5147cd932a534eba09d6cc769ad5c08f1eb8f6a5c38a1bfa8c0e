"use strict";

exports.__esModule = true;
exports.hasFeature = hasFeature;
/**
 * Check the readme for a list of available features.
 */
function hasFeature(name) {
  try {
    var _availableAPIs$featur;
    const availableAPIs = require(`gatsby/apis.json`);
    return !!(availableAPIs !== null && availableAPIs !== void 0 && (_availableAPIs$featur = availableAPIs.features) !== null && _availableAPIs$featur !== void 0 && _availableAPIs$featur.includes(name));
  } catch (e) {
    throw new Error(`Couldn't check available APIs. Make sure you are on gatsby version >=2.13.41`);
  }
}