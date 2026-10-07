import '../htmlLanguageTypes.js';
import { SymbolInformation, Range, DocumentSymbol, SymbolKind } from '../../../../vscode-languageserver-types/lib/esm/main.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function findDocumentSymbols(document, htmlDocument) {
    const symbols = [];
    const symbols2 = findDocumentSymbols2(document, htmlDocument);
    for (const symbol of symbols2) {
        walk(symbol, undefined);
    }
    return symbols;
    function walk(node, parent) {
        const symbol = SymbolInformation.create(node.name, node.kind, node.range, document.uri, parent?.name);
        symbol.containerName ?? (symbol.containerName = '');
        symbols.push(symbol);
        if (node.children) {
            for (const child of node.children) {
                walk(child, node);
            }
        }
    }
}
function findDocumentSymbols2(document, htmlDocument) {
    const symbols = [];
    htmlDocument.roots.forEach(node => {
        provideFileSymbolsInternal(document, node, symbols);
    });
    return symbols;
}
function provideFileSymbolsInternal(document, node, symbols) {
    const name = nodeToName(node);
    const range = Range.create(document.positionAt(node.start), document.positionAt(node.end));
    const symbol = DocumentSymbol.create(name, undefined, SymbolKind.Field, range, range);
    symbols.push(symbol);
    node.children.forEach(child => {
        symbol.children ?? (symbol.children = []);
        provideFileSymbolsInternal(document, child, symbol.children);
    });
}
function nodeToName(node) {
    let name = node.tag;
    if (node.attributes) {
        const id = node.attributes['id'];
        const classes = node.attributes['class'];
        if (id) {
            name += `#${id.replace(/[\"\']/g, '')}`;
        }
        if (classes) {
            name += classes.replace(/[\"\']/g, '').split(/\s+/).map(className => `.${className}`).join('');
        }
    }
    return name || '?';
}

export { findDocumentSymbols, findDocumentSymbols2 };
