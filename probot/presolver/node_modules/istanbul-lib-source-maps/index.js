/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
"use strict";

var MapStore = require('./lib/map-store').MapStore;
/**
 * @module Exports
 */
module.exports = {
    createSourceMapStore: function (opts) {
        return new MapStore(opts);
    }
};


