import { getNLSLanguage, getNLSMessages } from './nls.messages.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// eslint-disable-next-line local/code-import-patterns
const isPseudo = getNLSLanguage() === 'pseudo' || (typeof document !== 'undefined' && document.location && typeof document.location.hash === 'string' && document.location.hash.indexOf('pseudo=true') >= 0);
function _format(message, args) {
    let result;
    if (args.length === 0) {
        result = message;
    }
    else {
        result = message.replace(/\{(\d+)\}/g, (match, rest) => {
            const index = rest[0];
            const arg = args[index];
            let result = match;
            if (typeof arg === 'string') {
                result = arg;
            }
            else if (typeof arg === 'number' || typeof arg === 'boolean' || arg === void 0 || arg === null) {
                result = String(arg);
            }
            return result;
        });
    }
    if (isPseudo) {
        // FF3B and FF3D is the Unicode zenkaku representation for [ and ]
        result = '\uFF3B' + result.replace(/[aouei]/g, '$&$&') + '\uFF3D';
    }
    return result;
}
/**
 * @skipMangle
 */
function localize(data /* | number when built */, message /* | null when built */, ...args) {
    if (typeof data === 'number') {
        return _format(lookupMessage(data, message), args);
    }
    return _format(message, args);
}
/**
 * Only used when built: Looks up the message in the global NLS table.
 * This table is being made available as a global through bootstrapping
 * depending on the target context.
 */
function lookupMessage(index, fallback) {
    const message = getNLSMessages()?.[index];
    if (typeof message !== 'string') {
        if (typeof fallback === 'string') {
            return fallback;
        }
        throw new Error(`!!! NLS MISSING: ${index} !!!`);
    }
    return message;
}
/**
 * @skipMangle
 */
function localize2(data /* | number when built */, originalMessage, ...args) {
    let message;
    if (typeof data === 'number') {
        message = lookupMessage(data, originalMessage);
    }
    else {
        message = originalMessage;
    }
    const value = _format(message, args);
    return {
        value,
        original: originalMessage === message ? value : _format(originalMessage, args)
    };
}

export { getNLSLanguage, getNLSMessages, localize, localize2 };
