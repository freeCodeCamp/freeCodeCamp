import { LegacyLinesDiffComputer } from './legacyLinesDiffComputer.js';
import { DefaultLinesDiffComputer } from './defaultLinesDiffComputer/defaultLinesDiffComputer.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const linesDiffComputers = {
    getLegacy: () => new LegacyLinesDiffComputer(),
    getDefault: () => new DefaultLinesDiffComputer(),
};

export { linesDiffComputers };
