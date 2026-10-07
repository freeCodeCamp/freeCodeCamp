import { t } from '../../../../@vscode/l10n/dist/browser.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class SCSSIssueType {
    constructor(id, message) {
        this.id = id;
        this.message = message;
    }
}
const SCSSParseError = {
    FromExpected: new SCSSIssueType('scss-fromexpected', t("'from' expected")),
    ThroughOrToExpected: new SCSSIssueType('scss-throughexpected', t("'through' or 'to' expected")),
    InExpected: new SCSSIssueType('scss-fromexpected', t("'in' expected")),
};

export { SCSSIssueType, SCSSParseError };
