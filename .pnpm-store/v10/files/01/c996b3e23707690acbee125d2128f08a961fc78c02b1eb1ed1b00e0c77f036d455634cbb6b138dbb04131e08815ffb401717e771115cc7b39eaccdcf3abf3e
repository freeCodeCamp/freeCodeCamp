import { ShiftCommand } from '../commands/shiftCommand.js';
import { CompositionSurroundSelectionCommand } from '../commands/surroundSelectionCommand.js';
import { isQuote, EditOperationResult } from '../cursorCommon.js';
import { PasteOperation, TabOperation, CompositionOperation, CompositionEndOvertypeOperation, shouldSurroundChar, AutoClosingOvertypeWithInterceptorsOperation, AutoClosingOpenCharTypeOperation, EnterOperation, AutoIndentOperation, AutoClosingOvertypeOperation, SurroundSelectionOperation, InterceptorElectricCharOperation, SimpleCharacterTypeOperation, TypeWithoutInterceptorsOperation } from './cursorTypeEditOperations.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class TypeOperations {
    static indent(config, model, selections) {
        if (model === null || selections === null) {
            return [];
        }
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            commands[i] = new ShiftCommand(selections[i], {
                isUnshift: false,
                tabSize: config.tabSize,
                indentSize: config.indentSize,
                insertSpaces: config.insertSpaces,
                useTabStops: config.useTabStops,
                autoIndent: config.autoIndent
            }, config.languageConfigurationService);
        }
        return commands;
    }
    static outdent(config, model, selections) {
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            commands[i] = new ShiftCommand(selections[i], {
                isUnshift: true,
                tabSize: config.tabSize,
                indentSize: config.indentSize,
                insertSpaces: config.insertSpaces,
                useTabStops: config.useTabStops,
                autoIndent: config.autoIndent
            }, config.languageConfigurationService);
        }
        return commands;
    }
    static paste(config, model, selections, text, pasteOnNewLine, multicursorText) {
        return PasteOperation.getEdits(config, model, selections, text, pasteOnNewLine, multicursorText);
    }
    static tab(config, model, selections) {
        return TabOperation.getCommands(config, model, selections);
    }
    static compositionType(prevEditOperationType, config, model, selections, text, replacePrevCharCnt, replaceNextCharCnt, positionDelta) {
        return CompositionOperation.getEdits(prevEditOperationType, config, model, selections, text, replacePrevCharCnt, replaceNextCharCnt, positionDelta);
    }
    /**
     * This is very similar with typing, but the character is already in the text buffer!
     */
    static compositionEndWithInterceptors(prevEditOperationType, config, model, compositions, selections, autoClosedCharacters) {
        if (!compositions) {
            // could not deduce what the composition did
            return null;
        }
        let insertedText = null;
        for (const composition of compositions) {
            if (insertedText === null) {
                insertedText = composition.insertedText;
            }
            else if (insertedText !== composition.insertedText) {
                // not all selections agree on what was typed
                return null;
            }
        }
        if (!insertedText || insertedText.length !== 1) {
            // we're only interested in the case where a single character was inserted
            return CompositionEndOvertypeOperation.getEdits(config, compositions);
        }
        const ch = insertedText;
        let hasDeletion = false;
        for (const composition of compositions) {
            if (composition.deletedText.length !== 0) {
                hasDeletion = true;
                break;
            }
        }
        if (hasDeletion) {
            // Check if this could have been a surround selection
            if (!shouldSurroundChar(config, ch) || !config.surroundingPairs.hasOwnProperty(ch)) {
                return null;
            }
            const isTypingAQuoteCharacter = isQuote(ch);
            for (const composition of compositions) {
                if (composition.deletedSelectionStart !== 0 || composition.deletedSelectionEnd !== composition.deletedText.length) {
                    // more text was deleted than was selected, so this could not have been a surround selection
                    return null;
                }
                if (/^[ \t]+$/.test(composition.deletedText)) {
                    // deleted text was only whitespace
                    return null;
                }
                if (isTypingAQuoteCharacter && isQuote(composition.deletedText)) {
                    // deleted text was a quote
                    return null;
                }
            }
            const positions = [];
            for (const selection of selections) {
                if (!selection.isEmpty()) {
                    return null;
                }
                positions.push(selection.getPosition());
            }
            if (positions.length !== compositions.length) {
                return null;
            }
            const commands = [];
            for (let i = 0, len = positions.length; i < len; i++) {
                commands.push(new CompositionSurroundSelectionCommand(positions[i], compositions[i].deletedText, config.surroundingPairs[ch]));
            }
            return new EditOperationResult(4 /* EditOperationType.TypingOther */, commands, {
                shouldPushStackElementBefore: true,
                shouldPushStackElementAfter: false
            });
        }
        const autoClosingOvertypeEdits = AutoClosingOvertypeWithInterceptorsOperation.getEdits(config, model, selections, autoClosedCharacters, ch);
        if (autoClosingOvertypeEdits !== undefined) {
            return autoClosingOvertypeEdits;
        }
        const autoClosingOpenCharEdits = AutoClosingOpenCharTypeOperation.getEdits(config, model, selections, ch, true, false);
        if (autoClosingOpenCharEdits !== undefined) {
            return autoClosingOpenCharEdits;
        }
        return CompositionEndOvertypeOperation.getEdits(config, compositions);
    }
    static typeWithInterceptors(isDoingComposition, prevEditOperationType, config, model, selections, autoClosedCharacters, ch) {
        const enterEdits = EnterOperation.getEdits(config, model, selections, ch, isDoingComposition);
        if (enterEdits !== undefined) {
            return enterEdits;
        }
        const autoIndentEdits = AutoIndentOperation.getEdits(config, model, selections, ch, isDoingComposition);
        if (autoIndentEdits !== undefined) {
            return autoIndentEdits;
        }
        const autoClosingOverTypeEdits = AutoClosingOvertypeOperation.getEdits(prevEditOperationType, config, model, selections, autoClosedCharacters, ch);
        if (autoClosingOverTypeEdits !== undefined) {
            return autoClosingOverTypeEdits;
        }
        const autoClosingOpenCharEdits = AutoClosingOpenCharTypeOperation.getEdits(config, model, selections, ch, false, isDoingComposition);
        if (autoClosingOpenCharEdits !== undefined) {
            return autoClosingOpenCharEdits;
        }
        const surroundSelectionEdits = SurroundSelectionOperation.getEdits(config, model, selections, ch, isDoingComposition);
        if (surroundSelectionEdits !== undefined) {
            return surroundSelectionEdits;
        }
        const interceptorElectricCharOperation = InterceptorElectricCharOperation.getEdits(prevEditOperationType, config, model, selections, ch, isDoingComposition);
        if (interceptorElectricCharOperation !== undefined) {
            return interceptorElectricCharOperation;
        }
        return SimpleCharacterTypeOperation.getEdits(config, prevEditOperationType, selections, ch, isDoingComposition);
    }
    static typeWithoutInterceptors(prevEditOperationType, config, model, selections, str) {
        return TypeWithoutInterceptorsOperation.getEdits(prevEditOperationType, selections, str);
    }
}
class CompositionOutcome {
    constructor(deletedText, deletedSelectionStart, deletedSelectionEnd, insertedText, insertedSelectionStart, insertedSelectionEnd, insertedTextRange) {
        this.deletedText = deletedText;
        this.deletedSelectionStart = deletedSelectionStart;
        this.deletedSelectionEnd = deletedSelectionEnd;
        this.insertedText = insertedText;
        this.insertedSelectionStart = insertedSelectionStart;
        this.insertedSelectionEnd = insertedSelectionEnd;
        this.insertedTextRange = insertedTextRange;
    }
}

export { CompositionOutcome, TypeOperations };
