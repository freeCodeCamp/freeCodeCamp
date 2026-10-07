'use strict';

var YAMLSeq = require('../nodes/YAMLSeq.js');
var resolveProps = require('./resolve-props.js');
var utilFlowIndentCheck = require('./util-flow-indent-check.js');

function resolveBlockSeq({ composeNode, composeEmptyNode }, ctx, bs, onError, tag) {
    const NodeClass = tag?.nodeClass ?? YAMLSeq.YAMLSeq;
    const seq = new NodeClass(ctx.schema);
    if (ctx.atRoot)
        ctx.atRoot = false;
    if (ctx.atKey)
        ctx.atKey = false;
    let offset = bs.offset;
    let commentEnd = null;
    for (const { start, value } of bs.items) {
        const props = resolveProps.resolveProps(start, {
            indicator: 'seq-item-ind',
            next: value,
            offset,
            onError,
            parentIndent: bs.indent,
            startOnNewline: true
        });
        if (!props.found) {
            if (props.anchor || props.tag || value) {
                if (value?.type === 'block-seq')
                    onError(props.end, 'BAD_INDENT', 'All sequence items must start at the same column');
                else
                    onError(offset, 'MISSING_CHAR', 'Sequence item without - indicator');
            }
            else {
                commentEnd = props.end;
                if (props.comment)
                    seq.comment = props.comment;
                continue;
            }
        }
        const node = value
            ? composeNode(ctx, value, props, onError)
            : composeEmptyNode(ctx, props.end, start, null, props, onError);
        if (ctx.schema.compat)
            utilFlowIndentCheck.flowIndentCheck(bs.indent, value, onError);
        offset = node.range[2];
        seq.items.push(node);
    }
    seq.range = [bs.offset, offset, commentEnd ?? offset];
    return seq;
}

exports.resolveBlockSeq = resolveBlockSeq;
