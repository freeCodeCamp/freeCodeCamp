'use strict';

const index = require('../scope/index.cjs');
const index$1 = require('../atrule/index.cjs');
const index$2 = require('../pseudo/index.cjs');
const indexParse = require('../node/index-parse.cjs');

const config = {
    parseContext: {
        default: 'StyleSheet',
        stylesheet: 'StyleSheet',
        atrule: 'Atrule',
        atrulePrelude(options) {
            return this.AtrulePrelude(options.atrule ? String(options.atrule) : null);
        },
        mediaQueryList: 'MediaQueryList',
        mediaQuery: 'MediaQuery',
        condition(options) {
            return this.Condition(options.kind);
        },
        rule: 'Rule',
        selectorList: 'SelectorList',
        selector: 'Selector',
        block() {
            return this.Block(true);
        },
        declarationList: 'DeclarationList',
        declaration: 'Declaration',
        value: 'Value'
    },
    features: {
        supports: {
            selector() {
                return this.Selector();
            }
        },
        container: {
            style() {
                return this.Declaration();
            }
        }
    },
    scope: index,
    atrule: index$1,
    pseudo: index$2,
    node: indexParse
};

module.exports = config;
