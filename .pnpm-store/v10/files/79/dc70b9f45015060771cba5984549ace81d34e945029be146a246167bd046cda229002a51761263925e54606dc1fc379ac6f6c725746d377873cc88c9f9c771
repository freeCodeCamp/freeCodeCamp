import { isSeq, isPair, isMap } from '../../nodes/identity.js';
import { createPair, Pair } from '../../nodes/Pair.js';
import { Scalar } from '../../nodes/Scalar.js';
import { YAMLSeq } from '../../nodes/YAMLSeq.js';

function resolvePairs(seq, onError) {
    if (isSeq(seq)) {
        for (let i = 0; i < seq.items.length; ++i) {
            let item = seq.items[i];
            if (isPair(item))
                continue;
            else if (isMap(item)) {
                if (item.items.length > 1)
                    onError('Each pair must have its own sequence indicator');
                const pair = item.items[0] || new Pair(new Scalar(null));
                if (item.commentBefore)
                    pair.key.commentBefore = pair.key.commentBefore
                        ? `${item.commentBefore}\n${pair.key.commentBefore}`
                        : item.commentBefore;
                if (item.comment) {
                    const cn = pair.value ?? pair.key;
                    cn.comment = cn.comment
                        ? `${item.comment}\n${cn.comment}`
                        : item.comment;
                }
                item = pair;
            }
            seq.items[i] = isPair(item) ? item : new Pair(item);
        }
    }
    else
        onError('Expected a sequence for this tag');
    return seq;
}
function createPairs(schema, iterable, ctx) {
    const { replacer } = ctx;
    const pairs = new YAMLSeq(schema);
    pairs.tag = 'tag:yaml.org,2002:pairs';
    let i = 0;
    if (iterable && Symbol.iterator in Object(iterable))
        for (let it of iterable) {
            if (typeof replacer === 'function')
                it = replacer.call(iterable, String(i++), it);
            let key, value;
            if (Array.isArray(it)) {
                if (it.length === 2) {
                    key = it[0];
                    value = it[1];
                }
                else
                    throw new TypeError(`Expected [key, value] tuple: ${it}`);
            }
            else if (it && it instanceof Object) {
                const keys = Object.keys(it);
                if (keys.length === 1) {
                    key = keys[0];
                    value = it[key];
                }
                else {
                    throw new TypeError(`Expected tuple with one key, not ${keys.length} keys`);
                }
            }
            else {
                key = it;
            }
            pairs.items.push(createPair(key, value, ctx));
        }
    return pairs;
}
const pairs = {
    collection: 'seq',
    default: false,
    tag: 'tag:yaml.org,2002:pairs',
    resolve: resolvePairs,
    createNode: createPairs
};

export { createPairs, pairs, resolvePairs };
