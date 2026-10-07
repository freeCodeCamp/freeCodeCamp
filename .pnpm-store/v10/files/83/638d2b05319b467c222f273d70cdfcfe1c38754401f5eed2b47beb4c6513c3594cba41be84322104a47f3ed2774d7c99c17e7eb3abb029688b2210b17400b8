import { values } from '../utils/objects.js';
import { cssData } from '../data/webCustomData.js';
import { CSSDataProvider } from './dataProvider.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
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
            this.dataProviders.push(new CSSDataProvider(cssData));
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
        this._properties = values(this._propertySet);
        this._atDirectives = values(this._atDirectiveSet);
        this._pseudoClasses = values(this._pseudoClassSet);
        this._pseudoElements = values(this._pseudoElementSet);
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

export { CSSDataManager };
