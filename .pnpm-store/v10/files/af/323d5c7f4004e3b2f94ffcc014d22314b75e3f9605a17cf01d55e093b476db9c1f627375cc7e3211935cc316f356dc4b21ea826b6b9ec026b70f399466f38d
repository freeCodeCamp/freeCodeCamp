(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CSSDataProvider = void 0;
    class CSSDataProvider {
        /**
         * Currently, unversioned data uses the V1 implementation
         * In the future when the provider handles multiple versions of HTML custom data,
         * use the latest implementation for unversioned data
         */
        constructor(data) {
            this._properties = [];
            this._atDirectives = [];
            this._pseudoClasses = [];
            this._pseudoElements = [];
            this.addData(data);
        }
        provideProperties() {
            return this._properties;
        }
        provideAtDirectives() {
            return this._atDirectives;
        }
        providePseudoClasses() {
            return this._pseudoClasses;
        }
        providePseudoElements() {
            return this._pseudoElements;
        }
        addData(data) {
            if (Array.isArray(data.properties)) {
                for (const prop of data.properties) {
                    if (isPropertyData(prop)) {
                        this._properties.push(prop);
                    }
                }
            }
            if (Array.isArray(data.atDirectives)) {
                for (const prop of data.atDirectives) {
                    if (isAtDirective(prop)) {
                        this._atDirectives.push(prop);
                    }
                }
            }
            if (Array.isArray(data.pseudoClasses)) {
                for (const prop of data.pseudoClasses) {
                    if (isPseudoClassData(prop)) {
                        this._pseudoClasses.push(prop);
                    }
                }
            }
            if (Array.isArray(data.pseudoElements)) {
                for (const prop of data.pseudoElements) {
                    if (isPseudoElementData(prop)) {
                        this._pseudoElements.push(prop);
                    }
                }
            }
        }
    }
    exports.CSSDataProvider = CSSDataProvider;
    function isPropertyData(d) {
        return typeof d.name === 'string';
    }
    function isAtDirective(d) {
        return typeof d.name === 'string';
    }
    function isPseudoClassData(d) {
        return typeof d.name === 'string';
    }
    function isPseudoElementData(d) {
        return typeof d.name === 'string';
    }
});
