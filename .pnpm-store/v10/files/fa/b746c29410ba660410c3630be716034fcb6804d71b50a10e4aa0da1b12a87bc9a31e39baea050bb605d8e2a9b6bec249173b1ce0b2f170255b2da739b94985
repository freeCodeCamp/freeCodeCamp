import { ArgumentOutOfRangeError } from '../util/ArgumentOutOfRangeError';
import { filter } from './filter';
import { throwIfEmpty } from './throwIfEmpty';
import { defaultIfEmpty } from './defaultIfEmpty';
import { take } from './take';
export function elementAt(index, defaultValue) {
    if (index < 0) {
        throw new ArgumentOutOfRangeError();
    }
    const hasDefaultValue = arguments.length >= 2;
    return (source) => source.pipe(filter((v, i) => i === index), take(1), hasDefaultValue
        ? defaultIfEmpty(defaultValue)
        : throwIfEmpty(() => new ArgumentOutOfRangeError()));
}
//# sourceMappingURL=elementAt.js.map