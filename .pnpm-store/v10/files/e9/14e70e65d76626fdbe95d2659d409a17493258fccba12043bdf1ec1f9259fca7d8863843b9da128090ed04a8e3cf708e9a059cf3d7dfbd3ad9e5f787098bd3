import {
    String as StringToken,
    Ident,
    Url,
    Function as FunctionToken,
    LeftParenthesis,
    RightParenthesis
} from '../../tokenizer/index.js';

function parseWithFallback(parse, fallback) {
    return this.parseWithFallback(
        () => {
            try {
                return parse.call(this);
            } finally {
                this.skipSC();
                if (this.lookupNonWSType(0) !== RightParenthesis) {
                    this.error();
                }
            }
        },
        fallback || (() => this.Raw(null, true))
    );
}

const parseFunctions = {
    layer() {
        this.skipSC();

        const children = this.createList();
        const node = parseWithFallback.call(this, this.Layer);

        if (node.type !== 'Raw' || node.value !== '') {
            children.push(node);
        }

        return children;
    },
    supports() {
        this.skipSC();

        const children = this.createList();
        const node = parseWithFallback.call(
            this,
            this.Declaration,
            () => parseWithFallback.call(this, () => this.Condition('supports'))
        );

        if (node.type !== 'Raw' || node.value !== '') {
            children.push(node);
        }

        return children;
    }
};

export default {
    parse: {
        prelude() {
            const children = this.createList();

            switch (this.tokenType) {
                case StringToken:
                    children.push(this.String());
                    break;

                case Url:
                case FunctionToken:
                    children.push(this.Url());
                    break;

                default:
                    this.error('String or url() is expected');
            }

            this.skipSC();

            if (this.tokenType === Ident &&
                this.cmpStr(this.tokenStart, this.tokenEnd, 'layer')) {
                children.push(this.Identifier());
            } else if (
                this.tokenType === FunctionToken &&
                this.cmpStr(this.tokenStart, this.tokenEnd, 'layer(')
            ) {
                children.push(this.Function(null, parseFunctions));
            }

            this.skipSC();

            if (this.tokenType === FunctionToken &&
                this.cmpStr(this.tokenStart, this.tokenEnd, 'supports(')) {
                children.push(this.Function(null, parseFunctions));
            }

            if (this.lookupNonWSType(0) === Ident ||
                this.lookupNonWSType(0) === LeftParenthesis) {
                children.push(this.MediaQueryList());
            }

            return children;
        },
        block: null
    }
};
