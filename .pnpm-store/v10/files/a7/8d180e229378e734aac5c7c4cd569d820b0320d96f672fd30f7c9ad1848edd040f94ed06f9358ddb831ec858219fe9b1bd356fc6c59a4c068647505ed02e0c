import { parse } from '../../../base/common/glob.js';
import { Mimes } from '../../../base/common/mime.js';
import { Schemas } from '../../../base/common/network.js';
import { basename, posix } from '../../../base/common/path.js';
import { DataUri } from '../../../base/common/resources.js';
import { startsWithUTF8BOM } from '../../../base/common/strings.js';
import { PLAINTEXT_LANGUAGE_ID } from '../languages/modesRegistry.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
let registeredAssociations = [];
let nonUserRegisteredAssociations = [];
let userRegisteredAssociations = [];
/**
 * Associate a language to the registry (platform).
 * * **NOTE**: This association will lose over associations registered using `registerConfiguredLanguageAssociation`.
 * * **NOTE**: Use `clearPlatformLanguageAssociations` to remove all associations registered using this function.
 */
function registerPlatformLanguageAssociation(association, warnOnOverwrite = false) {
    _registerLanguageAssociation(association, false, warnOnOverwrite);
}
function _registerLanguageAssociation(association, userConfigured, warnOnOverwrite) {
    // Register
    const associationItem = toLanguageAssociationItem(association, userConfigured);
    registeredAssociations.push(associationItem);
    if (!associationItem.userConfigured) {
        nonUserRegisteredAssociations.push(associationItem);
    }
    else {
        userRegisteredAssociations.push(associationItem);
    }
    // Check for conflicts unless this is a user configured association
    if (warnOnOverwrite && !associationItem.userConfigured) {
        registeredAssociations.forEach(a => {
            if (a.mime === associationItem.mime || a.userConfigured) {
                return; // same mime or userConfigured is ok
            }
            if (associationItem.extension && a.extension === associationItem.extension) {
                console.warn(`Overwriting extension <<${associationItem.extension}>> to now point to mime <<${associationItem.mime}>>`);
            }
            if (associationItem.filename && a.filename === associationItem.filename) {
                console.warn(`Overwriting filename <<${associationItem.filename}>> to now point to mime <<${associationItem.mime}>>`);
            }
            if (associationItem.filepattern && a.filepattern === associationItem.filepattern) {
                console.warn(`Overwriting filepattern <<${associationItem.filepattern}>> to now point to mime <<${associationItem.mime}>>`);
            }
            if (associationItem.firstline && a.firstline === associationItem.firstline) {
                console.warn(`Overwriting firstline <<${associationItem.firstline}>> to now point to mime <<${associationItem.mime}>>`);
            }
        });
    }
}
function toLanguageAssociationItem(association, userConfigured) {
    return {
        id: association.id,
        mime: association.mime,
        filename: association.filename,
        extension: association.extension,
        filepattern: association.filepattern,
        firstline: association.firstline,
        userConfigured: userConfigured,
        filenameLowercase: association.filename ? association.filename.toLowerCase() : undefined,
        extensionLowercase: association.extension ? association.extension.toLowerCase() : undefined,
        filepatternLowercase: association.filepattern ? parse(association.filepattern.toLowerCase()) : undefined,
        filepatternOnPath: association.filepattern ? association.filepattern.indexOf(posix.sep) >= 0 : false
    };
}
/**
 * Clear language associations from the registry (platform).
 */
function clearPlatformLanguageAssociations() {
    registeredAssociations = registeredAssociations.filter(a => a.userConfigured);
    nonUserRegisteredAssociations = [];
}
/**
 * @see `getMimeTypes`
 */
function getLanguageIds(resource, firstLine) {
    return getAssociations(resource, firstLine).map(item => item.id);
}
function getAssociations(resource, firstLine) {
    let path;
    if (resource) {
        switch (resource.scheme) {
            case Schemas.file:
                path = resource.fsPath;
                break;
            case Schemas.data: {
                const metadata = DataUri.parseMetaData(resource);
                path = metadata.get(DataUri.META_DATA_LABEL);
                break;
            }
            case Schemas.vscodeNotebookCell:
                // File path not relevant for language detection of cell
                path = undefined;
                break;
            default:
                path = resource.path;
        }
    }
    if (!path) {
        return [{ id: 'unknown', mime: Mimes.unknown }];
    }
    path = path.toLowerCase();
    const filename = basename(path);
    // 1.) User configured mappings have highest priority
    const configuredLanguage = getAssociationByPath(path, filename, userRegisteredAssociations);
    if (configuredLanguage) {
        return [configuredLanguage, { id: PLAINTEXT_LANGUAGE_ID, mime: Mimes.text }];
    }
    // 2.) Registered mappings have middle priority
    const registeredLanguage = getAssociationByPath(path, filename, nonUserRegisteredAssociations);
    if (registeredLanguage) {
        return [registeredLanguage, { id: PLAINTEXT_LANGUAGE_ID, mime: Mimes.text }];
    }
    // 3.) Firstline has lowest priority
    if (firstLine) {
        const firstlineLanguage = getAssociationByFirstline(firstLine);
        if (firstlineLanguage) {
            return [firstlineLanguage, { id: PLAINTEXT_LANGUAGE_ID, mime: Mimes.text }];
        }
    }
    return [{ id: 'unknown', mime: Mimes.unknown }];
}
function getAssociationByPath(path, filename, associations) {
    let filenameMatch = undefined;
    let patternMatch = undefined;
    let extensionMatch = undefined;
    // We want to prioritize associations based on the order they are registered so that the last registered
    // association wins over all other. This is for https://github.com/microsoft/vscode/issues/20074
    for (let i = associations.length - 1; i >= 0; i--) {
        const association = associations[i];
        // First exact name match
        if (filename === association.filenameLowercase) {
            filenameMatch = association;
            break; // take it!
        }
        // Longest pattern match
        if (association.filepattern) {
            if (!patternMatch || association.filepattern.length > patternMatch.filepattern.length) {
                const target = association.filepatternOnPath ? path : filename; // match on full path if pattern contains path separator
                if (association.filepatternLowercase?.(target)) {
                    patternMatch = association;
                }
            }
        }
        // Longest extension match
        if (association.extension) {
            if (!extensionMatch || association.extension.length > extensionMatch.extension.length) {
                if (filename.endsWith(association.extensionLowercase)) {
                    extensionMatch = association;
                }
            }
        }
    }
    // 1.) Exact name match has second highest priority
    if (filenameMatch) {
        return filenameMatch;
    }
    // 2.) Match on pattern
    if (patternMatch) {
        return patternMatch;
    }
    // 3.) Match on extension comes next
    if (extensionMatch) {
        return extensionMatch;
    }
    return undefined;
}
function getAssociationByFirstline(firstLine) {
    if (startsWithUTF8BOM(firstLine)) {
        firstLine = firstLine.substr(1);
    }
    if (firstLine.length > 0) {
        // We want to prioritize associations based on the order they are registered so that the last registered
        // association wins over all other. This is for https://github.com/microsoft/vscode/issues/20074
        for (let i = registeredAssociations.length - 1; i >= 0; i--) {
            const association = registeredAssociations[i];
            if (!association.firstline) {
                continue;
            }
            const matches = firstLine.match(association.firstline);
            if (matches && matches.length > 0) {
                return association;
            }
        }
    }
    return undefined;
}

export { clearPlatformLanguageAssociations, getLanguageIds, registerPlatformLanguageAssociation };
