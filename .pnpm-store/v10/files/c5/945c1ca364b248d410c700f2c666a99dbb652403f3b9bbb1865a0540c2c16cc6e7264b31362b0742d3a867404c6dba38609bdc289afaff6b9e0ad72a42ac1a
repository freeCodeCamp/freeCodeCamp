module.exports = {
    parseContext: {
        default: 'StyleSheet',
        stylesheet: 'StyleSheet',
        atrule: 'Atrule',
        atrulePrelude: function(options) {
            return this.AtrulePrelude(options.atrule ? String(options.atrule) : null);
        },
        mediaQueryList: 'MediaQueryList',
        mediaQuery: 'MediaQuery',
        rule: 'Rule',
        selectorList: 'SelectorList',
        selector: 'Selector',
        block: function() {
            return this.Block(true);
        },
        declarationList: 'DeclarationList',
        declaration: 'Declaration',
        value: 'Value'
    },
    scope: require('../scope'),
    atrule: require('../atrule'),
    pseudo: require('../pseudo'),
    node: require('../node')
};
