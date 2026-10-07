import { memoize } from './decorators.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class LinkedText {
    constructor(nodes) {
        this.nodes = nodes;
    }
    toString() {
        return this.nodes.map(node => typeof node === 'string' ? node : node.label).join('');
    }
}
__decorate([
    memoize
], LinkedText.prototype, "toString", null);
const LINK_REGEX = /\[([^\]]+)\]\(((?:https?:\/\/|command:|file:)[^\)\s]+)(?: (["'])(.+?)(\3))?\)/gi;
function parseLinkedText(text) {
    const result = [];
    let index = 0;
    let match;
    while (match = LINK_REGEX.exec(text)) {
        if (match.index - index > 0) {
            result.push(text.substring(index, match.index));
        }
        const [, label, href, , title] = match;
        if (title) {
            result.push({ label, href, title });
        }
        else {
            result.push({ label, href });
        }
        index = match.index + match[0].length;
    }
    if (index < text.length) {
        result.push(text.substring(index));
    }
    return new LinkedText(result);
}

export { LinkedText, parseLinkedText };
