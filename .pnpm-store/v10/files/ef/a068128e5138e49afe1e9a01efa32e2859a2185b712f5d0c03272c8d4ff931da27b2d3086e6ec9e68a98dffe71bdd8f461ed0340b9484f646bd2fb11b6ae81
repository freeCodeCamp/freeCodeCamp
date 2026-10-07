'use strict';

const supports = {
    parse: {
        prelude() {
            return this.createSingleNodeList(
                this.Condition('supports')
            );
        },
        block(nested = false) {
            return this.Block(nested);
        }
    }
};

module.exports = supports;
