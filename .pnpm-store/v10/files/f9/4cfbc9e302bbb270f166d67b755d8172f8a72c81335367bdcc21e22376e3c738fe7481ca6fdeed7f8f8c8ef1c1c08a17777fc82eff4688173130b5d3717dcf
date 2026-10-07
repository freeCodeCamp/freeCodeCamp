import { EmptyError } from '../util/EmptyError';
import { filter } from './filter';
import { take } from './take';
import { defaultIfEmpty } from './defaultIfEmpty';
import { throwIfEmpty } from './throwIfEmpty';
import { identity } from '../util/identity';
export function first(predicate, defaultValue) {
    const hasDefaultValue = arguments.length >= 2;
    return (source) => source.pipe(predicate ? filter((v, i) => predicate(v, i, source)) : identity, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(() => new EmptyError()));
}
//# sourceMappingURL=first.js.map