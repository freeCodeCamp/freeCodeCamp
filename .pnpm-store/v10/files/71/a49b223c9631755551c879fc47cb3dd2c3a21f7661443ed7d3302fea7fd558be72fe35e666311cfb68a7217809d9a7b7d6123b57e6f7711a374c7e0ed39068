import { scan } from './scan';
import { takeLast } from './takeLast';
import { defaultIfEmpty } from './defaultIfEmpty';
import { pipe } from '../util/pipe';
export function reduce(accumulator, seed) {
    if (arguments.length >= 2) {
        return function reduceOperatorFunctionWithSeed(source) {
            return pipe(scan(accumulator, seed), takeLast(1), defaultIfEmpty(seed))(source);
        };
    }
    return function reduceOperatorFunction(source) {
        return pipe(scan((acc, value, index) => accumulator(acc, value, index + 1)), takeLast(1))(source);
    };
}
//# sourceMappingURL=reduce.js.map