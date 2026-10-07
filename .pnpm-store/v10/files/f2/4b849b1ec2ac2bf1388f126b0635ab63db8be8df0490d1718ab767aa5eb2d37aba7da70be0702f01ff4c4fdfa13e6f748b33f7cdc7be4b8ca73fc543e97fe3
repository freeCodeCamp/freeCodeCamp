"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = check;
exports.assert = assert;
const Stream_1 = require("../../stream/Stream");
const GlobalParameters_1 = require("./configuration/GlobalParameters");
const QualifiedParameters_1 = require("./configuration/QualifiedParameters");
const DecorateProperty_1 = require("./DecorateProperty");
const RunnerIterator_1 = require("./RunnerIterator");
const SourceValuesIterator_1 = require("./SourceValuesIterator");
const Tosser_1 = require("./Tosser");
const PathWalker_1 = require("./utils/PathWalker");
const RunDetailsFormatter_1 = require("./utils/RunDetailsFormatter");
const safeObjectAssign = Object.assign;
function runIt(property, shrink, sourceValues, verbose, interruptedAsFailure) {
    const isModernProperty = property.runBeforeEach !== undefined && property.runAfterEach !== undefined;
    const runner = new RunnerIterator_1.RunnerIterator(sourceValues, shrink, verbose, interruptedAsFailure);
    for (const v of runner) {
        if (isModernProperty) {
            property.runBeforeEach();
        }
        const out = property.run(v, isModernProperty);
        if (isModernProperty) {
            property.runAfterEach();
        }
        runner.handleResult(out);
    }
    return runner.runExecution;
}
async function asyncRunIt(property, shrink, sourceValues, verbose, interruptedAsFailure) {
    const isModernProperty = property.runBeforeEach !== undefined && property.runAfterEach !== undefined;
    const runner = new RunnerIterator_1.RunnerIterator(sourceValues, shrink, verbose, interruptedAsFailure);
    for (const v of runner) {
        if (isModernProperty) {
            await property.runBeforeEach();
        }
        const out = await property.run(v, isModernProperty);
        if (isModernProperty) {
            await property.runAfterEach();
        }
        runner.handleResult(out);
    }
    return runner.runExecution;
}
function check(rawProperty, params) {
    if (rawProperty == null || rawProperty.generate == null)
        throw new Error('Invalid property encountered, please use a valid property');
    if (rawProperty.run == null)
        throw new Error('Invalid property encountered, please use a valid property not an arbitrary');
    const qParams = QualifiedParameters_1.QualifiedParameters.read(safeObjectAssign(safeObjectAssign({}, (0, GlobalParameters_1.readConfigureGlobal)()), params));
    if (qParams.reporter !== null && qParams.asyncReporter !== null)
        throw new Error('Invalid parameters encountered, reporter and asyncReporter cannot be specified together');
    if (qParams.asyncReporter !== null && !rawProperty.isAsync())
        throw new Error('Invalid parameters encountered, only asyncProperty can be used when asyncReporter specified');
    const property = (0, DecorateProperty_1.decorateProperty)(rawProperty, qParams);
    const maxInitialIterations = qParams.path.length === 0 || qParams.path.indexOf(':') === -1 ? qParams.numRuns : -1;
    const maxSkips = qParams.numRuns * qParams.maxSkipsPerRun;
    const shrink = (...args) => property.shrink(...args);
    const initialValues = qParams.path.length === 0
        ? (0, Tosser_1.toss)(property, qParams.seed, qParams.randomType, qParams.examples)
        : (0, PathWalker_1.pathWalk)(qParams.path, (0, Stream_1.stream)((0, Tosser_1.lazyToss)(property, qParams.seed, qParams.randomType, qParams.examples)), shrink);
    const sourceValues = new SourceValuesIterator_1.SourceValuesIterator(initialValues, maxInitialIterations, maxSkips);
    const finalShrink = !qParams.endOnFailure ? shrink : Stream_1.Stream.nil;
    return property.isAsync()
        ? asyncRunIt(property, finalShrink, sourceValues, qParams.verbose, qParams.markInterruptAsFailure).then((e) => e.toRunDetails(qParams.seed, qParams.path, maxSkips, qParams))
        : runIt(property, finalShrink, sourceValues, qParams.verbose, qParams.markInterruptAsFailure).toRunDetails(qParams.seed, qParams.path, maxSkips, qParams);
}
function assert(property, params) {
    const out = check(property, params);
    if (property.isAsync())
        return out.then(RunDetailsFormatter_1.asyncReportRunDetails);
    else
        (0, RunDetailsFormatter_1.reportRunDetails)(out);
}
