import {
    Ident,
    Function as FunctionToken,
    Colon,
    RightParenthesis
} from '../../tokenizer/index.js';


export const name = 'PseudoClassSelector';
export const walkContext = 'function';
export const structure = {
    name: String,
    children: [['Raw'], null]
};

// : [ <ident> | <function-token> <any-value>? ) ]
export function parse() {
    const start = this.tokenStart;
    let children = null;
    let name;
    let nameLowerCase;

    this.eat(Colon);

    if (this.tokenType === FunctionToken) {
        name = this.consumeFunctionName();
        nameLowerCase = name.toLowerCase();

        if (this.lookupNonWSType(0) == RightParenthesis) {
            children = this.createList();
        } else if (hasOwnProperty.call(this.pseudo, nameLowerCase)) {
            this.skipSC();
            children = this.pseudo[nameLowerCase].call(this);
            this.skipSC();
        } else {
            children = this.createList();
            children.push(
                this.Raw(null, false)
            );
        }

        this.eat(RightParenthesis);
    } else {
        name = this.consume(Ident);
    }

    return {
        type: 'PseudoClassSelector',
        loc: this.getLocation(start, this.tokenStart),
        name,
        children
    };
}

export function generate(node) {
    this.token(Colon, ':');

    if (node.children === null) {
        this.token(Ident, node.name);
    } else {
        this.token(FunctionToken, node.name + '(');
        this.children(node);
        this.token(RightParenthesis, ')');
    }
}
