import { WhiteSpace, Comment } from '../tokenizer/index.js';

export function readSequence(recognizer) {
    const children = this.createList();
    let space = false;
    const context = {
        recognizer
    };

    while (!this.eof) {
        switch (this.tokenType) {
            case Comment:
                this.next();
                continue;

            case WhiteSpace:
                space = true;
                this.next();
                continue;
        }

        let child = recognizer.getNode.call(this, context);

        if (child === undefined) {
            break;
        }

        if (space) {
            if (recognizer.onWhiteSpace) {
                recognizer.onWhiteSpace.call(this, child, children, context);
            }
            space = false;
        }

        children.push(child);
    }

    if (space && recognizer.onWhiteSpace) {
        recognizer.onWhiteSpace.call(this, null, children, context);
    }

    return children;
};
