/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { URI, Utils } from 'vscode-uri';
export function dirname(uriString) {
    return Utils.dirname(URI.parse(uriString)).toString(true);
}
export function joinPath(uriString, ...paths) {
    return Utils.joinPath(URI.parse(uriString), ...paths).toString(true);
}
