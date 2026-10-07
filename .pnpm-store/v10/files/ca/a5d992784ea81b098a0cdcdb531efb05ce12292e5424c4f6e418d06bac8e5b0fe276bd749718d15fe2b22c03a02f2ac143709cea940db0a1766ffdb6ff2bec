/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class InlineEdit {
    constructor(edit, commands, inlineCompletion) {
        this.edit = edit;
        this.commands = commands;
        this.inlineCompletion = inlineCompletion;
    }
    equals(other) {
        return this.edit.equals(other.edit)
            && this.inlineCompletion === other.inlineCompletion;
    }
}

export { InlineEdit };
