"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sample = sample;
exports.statistics = statistics;
const Stream_1 = require("../../stream/Stream");
const Property_generic_1 = require("../property/Property.generic");
const UnbiasedProperty_1 = require("../property/UnbiasedProperty");
const GlobalParameters_1 = require("./configuration/GlobalParameters");
const QualifiedParameters_1 = require("./configuration/QualifiedParameters");
const Tosser_1 = require("./Tosser");
const PathWalker_1 = require("./utils/PathWalker");
function toProperty(generator, qParams) {
    const prop = !Object.prototype.hasOwnProperty.call(generator, 'isAsync')
        ? new Property_generic_1.Property(generator, () => true)
        : generator;
    return qParams.unbiased === true ? new UnbiasedProperty_1.UnbiasedProperty(prop) : prop;
}
function streamSample(generator, params) {
    const extendedParams = typeof params === 'number'
        ? Object.assign(Object.assign({}, (0, GlobalParameters_1.readConfigureGlobal)()), { numRuns: params }) : Object.assign(Object.assign({}, (0, GlobalParameters_1.readConfigureGlobal)()), params);
    const qParams = QualifiedParameters_1.QualifiedParameters.read(extendedParams);
    const nextProperty = toProperty(generator, qParams);
    const shrink = nextProperty.shrink.bind(nextProperty);
    const tossedValues = qParams.path.length === 0
        ? (0, Stream_1.stream)((0, Tosser_1.toss)(nextProperty, qParams.seed, qParams.randomType, qParams.examples))
        : (0, PathWalker_1.pathWalk)(qParams.path, (0, Stream_1.stream)((0, Tosser_1.lazyToss)(nextProperty, qParams.seed, qParams.randomType, qParams.examples)), shrink);
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
        ? Object.assign(Object.assign({}, (0, GlobalParameters_1.readConfigureGlobal)()), { numRuns: params }) : Object.assign(Object.assign({}, (0, GlobalParameters_1.readConfigureGlobal)()), params);
    const qParams = QualifiedParameters_1.QualifiedParameters.read(extendedParams);
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
