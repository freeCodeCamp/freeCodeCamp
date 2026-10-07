import { Alias } from '../nodes/Alias.js';
import { isScalar } from '../nodes/identity.js';
import { composeCollection } from './compose-collection.js';
import { composeScalar } from './compose-scalar.js';
import { resolveEnd } from './resolve-end.js';
import { emptyScalarPosition } from './util-empty-scalar-position.js';

const CN = { composeNode, composeEmptyNode };
function composeNode(ctx, token, props, onError) {
    const atKey = ctx.atKey;
    const { spaceBefore, comment, anchor, tag } = props;
    let node;
    let isSrcToken = true;
    switch (token.type) {
        case 'alias':
            node = composeAlias(ctx, token, onError);
            if (anchor || tag)
                onError(token, 'ALIAS_PROPS', 'An alias node must not specify any properties');
            break;
        case 'scalar':
        case 'single-quoted-scalar':
        case 'double-quoted-scalar':
        case 'block-scalar':
            node = composeScalar(ctx, token, tag, onError);
            if (anchor)
                node.anchor = anchor.source.substring(1);
            break;
        case 'block-map':
        case 'block-seq':
        case 'flow-collection':
            try {
                node = composeCollection(CN, ctx, token, props, onError);
                if (anchor)
                    node.anchor = anchor.source.substring(1);
            }
            catch (error) {
                // Almost certainly here due to a stack overflow
                const message = error instanceof Error ? error.message : String(error);
                onError(token, 'RESOURCE_EXHAUSTION', message);
            }
            break;
        default: {
            const message = token.type === 'error'
                ? token.message
                : `Unsupported token (type: ${token.type})`;
            onError(token, 'UNEXPECTED_TOKEN', message);
            isSrcToken = false;
        }
    }
    node ?? (node = composeEmptyNode(ctx, token.offset, undefined, null, props, onError));
    if (anchor && node.anchor === '')
        onError(anchor, 'BAD_ALIAS', 'Anchor cannot be an empty string');
    if (atKey &&
        ctx.options.stringKeys &&
        (!isScalar(node) ||
            typeof node.value !== 'string' ||
            (node.tag && node.tag !== 'tag:yaml.org,2002:str'))) {
        const msg = 'With stringKeys, all keys must be strings';
        onError(tag ?? token, 'NON_STRING_KEY', msg);
    }
    if (spaceBefore)
        node.spaceBefore = true;
    if (comment) {
        if (token.type === 'scalar' && token.source === '')
            node.comment = comment;
        else
            node.commentBefore = comment;
    }
    // @ts-expect-error Type checking misses meaning of isSrcToken
    if (ctx.options.keepSourceTokens && isSrcToken)
        node.srcToken = token;
    return node;
}
function composeEmptyNode(ctx, offset, before, pos, { spaceBefore, comment, anchor, tag, end }, onError) {
    const token = {
        type: 'scalar',
        offset: emptyScalarPosition(offset, before, pos),
        indent: -1,
        source: ''
    };
    const node = composeScalar(ctx, token, tag, onError);
    if (anchor) {
        node.anchor = anchor.source.substring(1);
        if (node.anchor === '')
            onError(anchor, 'BAD_ALIAS', 'Anchor cannot be an empty string');
    }
    if (spaceBefore)
        node.spaceBefore = true;
    if (comment) {
        node.comment = comment;
        node.range[2] = end;
    }
    return node;
}
function composeAlias({ options }, { offset, source, end }, onError) {
    const alias = new Alias(source.substring(1));
    if (alias.source === '')
        onError(offset, 'BAD_ALIAS', 'Alias cannot be an empty string');
    if (alias.source.endsWith(':'))
        onError(offset + source.length - 1, 'BAD_ALIAS', 'Alias ending in : is ambiguous', true);
    const valueEnd = offset + source.length;
    const re = resolveEnd(end, valueEnd, options.strict, onError);
    alias.range = [offset, valueEnd, re.offset];
    if (re.comment)
        alias.comment = re.comment;
    return alias;
}

export { composeEmptyNode, composeNode };
