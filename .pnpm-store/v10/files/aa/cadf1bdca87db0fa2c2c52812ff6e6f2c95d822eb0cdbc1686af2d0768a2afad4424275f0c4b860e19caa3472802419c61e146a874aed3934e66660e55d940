import { merge as mergeStatic } from '../observable/merge';
export function merge(...observables) {
    return (source) => source.lift.call(mergeStatic(source, ...observables));
}
//# sourceMappingURL=merge.js.map