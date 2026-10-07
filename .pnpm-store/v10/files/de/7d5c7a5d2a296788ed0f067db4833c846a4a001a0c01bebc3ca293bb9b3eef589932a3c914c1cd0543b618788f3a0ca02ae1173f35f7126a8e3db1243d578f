// '/' | '*' | ',' | ':' | '+' | '-'
export const name = 'Operator';
export const structure = {
    value: String
};

export function parse() {
    const start = this.tokenStart;

    this.next();

    return {
        type: 'Operator',
        loc: this.getLocation(start, this.tokenStart),
        value: this.substrToCursor(start)
    };
}

export function generate(node) {
    this.tokenize(node.value);
}
