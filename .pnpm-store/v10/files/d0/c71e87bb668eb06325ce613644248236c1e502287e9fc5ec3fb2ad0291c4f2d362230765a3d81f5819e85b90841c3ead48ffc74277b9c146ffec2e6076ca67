import * as url from '../../utils/url.js';
import * as string from '../../utils/string.js';
import {
    Function as FunctionToken,
    String as StringToken,
    Url,
    RightParenthesis
} from '../../tokenizer/index.js';

export const name = 'Url';
export const structure = {
    value: String
};

// <url-token> | <function-token> <string> )
export function parse() {
    const start = this.tokenStart;
    let value;

    switch (this.tokenType) {
        case Url:
            value = url.decode(this.consume(Url));
            break;

        case FunctionToken:
            if (!this.cmpStr(this.tokenStart, this.tokenEnd, 'url(')) {
                this.error('Function name must be `url`');
            }

            this.eat(FunctionToken);
            this.skipSC();
            value = string.decode(this.consume(StringToken));
            this.skipSC();
            if (!this.eof) {
                this.eat(RightParenthesis);
            }
            break;

        default:
            this.error('Url or Function is expected');
    }

    return {
        type: 'Url',
        loc: this.getLocation(start, this.tokenStart),
        value
    };
}

export function generate(node) {
    this.token(Url, url.encode(node.value));
}
