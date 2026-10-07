"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunExecution = void 0;
const VerbosityLevel_1 = require("../configuration/VerbosityLevel");
const ExecutionStatus_1 = require("./ExecutionStatus");
const globals_1 = require("../../../utils/globals");
class RunExecution {
    constructor(verbosity, interruptedAsFailure) {
        this.verbosity = verbosity;
        this.interruptedAsFailure = interruptedAsFailure;
        this.isSuccess = () => this.pathToFailure == null;
        this.firstFailure = () => (this.pathToFailure ? +(0, globals_1.safeSplit)(this.pathToFailure, ':')[0] : -1);
        this.numShrinks = () => (this.pathToFailure ? (0, globals_1.safeSplit)(this.pathToFailure, ':').length - 1 : 0);
        this.rootExecutionTrees = [];
        this.currentLevelExecutionTrees = this.rootExecutionTrees;
        this.failure = null;
        this.numSkips = 0;
        this.numSuccesses = 0;
        this.interrupted = false;
    }
    appendExecutionTree(status, value) {
        const currentTree = { status, value, children: [] };
        this.currentLevelExecutionTrees.push(currentTree);
        return currentTree;
    }
    fail(value, id, failure) {
        if (this.verbosity >= VerbosityLevel_1.VerbosityLevel.Verbose) {
            const currentTree = this.appendExecutionTree(ExecutionStatus_1.ExecutionStatus.Failure, value);
            this.currentLevelExecutionTrees = currentTree.children;
        }
        if (this.pathToFailure == null)
            this.pathToFailure = `${id}`;
        else
            this.pathToFailure += `:${id}`;
        this.value = value;
        this.failure = failure;
    }
    skip(value) {
        if (this.verbosity >= VerbosityLevel_1.VerbosityLevel.VeryVerbose) {
            this.appendExecutionTree(ExecutionStatus_1.ExecutionStatus.Skipped, value);
        }
        if (this.pathToFailure == null) {
            ++this.numSkips;
        }
    }
    success(value) {
        if (this.verbosity >= VerbosityLevel_1.VerbosityLevel.VeryVerbose) {
            this.appendExecutionTree(ExecutionStatus_1.ExecutionStatus.Success, value);
        }
        if (this.pathToFailure == null) {
            ++this.numSuccesses;
        }
    }
    interrupt() {
        this.interrupted = true;
    }
    extractFailures() {
        if (this.isSuccess()) {
            return [];
        }
        const failures = [];
        let cursor = this.rootExecutionTrees;
        while (cursor.length > 0 && cursor[cursor.length - 1].status === ExecutionStatus_1.ExecutionStatus.Failure) {
            const failureTree = cursor[cursor.length - 1];
            failures.push(failureTree.value);
            cursor = failureTree.children;
        }
        return failures;
    }
    toRunDetails(seed, basePath, maxSkips, qParams) {
        if (!this.isSuccess()) {
            return {
                failed: true,
                interrupted: this.interrupted,
                numRuns: this.firstFailure() + 1 - this.numSkips,
                numSkips: this.numSkips,
                numShrinks: this.numShrinks(),
                seed,
                counterexample: this.value,
                counterexamplePath: RunExecution.mergePaths(basePath, this.pathToFailure),
                error: this.failure.errorMessage,
                errorInstance: this.failure.error,
                failures: this.extractFailures(),
                executionSummary: this.rootExecutionTrees,
                verbose: this.verbosity,
                runConfiguration: qParams.toParameters(),
            };
        }
        const considerInterruptedAsFailure = this.interruptedAsFailure || this.numSuccesses === 0;
        const failed = this.numSkips > maxSkips || (this.interrupted && considerInterruptedAsFailure);
        const out = {
            failed,
            interrupted: this.interrupted,
            numRuns: this.numSuccesses,
            numSkips: this.numSkips,
            numShrinks: 0,
            seed,
            counterexample: null,
            counterexamplePath: null,
            error: null,
            errorInstance: null,
            failures: [],
            executionSummary: this.rootExecutionTrees,
            verbose: this.verbosity,
            runConfiguration: qParams.toParameters(),
        };
        return out;
    }
}
exports.RunExecution = RunExecution;
RunExecution.mergePaths = (offsetPath, path) => {
    if (offsetPath.length === 0)
        return path;
    const offsetItems = offsetPath.split(':');
    const remainingItems = path.split(':');
    const middle = +offsetItems[offsetItems.length - 1] + +remainingItems[0];
    return [...offsetItems.slice(0, offsetItems.length - 1), `${middle}`, ...remainingItems.slice(1)].join(':');
};
