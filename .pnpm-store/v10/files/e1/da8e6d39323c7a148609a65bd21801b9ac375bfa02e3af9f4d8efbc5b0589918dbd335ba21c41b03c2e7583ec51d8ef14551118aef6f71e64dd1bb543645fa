import {
    Function as FunctionToken,
    RightParenthesis
} from '../../tokenizer/index.js';


export const name = 'Function';
export const walkContext = 'function';
export const structure = {
    name: String,
    children: [[]]
};

// <function-token> <sequence> )
export function parse(readSequence, recognizer) {
    const start = this.tokenStart;
    const name = this.consumeFunctionName();
    const nameLowerCase = name.toLowerCase();
    let children;

    children = recognizer.hasOwnProperty(nameLowerCase)
        ? recognizer[nameLowerCase].call(this, recognizer)
        : readSequence.call(this, recognizer);

    if (!this.eof) {
        this.eat(RightParenthesis);
    }

    return {
        type: 'Function',
        loc: this.getLocation(start, this.tokenStart),
        name,
        children
    };
}

export function generate(node) {
    this.token(FunctionToken, node.name + '(');
    this.children(node);
    this.token(RightParenthesis, ')');
}
