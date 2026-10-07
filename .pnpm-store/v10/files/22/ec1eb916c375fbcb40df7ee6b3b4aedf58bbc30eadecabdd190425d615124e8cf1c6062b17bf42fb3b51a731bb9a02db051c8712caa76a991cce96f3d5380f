import { escapeForMultilineComments } from '../helpers/TextEscaper.js';
import { cloneMethod } from '../../../check/symbols.js';
import { hash } from '../../../utils/hash.js';
import { stringify } from '../../../utils/stringify.js';
import { integer } from '../../integer.js';
import { noShrink } from '../../noShrink.js';
import { tuple } from '../../tuple.js';
import { safeJoin } from '../../../utils/globals.js';
const safeObjectAssign = Object.assign;
const safeObjectKeys = Object.keys;
export function buildCompareFunctionArbitrary(cmp) {
    return tuple(noShrink(integer()), noShrink(integer({ min: 1, max: 0xffffffff }))).map(([seed, hashEnvSize]) => {
        const producer = () => {
            const recorded = {};
            const f = (a, b) => {
                const reprA = stringify(a);
                const reprB = stringify(b);
                const hA = hash(`${seed}${reprA}`) % hashEnvSize;
                const hB = hash(`${seed}${reprB}`) % hashEnvSize;
                const val = cmp(hA, hB);
                recorded[`[${reprA},${reprB}]`] = val;
                return val;
            };
            return safeObjectAssign(f, {
                toString: () => {
                    const seenValues = safeObjectKeys(recorded)
                        .sort()
                        .map((k) => `${k} => ${stringify(recorded[k])}`)
                        .map((line) => `/* ${escapeForMultilineComments(line)} */`);
                    return `function(a, b) {
  // With hash and stringify coming from fast-check${seenValues.length !== 0 ? `\n  ${safeJoin(seenValues, '\n  ')}` : ''}
  const cmp = ${cmp};
  const hA = hash('${seed}' + stringify(a)) % ${hashEnvSize};
  const hB = hash('${seed}' + stringify(b)) % ${hashEnvSize};
  return cmp(hA, hB);
}`;
                },
                [cloneMethod]: producer,
            });
        };
        return producer();
    });
}
