import * as scope from '../scope/index.js';
import atrule from '../atrule/index.js';
import pseudo from '../pseudo/index.js';
import * as node from '../node/index-parse.js';

export default {
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
    scope,
    atrule,
    pseudo,
    node
};
