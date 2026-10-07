import { CancellationToken } from '../../../../base/common/cancellation.js';
import { assertType } from '../../../../base/common/types.js';
import { URI } from '../../../../base/common/uri.js';
import { ITextModelService } from '../../../common/services/resolverService.js';
import { IOutlineModelService } from './outlineModel.js';
import { CommandsRegistry } from '../../../../platform/commands/common/commands.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
CommandsRegistry.registerCommand('_executeDocumentSymbolProvider', async function (accessor, ...args) {
    const [resource] = args;
    assertType(URI.isUri(resource));
    const outlineService = accessor.get(IOutlineModelService);
    const modelService = accessor.get(ITextModelService);
    const reference = await modelService.createModelReference(resource);
    try {
        return (await outlineService.getOrCreate(reference.object.textEditorModel, CancellationToken.None)).getTopLevelSymbols();
    }
    finally {
        reference.dispose();
    }
});
