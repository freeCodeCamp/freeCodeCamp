export = linter;
/**
 * @param {string|undefined} key
 * @param {Options} options
 * @param {Compilation} compilation
 * @returns {{lint: Linter, report: Reporter, threads: number}}
 */
declare function linter(
  key: string | undefined,
  options: Options,
  compilation: Compilation
): {
  lint: Linter;
  report: Reporter;
  threads: number;
};
declare namespace linter {
  export {
    ESLint,
    Formatter,
    LintResult,
    Compiler,
    Compilation,
    Options,
    FormatterFunction,
    GenerateReport,
    Report,
    Reporter,
    Linter,
    LintResultMap,
  };
}
type Options = import('./options').Options;
type Compilation = import('webpack').Compilation;
type Linter = (files: string | string[]) => void;
type Reporter = () => Promise<Report>;
type ESLint = import('eslint').ESLint;
type Formatter = import('eslint').ESLint.Formatter;
type LintResult = import('eslint').ESLint.LintResult;
type Compiler = import('webpack').Compiler;
type FormatterFunction = import('./options').FormatterFunction;
type GenerateReport = (compilation: Compilation) => Promise<void>;
type Report = {
  errors?: ESLintError;
  warnings?: ESLintError;
  generateReportAsset?: GenerateReport;
};
type LintResultMap = {
  [files: string]: import('eslint').ESLint.LintResult;
};
import ESLintError = require('./ESLintError');
