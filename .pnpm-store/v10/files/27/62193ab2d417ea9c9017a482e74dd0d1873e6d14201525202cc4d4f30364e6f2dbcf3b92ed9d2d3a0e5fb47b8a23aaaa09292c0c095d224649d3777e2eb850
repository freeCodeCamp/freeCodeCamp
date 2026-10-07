import { env } from '../../../base/common/process.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * @deprecated It is preferred that you use `IProductService` if you can. This
 * allows web embedders to override our defaults. But for things like `product.quality`,
 * the use is fine because that property is not overridable.
 */
let product;
// Native sandbox environment
const vscodeGlobal = globalThis.vscode;
if (typeof vscodeGlobal !== 'undefined' && typeof vscodeGlobal.context !== 'undefined') {
    const configuration = vscodeGlobal.context.configuration();
    if (configuration) {
        product = configuration.product;
    }
    else {
        throw new Error('Sandbox: unable to resolve product configuration from preload script.');
    }
}
// _VSCODE environment
else if (globalThis._VSCODE_PRODUCT_JSON && globalThis._VSCODE_PACKAGE_JSON) {
    // Obtain values from product.json and package.json-data
    product = globalThis._VSCODE_PRODUCT_JSON;
    // Running out of sources
    if (env['VSCODE_DEV']) {
        Object.assign(product, {
            nameShort: `${product.nameShort} Dev`,
            nameLong: `${product.nameLong} Dev`,
            dataFolderName: `${product.dataFolderName}-dev`,
            serverDataFolderName: product.serverDataFolderName ? `${product.serverDataFolderName}-dev` : undefined
        });
    }
    // Version is added during built time, but we still
    // want to have it running out of sources so we
    // read it from package.json only when we need it.
    if (!product.version) {
        const pkg = globalThis._VSCODE_PACKAGE_JSON;
        Object.assign(product, {
            version: pkg.version
        });
    }
}
// Web environment or unknown
else {
    // Built time configuration (do NOT modify)
    // eslint-disable-next-line local/code-no-dangerous-type-assertions
    product = { /*BUILD->INSERT_PRODUCT_CONFIGURATION*/};
    // Running out of sources
    if (Object.keys(product).length === 0) {
        Object.assign(product, {
            version: '1.104.0-dev',
            nameShort: 'Code - OSS Dev',
            nameLong: 'Code - OSS Dev',
            applicationName: 'code-oss',
            dataFolderName: '.vscode-oss',
            urlProtocol: 'code-oss',
            reportIssueUrl: 'https://github.com/microsoft/vscode/issues/new',
            licenseName: 'MIT',
            licenseUrl: 'https://github.com/microsoft/vscode/blob/main/LICENSE.txt',
            serverLicenseUrl: 'https://github.com/microsoft/vscode/blob/main/LICENSE.txt'
        });
    }
}
var product$1 = product;

export { product$1 as default };
