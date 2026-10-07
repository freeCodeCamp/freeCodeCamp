'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'FeatureFunction';
const structure = {
    kind: String,
    feature: String,
    value: ['Declaration', 'Selector']
};

function getFeatureParser(kind, name) {
    const featuresOfKind = this.features[kind] || {};
    const parser = featuresOfKind[name];

    if (typeof parser !== 'function') {
        this.error(`Unknown feature ${name}()`);
    }

    return parser;
}

function parse(kind = 'unknown') {
    const start = this.tokenStart;
    const functionName = this.consumeFunctionName();
    const valueParser = getFeatureParser.call(this, kind, functionName.toLowerCase());

    this.skipSC();

    const value = this.parseWithFallback(
        () => {
            const startValueToken = this.tokenIndex;
            const value = valueParser.call(this);

            if (this.eof === false &&
                this.isBalanceEdge(startValueToken) === false) {
                this.error();
            }

            return value;
        },
        () => this.Raw(null, false)
    );

    if (!this.eof) {
        this.eat(types.RightParenthesis);
    }

    return {
        type: 'FeatureFunction',
        loc: this.getLocation(start, this.tokenStart),
        kind,
        feature: functionName,
        value
    };
}

function generate(node) {
    this.token(types.Function, node.feature + '(');
    this.node(node.value);
    this.token(types.RightParenthesis, ')');
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
