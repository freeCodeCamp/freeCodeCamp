/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Registry for commands that can trigger Inline Edits (NES) when invoked.
 */
class TriggerInlineEditCommandsRegistry {
    static { this.REGISTERED_COMMANDS = new Set(); }
    static getRegisteredCommands() {
        return [...TriggerInlineEditCommandsRegistry.REGISTERED_COMMANDS];
    }
    static registerCommand(commandId) {
        TriggerInlineEditCommandsRegistry.REGISTERED_COMMANDS.add(commandId);
    }
}

export { TriggerInlineEditCommandsRegistry };
