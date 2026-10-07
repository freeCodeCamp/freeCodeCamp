"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
function renderEntity(entity) {
    var res = '';
    switch (entity.type) {
        case 'ruleSet':
            var currentEntity = entity.rule;
            var parts = [];
            while (currentEntity) {
                if (currentEntity.nestingOperator) {
                    parts.push(currentEntity.nestingOperator);
                }
                parts.push(renderEntity(currentEntity));
                currentEntity = currentEntity.rule;
            }
            res = parts.join(' ');
            break;
        case 'selectors':
            res = entity.selectors.map(renderEntity).join(', ');
            break;
        case 'rule':
            if (entity.tagName) {
                if (entity.tagName === '*') {
                    res = '*';
                }
                else {
                    res = utils_1.escapeIdentifier(entity.tagName);
                }
            }
            if (entity.id) {
                res += "#" + utils_1.escapeIdentifier(entity.id);
            }
            if (entity.classNames) {
                res += entity.classNames.map(function (cn) {
                    return "." + (utils_1.escapeIdentifier(cn));
                }).join('');
            }
            if (entity.attrs) {
                res += entity.attrs.map(function (attr) {
                    if ('operator' in attr) {
                        if (attr.valueType === 'substitute') {
                            return "[" + utils_1.escapeIdentifier(attr.name) + attr.operator + "$" + attr.value + "]";
                        }
                        else {
                            return "[" + utils_1.escapeIdentifier(attr.name) + attr.operator + utils_1.escapeStr(attr.value) + "]";
                        }
                    }
                    else {
                        return "[" + utils_1.escapeIdentifier(attr.name) + "]";
                    }
                }).join('');
            }
            if (entity.pseudos) {
                res += entity.pseudos.map(function (pseudo) {
                    if (pseudo.valueType) {
                        if (pseudo.valueType === 'selector') {
                            return ":" + utils_1.escapeIdentifier(pseudo.name) + "(" + renderEntity(pseudo.value) + ")";
                        }
                        else if (pseudo.valueType === 'substitute') {
                            return ":" + utils_1.escapeIdentifier(pseudo.name) + "($" + pseudo.value + ")";
                        }
                        else if (pseudo.valueType === 'numeric') {
                            return ":" + utils_1.escapeIdentifier(pseudo.name) + "(" + pseudo.value + ")";
                        }
                        else {
                            return (":" + utils_1.escapeIdentifier(pseudo.name) +
                                "(" + utils_1.escapeIdentifier(pseudo.value) + ")");
                        }
                    }
                    else {
                        return ":" + utils_1.escapeIdentifier(pseudo.name);
                    }
                }).join('');
            }
            break;
        default:
            throw Error('Unknown entity type: "' + entity.type + '".');
    }
    return res;
}
exports.renderEntity = renderEntity;
