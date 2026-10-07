import { Registry } from '../../../../platform/registry/common/platform.js';
import { Extensions } from '../../../../platform/quickinput/common/quickAccess.js';
import { QuickHelpNLS } from '../../../common/standaloneStrings.js';
import { HelpQuickAccessProvider } from '../../../../platform/quickinput/browser/helpQuickAccess.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Registry.as(Extensions.Quickaccess).registerQuickAccessProvider({
    ctor: HelpQuickAccessProvider,
    prefix: '',
    helpEntries: [{ description: QuickHelpNLS.helpQuickAccessActionLabel }]
});
