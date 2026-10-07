import { Schemas } from '../../../base/common/network.js';
import { DataUri } from '../../../base/common/resources.js';
import { URI } from '../../../base/common/uri.js';
import { PLAINTEXT_LANGUAGE_ID } from '../languages/modesRegistry.js';
import { FileKind } from '../../../platform/files/common/files.js';
import { ThemeIcon } from '../../../base/common/themables.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const fileIconDirectoryRegex = /(?:\/|^)(?:([^\/]+)\/)?([^\/]+)$/;
function getIconClasses(modelService, languageService, resource, fileKind, icon) {
    if (ThemeIcon.isThemeIcon(icon)) {
        return [`codicon-${icon.id}`, 'predefined-file-icon'];
    }
    if (URI.isUri(icon)) {
        return [];
    }
    // we always set these base classes even if we do not have a path
    const classes = fileKind === FileKind.ROOT_FOLDER ? ['rootfolder-icon'] : fileKind === FileKind.FOLDER ? ['folder-icon'] : ['file-icon'];
    if (resource) {
        // Get the path and name of the resource. For data-URIs, we need to parse specially
        let name;
        if (resource.scheme === Schemas.data) {
            const metadata = DataUri.parseMetaData(resource);
            name = metadata.get(DataUri.META_DATA_LABEL);
        }
        else {
            const match = resource.path.match(fileIconDirectoryRegex);
            if (match) {
                name = fileIconSelectorEscape(match[2].toLowerCase());
                if (match[1]) {
                    classes.push(`${fileIconSelectorEscape(match[1].toLowerCase())}-name-dir-icon`); // parent directory
                }
            }
            else {
                name = fileIconSelectorEscape(resource.authority.toLowerCase());
            }
        }
        // Root Folders
        if (fileKind === FileKind.ROOT_FOLDER) {
            classes.push(`${name}-root-name-folder-icon`);
        }
        // Folders
        else if (fileKind === FileKind.FOLDER) {
            classes.push(`${name}-name-folder-icon`);
        }
        // Files
        else {
            // Name & Extension(s)
            if (name) {
                classes.push(`${name}-name-file-icon`);
                classes.push(`name-file-icon`); // extra segment to increase file-name score
                // Avoid doing an explosive combination of extensions for very long filenames
                // (most file systems do not allow files > 255 length) with lots of `.` characters
                // https://github.com/microsoft/vscode/issues/116199
                if (name.length <= 255) {
                    const dotSegments = name.split('.');
                    for (let i = 1; i < dotSegments.length; i++) {
                        classes.push(`${dotSegments.slice(i).join('.')}-ext-file-icon`); // add each combination of all found extensions if more than one
                    }
                }
                classes.push(`ext-file-icon`); // extra segment to increase file-ext score
            }
            // Detected Mode
            const detectedLanguageId = detectLanguageId(modelService, languageService, resource);
            if (detectedLanguageId) {
                classes.push(`${fileIconSelectorEscape(detectedLanguageId)}-lang-file-icon`);
            }
        }
    }
    return classes;
}
function detectLanguageId(modelService, languageService, resource) {
    if (!resource) {
        return null; // we need a resource at least
    }
    let languageId = null;
    // Data URI: check for encoded metadata
    if (resource.scheme === Schemas.data) {
        const metadata = DataUri.parseMetaData(resource);
        const mime = metadata.get(DataUri.META_DATA_MIME);
        if (mime) {
            languageId = languageService.getLanguageIdByMimeType(mime);
        }
    }
    // Any other URI: check for model if existing
    else {
        const model = modelService.getModel(resource);
        if (model) {
            languageId = model.getLanguageId();
        }
    }
    // only take if the language id is specific (aka no just plain text)
    if (languageId && languageId !== PLAINTEXT_LANGUAGE_ID) {
        return languageId;
    }
    // otherwise fallback to path based detection
    return languageService.guessLanguageIdByFilepathOrFirstLine(resource);
}
function fileIconSelectorEscape(str) {
    return str.replace(/[\s]/g, '/'); // HTML class names can not contain certain whitespace characters (https://dom.spec.whatwg.org/#interface-domtokenlist), use / instead, which doesn't exist in file names.
}

export { fileIconSelectorEscape, getIconClasses };
