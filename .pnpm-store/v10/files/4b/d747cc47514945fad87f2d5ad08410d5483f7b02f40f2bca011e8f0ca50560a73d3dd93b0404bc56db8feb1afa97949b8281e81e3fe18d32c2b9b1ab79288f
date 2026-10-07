'use strict';

const noop = function() {};

function ensureFunction(value) {
    return typeof value === 'function' ? value : noop;
}

function walk(node, options, context) {
    function walk(node) {
        enter.call(context, node);

        switch (node.type) {
            case 'Group':
                node.terms.forEach(walk);
                break;

            case 'Multiplier':
            case 'Boolean':
                walk(node.term);
                break;

            case 'Type':
            case 'Property':
            case 'Keyword':
            case 'AtKeyword':
            case 'Function':
            case 'String':
            case 'Token':
            case 'Comma':
                break;

            default:
                throw new Error('Unknown type: ' + node.type);
        }

        leave.call(context, node);
    }

    let enter = noop;
    let leave = noop;

    if (typeof options === 'function') {
        enter = options;
    } else if (options) {
        enter = ensureFunction(options.enter);
        leave = ensureFunction(options.leave);
    }

    if (enter === noop && leave === noop) {
        throw new Error('Neither `enter` nor `leave` walker handler is set or both aren\'t a function');
    }

    walk(node);
}

exports.walk = walk;
