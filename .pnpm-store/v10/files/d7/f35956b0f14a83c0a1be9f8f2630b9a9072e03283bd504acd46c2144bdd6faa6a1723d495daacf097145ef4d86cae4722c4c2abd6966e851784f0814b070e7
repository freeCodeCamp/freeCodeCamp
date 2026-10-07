export const name = 'Value';
export const structure = {
    children: [[]]
};

export function parse() {
    const start = this.tokenStart;
    const children = this.readSequence(this.scope.Value);

    return {
        type: 'Value',
        loc: this.getLocation(start, this.tokenStart),
        children
    };
}

export function generate(node) {
    this.children(node);
}
