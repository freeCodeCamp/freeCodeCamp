'use strict';

const lang = require('./lang.cjs');

const selectorList = {
    parse() {
        return this.createSingleNodeList(
            this.SelectorList()
        );
    }
};

const selector = {
    parse() {
        return this.createSingleNodeList(
            this.Selector()
        );
    }
};

const identList = {
    parse() {
        return this.createSingleNodeList(
            this.Identifier()
        );
    }
};

const langList = {
    parse: lang.parseLanguageRangeList
};

const nth = {
    parse() {
        return this.createSingleNodeList(
            this.Nth()
        );
    }
};

const pseudo = {
    'dir': identList,
    'has': selectorList,
    'lang': langList,
    'matches': selectorList,
    'is': selectorList,
    '-moz-any': selectorList,
    '-webkit-any': selectorList,
    'where': selectorList,
    'not': selectorList,
    'nth-child': nth,
    'nth-last-child': nth,
    'nth-last-of-type': nth,
    'nth-of-type': nth,
    'slotted': selector,
    'host': selector,
    'host-context': selector
};

module.exports = pseudo;
