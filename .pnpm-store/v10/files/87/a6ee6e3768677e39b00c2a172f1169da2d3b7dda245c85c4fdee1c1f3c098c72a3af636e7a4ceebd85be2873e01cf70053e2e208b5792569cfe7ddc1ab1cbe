function noop(value) {
    return value;
}

function generateMultiplier(multiplier) {
    const { min, max, comma } = multiplier;

    if (min === 0 && max === 0) {
        return comma ? '#?' : '*';
    }

    if (min === 0 && max === 1) {
        return '?';
    }

    if (min === 1 && max === 0) {
        return comma ? '#' : '+';
    }

    if (min === 1 && max === 1) {
        return '';
    }

    return (
        (comma ? '#' : '') +
        (min === max
            ? '{' + min + '}'
            : '{' + min + ',' + (max !== 0 ? max : '') + '}'
        )
    );
}

function generateTypeOpts(node) {
    switch (node.type) {
        case 'Range':
            return (
                ' [' +
                (node.min === null ? '-∞' : node.min) +
                ',' +
                (node.max === null ? '∞' : node.max) +
                ']'
            );

        default:
            throw new Error('Unknown node type `' + node.type + '`');
    }
}

function generateSequence(node, decorate, forceBraces, compact) {
    const combinator = node.combinator === ' ' || compact ? node.combinator : ' ' + node.combinator + ' ';
    const result = node.terms
        .map(term => internalGenerate(term, decorate, forceBraces, compact))
        .join(combinator);

    if (node.explicit || forceBraces) {
        return (compact || result[0] === ',' ? '[' : '[ ') + result + (compact ? ']' : ' ]');
    }

    return result;
}

function internalGenerate(node, decorate, forceBraces, compact) {
    let result;

    switch (node.type) {
        case 'Group':
            result =
                generateSequence(node, decorate, forceBraces, compact) +
                (node.disallowEmpty ? '!' : '');
            break;

        case 'Multiplier':
            // return since node is a composition
            return (
                internalGenerate(node.term, decorate, forceBraces, compact) +
                decorate(generateMultiplier(node), node)
            );

        case 'Boolean':
            result = '<boolean-expr[' + internalGenerate(node.term, decorate, forceBraces, compact) + ']>';
            break;

        case 'Type':
            result = '<' + node.name + (node.opts ? decorate(generateTypeOpts(node.opts), node.opts) : '') + '>';
            break;

        case 'Property':
            result = '<\'' + node.name + '\'>';
            break;

        case 'Keyword':
            result = node.name;
            break;

        case 'AtKeyword':
            result = '@' + node.name;
            break;

        case 'Function':
            result = node.name + '(';
            break;

        case 'String':
        case 'Token':
            result = node.value;
            break;

        case 'Comma':
            result = ',';
            break;

        default:
            throw new Error('Unknown node type `' + node.type + '`');
    }

    return decorate(result, node);
}

export function generate(node, options) {
    let decorate = noop;
    let forceBraces = false;
    let compact = false;

    if (typeof options === 'function') {
        decorate = options;
    } else if (options) {
        forceBraces = Boolean(options.forceBraces);
        compact = Boolean(options.compact);
        if (typeof options.decorate === 'function') {
            decorate = options.decorate;
        }
    }

    return internalGenerate(node, decorate, forceBraces, compact);
};
