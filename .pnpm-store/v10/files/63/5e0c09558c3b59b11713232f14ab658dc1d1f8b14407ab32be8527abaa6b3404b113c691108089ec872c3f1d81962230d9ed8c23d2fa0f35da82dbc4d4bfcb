/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
import * as l10n from '@vscode/l10n';
export class SCSSIssueType {
    constructor(id, message) {
        this.id = id;
        this.message = message;
    }
}
export const SCSSParseError = {
    FromExpected: new SCSSIssueType('scss-fromexpected', l10n.t("'from' expected")),
    ThroughOrToExpected: new SCSSIssueType('scss-throughexpected', l10n.t("'through' or 'to' expected")),
    InExpected: new SCSSIssueType('scss-fromexpected', l10n.t("'in' expected")),
};
