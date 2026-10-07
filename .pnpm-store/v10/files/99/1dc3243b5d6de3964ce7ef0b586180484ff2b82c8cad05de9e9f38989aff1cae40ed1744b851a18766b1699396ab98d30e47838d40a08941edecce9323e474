import { onUnexpectedError } from '../common/errors.js';
import { getMonacoEnvironment } from './browser.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function createTrustedTypesPolicy(policyName, policyOptions) {
    const monacoEnvironment = getMonacoEnvironment();
    if (monacoEnvironment?.createTrustedTypesPolicy) {
        try {
            return monacoEnvironment.createTrustedTypesPolicy(policyName, policyOptions);
        }
        catch (err) {
            onUnexpectedError(err);
            return undefined;
        }
    }
    try {
        // eslint-disable-next-line local/code-no-any-casts
        return globalThis.trustedTypes?.createPolicy(policyName, policyOptions);
    }
    catch (err) {
        onUnexpectedError(err);
        return undefined;
    }
}

export { createTrustedTypesPolicy };
