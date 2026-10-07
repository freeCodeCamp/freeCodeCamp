import { List } from '../utils/List.js';

const { hasOwnProperty } = Object.prototype;

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

        for (let key in node) {
            let valid = true;

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
                valid = false;

                for (let i = 0; !valid && i < fields[key].length; i++) {
                    const fieldType = fields[key][i];

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

        for (const key in fields) {
            if (hasOwnProperty.call(fields, key) &&
                hasOwnProperty.call(node, key) === false) {
                warn(node, 'Field `' + type + '.' + key + '` is missed');
            }
        }
    };
}

function genTypesList(fieldTypes, path) {
    const docsTypes = [];

    for (let i = 0; i < fieldTypes.length; i++) {
        const fieldType = fieldTypes[i];
        if (fieldType === String || fieldType === Boolean) {
            docsTypes.push(fieldType.name.toLowerCase());
        } else if (fieldType === null) {
            docsTypes.push('null');
        } else if (typeof fieldType === 'string') {
            docsTypes.push(fieldType);
        } else if (Array.isArray(fieldType)) {
            docsTypes.push('List<' + (genTypesList(fieldType, path) || 'any') + '>'); // TODO: use type enum
        } else {
            throw new Error('Wrong value `' + fieldType + '` in `' + path + '` structure definition');
        }
    }

    return docsTypes.join(' | ');
}

function processStructure(name, nodeType) {
    const structure = nodeType.structure;
    const fields = {
        type: String,
        loc: true
    };
    const docs = {
        type: '"' + name + '"'
    };

    for (const key in structure) {
        if (hasOwnProperty.call(structure, key) === false) {
            continue;
        }

        const fieldTypes = fields[key] = Array.isArray(structure[key])
            ? structure[key].slice()
            : [structure[key]];

        docs[key] = genTypesList(fieldTypes, name + '.' + key);
    }

    return {
        docs,
        check: createNodeStructureChecker(name, fields)
    };
}

export function getStructureFromConfig(config) {
    const structure = {};

    if (config.node) {
        for (const name in config.node) {
            if (hasOwnProperty.call(config.node, name)) {
                const nodeType = config.node[name];

                if (nodeType.structure) {
                    structure[name] = processStructure(name, nodeType);
                } else {
                    throw new Error('Missed `structure` field in `' + name + '` node type definition');
                }
            }
        }
    }

    return structure;
};
