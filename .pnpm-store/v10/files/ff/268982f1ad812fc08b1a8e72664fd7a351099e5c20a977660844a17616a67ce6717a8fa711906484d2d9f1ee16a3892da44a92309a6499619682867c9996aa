import { concat as concatStatic } from '../observable/concat';
export function concat(...observables) {
    return (source) => source.lift.call(concatStatic(source, ...observables));
}
//# sourceMappingURL=concat.js.map