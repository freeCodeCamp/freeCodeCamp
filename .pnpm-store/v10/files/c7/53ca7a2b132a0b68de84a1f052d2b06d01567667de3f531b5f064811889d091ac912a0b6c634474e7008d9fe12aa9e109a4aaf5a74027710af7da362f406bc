'use strict';

const nest = {
    parse: {
        prelude() {
            return this.createSingleNodeList(
                this.SelectorList()
            );
        },
        block() {
            return this.Block(true);
        }
    }
};

module.exports = nest;
