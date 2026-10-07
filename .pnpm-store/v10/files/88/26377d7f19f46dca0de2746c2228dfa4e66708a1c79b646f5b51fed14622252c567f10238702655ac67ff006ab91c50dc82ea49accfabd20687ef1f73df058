(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../utils/objects", "../data/webCustomData", "./dataProvider"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CSSDataManager = void 0;
    const objects = require("../utils/objects");
    const webCustomData_1 = require("../data/webCustomData");
    const dataProvider_1 = require("./dataProvider");
    class CSSDataManager {
        constructor(options) {
            this.dataProviders = [];
            this._propertySet = {};
            this._atDirectiveSet = {};
            this._pseudoClassSet = {};
            this._pseudoElementSet = {};
            this._properties = [];
            this._atDirectives = [];
            this._pseudoClasses = [];
            this._pseudoElements = [];
            this.setDataProviders(options?.useDefaultDataProvider !== false, options?.customDataProviders || []);
        }
        setDataProviders(builtIn, providers) {
            this.dataProviders = [];
            if (builtIn) {
                this.dataProviders.push(new dataProvider_1.CSSDataProvider(webCustomData_1.cssData));
            }
            this.dataProviders.push(...providers);
            this.collectData();
        }
        /**
         * Collect all data  & handle duplicates
         */
        collectData() {
            this._propertySet = {};
            this._atDirectiveSet = {};
            this._pseudoClassSet = {};
            this._pseudoElementSet = {};
            this.dataProviders.forEach(provider => {
                provider.provideProperties().forEach(p => {
                    if (!this._propertySet[p.name]) {
                        this._propertySet[p.name] = p;
                    }
                });
                provider.provideAtDirectives().forEach(p => {
                    if (!this._atDirectiveSet[p.name]) {
                        this._atDirectiveSet[p.name] = p;
                    }
                });
                provider.providePseudoClasses().forEach(p => {
                    if (!this._pseudoClassSet[p.name]) {
                        this._pseudoClassSet[p.name] = p;
                    }
                });
                provider.providePseudoElements().forEach(p => {
                    if (!this._pseudoElementSet[p.name]) {
                        this._pseudoElementSet[p.name] = p;
                    }
                });
            });
            this._properties = objects.values(this._propertySet);
            this._atDirectives = objects.values(this._atDirectiveSet);
            this._pseudoClasses = objects.values(this._pseudoClassSet);
            this._pseudoElements = objects.values(this._pseudoElementSet);
        }
        getProperty(name) { return this._propertySet[name]; }
        getAtDirective(name) { return this._atDirectiveSet[name]; }
        getPseudoClass(name) { return this._pseudoClassSet[name]; }
        getPseudoElement(name) { return this._pseudoElementSet[name]; }
        getProperties() {
            return this._properties;
        }
        getAtDirectives() {
            return this._atDirectives;
        }
        getPseudoClasses() {
            return this._pseudoClasses;
        }
        getPseudoElements() {
            return this._pseudoElements;
        }
        isKnownProperty(name) {
            return name.toLowerCase() in this._propertySet;
        }
        isStandardProperty(name) {
            return this.isKnownProperty(name) &&
                (!this._propertySet[name.toLowerCase()].status || this._propertySet[name.toLowerCase()].status === 'standard');
        }
    }
    exports.CSSDataManager = CSSDataManager;
});
