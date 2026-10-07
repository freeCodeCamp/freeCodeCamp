var List = require('../common/List');
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isValidNumber(value) {
    // Number.isInteger(value) && value >= 0
    return (
        typeof value === 'number' &&
        isFinite(value) &&
        Math.floor(value) === value &&
        value >= 0
    );
}

function isValidLocation(loc) {
    return (
        Boolean(loc) &&
        isValidNumber(loc.offset) &&
        isValidNumber(loc.line) &&
        isValidNumber(loc.column)
    );
}

function createNodeStructureChecker(type, fields) {
    return function checkNode(node, warn) {
        if (!node || node.constructor !== Object) {
            return warn(node, 'Type of node should be an Object');
        }

        for (var key in node) {
            var valid = true;

            if (hasOwnProperty.call(node, key) === false) {
                continue;
            }

            if (key === 'type') {
                if (node.type !== type) {
                    warn(node, 'Wrong node type `' + node.type + '`, expected `' + type + '`');
                }
            } else if (key === 'loc') {
                if (node.loc === null) {
                    continue;
                } else if (node.loc && node.loc.constructor === Object) {
                    if (typeof node.loc.source !== 'string') {
                        key += '.source';
                    } else if (!isValidLocation(node.loc.start)) {
                        key += '.start';
                    } else if (!isValidLocation(node.loc.end)) {
                        key += '.end';
                    } else {
                        continue;
                    }
                }

                valid = false;
            } else if (fields.hasOwnProperty(key)) {
                for (var i = 0, valid = false; !valid && i < fields[key].length; i++) {
                    var fieldType = fields[key][i];

                    switch (fieldType) {
                        case String:
                            valid = typeof node[key] === 'string';
                            break;

                        case Boolean:
                            valid = typeof node[key] === 'boolean';
                            break;

                        case null:
                            valid = node[key] === null;
                            break;

                        default:
                            if (typeof fieldType === 'string') {
                                valid = node[key] && node[key].type === fieldType;
                            } else if (Array.isArray(fieldType)) {
                                valid = node[key] instanceof List;
                            }
                    }
                }
            } else {
                warn(node, 'Unknown field `' + key + '` for ' + type + ' node type');
            }

            if (!valid) {
                warn(node, 'Bad value for `' + type + '.' + key + '`');
            }
        }

        for (var key in fields) {
            if (hasOwnProperty.call(fields, key) &&
                hasOwnProperty.call(node, key) === false) {
                warn(node, 'Field `' + type + '.' + key + '` is missed');
            }
        }
    };
}

function processStructure(name, nodeType) {
    var structure = nodeType.structure;
    var fields = {
        type: String,
        loc: true
    };
    var docs = {
        type: '"' + name + '"'
    };

    for (var key in structure) {
        if (hasOwnProperty.call(structure, key) === false) {
            continue;
        }

        var docsTypes = [];
        var fieldTypes = fields[key] = Array.isArray(structure[key])
            ? structure[key].slice()
            : [structure[key]];

        for (var i = 0; i < fieldTypes.length; i++) {
            var fieldType = fieldTypes[i];
            if (fieldType === String || fieldType === Boolean) {
                docsTypes.push(fieldType.name);
            } else if (fieldType === null) {
                docsTypes.push('null');
            } else if (typeof fieldType === 'string') {
                docsTypes.push('<' + fieldType + '>');
            } else if (Array.isArray(fieldType)) {
                docsTypes.push('List'); // TODO: use type enum
            } else {
                throw new Error('Wrong value `' + fieldType + '` in `' + name + '.' + key + '` structure definition');
            }
        }

        docs[key] = docsTypes.join(' | ');
    }

    return {
        docs: docs,
        check: createNodeStructureChecker(name, fields)
    };
}

module.exports = {
    getStructureFromConfig: function(config) {
        var structure = {};

        if (config.node) {
            for (var name in config.node) {
                if (hasOwnProperty.call(config.node, name)) {
                    var nodeType = config.node[name];

                    if (nodeType.structure) {
                        structure[name] = processStructure(name, nodeType);
                    } else {
                        throw new Error('Missed `structure` field in `' + name + '` node type definition');
                    }
                }
            }
        }

        return structure;
    }
};
