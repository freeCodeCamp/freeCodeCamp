import { expressionsAreEqualWithConstantSubstitution, implies } from '../../contextkey/common/contextkey.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// util definitions to make working with the above types easier within this module:
const NoMatchingKb = { kind: 0 /* ResultKind.NoMatchingKb */ };
const MoreChordsNeeded = { kind: 1 /* ResultKind.MoreChordsNeeded */ };
function KbFound(commandId, commandArgs, isBubble) {
    return { kind: 2 /* ResultKind.KbFound */, commandId, commandArgs, isBubble };
}
//#endregion
/**
 * Stores mappings from keybindings to commands and from commands to keybindings.
 * Given a sequence of chords, `resolve`s which keybinding it matches
 */
class KeybindingResolver {
    constructor(
    /** built-in and extension-provided keybindings */
    defaultKeybindings, 
    /** user's keybindings */
    overrides, log) {
        this._log = log;
        this._defaultKeybindings = defaultKeybindings;
        this._defaultBoundCommands = new Map();
        for (const defaultKeybinding of defaultKeybindings) {
            const command = defaultKeybinding.command;
            if (command && command.charAt(0) !== '-') {
                this._defaultBoundCommands.set(command, true);
            }
        }
        this._map = new Map();
        this._lookupMap = new Map();
        this._keybindings = KeybindingResolver.handleRemovals([].concat(defaultKeybindings).concat(overrides));
        for (let i = 0, len = this._keybindings.length; i < len; i++) {
            const k = this._keybindings[i];
            if (k.chords.length === 0) {
                // unbound
                continue;
            }
            // substitute with constants that are registered after startup - https://github.com/microsoft/vscode/issues/174218#issuecomment-1437972127
            const when = k.when?.substituteConstants();
            if (when && when.type === 0 /* ContextKeyExprType.False */) {
                // when condition is false
                continue;
            }
            this._addKeyPress(k.chords[0], k);
        }
    }
    static _isTargetedForRemoval(defaultKb, keypress, when) {
        if (keypress) {
            for (let i = 0; i < keypress.length; i++) {
                if (keypress[i] !== defaultKb.chords[i]) {
                    return false;
                }
            }
        }
        // `true` means always, as does `undefined`
        // so we will treat `true` === `undefined`
        if (when && when.type !== 1 /* ContextKeyExprType.True */) {
            if (!defaultKb.when) {
                return false;
            }
            if (!expressionsAreEqualWithConstantSubstitution(when, defaultKb.when)) {
                return false;
            }
        }
        return true;
    }
    /**
     * Looks for rules containing "-commandId" and removes them.
     */
    static handleRemovals(rules) {
        // Do a first pass and construct a hash-map for removals
        const removals = new Map();
        for (let i = 0, len = rules.length; i < len; i++) {
            const rule = rules[i];
            if (rule.command && rule.command.charAt(0) === '-') {
                const command = rule.command.substring(1);
                if (!removals.has(command)) {
                    removals.set(command, [rule]);
                }
                else {
                    removals.get(command).push(rule);
                }
            }
        }
        if (removals.size === 0) {
            // There are no removals
            return rules;
        }
        // Do a second pass and keep only non-removed keybindings
        const result = [];
        for (let i = 0, len = rules.length; i < len; i++) {
            const rule = rules[i];
            if (!rule.command || rule.command.length === 0) {
                result.push(rule);
                continue;
            }
            if (rule.command.charAt(0) === '-') {
                continue;
            }
            const commandRemovals = removals.get(rule.command);
            if (!commandRemovals || !rule.isDefault) {
                result.push(rule);
                continue;
            }
            let isRemoved = false;
            for (const commandRemoval of commandRemovals) {
                const when = commandRemoval.when;
                if (this._isTargetedForRemoval(rule, commandRemoval.chords, when)) {
                    isRemoved = true;
                    break;
                }
            }
            if (!isRemoved) {
                result.push(rule);
                continue;
            }
        }
        return result;
    }
    _addKeyPress(keypress, item) {
        const conflicts = this._map.get(keypress);
        if (typeof conflicts === 'undefined') {
            // There is no conflict so far
            this._map.set(keypress, [item]);
            this._addToLookupMap(item);
            return;
        }
        for (let i = conflicts.length - 1; i >= 0; i--) {
            const conflict = conflicts[i];
            if (conflict.command === item.command) {
                continue;
            }
            // Test if the shorter keybinding is a prefix of the longer one.
            // If the shorter keybinding is a prefix, it effectively will shadow the longer one and is considered a conflict.
            let isShorterKbPrefix = true;
            for (let i = 1; i < conflict.chords.length && i < item.chords.length; i++) {
                if (conflict.chords[i] !== item.chords[i]) {
                    // The ith step does not conflict
                    isShorterKbPrefix = false;
                    break;
                }
            }
            if (!isShorterKbPrefix) {
                continue;
            }
            if (KeybindingResolver.whenIsEntirelyIncluded(conflict.when, item.when)) {
                // `item` completely overwrites `conflict`
                // Remove conflict from the lookupMap
                this._removeFromLookupMap(conflict);
            }
        }
        conflicts.push(item);
        this._addToLookupMap(item);
    }
    _addToLookupMap(item) {
        if (!item.command) {
            return;
        }
        let arr = this._lookupMap.get(item.command);
        if (typeof arr === 'undefined') {
            arr = [item];
            this._lookupMap.set(item.command, arr);
        }
        else {
            arr.push(item);
        }
    }
    _removeFromLookupMap(item) {
        if (!item.command) {
            return;
        }
        const arr = this._lookupMap.get(item.command);
        if (typeof arr === 'undefined') {
            return;
        }
        for (let i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                return;
            }
        }
    }
    /**
     * Returns true if it is provable `a` implies `b`.
     */
    static whenIsEntirelyIncluded(a, b) {
        if (!b || b.type === 1 /* ContextKeyExprType.True */) {
            return true;
        }
        if (!a || a.type === 1 /* ContextKeyExprType.True */) {
            return false;
        }
        return implies(a, b);
    }
    getKeybindings() {
        return this._keybindings;
    }
    lookupPrimaryKeybinding(commandId, context, enforceContextCheck = false) {
        const items = this._lookupMap.get(commandId);
        if (typeof items === 'undefined' || items.length === 0) {
            return null;
        }
        if (items.length === 1 && !enforceContextCheck) {
            return items[0];
        }
        for (let i = items.length - 1; i >= 0; i--) {
            const item = items[i];
            if (context.contextMatchesRules(item.when)) {
                return item;
            }
        }
        if (enforceContextCheck) {
            return null;
        }
        return items[items.length - 1];
    }
    /**
     * Looks up a keybinding trigged as a result of pressing a sequence of chords - `[...currentChords, keypress]`
     *
     * Example: resolving 3 chords pressed sequentially - `cmd+k cmd+p cmd+i`:
     * 	`currentChords = [ 'cmd+k' , 'cmd+p' ]` and `keypress = `cmd+i` - last pressed chord
     */
    resolve(context, currentChords, keypress) {
        const pressedChords = [...currentChords, keypress];
        this._log(`| Resolving ${pressedChords}`);
        const kbCandidates = this._map.get(pressedChords[0]);
        if (kbCandidates === undefined) {
            // No bindings with such 0-th chord
            this._log(`\\ No keybinding entries.`);
            return NoMatchingKb;
        }
        let lookupMap = null;
        if (pressedChords.length < 2) {
            lookupMap = kbCandidates;
        }
        else {
            // Fetch all chord bindings for `currentChords`
            lookupMap = [];
            for (let i = 0, len = kbCandidates.length; i < len; i++) {
                const candidate = kbCandidates[i];
                if (pressedChords.length > candidate.chords.length) { // # of pressed chords can't be less than # of chords in a keybinding to invoke
                    continue;
                }
                let prefixMatches = true;
                for (let i = 1; i < pressedChords.length; i++) {
                    if (candidate.chords[i] !== pressedChords[i]) {
                        prefixMatches = false;
                        break;
                    }
                }
                if (prefixMatches) {
                    lookupMap.push(candidate);
                }
            }
        }
        // check there's a keybinding with a matching when clause
        const result = this._findCommand(context, lookupMap);
        if (!result) {
            this._log(`\\ From ${lookupMap.length} keybinding entries, no when clauses matched the context.`);
            return NoMatchingKb;
        }
        // check we got all chords necessary to be sure a particular keybinding needs to be invoked
        if (pressedChords.length < result.chords.length) {
            // The chord sequence is not complete
            this._log(`\\ From ${lookupMap.length} keybinding entries, awaiting ${result.chords.length - pressedChords.length} more chord(s), when: ${printWhenExplanation(result.when)}, source: ${printSourceExplanation(result)}.`);
            return MoreChordsNeeded;
        }
        this._log(`\\ From ${lookupMap.length} keybinding entries, matched ${result.command}, when: ${printWhenExplanation(result.when)}, source: ${printSourceExplanation(result)}.`);
        return KbFound(result.command, result.commandArgs, result.bubble);
    }
    _findCommand(context, matches) {
        for (let i = matches.length - 1; i >= 0; i--) {
            const k = matches[i];
            if (!KeybindingResolver._contextMatchesRules(context, k.when)) {
                continue;
            }
            return k;
        }
        return null;
    }
    static _contextMatchesRules(context, rules) {
        if (!rules) {
            return true;
        }
        return rules.evaluate(context);
    }
}
function printWhenExplanation(when) {
    if (!when) {
        return `no when condition`;
    }
    return `${when.serialize()}`;
}
function printSourceExplanation(kb) {
    return (kb.extensionId
        ? (kb.isBuiltinExtension ? `built-in extension ${kb.extensionId}` : `user extension ${kb.extensionId}`)
        : (kb.isDefault ? `built-in` : `user`));
}

export { KeybindingResolver, NoMatchingKb };
