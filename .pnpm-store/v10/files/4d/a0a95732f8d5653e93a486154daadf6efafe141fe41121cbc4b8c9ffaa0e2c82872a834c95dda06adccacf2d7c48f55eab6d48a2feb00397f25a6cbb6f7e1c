'use strict';

const types = require('../../tokenizer/types.cjs');

const likelyFeatureToken = new Set([types.Colon, types.RightParenthesis, types.EOF]);

const name = 'Condition';
const structure = {
    kind: String,
    children: [[
        'Identifier',
        'Feature',
        'FeatureFunction',
        'FeatureRange',
        'SupportsDeclaration'
    ]]
};

function featureOrRange(kind) {
    if (this.lookupTypeNonSC(1) === types.Ident &&
        likelyFeatureToken.has(this.lookupTypeNonSC(2))) {
        return this.Feature(kind);
    }

    return this.FeatureRange(kind);
}

const parentheses = {
    media: featureOrRange,
    container: featureOrRange,
    supports() {
        return this.SupportsDeclaration();
    }
};

function parse(kind = 'media') {
    const children = this.createList();

    scan: while (!this.eof) {
        switch (this.tokenType) {
            case types.Comment:
            case types.WhiteSpace:
                this.next();
                continue;

            case types.Ident:
                children.push(this.Identifier());
                break;

            case types.LeftParenthesis: {
                let term = this.parseWithFallback(
                    () => parentheses[kind].call(this, kind),
                    () => null
                );

                if (!term) {
                    term = this.parseWithFallback(
                        () => {
                            this.eat(types.LeftParenthesis);
                            const res = this.Condition(kind);
                            this.eat(types.RightParenthesis);
                            return res;
                        },
                        () => {
                            return this.GeneralEnclosed(kind);
                        }
                    );
                }

                children.push(term);
                break;
            }

            case types.Function: {
                let term = this.parseWithFallback(
                    () => this.FeatureFunction(kind),
                    () => null
                );

                if (!term) {
                    term = this.GeneralEnclosed(kind);
                }

                children.push(term);
                break;
            }

            default:
                break scan;
        }
    }

    if (children.isEmpty) {
        this.error('Condition is expected');
    }

    return {
        type: 'Condition',
        loc: this.getLocationFromList(children),
        kind,
        children
    };
}

function generate(node) {
    node.children.forEach(child => {
        if (child.type === 'Condition') {
            this.token(types.LeftParenthesis, '(');
            this.node(child);
            this.token(types.RightParenthesis, ')');
        } else {
            this.node(child);
        }
    });
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
