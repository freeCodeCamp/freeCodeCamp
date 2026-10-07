var resolveProperty = require('css-tree').property;
var resolveKeyword = require('css-tree').keyword;
var walk = require('css-tree').walk;
var generate = require('css-tree').generate;
var fingerprintId = 1;
var dontRestructure = {
    'src': 1 // https://github.com/afelix/csso/issues/50
};

var DONT_MIX_VALUE = {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/display#Browser_compatibility
    'display': /table|ruby|flex|-(flex)?box$|grid|contents|run-in/i,
    // https://developer.mozilla.org/en/docs/Web/CSS/text-align
    'text-align': /^(start|end|match-parent|justify-all)$/i
};

var SAFE_VALUES = {
    cursor: [
        'auto', 'crosshair', 'default', 'move', 'text', 'wait', 'help',
        'n-resize', 'e-resize', 's-resize', 'w-resize',
        'ne-resize', 'nw-resize', 'se-resize', 'sw-resize',
        'pointer', 'progress', 'not-allowed', 'no-drop', 'vertical-text', 'all-scroll',
        'col-resize', 'row-resize'
    ],
    overflow: [
        'hidden', 'visible', 'scroll', 'auto'
    ],
    position: [
        'static', 'relative', 'absolute', 'fixed'
    ]
};

var NEEDLESS_TABLE = {
    'border-width': ['border'],
    'border-style': ['border'],
    'border-color': ['border'],
    'border-top': ['border'],
    'border-right': ['border'],
    'border-bottom': ['border'],
    'border-left': ['border'],
    'border-top-width': ['border-top', 'border-width', 'border'],
    'border-right-width': ['border-right', 'border-width', 'border'],
    'border-bottom-width': ['border-bottom', 'border-width', 'border'],
    'border-left-width': ['border-left', 'border-width', 'border'],
    'border-top-style': ['border-top', 'border-style', 'border'],
    'border-right-style': ['border-right', 'border-style', 'border'],
    'border-bottom-style': ['border-bottom', 'border-style', 'border'],
    'border-left-style': ['border-left', 'border-style', 'border'],
    'border-top-color': ['border-top', 'border-color', 'border'],
    'border-right-color': ['border-right', 'border-color', 'border'],
    'border-bottom-color': ['border-bottom', 'border-color', 'border'],
    'border-left-color': ['border-left', 'border-color', 'border'],
    'margin-top': ['margin'],
    'margin-right': ['margin'],
    'margin-bottom': ['margin'],
    'margin-left': ['margin'],
    'padding-top': ['padding'],
    'padding-right': ['padding'],
    'padding-bottom': ['padding'],
    'padding-left': ['padding'],
    'font-style': ['font'],
    'font-variant': ['font'],
    'font-weight': ['font'],
    'font-size': ['font'],
    'font-family': ['font'],
    'list-style-type': ['list-style'],
    'list-style-position': ['list-style'],
    'list-style-image': ['list-style']
};

function getPropertyFingerprint(propertyName, declaration, fingerprints) {
    var realName = resolveProperty(propertyName).basename;

    if (realName === 'background') {
        return propertyName + ':' + generate(declaration.value);
    }

    var declarationId = declaration.id;
    var fingerprint = fingerprints[declarationId];

    if (!fingerprint) {
        switch (declaration.value.type) {
            case 'Value':
                var vendorId = '';
                var iehack = '';
                var special = {};
                var raw = false;

                declaration.value.children.each(function walk(node) {
                    switch (node.type) {
                        case 'Value':
                        case 'Brackets':
                        case 'Parentheses':
                            node.children.each(walk);
                            break;

                        case 'Raw':
                            raw = true;
                            break;

                        case 'Identifier':
                            var name = node.name;

                            if (!vendorId) {
                                vendorId = resolveKeyword(name).vendor;
                            }

                            if (/\\[09]/.test(name)) {
                                iehack = RegExp.lastMatch;
                            }

                            if (SAFE_VALUES.hasOwnProperty(realName)) {
                                if (SAFE_VALUES[realName].indexOf(name) === -1) {
                                    special[name] = true;
                                }
                            } else if (DONT_MIX_VALUE.hasOwnProperty(realName)) {
                                if (DONT_MIX_VALUE[realName].test(name)) {
                                    special[name] = true;
                                }
                            }

                            break;

                        case 'Function':
                            var name = node.name;

                            if (!vendorId) {
                                vendorId = resolveKeyword(name).vendor;
                            }

                            if (name === 'rect') {
                                // there are 2 forms of rect:
                                //   rect(<top>, <right>, <bottom>, <left>) - standart
                                //   rect(<top> <right> <bottom> <left>) – backwards compatible syntax
                                // only the same form values can be merged
                                var hasComma = node.children.some(function(node) {
                                    return node.type === 'Operator' && node.value === ',';
                                });
                                if (!hasComma) {
                                    name = 'rect-backward';
                                }
                            }

                            special[name + '()'] = true;

                            // check nested tokens too
                            node.children.each(walk);

                            break;

                        case 'Dimension':
                            var unit = node.unit;

                            if (/\\[09]/.test(unit)) {
                                iehack = RegExp.lastMatch;
                            }

                            switch (unit) {
                                // is not supported until IE11
                                case 'rem':

                                // v* units is too buggy across browsers and better
                                // don't merge values with those units
                                case 'vw':
                                case 'vh':
                                case 'vmin':
                                case 'vmax':
                                case 'vm': // IE9 supporting "vm" instead of "vmin".
                                    special[unit] = true;
                                    break;
                            }
                            break;
                    }
                });

                fingerprint = raw
                    ? '!' + fingerprintId++
                    : '!' + Object.keys(special).sort() + '|' + iehack + vendorId;
                break;

            case 'Raw':
                fingerprint = '!' + declaration.value.value;
                break;

            default:
                fingerprint = generate(declaration.value);
        }

        fingerprints[declarationId] = fingerprint;
    }

    return propertyName + fingerprint;
}

