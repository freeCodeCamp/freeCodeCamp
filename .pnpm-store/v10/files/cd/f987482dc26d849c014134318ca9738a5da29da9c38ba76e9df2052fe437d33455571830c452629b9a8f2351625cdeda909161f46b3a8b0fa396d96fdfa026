import {
    WhiteSpace,
    Comment,
    Ident,
    LeftParenthesis,
    RightParenthesis,
    Function as FunctionToken,
    Colon,
    EOF
} from '../../tokenizer/index.js';

const likelyFeatureToken = new Set([Colon, RightParenthesis, EOF]);

export const name = 'Condition';
export const structure = {
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
    if (this.lookupTypeNonSC(1) === Ident &&
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

export function parse(kind = 'media') {
    const children = this.createList();

    scan: while (!this.eof) {
        switch (this.tokenType) {
            case Comment:
            case WhiteSpace:
                this.next();
                continue;

            case Ident:
                children.push(this.Identifier());
                break;

            case LeftParenthesis: {
                let term = this.parseWithFallback(
                    () => parentheses[kind].call(this, kind),
                    () => null
                );

                if (!term) {
                    term = this.parseWithFallback(
                        () => {
                            this.eat(LeftParenthesis);
                            const res = this.Condition(kind);
                            this.eat(RightParenthesis);
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

            case FunctionToken: {
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

export function generate(node) {
    node.children.forEach(child => {
        if (child.type === 'Condition') {
            this.token(LeftParenthesis, '(');
            this.node(child);
            this.token(RightParenthesis, ')');
        } else {
            this.node(child);
        }
    });
}

