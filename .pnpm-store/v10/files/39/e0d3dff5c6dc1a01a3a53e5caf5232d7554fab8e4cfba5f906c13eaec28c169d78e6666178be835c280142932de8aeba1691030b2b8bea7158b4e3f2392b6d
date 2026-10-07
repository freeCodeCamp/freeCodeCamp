import { IntervalTimer, TimeoutTimer } from '../../../base/common/async.js';
import { illegalState } from '../../../base/common/errors.js';
import { Event, Emitter } from '../../../base/common/event.js';
import { IME } from '../../../base/common/ime.js';
import { Disposable } from '../../../base/common/lifecycle.js';
import { localize } from '../../../nls.js';
import { NoMatchingKb } from './keybindingResolver.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const HIGH_FREQ_COMMANDS = /^(cursor|delete|undo|redo|tab|editor\.action\.clipboard)/;
class AbstractKeybindingService extends Disposable {
    get onDidUpdateKeybindings() {
        return this._onDidUpdateKeybindings ? this._onDidUpdateKeybindings.event : Event.None; // Sinon stubbing walks properties on prototype
    }
    get inChordMode() {
        return this._currentChords.length > 0;
    }
    constructor(_contextKeyService, _commandService, _telemetryService, _notificationService, _logService) {
        super();
        this._contextKeyService = _contextKeyService;
        this._commandService = _commandService;
        this._telemetryService = _telemetryService;
        this._notificationService = _notificationService;
        this._logService = _logService;
        this._onDidUpdateKeybindings = this._register(new Emitter());
        this._currentChords = [];
        this._currentChordChecker = new IntervalTimer();
        this._currentChordStatusMessage = null;
        this._ignoreSingleModifiers = KeybindingModifierSet.EMPTY;
        this._currentSingleModifier = null;
        this._currentSingleModifierClearTimeout = new TimeoutTimer();
        this._currentlyDispatchingCommandId = null;
        this._logging = false;
    }
    dispose() {
        super.dispose();
    }
    _log(str) {
        if (this._logging) {
            this._logService.info(`[KeybindingService]: ${str}`);
        }
    }
    getKeybindings() {
        return this._getResolver().getKeybindings();
    }
    lookupKeybinding(commandId, context, enforceContextCheck = false) {
        const result = this._getResolver().lookupPrimaryKeybinding(commandId, context || this._contextKeyService, enforceContextCheck);
        if (!result) {
            return undefined;
        }
        return result.resolvedKeybinding;
    }
    dispatchEvent(e, target) {
        return this._dispatch(e, target);
    }
    // TODO@ulugbekna: update namings to align with `_doDispatch`
    // TODO@ulugbekna: this fn doesn't seem to take into account single-modifier keybindings, eg `shift shift`
    softDispatch(e, target) {
        this._log(`/ Soft dispatching keyboard event`);
        const keybinding = this.resolveKeyboardEvent(e);
        if (keybinding.hasMultipleChords()) {
            console.warn('keyboard event should not be mapped to multiple chords');
            return NoMatchingKb;
        }
        const [firstChord,] = keybinding.getDispatchChords();
        if (firstChord === null) {
            // cannot be dispatched, probably only modifier keys
            this._log(`\\ Keyboard event cannot be dispatched`);
            return NoMatchingKb;
        }
        const contextValue = this._contextKeyService.getContext(target);
        const currentChords = this._currentChords.map((({ keypress }) => keypress));
        return this._getResolver().resolve(contextValue, currentChords, firstChord);
    }
    _scheduleLeaveChordMode() {
        const chordLastInteractedTime = Date.now();
        this._currentChordChecker.cancelAndSet(() => {
            if (!this._documentHasFocus()) {
                // Focus has been lost => leave chord mode
                this._leaveChordMode();
                return;
            }
            if (Date.now() - chordLastInteractedTime > 5000) {
                // 5 seconds elapsed => leave chord mode
                this._leaveChordMode();
            }
        }, 500);
    }
    _expectAnotherChord(firstChord, keypressLabel) {
        this._currentChords.push({ keypress: firstChord, label: keypressLabel });
        switch (this._currentChords.length) {
            case 0:
                throw illegalState('impossible');
            case 1:
                // TODO@ulugbekna: revise this message and the one below (at least, fix terminology)
                this._currentChordStatusMessage = this._notificationService.status(localize(1701, "({0}) was pressed. Waiting for second key of chord...", keypressLabel));
                break;
            default: {
                const fullKeypressLabel = this._currentChords.map(({ label }) => label).join(', ');
                this._currentChordStatusMessage = this._notificationService.status(localize(1702, "({0}) was pressed. Waiting for next key of chord...", fullKeypressLabel));
            }
        }
        this._scheduleLeaveChordMode();
        if (IME.enabled) {
            IME.disable();
        }
    }
    _leaveChordMode() {
        if (this._currentChordStatusMessage) {
            this._currentChordStatusMessage.close();
            this._currentChordStatusMessage = null;
        }
        this._currentChordChecker.cancel();
        this._currentChords = [];
        IME.enable();
    }
    _dispatch(e, target) {
        return this._doDispatch(this.resolveKeyboardEvent(e), target, /*isSingleModiferChord*/ false);
    }
    _singleModifierDispatch(e, target) {
        const keybinding = this.resolveKeyboardEvent(e);
        const [singleModifier,] = keybinding.getSingleModifierDispatchChords();
        if (singleModifier) {
            if (this._ignoreSingleModifiers.has(singleModifier)) {
                this._log(`+ Ignoring single modifier ${singleModifier} due to it being pressed together with other keys.`);
                this._ignoreSingleModifiers = KeybindingModifierSet.EMPTY;
                this._currentSingleModifierClearTimeout.cancel();
                this._currentSingleModifier = null;
                return false;
            }
            this._ignoreSingleModifiers = KeybindingModifierSet.EMPTY;
            if (this._currentSingleModifier === null) {
                // we have a valid `singleModifier`, store it for the next keyup, but clear it in 300ms
                this._log(`+ Storing single modifier for possible chord ${singleModifier}.`);
                this._currentSingleModifier = singleModifier;
                this._currentSingleModifierClearTimeout.cancelAndSet(() => {
                    this._log(`+ Clearing single modifier due to 300ms elapsed.`);
                    this._currentSingleModifier = null;
                }, 300);
                return false;
            }
            if (singleModifier === this._currentSingleModifier) {
                // bingo!
                this._log(`/ Dispatching single modifier chord ${singleModifier} ${singleModifier}`);
                this._currentSingleModifierClearTimeout.cancel();
                this._currentSingleModifier = null;
                return this._doDispatch(keybinding, target, /*isSingleModiferChord*/ true);
            }
            this._log(`+ Clearing single modifier due to modifier mismatch: ${this._currentSingleModifier} ${singleModifier}`);
            this._currentSingleModifierClearTimeout.cancel();
            this._currentSingleModifier = null;
            return false;
        }
        // When pressing a modifier and holding it pressed with any other modifier or key combination,
        // the pressed modifiers should no longer be considered for single modifier dispatch.
        const [firstChord,] = keybinding.getChords();
        this._ignoreSingleModifiers = new KeybindingModifierSet(firstChord);
        if (this._currentSingleModifier !== null) {
            this._log(`+ Clearing single modifier due to other key up.`);
        }
        this._currentSingleModifierClearTimeout.cancel();
        this._currentSingleModifier = null;
        return false;
    }
    _doDispatch(userKeypress, target, isSingleModiferChord = false) {
        let shouldPreventDefault = false;
        if (userKeypress.hasMultipleChords()) { // warn - because user can press a single chord at a time
            console.warn('Unexpected keyboard event mapped to multiple chords');
            return false;
        }
        let userPressedChord = null;
        let currentChords = null;
        if (isSingleModiferChord) {
            // The keybinding is the second keypress of a single modifier chord, e.g. "shift shift".
            // A single modifier can only occur when the same modifier is pressed in short sequence,
            // hence we disregard `_currentChord` and use the same modifier instead.
            const [dispatchKeyname,] = userKeypress.getSingleModifierDispatchChords();
            userPressedChord = dispatchKeyname;
            currentChords = dispatchKeyname ? [dispatchKeyname] : []; // TODO@ulugbekna: in the `else` case we assign an empty array - make sure `resolve` can handle an empty array well
        }
        else {
            [userPressedChord,] = userKeypress.getDispatchChords();
            currentChords = this._currentChords.map(({ keypress }) => keypress);
        }
        if (userPressedChord === null) {
            this._log(`\\ Keyboard event cannot be dispatched in keydown phase.`);
            // cannot be dispatched, probably only modifier keys
            return shouldPreventDefault;
        }
        const contextValue = this._contextKeyService.getContext(target);
        const keypressLabel = userKeypress.getLabel();
        const resolveResult = this._getResolver().resolve(contextValue, currentChords, userPressedChord);
        switch (resolveResult.kind) {
            case 0 /* ResultKind.NoMatchingKb */: {
                this._logService.trace('KeybindingService#dispatch', keypressLabel, `[ No matching keybinding ]`);
                if (this.inChordMode) {
                    const currentChordsLabel = this._currentChords.map(({ label }) => label).join(', ');
                    this._log(`+ Leaving multi-chord mode: Nothing bound to "${currentChordsLabel}, ${keypressLabel}".`);
                    this._notificationService.status(localize(1703, "The key combination ({0}, {1}) is not a command.", currentChordsLabel, keypressLabel), { hideAfter: 10 * 1000 /* 10s */ });
                    this._leaveChordMode();
                    shouldPreventDefault = true;
                }
                return shouldPreventDefault;
            }
            case 1 /* ResultKind.MoreChordsNeeded */: {
                this._logService.trace('KeybindingService#dispatch', keypressLabel, `[ Several keybindings match - more chords needed ]`);
                shouldPreventDefault = true;
                this._expectAnotherChord(userPressedChord, keypressLabel);
                this._log(this._currentChords.length === 1 ? `+ Entering multi-chord mode...` : `+ Continuing multi-chord mode...`);
                return shouldPreventDefault;
            }
            case 2 /* ResultKind.KbFound */: {
                this._logService.trace('KeybindingService#dispatch', keypressLabel, `[ Will dispatch command ${resolveResult.commandId} ]`);
                if (resolveResult.commandId === null || resolveResult.commandId === '') {
                    if (this.inChordMode) {
                        const currentChordsLabel = this._currentChords.map(({ label }) => label).join(', ');
                        this._log(`+ Leaving chord mode: Nothing bound to "${currentChordsLabel}, ${keypressLabel}".`);
                        this._notificationService.status(localize(1704, "The key combination ({0}, {1}) is not a command.", currentChordsLabel, keypressLabel), { hideAfter: 10 * 1000 /* 10s */ });
                        this._leaveChordMode();
                        shouldPreventDefault = true;
                    }
                }
                else {
                    if (this.inChordMode) {
                        this._leaveChordMode();
                    }
                    if (!resolveResult.isBubble) {
                        shouldPreventDefault = true;
                    }
                    this._log(`+ Invoking command ${resolveResult.commandId}.`);
                    this._currentlyDispatchingCommandId = resolveResult.commandId;
                    try {
                        if (typeof resolveResult.commandArgs === 'undefined') {
                            this._commandService.executeCommand(resolveResult.commandId).then(undefined, err => this._notificationService.warn(err));
                        }
                        else {
                            this._commandService.executeCommand(resolveResult.commandId, resolveResult.commandArgs).then(undefined, err => this._notificationService.warn(err));
                        }
                    }
                    finally {
                        this._currentlyDispatchingCommandId = null;
                    }
                    if (!HIGH_FREQ_COMMANDS.test(resolveResult.commandId)) {
                        this._telemetryService.publicLog2('workbenchActionExecuted', { id: resolveResult.commandId, from: 'keybinding', detail: userKeypress.getUserSettingsLabel() ?? undefined });
                    }
                }
                return shouldPreventDefault;
            }
        }
    }
    mightProducePrintableCharacter(event) {
        if (event.ctrlKey || event.metaKey) {
            // ignore ctrl/cmd-combination but not shift/alt-combinatios
            return false;
        }
        // weak check for certain ranges. this is properly implemented in a subclass
        // with access to the KeyboardMapperFactory.
        if ((event.keyCode >= 31 /* KeyCode.KeyA */ && event.keyCode <= 56 /* KeyCode.KeyZ */)
            || (event.keyCode >= 21 /* KeyCode.Digit0 */ && event.keyCode <= 30 /* KeyCode.Digit9 */)) {
            return true;
        }
        return false;
    }
}
class KeybindingModifierSet {
    static { this.EMPTY = new KeybindingModifierSet(null); }
    constructor(source) {
        this._ctrlKey = source ? source.ctrlKey : false;
        this._shiftKey = source ? source.shiftKey : false;
        this._altKey = source ? source.altKey : false;
        this._metaKey = source ? source.metaKey : false;
    }
    has(modifier) {
        switch (modifier) {
            case 'ctrl': return this._ctrlKey;
            case 'shift': return this._shiftKey;
            case 'alt': return this._altKey;
            case 'meta': return this._metaKey;
        }
    }
}

export { AbstractKeybindingService };
