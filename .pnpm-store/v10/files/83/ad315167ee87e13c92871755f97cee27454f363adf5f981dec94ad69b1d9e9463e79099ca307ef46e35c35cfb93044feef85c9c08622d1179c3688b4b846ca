'use strict';

const scope = {
    parse: {
        prelude() {
            return this.createSingleNodeList(
                this.Scope()
            );
        },
        block(nested = false) {
            return this.Block(nested);
        }
    }
};

module.exports = scope;
