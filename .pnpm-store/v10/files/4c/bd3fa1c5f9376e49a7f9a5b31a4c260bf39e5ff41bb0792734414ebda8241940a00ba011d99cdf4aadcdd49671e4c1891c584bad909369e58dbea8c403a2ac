import { Utils, URI } from '../../../../vscode-uri/lib/esm/index.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function dirname(uriString) {
    return Utils.dirname(URI.parse(uriString)).toString(true);
}
function joinPath(uriString, ...paths) {
    return Utils.joinPath(URI.parse(uriString), ...paths).toString(true);
}

export { dirname, joinPath };
