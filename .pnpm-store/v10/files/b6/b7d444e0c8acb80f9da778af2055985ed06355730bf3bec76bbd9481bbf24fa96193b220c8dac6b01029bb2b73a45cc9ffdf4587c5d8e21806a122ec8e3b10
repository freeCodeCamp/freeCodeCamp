import {
    Function as FunctionToken,
    LeftParenthesis,
    RightParenthesis
} from '../../tokenizer/index.js';


export const name = 'GeneralEnclosed';
export const structure = {
    kind: String,
    function: [String, null],
    children: [[]]
};

// <function-token> <any-value> )
// ( <any-value> )
export function parse(kind) {
    const start = this.tokenStart;
    let functionName = null;

    if (this.tokenType === FunctionToken) {
        functionName = this.consumeFunctionName();
    } else {
        this.eat(LeftParenthesis);
    }

    const children = this.parseWithFallback(
        () => {
            const startValueToken = this.tokenIndex;
            const children = this.readSequence(this.scope.Value);

            if (this.eof === false &&
                this.isBalanceEdge(startValueToken) === false) {
                this.error();
            }

            return children;
        },
        () => this.createSingleNodeList(
            this.Raw(null, false)
        )
    );

    if (!this.eof) {
        this.eat(RightParenthesis);
    }

    return {
        type: 'GeneralEnclosed',
        loc: this.getLocation(start, this.tokenStart),
        kind,
        function: functionName,
        children
    };
}

export function generate(node) {
    if (node.function) {
        this.token(FunctionToken, node.function + '(');
    } else {
        this.token(LeftParenthesis, '(');
    }

    this.children(node);
    this.token(RightParenthesis, ')');
}
