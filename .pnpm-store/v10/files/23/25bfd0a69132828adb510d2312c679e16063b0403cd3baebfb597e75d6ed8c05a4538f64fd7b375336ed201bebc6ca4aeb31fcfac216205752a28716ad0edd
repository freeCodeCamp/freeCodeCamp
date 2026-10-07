import { parseLanguageRangeList } from './lang.js';

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
    parse: parseLanguageRangeList
};

const nth = {
    parse() {
        return this.createSingleNodeList(
            this.Nth()
        );
    }
};

export default {
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
