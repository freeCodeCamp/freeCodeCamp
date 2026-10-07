import { Stream, stream } from '../../stream/Stream.js';
import { readConfigureGlobal } from './configuration/GlobalParameters.js';
import { QualifiedParameters } from './configuration/QualifiedParameters.js';
import { decorateProperty } from './DecorateProperty.js';
import { RunnerIterator } from './RunnerIterator.js';
import { SourceValuesIterator } from './SourceValuesIterator.js';
import { lazyToss, toss } from './Tosser.js';
import { pathWalk } from './utils/PathWalker.js';
import { asyncReportRunDetails, reportRunDetails } from './utils/RunDetailsFormatter.js';
const safeObjectAssign = Object.assign;
function runIt(property, shrink, sourceValues, verbose, interruptedAsFailure) {
    const isModernProperty = property.runBeforeEach !== undefined && property.runAfterEach !== undefined;
    const runner = new RunnerIterator(sourceValues, shrink, verbose, interruptedAsFailure);
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
    const runner = new RunnerIterator(sourceValues, shrink, verbose, interruptedAsFailure);
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
    const qParams = QualifiedParameters.read(safeObjectAssign(safeObjectAssign({}, readConfigureGlobal()), params));
    if (qParams.reporter !== null && qParams.asyncReporter !== null)
        throw new Error('Invalid parameters encountered, reporter and asyncReporter cannot be specified together');
    if (qParams.asyncReporter !== null && !rawProperty.isAsync())
        throw new Error('Invalid parameters encountered, only asyncProperty can be used when asyncReporter specified');
    const property = decorateProperty(rawProperty, qParams);
    const maxInitialIterations = qParams.path.length === 0 || qParams.path.indexOf(':') === -1 ? qParams.numRuns : -1;
    const maxSkips = qParams.numRuns * qParams.maxSkipsPerRun;
    const shrink = (...args) => property.shrink(...args);
    const initialValues = qParams.path.length === 0
        ? toss(property, qParams.seed, qParams.randomType, qParams.examples)
        : pathWalk(qParams.path, stream(lazyToss(property, qParams.seed, qParams.randomType, qParams.examples)), shrink);
    const sourceValues = new SourceValuesIterator(initialValues, maxInitialIterations, maxSkips);
    const finalShrink = !qParams.endOnFailure ? shrink : Stream.nil;
    return property.isAsync()
        ? asyncRunIt(property, finalShrink, sourceValues, qParams.verbose, qParams.markInterruptAsFailure).then((e) => e.toRunDetails(qParams.seed, qParams.path, maxSkips, qParams))
        : runIt(property, finalShrink, sourceValues, qParams.verbose, qParams.markInterruptAsFailure).toRunDetails(qParams.seed, qParams.path, maxSkips, qParams);
}
function assert(property, params) {
    const out = check(property, params);
    if (property.isAsync())
        return out.then(asyncReportRunDetails);
    else
        reportRunDetails(out);
}
export { check, assert };
