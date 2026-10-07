import {
    Function as FunctionToken,
    RightParenthesis
} from '../../tokenizer/index.js';

export const name = 'FeatureFunction';
export const structure = {
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

export function parse(kind = 'unknown') {
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
        this.eat(RightParenthesis);
    }

    return {
        type: 'FeatureFunction',
        loc: this.getLocation(start, this.tokenStart),
        kind,
        feature: functionName,
        value
    };
}

export function generate(node) {
    this.token(FunctionToken, node.feature + '(');
    this.node(node.value);
    this.token(RightParenthesis, ')');
}
