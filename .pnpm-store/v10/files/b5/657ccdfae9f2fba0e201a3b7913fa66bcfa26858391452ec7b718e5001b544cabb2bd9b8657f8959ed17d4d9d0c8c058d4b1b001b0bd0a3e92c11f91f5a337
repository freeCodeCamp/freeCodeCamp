"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IssueConfiguration_1 = require("./issue/IssueConfiguration");
const formatter_1 = require("./formatter");
const TypeScriptReporterConfiguration_1 = require("./typescript-reporter/TypeScriptReporterConfiguration");
const EsLintReporterConfiguration_1 = require("./eslint-reporter/EsLintReporterConfiguration");
const LoggerConfiguration_1 = require("./logger/LoggerConfiguration");
function createForkTsCheckerWebpackPluginConfiguration(compiler, options = {}) {
    return {
        async: options.async === undefined ? compiler.options.mode === 'development' : options.async,
        typescript: TypeScriptReporterConfiguration_1.createTypeScriptReporterConfiguration(compiler, options.typescript),
        eslint: EsLintReporterConfiguration_1.createEsLintReporterConfiguration(compiler, options.eslint),
        issue: IssueConfiguration_1.createIssueConfiguration(compiler, options.issue),
        formatter: formatter_1.createFormatterConfiguration(options.formatter),
        logger: LoggerConfiguration_1.createLoggerConfiguration(compiler, options.logger),
    };
}
exports.createForkTsCheckerWebpackPluginConfiguration = createForkTsCheckerWebpackPluginConfiguration;
