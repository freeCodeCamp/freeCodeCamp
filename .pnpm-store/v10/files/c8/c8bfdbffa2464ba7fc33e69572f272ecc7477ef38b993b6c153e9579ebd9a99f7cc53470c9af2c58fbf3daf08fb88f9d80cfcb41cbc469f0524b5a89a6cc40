import '../arrays.js';
import '../event.js';
import '../lifecycle.js';
import { addLogger } from './logging/logging.js';
export { DebugLocation } from './debugLocation.js';
export { derived, derivedDisposable, derivedHandleChanges, derivedOpts, derivedWithSetter } from './observables/derived.js';
import '../cancellation.js';
export { debouncedObservable, derivedObservableWithCache, mapObservableArrayCached, recomputeInitiallyAndOnChange } from './utils/utils.js';
export { observableFromEvent, observableFromEventOpts } from './observables/observableFromEvent.js';
import { DevToolsLogger } from './logging/debugger/devToolsLogger.js';
import { env } from '../process.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// This is a facade for the observable implementation. Only import from here!
if (env && env['VSCODE_DEV_DEBUG_OBSERVABLES']) {
    // To debug observables you also need the extension "ms-vscode.debug-value-editor"
    addLogger(DevToolsLogger.getInstance());
}
