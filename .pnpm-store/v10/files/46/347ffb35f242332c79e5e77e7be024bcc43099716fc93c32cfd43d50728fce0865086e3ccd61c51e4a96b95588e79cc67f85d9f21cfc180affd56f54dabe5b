import { HTMLDataProvider } from './dataProvider.js';
import { htmlData } from './data/webCustomData.js';
import { binarySearch } from '../utils/arrays.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class HTMLDataManager {
    constructor(options) {
        this.dataProviders = [];
        this.setDataProviders(options.useDefaultDataProvider !== false, options.customDataProviders || []);
    }
    setDataProviders(builtIn, providers) {
        this.dataProviders = [];
        if (builtIn) {
            this.dataProviders.push(new HTMLDataProvider('html5', htmlData));
        }
        this.dataProviders.push(...providers);
    }
    getDataProviders() {
        return this.dataProviders;
    }
    isVoidElement(e, voidElements) {
        return !!e && binarySearch(voidElements, e.toLowerCase(), (s1, s2) => s1.localeCompare(s2)) >= 0;
    }
    getVoidElements(languageOrProviders) {
        const dataProviders = Array.isArray(languageOrProviders) ? languageOrProviders : this.getDataProviders().filter(p => p.isApplicable(languageOrProviders));
        const voidTags = [];
        dataProviders.forEach((provider) => {
            provider.provideTags().filter(tag => tag.void).forEach(tag => voidTags.push(tag.name));
        });
        return voidTags.sort();
    }
    isPathAttribute(tag, attr) {
        // should eventually come from custom data
        if (attr === 'src' || attr === 'href') {
            return true;
        }
        const a = PATH_TAG_AND_ATTR[tag];
        if (a) {
            if (typeof a === 'string') {
                return a === attr;
            }
            else {
                return a.indexOf(attr) !== -1;
            }
        }
        return false;
    }
}
// Selected from https://stackoverflow.com/a/2725168/1780148
const PATH_TAG_AND_ATTR = {
    // HTML 4
    a: 'href',
    area: 'href',
    body: 'background',
    blockquote: 'cite',
    del: 'cite',
    form: 'action',
    frame: ['src', 'longdesc'],
    img: ['src', 'longdesc'],
    ins: 'cite',
    link: 'href',
    object: 'data',
    q: 'cite',
    script: 'src',
    // HTML 5
    audio: 'src',
    button: 'formaction',
    command: 'icon',
    embed: 'src',
    html: 'manifest',
    input: ['src', 'formaction'],
    source: 'src',
    track: 'src',
    video: ['src', 'poster']
};

export { HTMLDataManager };
