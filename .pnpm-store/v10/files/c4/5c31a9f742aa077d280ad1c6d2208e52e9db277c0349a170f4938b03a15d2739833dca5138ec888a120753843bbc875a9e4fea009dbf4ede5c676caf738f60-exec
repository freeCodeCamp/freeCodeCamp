import { createRequire } from 'module';
import patch from './data-patch.js';

const require = createRequire(import.meta.url);
const mdnAtrules = require('mdn-data/css/at-rules.json');
const mdnProperties = require('mdn-data/css/properties.json');
const mdnSyntaxes = require('mdn-data/css/syntaxes.json');

const hasOwn = Object.hasOwn || ((object, property) => Object.prototype.hasOwnProperty.call(object, property));
const extendSyntax = /^\s*\|\s*/;

function preprocessAtrules(dict) {
    const result = Object.create(null);

    for (const [atruleName, atrule] of Object.entries(dict)) {
        let descriptors = null;

        if (atrule.descriptors) {
            descriptors = Object.create(null);

            for (const [name, descriptor] of Object.entries(atrule.descriptors)) {
                descriptors[name] = descriptor.syntax;
            }
        }

        result[atruleName.substr(1)] = {
            prelude: atrule.syntax.trim().replace(/\{(.|\s)+\}/, '').match(/^@\S+\s+([^;\{]*)/)[1].trim() || null,
            descriptors
        };
    }

    return result;
}

function patchDictionary(dict, patchDict) {
    const result = Object.create(null);

    // copy all syntaxes for an original dict
    for (const [key, value] of Object.entries(dict)) {
        if (value) {
            result[key] = value.syntax || value;
        }
    }

    // apply a patch
    for (const key of Object.keys(patchDict)) {
        if (hasOwn(dict, key)) {
            if (patchDict[key].syntax) {
                result[key] = extendSyntax.test(patchDict[key].syntax)
                    ? result[key] + ' ' + patchDict[key].syntax.trim()
                    : patchDict[key].syntax;
            } else {
                delete result[key];
            }
        } else {
            if (patchDict[key].syntax) {
                result[key] = patchDict[key].syntax.replace(extendSyntax, '');
            }
        }
    }

    return result;
}

function preprocessPatchAtrulesDescritors(declarations) {
    const result = {};

    for (const [key, value] of Object.entries(declarations || {})) {
        result[key] = typeof value === 'string'
            ? { syntax: value }
            : value;
    }

    return result;
}

function patchAtrules(dict, patchDict) {
    const result = {};

    // copy all syntaxes for an original dict
    for (const key in dict) {
        if (patchDict[key] === null) {
            continue;
        }

        const atrulePatch = patchDict[key] || {};

        result[key] = {
            prelude: key in patchDict && 'prelude' in atrulePatch
                ? atrulePatch.prelude
                : dict[key].prelude || null,
            descriptors: patchDictionary(
                dict[key].descriptors || {},
                preprocessPatchAtrulesDescritors(atrulePatch.descriptors)
            )
        };
    }

    // apply a patch
    for (const [key, atrulePatch] of Object.entries(patchDict)) {
        if (atrulePatch && !hasOwn(dict, key)) {
            result[key] = {
                prelude: atrulePatch.prelude || null,
                descriptors: atrulePatch.descriptors
                    ? patchDictionary({}, preprocessPatchAtrulesDescritors(atrulePatch.descriptors))
                    : null
            };
        }
    }

    return result;
}

export default {
    types: patchDictionary(mdnSyntaxes, patch.types),
    atrules: patchAtrules(preprocessAtrules(mdnAtrules), patch.atrules),
    properties: patchDictionary(mdnProperties, patch.properties)
};
