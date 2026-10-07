import { ActionRunner } from '../../../../base/common/actions.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ActionRunnerWithContext extends ActionRunner {
    constructor(_getContext) {
        super();
        this._getContext = _getContext;
    }
    runAction(action, _context) {
        const ctx = this._getContext();
        return super.runAction(action, ctx);
    }
}

export { ActionRunnerWithContext };
