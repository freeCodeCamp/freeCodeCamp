import { registerEditorCommand, EditorCommand } from '../../../browser/editorExtensions.js';
import { RawContextKey, IContextKeyService } from '../../../../platform/contextkey/common/contextkey.js';
import { CancellationTokenSource } from '../../../../base/common/cancellation.js';
import { LinkedList } from '../../../../base/common/linkedList.js';
import { createDecorator } from '../../../../platform/instantiation/common/instantiation.js';
import { registerSingleton } from '../../../../platform/instantiation/common/extensions.js';
import { localize } from '../../../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const IEditorCancellationTokens = createDecorator('IEditorCancelService');
const ctxCancellableOperation = new RawContextKey('cancellableOperation', false, localize(939, 'Whether the editor runs a cancellable operation, e.g. like \'Peek References\''));
registerSingleton(IEditorCancellationTokens, class {
    constructor() {
        this._tokens = new WeakMap();
    }
    add(editor, cts) {
        let data = this._tokens.get(editor);
        if (!data) {
            data = editor.invokeWithinContext(accessor => {
                const key = ctxCancellableOperation.bindTo(accessor.get(IContextKeyService));
                const tokens = new LinkedList();
                return { key, tokens };
            });
            this._tokens.set(editor, data);
        }
        let removeFn;
        data.key.set(true);
        removeFn = data.tokens.push(cts);
        return () => {
            // remove w/o cancellation
            if (removeFn) {
                removeFn();
                data.key.set(!data.tokens.isEmpty());
                removeFn = undefined;
            }
        };
    }
    cancel(editor) {
        const data = this._tokens.get(editor);
        if (!data) {
            return;
        }
        // remove with cancellation
        const cts = data.tokens.pop();
        if (cts) {
            cts.cancel();
            data.key.set(!data.tokens.isEmpty());
        }
    }
}, 1 /* InstantiationType.Delayed */);
class EditorKeybindingCancellationTokenSource extends CancellationTokenSource {
    constructor(editor, parent) {
        super(parent);
        this.editor = editor;
        this._unregister = editor.invokeWithinContext(accessor => accessor.get(IEditorCancellationTokens).add(editor, this));
    }
    dispose() {
        this._unregister();
        super.dispose();
    }
}
registerEditorCommand(new class extends EditorCommand {
    constructor() {
        super({
            id: 'editor.cancelOperation',
            kbOpts: {
                weight: 100 /* KeybindingWeight.EditorContrib */,
                primary: 9 /* KeyCode.Escape */
            },
            precondition: ctxCancellableOperation
        });
    }
    runEditorCommand(accessor, editor) {
        accessor.get(IEditorCancellationTokens).cancel(editor);
    }
});

export { EditorKeybindingCancellationTokenSource };
