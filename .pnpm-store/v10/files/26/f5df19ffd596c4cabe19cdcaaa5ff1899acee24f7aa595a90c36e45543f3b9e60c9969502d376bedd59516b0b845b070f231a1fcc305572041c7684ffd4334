import { HierarchicalKind } from '../../../../base/common/hierarchicalKind.js';
import { Lazy } from '../../../../base/common/lazy.js';
import { refactorCommandId, codeActionCommandId, sourceActionCommandId, organizeImportsCommandId, fixAllCommandId } from './codeAction.js';
import { CodeActionKind, CodeActionCommandArgs } from '../common/types.js';
import { IKeybindingService } from '../../../../platform/keybinding/common/keybinding.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var CodeActionKeybindingResolver_1;
let CodeActionKeybindingResolver = class CodeActionKeybindingResolver {
    static { CodeActionKeybindingResolver_1 = this; }
    static { this.codeActionCommands = [
        refactorCommandId,
        codeActionCommandId,
        sourceActionCommandId,
        organizeImportsCommandId,
        fixAllCommandId
    ]; }
    constructor(keybindingService) {
        this.keybindingService = keybindingService;
    }
    getResolver() {
        // Lazy since we may not actually ever read the value
        const allCodeActionBindings = new Lazy(() => this.keybindingService.getKeybindings()
            .filter(item => CodeActionKeybindingResolver_1.codeActionCommands.indexOf(item.command) >= 0)
            .filter(item => item.resolvedKeybinding)
            .map((item) => {
            // Special case these commands since they come built-in with VS Code and don't use 'commandArgs'
            let commandArgs = item.commandArgs;
            if (item.command === organizeImportsCommandId) {
                commandArgs = { kind: CodeActionKind.SourceOrganizeImports.value };
            }
            else if (item.command === fixAllCommandId) {
                commandArgs = { kind: CodeActionKind.SourceFixAll.value };
            }
            return {
                resolvedKeybinding: item.resolvedKeybinding,
                ...CodeActionCommandArgs.fromUser(commandArgs, {
                    kind: HierarchicalKind.None,
                    apply: "never" /* CodeActionAutoApply.Never */
                })
            };
        }));
        return (action) => {
            if (action.kind) {
                const binding = this.bestKeybindingForCodeAction(action, allCodeActionBindings.value);
                return binding?.resolvedKeybinding;
            }
            return undefined;
        };
    }
    bestKeybindingForCodeAction(action, candidates) {
        if (!action.kind) {
            return undefined;
        }
        const kind = new HierarchicalKind(action.kind);
        return candidates
            .filter(candidate => candidate.kind.contains(kind))
            .filter(candidate => {
            if (candidate.preferred) {
                // If the candidate keybinding only applies to preferred actions, the this action must also be preferred
                return action.isPreferred;
            }
            return true;
        })
            .reduceRight((currentBest, candidate) => {
            if (!currentBest) {
                return candidate;
            }
            // Select the more specific binding
            return currentBest.kind.contains(candidate.kind) ? candidate : currentBest;
        }, undefined);
    }
};
CodeActionKeybindingResolver = CodeActionKeybindingResolver_1 = __decorate([
    __param(0, IKeybindingService)
], CodeActionKeybindingResolver);

export { CodeActionKeybindingResolver };
