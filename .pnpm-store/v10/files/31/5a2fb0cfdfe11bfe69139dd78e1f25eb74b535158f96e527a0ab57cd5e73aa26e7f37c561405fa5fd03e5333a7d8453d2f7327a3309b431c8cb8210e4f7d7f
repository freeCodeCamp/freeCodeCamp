import { hasDriveLetter } from './extpath.js';
import { isWindows } from './platform.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function normalizeDriveLetter(path, isWindowsOS = isWindows) {
    if (hasDriveLetter(path, isWindowsOS)) {
        return path.charAt(0).toUpperCase() + path.slice(1);
    }
    return path;
}

export { normalizeDriveLetter };
