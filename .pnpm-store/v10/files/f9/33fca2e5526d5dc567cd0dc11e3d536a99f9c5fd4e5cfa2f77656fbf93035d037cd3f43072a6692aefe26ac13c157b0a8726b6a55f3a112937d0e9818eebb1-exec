/**
 * support to use `import * as rule form 'eslint/lib/rules/no-unused-expressions'`
 * it would be very verbose and redundant to declare all rules files
 */
// tslint:disable-next-line: no-single-declare-module no-declare-current-package
declare module "eslint/lib/rules/*" {
    // tslint:disable-next-line: no-self-import
    import { Rule } from "eslint";
    const Rule: Rule.RuleModule;
    export = Rule;
}