function needless(props, declaration, fingerprints) {
    var property = resolveProperty(declaration.property);

    if (NEEDLESS_TABLE.hasOwnProperty(property.basename)) {
        var table = NEEDLESS_TABLE[property.basename];

        for (var i = 0; i < table.length; i++) {
            var ppre = getPropertyFingerprint(property.prefix + table[i], declaration, fingerprints);
            var prev = props.hasOwnProperty(ppre) ? props[ppre] : null;

            if (prev && (!declaration.important || prev.item.data.important)) {
                return prev;
            }
        }
    }
}

function processRule(rule, item, list, props, fingerprints) {
    var declarations = rule.block.children;

    declarations.eachRight(function(declaration, declarationItem) {
        var property = declaration.property;
        var fingerprint = getPropertyFingerprint(property, declaration, fingerprints);
        var prev = props[fingerprint];

        if (prev && !dontRestructure.hasOwnProperty(property)) {
            if (declaration.important && !prev.item.data.important) {
                props[fingerprint] = {
                    block: declarations,
                    item: declarationItem
                };

                prev.block.remove(prev.item);

                // TODO: use it when we can refer to several points in source
                // declaration.loc = {
                //     primary: declaration.loc,
                //     merged: prev.item.data.loc
                // };
            } else {
                declarations.remove(declarationItem);

                // TODO: use it when we can refer to several points in source
                // prev.item.data.loc = {
                //     primary: prev.item.data.loc,
                //     merged: declaration.loc
                // };
            }
        } else {
            var prev = needless(props, declaration, fingerprints);

            if (prev) {
                declarations.remove(declarationItem);

                // TODO: use it when we can refer to several points in source
                // prev.item.data.loc = {
                //     primary: prev.item.data.loc,
                //     merged: declaration.loc
                // };
            } else {
                declaration.fingerprint = fingerprint;

                props[fingerprint] = {
                    block: declarations,
                    item: declarationItem
                };
            }
        }
    });

    if (declarations.isEmpty()) {
        list.remove(item);
    }
}

module.exports = function restructBlock(ast) {
    var stylesheetMap = {};
    var fingerprints = Object.create(null);

    walk(ast, {
        visit: 'Rule',
        reverse: true,
        enter: function(node, item, list) {
            var stylesheet = this.block || this.stylesheet;
            var ruleId = (node.pseudoSignature || '') + '|' + node.prelude.children.first().id;
            var ruleMap;
            var props;

            if (!stylesheetMap.hasOwnProperty(stylesheet.id)) {
                ruleMap = {};
                stylesheetMap[stylesheet.id] = ruleMap;
            } else {
                ruleMap = stylesheetMap[stylesheet.id];
            }

            if (ruleMap.hasOwnProperty(ruleId)) {
                props = ruleMap[ruleId];
            } else {
                props = {};
                ruleMap[ruleId] = props;
            }

            processRule.call(this, node, item, list, props, fingerprints);
        }
    });
};
