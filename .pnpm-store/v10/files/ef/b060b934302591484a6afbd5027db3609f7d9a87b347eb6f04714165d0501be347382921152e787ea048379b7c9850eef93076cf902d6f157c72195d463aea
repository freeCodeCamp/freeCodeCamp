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
const IssueWebpackError_1 = require("../issue/IssueWebpackError");
function tapAfterCompileToGetIssues(compiler, configuration, state) {
    const hooks = pluginHooks_1.getForkTsCheckerWebpackPluginHooks(compiler);
    compiler.hooks.afterCompile.tapPromise('ForkTsCheckerWebpackPlugin', (compilation) => __awaiter(this, void 0, void 0, function* () {
        if (compilation.compiler !== compiler) {
            // run only for the compiler that the plugin was registered for
            return;
        }
        let issues = [];
        try {
            issues = yield state.issuesPromise;
        }
        catch (error) {
            hooks.error.call(error, compilation);
            return;
        }
        if (!issues) {
            // some error has been thrown or it was canceled
            return;
        }
        // filter list of issues by provided issue predicate
        issues = issues.filter(configuration.issue.predicate);
        // modify list of issues in the plugin hooks
        issues = hooks.issues.call(issues, compilation);
        issues.forEach((issue) => {
            const error = new IssueWebpackError_1.IssueWebpackError(configuration.formatter(issue), issue);
            if (issue.severity === 'warning') {
                compilation.warnings.push(error);
            }
            else {
                compilation.errors.push(error);
            }
        });
    }));
}
exports.tapAfterCompileToGetIssues = tapAfterCompileToGetIssues;
