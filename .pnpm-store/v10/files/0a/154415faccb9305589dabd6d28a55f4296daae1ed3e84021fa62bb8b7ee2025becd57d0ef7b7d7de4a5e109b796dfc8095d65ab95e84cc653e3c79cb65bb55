import { isScalar, isPair } from '../../nodes/identity.js';
import { toJS } from '../../nodes/toJS.js';
import { YAMLMap } from '../../nodes/YAMLMap.js';
import { YAMLSeq } from '../../nodes/YAMLSeq.js';
import { resolvePairs, createPairs } from './pairs.js';

class YAMLOMap extends YAMLSeq {
    constructor() {
        super();
        this.add = YAMLMap.prototype.add.bind(this);
        this.delete = YAMLMap.prototype.delete.bind(this);
        this.get = YAMLMap.prototype.get.bind(this);
        this.has = YAMLMap.prototype.has.bind(this);
        this.set = YAMLMap.prototype.set.bind(this);
        this.tag = YAMLOMap.tag;
    }
    /**
     * If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
     * but TypeScript won't allow widening the signature of a child method.
     */
    toJSON(_, ctx) {
        if (!ctx)
            return super.toJSON(_);
        const map = new Map();
        if (ctx?.onCreate)
            ctx.onCreate(map);
        for (const pair of this.items) {
            let key, value;
            if (isPair(pair)) {
                key = toJS(pair.key, '', ctx);
                value = toJS(pair.value, key, ctx);
            }
            else {
                key = toJS(pair, '', ctx);
            }
            if (map.has(key))
                throw new Error('Ordered maps must not include duplicate keys');
            map.set(key, value);
        }
        return map;
    }
    static from(schema, iterable, ctx) {
        const pairs = createPairs(schema, iterable, ctx);
        const omap = new this();
        omap.items = pairs.items;
        return omap;
    }
}
YAMLOMap.tag = 'tag:yaml.org,2002:omap';
const omap = {
    collection: 'seq',
    identify: value => value instanceof Map,
    nodeClass: YAMLOMap,
    default: false,
    tag: 'tag:yaml.org,2002:omap',
    resolve(seq, onError) {
        const pairs = resolvePairs(seq, onError);
        const seenKeys = [];
        for (const { key } of pairs.items) {
            if (isScalar(key)) {
                if (seenKeys.includes(key.value)) {
                    onError(`Ordered maps must not include duplicate keys: ${key.value}`);
                }
                else {
                    seenKeys.push(key.value);
                }
            }
        }
        return Object.assign(new YAMLOMap(), pairs);
    },
    createNode: (schema, iterable, ctx) => YAMLOMap.from(schema, iterable, ctx)
};

export { YAMLOMap, omap };
