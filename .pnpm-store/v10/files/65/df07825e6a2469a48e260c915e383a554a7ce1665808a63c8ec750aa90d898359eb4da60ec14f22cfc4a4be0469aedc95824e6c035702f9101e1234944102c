import { isArray } from '../util/isArray';
import { CombineLatestOperator } from '../observable/combineLatest';
import { from } from '../observable/from';
const none = {};
export function combineLatest(...observables) {
    let project = null;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    if (observables.length === 1 && isArray(observables[0])) {
        observables = observables[0].slice();
    }
    return (source) => source.lift.call(from([source, ...observables]), new CombineLatestOperator(project));
}
//# sourceMappingURL=combineLatest.js.map