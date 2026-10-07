import { stream } from '../../stream/Stream.js';
import { Property } from '../property/Property.generic.js';
import { UnbiasedProperty } from '../property/UnbiasedProperty.js';
import { readConfigureGlobal } from './configuration/GlobalParameters.js';
import { QualifiedParameters } from './configuration/QualifiedParameters.js';
import { lazyToss, toss } from './Tosser.js';
import { pathWalk } from './utils/PathWalker.js';
function toProperty(generator, qParams) {
    const prop = !Object.prototype.hasOwnProperty.call(generator, 'isAsync')
        ? new Property(generator, () => true)
        : generator;
    return qParams.unbiased === true ? new UnbiasedProperty(prop) : prop;
}
function streamSample(generator, params) {
    const extendedParams = typeof params === 'number'
        ? Object.assign(Object.assign({}, readConfigureGlobal()), { numRuns: params }) : Object.assign(Object.assign({}, readConfigureGlobal()), params);
    const qParams = QualifiedParameters.read(extendedParams);
    const nextProperty = toProperty(generator, qParams);
    const shrink = nextProperty.shrink.bind(nextProperty);
    const tossedValues = qParams.path.length === 0
        ? stream(toss(nextProperty, qParams.seed, qParams.randomType, qParams.examples))
        : pathWalk(qParams.path, stream(lazyToss(nextProperty, qParams.seed, qParams.randomType, qParams.examples)), shrink);
    return tossedValues.take(qParams.numRuns).map((s) => s.value_);
}
function sample(generator, params) {
    return [...streamSample(generator, params)];
}
function round2(n) {
    return (Math.round(n * 100) / 100).toFixed(2);
}
function statistics(generator, classify, params) {
    const extendedParams = typeof params === 'number'
        ? Object.assign(Object.assign({}, readConfigureGlobal()), { numRuns: params }) : Object.assign(Object.assign({}, readConfigureGlobal()), params);
    const qParams = QualifiedParameters.read(extendedParams);
    const recorded = {};
    for (const g of streamSample(generator, params)) {
        const out = classify(g);
        const categories = Array.isArray(out) ? out : [out];
        for (const c of categories) {
            recorded[c] = (recorded[c] || 0) + 1;
        }
    }
    const data = Object.entries(recorded)
        .sort((a, b) => b[1] - a[1])
        .map((i) => [i[0], `${round2((i[1] * 100.0) / qParams.numRuns)}%`]);
    const longestName = data.map((i) => i[0].length).reduce((p, c) => Math.max(p, c), 0);
    const longestPercent = data.map((i) => i[1].length).reduce((p, c) => Math.max(p, c), 0);
    for (const item of data) {
        qParams.logger(`${item[0].padEnd(longestName, '.')}..${item[1].padStart(longestPercent, '.')}`);
    }
}
export { sample, statistics };
