import '../../../../base/browser/ui/codicons/codicon/codicon.css';
import '../../../../base/browser/ui/codicons/codicon/codicon-modifiers.css';
import { Codicon } from '../../../../base/common/codicons.js';
import { CodeActionKind } from '../common/types.js';
import '../../symbolIcons/browser/symbolIcons.js';
import { localize } from '../../../../nls.js';
import { HierarchicalKind } from '../../../../base/common/hierarchicalKind.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const uncategorizedCodeActionGroup = Object.freeze({ kind: HierarchicalKind.Empty, title: localize(866, 'More Actions...') });
const codeActionGroups = Object.freeze([
    { kind: CodeActionKind.QuickFix, title: localize(867, 'Quick Fix') },
    { kind: CodeActionKind.RefactorExtract, title: localize(868, 'Extract'), icon: Codicon.wrench },
    { kind: CodeActionKind.RefactorInline, title: localize(869, 'Inline'), icon: Codicon.wrench },
    { kind: CodeActionKind.RefactorRewrite, title: localize(870, 'Rewrite'), icon: Codicon.wrench },
    { kind: CodeActionKind.RefactorMove, title: localize(871, 'Move'), icon: Codicon.wrench },
    { kind: CodeActionKind.SurroundWith, title: localize(872, 'Surround With'), icon: Codicon.surroundWith },
    { kind: CodeActionKind.Source, title: localize(873, 'Source Action'), icon: Codicon.symbolFile },
    uncategorizedCodeActionGroup,
]);
function toMenuItems(inputCodeActions, showHeaders, keybindingResolver) {
    if (!showHeaders) {
        return inputCodeActions.map((action) => {
            return {
                kind: "action" /* ActionListItemKind.Action */,
                item: action,
                group: uncategorizedCodeActionGroup,
                disabled: !!action.action.disabled,
                label: action.action.disabled || action.action.title,
                canPreview: !!action.action.edit?.edits.length,
            };
        });
    }
    // Group code actions
    const menuEntries = codeActionGroups.map(group => ({ group, actions: [] }));
    for (const action of inputCodeActions) {
        const kind = action.action.kind ? new HierarchicalKind(action.action.kind) : HierarchicalKind.None;
        for (const menuEntry of menuEntries) {
            if (menuEntry.group.kind.contains(kind)) {
                menuEntry.actions.push(action);
                break;
            }
        }
    }
    const allMenuItems = [];
    for (const menuEntry of menuEntries) {
        if (menuEntry.actions.length) {
            allMenuItems.push({ kind: "header" /* ActionListItemKind.Header */, group: menuEntry.group });
            for (const action of menuEntry.actions) {
                const group = menuEntry.group;
                allMenuItems.push({
                    kind: "action" /* ActionListItemKind.Action */,
                    item: action,
                    group: action.action.isAI ? { title: group.title, kind: group.kind, icon: Codicon.sparkle } : group,
                    label: action.action.title,
                    disabled: !!action.action.disabled,
                    keybinding: keybindingResolver(action.action),
                });
            }
        }
    }
    return allMenuItems;
}

export { toMenuItems };
