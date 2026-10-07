import { CancellationToken } from '../../../../base/common/cancellation.js';
import { onUnexpectedExternalError } from '../../../../base/common/errors.js';
import { assertType } from '../../../../base/common/types.js';
import { URI } from '../../../../base/common/uri.js';
import { Position } from '../../../common/core/position.js';
import { SignatureHelpTriggerKind } from '../../../common/languages.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';
import { ITextModelService } from '../../../common/services/resolverService.js';
import { CommandsRegistry } from '../../../../platform/commands/common/commands.js';
import { RawContextKey } from '../../../../platform/contextkey/common/contextkey.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const Context = {
    Visible: new RawContextKey('parameterHintsVisible', false),
    MultipleSignatures: new RawContextKey('parameterHintsMultipleSignatures', false),
};
async function provideSignatureHelp(registry, model, position, context, token) {
    const supports = registry.ordered(model);
    for (const support of supports) {
        try {
            const result = await support.provideSignatureHelp(model, position, token, context);
            if (result) {
                return result;
            }
        }
        catch (err) {
            onUnexpectedExternalError(err);
        }
    }
    return undefined;
}
CommandsRegistry.registerCommand('_executeSignatureHelpProvider', async (accessor, ...args) => {
    const [uri, position, triggerCharacter] = args;
    assertType(URI.isUri(uri));
    assertType(Position.isIPosition(position));
    assertType(typeof triggerCharacter === 'string' || !triggerCharacter);
    const languageFeaturesService = accessor.get(ILanguageFeaturesService);
    const ref = await accessor.get(ITextModelService).createModelReference(uri);
    try {
        const result = await provideSignatureHelp(languageFeaturesService.signatureHelpProvider, ref.object.textEditorModel, Position.lift(position), {
            triggerKind: SignatureHelpTriggerKind.Invoke,
            isRetrigger: false,
            triggerCharacter,
        }, CancellationToken.None);
        if (!result) {
            return undefined;
        }
        setTimeout(() => result.dispose(), 0);
        return result.value;
    }
    finally {
        ref.dispose();
    }
});

export { Context, provideSignatureHelp };
