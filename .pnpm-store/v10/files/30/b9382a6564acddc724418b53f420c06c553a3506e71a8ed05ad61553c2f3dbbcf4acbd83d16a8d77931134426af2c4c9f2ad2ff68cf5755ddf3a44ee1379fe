import { Error, safeMapGet, Map, safePush, safeReplace } from '../../../utils/globals.js';
import { stringify, possiblyAsyncStringify } from '../../../utils/stringify.js';
import { VerbosityLevel } from '../configuration/VerbosityLevel.js';
import { ExecutionStatus } from '../reporter/ExecutionStatus.js';
const safeObjectAssign = Object.assign;
function formatHints(hints) {
    if (hints.length === 1) {
        return `Hint: ${hints[0]}`;
    }
    return hints.map((h, idx) => `Hint (${idx + 1}): ${h}`).join('\n');
}
function formatFailures(failures, stringifyOne) {
    return `Encountered failures were:\n- ${failures.map(stringifyOne).join('\n- ')}`;
}
function formatExecutionSummary(executionTrees, stringifyOne) {
    const summaryLines = [];
    const remainingTreesAndDepth = [];
    for (const tree of executionTrees.slice().reverse()) {
        remainingTreesAndDepth.push({ depth: 1, tree });
    }
    while (remainingTreesAndDepth.length !== 0) {
        const currentTreeAndDepth = remainingTreesAndDepth.pop();
        const currentTree = currentTreeAndDepth.tree;
        const currentDepth = currentTreeAndDepth.depth;
        const statusIcon = currentTree.status === ExecutionStatus.Success
            ? '\x1b[32m\u221A\x1b[0m'
            : currentTree.status === ExecutionStatus.Failure
                ? '\x1b[31m\xD7\x1b[0m'
                : '\x1b[33m!\x1b[0m';
        const leftPadding = Array(currentDepth).join('. ');
        summaryLines.push(`${leftPadding}${statusIcon} ${stringifyOne(currentTree.value)}`);
        for (const tree of currentTree.children.slice().reverse()) {
            remainingTreesAndDepth.push({ depth: currentDepth + 1, tree });
        }
    }
    return `Execution summary:\n${summaryLines.join('\n')}`;
}
function preFormatTooManySkipped(out, stringifyOne) {
    const message = `Failed to run property, too many pre-condition failures encountered\n{ seed: ${out.seed} }\n\nRan ${out.numRuns} time(s)\nSkipped ${out.numSkips} time(s)`;
    let details = null;
    const hints = [
        'Try to reduce the number of rejected values by combining map, flatMap and built-in arbitraries',
        'Increase failure tolerance by setting maxSkipsPerRun to an higher value',
    ];
    if (out.verbose >= VerbosityLevel.VeryVerbose) {
        details = formatExecutionSummary(out.executionSummary, stringifyOne);
    }
    else {
        safePush(hints, 'Enable verbose mode at level VeryVerbose in order to check all generated values and their associated status');
    }
    return { message, details, hints };
}
function preFormatFailure(out, stringifyOne) {
    const noErrorInMessage = out.runConfiguration.errorWithCause;
    const messageErrorPart = noErrorInMessage ? '' : `\nGot ${safeReplace(out.error, /^Error: /, 'error: ')}`;
    const message = `Property failed after ${out.numRuns} tests\n{ seed: ${out.seed}, path: "${out.counterexamplePath}", endOnFailure: true }\nCounterexample: ${stringifyOne(out.counterexample)}\nShrunk ${out.numShrinks} time(s)${messageErrorPart}`;
    let details = null;
    const hints = [];
    if (out.verbose >= VerbosityLevel.VeryVerbose) {
        details = formatExecutionSummary(out.executionSummary, stringifyOne);
    }
    else if (out.verbose === VerbosityLevel.Verbose) {
        details = formatFailures(out.failures, stringifyOne);
    }
    else {
        safePush(hints, 'Enable verbose mode in order to have the list of all failing values encountered during the run');
    }
    return { message, details, hints };
}
function preFormatEarlyInterrupted(out, stringifyOne) {
    const message = `Property interrupted after ${out.numRuns} tests\n{ seed: ${out.seed} }`;
    let details = null;
    const hints = [];
    if (out.verbose >= VerbosityLevel.VeryVerbose) {
        details = formatExecutionSummary(out.executionSummary, stringifyOne);
    }
    else {
        safePush(hints, 'Enable verbose mode at level VeryVerbose in order to check all generated values and their associated status');
    }
    return { message, details, hints };
}
function defaultReportMessageInternal(out, stringifyOne) {
    if (!out.failed)
        return;
    const { message, details, hints } = out.counterexamplePath === null
        ? out.interrupted
            ? preFormatEarlyInterrupted(out, stringifyOne)
            : preFormatTooManySkipped(out, stringifyOne)
        : preFormatFailure(out, stringifyOne);
    let errorMessage = message;
    if (details != null)
        errorMessage += `\n\n${details}`;
    if (hints.length > 0)
        errorMessage += `\n\n${formatHints(hints)}`;
    return errorMessage;
}
function defaultReportMessage(out) {
    return defaultReportMessageInternal(out, stringify);
}
async function asyncDefaultReportMessage(out) {
    const pendingStringifieds = [];
    function stringifyOne(value) {
        const stringified = possiblyAsyncStringify(value);
        if (typeof stringified === 'string') {
            return stringified;
        }
        pendingStringifieds.push(Promise.all([value, stringified]));
        return '\u2026';
    }
    const firstTryMessage = defaultReportMessageInternal(out, stringifyOne);
    if (pendingStringifieds.length === 0) {
        return firstTryMessage;
    }
    const registeredValues = new Map(await Promise.all(pendingStringifieds));
    function stringifySecond(value) {
        const asyncStringifiedIfRegistered = safeMapGet(registeredValues, value);
        if (asyncStringifiedIfRegistered !== undefined) {
            return asyncStringifiedIfRegistered;
        }
        return stringify(value);
    }
    return defaultReportMessageInternal(out, stringifySecond);
}
function buildError(errorMessage, out) {
    if (!out.runConfiguration.errorWithCause) {
        throw new Error(errorMessage);
    }
    const ErrorWithCause = Error;
    const error = new ErrorWithCause(errorMessage, { cause: out.errorInstance });
    if (!('cause' in error)) {
        safeObjectAssign(error, { cause: out.errorInstance });
    }
    return error;
}
function throwIfFailed(out) {
    if (!out.failed)
        return;
    throw buildError(defaultReportMessage(out), out);
}
async function asyncThrowIfFailed(out) {
    if (!out.failed)
        return;
    throw buildError(await asyncDefaultReportMessage(out), out);
}
export function reportRunDetails(out) {
    if (out.runConfiguration.asyncReporter)
        return out.runConfiguration.asyncReporter(out);
    else if (out.runConfiguration.reporter)
        return out.runConfiguration.reporter(out);
    else
        return throwIfFailed(out);
}
export async function asyncReportRunDetails(out) {
    if (out.runConfiguration.asyncReporter)
        return out.runConfiguration.asyncReporter(out);
    else if (out.runConfiguration.reporter)
        return out.runConfiguration.reporter(out);
    else
        return asyncThrowIfFailed(out);
}
export { defaultReportMessage, asyncDefaultReportMessage };
