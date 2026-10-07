"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pluginHooks_1 = require("./pluginHooks");
const reporter_1 = require("../reporter");
const OperationCanceledError_1 = require("../error/OperationCanceledError");
const tapDoneToAsyncGetIssues_1 = require("./tapDoneToAsyncGetIssues");
const tapAfterCompileToGetIssues_1 = require("./tapAfterCompileToGetIssues");
const interceptDoneToGetWebpackDevServerTap_1 = require("./interceptDoneToGetWebpackDevServerTap");
const ForkTsCheckerWebpackPlugin_1 = require("../ForkTsCheckerWebpackPlugin");
function tapStartToConnectAndRunReporter(compiler, issuesReporter, dependenciesReporter, configuration, state) {
    const hooks = pluginHooks_1.getForkTsCheckerWebpackPluginHooks(compiler);
    compiler.hooks.run.tap('ForkTsCheckerWebpackPlugin', () => {
        if (!state.initialized) {
            state.initialized = true;
            state.watching = false;
            tapAfterCompileToGetIssues_1.tapAfterCompileToGetIssues(compiler, configuration, state);
        }
    });
    compiler.hooks.watchRun.tap('ForkTsCheckerWebpackPlugin', () => __awaiter(this, void 0, void 0, function* () {
        if (!state.initialized) {
            state.initialized = true;
            state.watching = true;
            if (configuration.async) {
                tapDoneToAsyncGetIssues_1.tapDoneToAsyncGetIssues(compiler, configuration, state);
                interceptDoneToGetWebpackDevServerTap_1.interceptDoneToGetWebpackDevServerTap(compiler, configuration, state);
            }
            else {
                tapAfterCompileToGetIssues_1.tapAfterCompileToGetIssues(compiler, configuration, state);
            }
        }
    }));
    compiler.hooks.compilation.tap('ForkTsCheckerWebpackPlugin', (compilation) => __awaiter(this, void 0, void 0, function* () {
        if (compilation.compiler !== compiler) {
            // run only for the compiler that the plugin was registered for
            return;
        }
        let change = {};
        if (state.watching) {
            change = reporter_1.getFilesChange(compiler);
            configuration.logger.infrastructure.info([
                'Calling reporter service for incremental check.',
                `  Changed files: ${JSON.stringify(change.changedFiles)}`,
                `  Deleted files: ${JSON.stringify(change.deletedFiles)}`,
            ].join('\n'));
        }
        else {
            configuration.logger.infrastructure.info('Calling reporter service for single check.');
        }
        let resolveDependencies;
        let rejectDependencies;
        let resolveIssues;
        let rejectIssues;
        state.dependenciesPromise = new Promise((resolve, reject) => {
            resolveDependencies = resolve;
            rejectDependencies = reject;
        });
        state.issuesPromise = new Promise((resolve, reject) => {
            resolveIssues = resolve;
            rejectIssues = reject;
        });
        const previousIssuesReportPromise = state.issuesReportPromise;
        const previousDependenciesReportPromise = state.dependenciesReportPromise;
        change = yield hooks.start.promise(change, compilation);
        state.issuesReportPromise = ForkTsCheckerWebpackPlugin_1.ForkTsCheckerWebpackPlugin.issuesPool.submit((done) => new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield issuesReporter.connect();
                const previousReport = yield previousIssuesReportPromise;
                if (previousReport) {
                    yield previousReport.close();
                }
                const report = yield issuesReporter.getReport(change);
                resolve(report);
                report.getIssues().then(resolveIssues).catch(rejectIssues).finally(done);
            }
            catch (error) {
                if (error instanceof OperationCanceledError_1.OperationCanceledError) {
                    hooks.canceled.call(compilation);
                }
                else {
                    hooks.error.call(error, compilation);
                }
                resolve(undefined);
                resolveIssues(undefined);
                done();
            }
        })));
        state.dependenciesReportPromise = ForkTsCheckerWebpackPlugin_1.ForkTsCheckerWebpackPlugin.dependenciesPool.submit((done) => new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield dependenciesReporter.connect();
                const previousReport = yield previousDependenciesReportPromise;
                if (previousReport) {
                    yield previousReport.close();
                }
                const report = yield dependenciesReporter.getReport(change);
                resolve(report);
                report
                    .getDependencies()
                    .then(resolveDependencies)
                    .catch(rejectDependencies)
                    .finally(done);
            }
            catch (error) {
                if (error instanceof OperationCanceledError_1.OperationCanceledError) {
                    hooks.canceled.call(compilation);
                }
                else {
                    hooks.error.call(error, compilation);
                }
                resolve(undefined);
                resolveDependencies(undefined);
                done();
            }
        })));
    }));
}
exports.tapStartToConnectAndRunReporter = tapStartToConnectAndRunReporter;
