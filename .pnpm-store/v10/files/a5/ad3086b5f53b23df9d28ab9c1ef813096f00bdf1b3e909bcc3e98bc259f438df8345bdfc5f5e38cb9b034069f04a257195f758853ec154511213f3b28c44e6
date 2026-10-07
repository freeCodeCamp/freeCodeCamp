import { BugIndicatingError } from '../errors.js';
import '../arrays.js';
import '../event.js';
import '../lifecycle.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Subscribes to and records changes and the last value of the given observables.
 * Don't use the key "changes", as it is reserved for the changes array!
*/
function recordChanges(obs) {
    return {
        createChangeSummary: (_previousChangeSummary) => {
            // eslint-disable-next-line local/code-no-any-casts
            return {
                changes: [],
            };
        },
        handleChange(ctx, changeSummary) {
            for (const key in obs) {
                if (ctx.didChange(obs[key])) {
                    // eslint-disable-next-line local/code-no-any-casts
                    changeSummary.changes.push({ key, change: ctx.change });
                }
            }
            return true;
        },
        beforeUpdate(reader, changeSummary) {
            for (const key in obs) {
                if (key === 'changes') {
                    throw new BugIndicatingError('property name "changes" is reserved for change tracking');
                }
                changeSummary[key] = obs[key].read(reader);
            }
        }
    };
}
/**
 * Subscribes to and records changes and the last value of the given observables.
 * Don't use the key "changes", as it is reserved for the changes array!
*/
function recordChangesLazy(getObs) {
    let obs = undefined;
    return {
        createChangeSummary: (_previousChangeSummary) => {
            // eslint-disable-next-line local/code-no-any-casts
            return {
                changes: [],
            };
        },
        handleChange(ctx, changeSummary) {
            if (!obs) {
                obs = getObs();
            }
            for (const key in obs) {
                if (ctx.didChange(obs[key])) {
                    // eslint-disable-next-line local/code-no-any-casts
                    changeSummary.changes.push({ key, change: ctx.change });
                }
            }
            return true;
        },
        beforeUpdate(reader, changeSummary) {
            if (!obs) {
                obs = getObs();
            }
            for (const key in obs) {
                if (key === 'changes') {
                    throw new BugIndicatingError('property name "changes" is reserved for change tracking');
                }
                changeSummary[key] = obs[key].read(reader);
            }
        }
    };
}

export { recordChanges, recordChangesLazy };
