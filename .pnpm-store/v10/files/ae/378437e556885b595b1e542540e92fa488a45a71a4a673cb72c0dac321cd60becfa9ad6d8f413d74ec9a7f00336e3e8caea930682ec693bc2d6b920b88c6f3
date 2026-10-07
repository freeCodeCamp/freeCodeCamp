import { hash } from '../utils/hash.js';
import { asyncStringify, asyncToStringMethod, stringify, toStringMethod } from '../utils/stringify.js';
import { cloneMethod, hasCloneMethod } from '../check/symbols.js';
import { array } from './array.js';
import { integer } from './integer.js';
import { noShrink } from './noShrink.js';
import { tuple } from './tuple.js';
import { escapeForMultilineComments } from './_internals/helpers/TextEscaper.js';
import { safeMap, safeSort } from '../utils/globals.js';
const safeObjectDefineProperties = Object.defineProperties;
const safeObjectKeys = Object.keys;
export function func(arb) {
    return tuple(array(arb, { minLength: 1 }), noShrink(integer())).map(([outs, seed]) => {
        const producer = () => {
            const recorded = {};
            const f = (...args) => {
                const repr = stringify(args);
                const val = outs[hash(`${seed}${repr}`) % outs.length];
                recorded[repr] = val;
                return hasCloneMethod(val) ? val[cloneMethod]() : val;
            };
            function prettyPrint(stringifiedOuts) {
                const seenValues = safeMap(safeMap(safeSort(safeObjectKeys(recorded)), (k) => `${k} => ${stringify(recorded[k])}`), (line) => `/* ${escapeForMultilineComments(line)} */`);
                return `function(...args) {
  // With hash and stringify coming from fast-check${seenValues.length !== 0 ? `\n  ${seenValues.join('\n  ')}` : ''}
  const outs = ${stringifiedOuts};
  return outs[hash('${seed}' + stringify(args)) % outs.length];
}`;
            }
            return safeObjectDefineProperties(f, {
                toString: { value: () => prettyPrint(stringify(outs)) },
                [toStringMethod]: { value: () => prettyPrint(stringify(outs)) },
                [asyncToStringMethod]: { value: async () => prettyPrint(await asyncStringify(outs)) },
                [cloneMethod]: { value: producer, configurable: true },
            });
        };
        return producer();
    });
}
