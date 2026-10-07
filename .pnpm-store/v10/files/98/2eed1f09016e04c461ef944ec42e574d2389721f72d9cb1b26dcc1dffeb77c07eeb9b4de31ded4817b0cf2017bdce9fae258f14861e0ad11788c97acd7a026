'use strict';

const index = require('../pseudo/index.cjs');
const indexParseSelector = require('../node/index-parse-selector.cjs');
const selector = require('../scope/selector.cjs');

const config = {
    parseContext: {
        default: 'SelectorList',
        selectorList: 'SelectorList',
        selector: 'Selector'
    },
    scope: { Selector: selector },
    atrule: {},
    pseudo: index,
    node: indexParseSelector
};

module.exports = config;
