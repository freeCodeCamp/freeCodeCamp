import { addArrayIntToNew, addOneToPositiveArrayInt, substractArrayIntToNew, trimArrayIntInplace, } from './internals/ArrayInt.js';
import { unsafeUniformArrayIntDistributionInternal } from './internals/UnsafeUniformArrayIntDistributionInternal.js';
export function unsafeUniformArrayIntDistribution(from, to, rng) {
    var rangeSize = trimArrayIntInplace(addOneToPositiveArrayInt(substractArrayIntToNew(to, from)));
    var emptyArrayIntData = rangeSize.data.slice(0);
    var g = unsafeUniformArrayIntDistributionInternal(emptyArrayIntData, rangeSize.data, rng);
    return trimArrayIntInplace(addArrayIntToNew({ sign: 1, data: g }, from));
}
