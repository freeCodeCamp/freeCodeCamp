'use strict';

const types = require('../../tokenizer/types.cjs');

const EXCLAMATIONMARK = 0x0021; // U+0021 EXCLAMATION MARK (!)

function consumeRaw() {
    return this.Raw(null, false);
}

const name = 'StyleSheet';
const walkContext = 'stylesheet';
const structure = {
    children: [[
        'Comment',
        'CDO',
        'CDC',
        'Atrule',
        'Rule',
        'Raw'
    ]]
};

function parse() {
    const start = this.tokenStart;
    const children = this.createList();
    let child;

    while (!this.eof) {
        switch (this.tokenType) {
            case types.WhiteSpace:
                this.next();
                continue;

            case types.Comment:
                // ignore comments except exclamation comments (i.e. /*! .. */) on top level
                if (this.charCodeAt(this.tokenStart + 2) !== EXCLAMATIONMARK) {
                    this.next();
                    continue;
                }

                child = this.Comment();
                break;

            case types.CDO: // <!--
                child = this.CDO();
                break;

            case types.CDC: // -->
                child = this.CDC();
                break;

            // CSS Syntax Module Level 3
            // §2.2 Error handling
            // At the "top level" of a stylesheet, an <at-keyword-token> starts an at-rule.
            case types.AtKeyword:
                child = this.parseWithFallback(this.Atrule, consumeRaw);
                break;

            // Anything else starts a qualified rule ...
            default:
                child = this.parseWithFallback(this.Rule, consumeRaw);
        }

        children.push(child);
    }

    return {
        type: 'StyleSheet',
        loc: this.getLocation(start, this.tokenStart),
        children
    };
}

function generate(node) {
    this.children(node);
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.walkContext = walkContext;
