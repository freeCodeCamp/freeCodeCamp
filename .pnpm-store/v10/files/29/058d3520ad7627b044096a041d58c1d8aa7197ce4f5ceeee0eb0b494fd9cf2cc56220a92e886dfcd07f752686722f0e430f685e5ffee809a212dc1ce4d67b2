'use strict';

var EventEmitter = require('@algolia/events');

var inherits = require('../functions/inherits');

/**
 * A DerivedHelper is a way to create sub requests to
 * Algolia from a main helper.
 * @class
 * @classdesc The DerivedHelper provides an event based interface for search callbacks:
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 * @param {AlgoliaSearchHelper} mainHelper the main helper
 * @param {function} fn the function to create the derived state for search
 * @param {function} recommendFn the function to create the derived state for recommendations
 */
function DerivedHelper(mainHelper, fn, recommendFn) {
  this.main = mainHelper;
  this.fn = fn;
  this.recommendFn = recommendFn;
  this.lastResults = null;
  this.lastRecommendResults = null;
}

inherits(DerivedHelper, EventEmitter);

/**
 * Detach this helper from the main helper
 * @return {undefined}
 * @throws Error if the derived helper is already detached
 */
DerivedHelper.prototype.detach = function () {
  this.removeAllListeners();
  this.main.detachDerivedHelper(this);
};

DerivedHelper.prototype.getModifiedState = function (parameters) {
  return this.fn(parameters);
};

DerivedHelper.prototype.getModifiedRecommendState = function (parameters) {
  return this.recommendFn(parameters);
};

module.exports = DerivedHelper;
