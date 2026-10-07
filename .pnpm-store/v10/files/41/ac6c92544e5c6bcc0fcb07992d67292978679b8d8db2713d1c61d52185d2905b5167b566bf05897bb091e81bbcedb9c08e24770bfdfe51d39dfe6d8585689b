import { Comma, String as StringToken, Ident, RightParenthesis } from '../../tokenizer/index.js';

export function parseLanguageRangeList() {
    const children = this.createList();

    this.skipSC();

    loop: while (!this.eof) {
        switch (this.tokenType) {
            case Ident:
                children.push(this.Identifier());
                break;

            case StringToken:
                children.push(this.String());
                break;

            case Comma:
                children.push(this.Operator());
                break;

            case RightParenthesis:
                break loop;

            default:
                this.error('Identifier, string or comma is expected');
        }

        this.skipSC();
    }

    return children;
}
