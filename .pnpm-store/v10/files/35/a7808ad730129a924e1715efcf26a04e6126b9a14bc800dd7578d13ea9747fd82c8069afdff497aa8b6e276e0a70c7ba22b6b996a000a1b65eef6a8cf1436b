/*
We purposely don't generate types for our plugin because TL;DR:
1) there's no real reason that anyone should do a typed import of our rules,
2) it would require us to change our code so there aren't as many inferred types

This type declaration exists as a hacky way to add a type to the export for our
internal packages that require it.

*** Long reason ***

When you turn on declaration files, TS requires all types to be "fully resolvable"
without changes to the code.
All of our lint rules `export default createRule(...)`, which means they all
implicitly reference the `TSESLint.Rule` type for the export.

TS wants to transpile each rule file to this `.d.ts` file:

```ts
import type { TSESLint } from '@typescript-eslint/utils';
declare const _default: TSESLint.RuleModule<TMessageIds, TOptions, TSESLint.RuleListener>;
export default _default;
```

Because we don't import `TSESLint` in most files, it means that TS would have to
insert a new import during the declaration emit to make this work.
However TS wants to avoid adding new imports to the file because a new module
could have type side-effects (like global augmentation) which could cause weird
type side-effects in the decl file that wouldn't exist in source TS file.

So TS errors on most of our rules with the following error:
```
The inferred type of 'default' cannot be named without a reference to
'../../../../node_modules/@typescript-eslint/utils/src/ts-eslint/Rule'.
This is likely not portable. A type annotation is necessary. ts(2742)
```
*/
/* eslint-disable no-restricted-syntax */

import type {
  RuleModuleWithMetaDocs,
  RuleRecommendation,
  RuleRecommendationAcrossConfigs,
} from '@typescript-eslint/utils/ts-eslint';

interface ESLintPluginDocs {
  /**
   * Does the rule extend (or is it based off of) an ESLint code rule?
   * Alternately accepts the name of the base rule, in case the rule has been renamed.
   * This is only used for documentation purposes.
   */
  extendsBaseRule?: boolean | string;

  /**
   * If a string config name, which starting config this rule is enabled in.
   * If an object, which settings it has enabled in each of those configs.
   */
  recommended?: RuleRecommendation | RuleRecommendationAcrossConfigs<unknown[]>;

  /**
   * Does the rule require us to create a full TypeScript Program in order for it
   * to type-check code. This is only used for documentation purposes.
   */
  requiresTypeChecking?: boolean;
}

type ESLintPluginRuleModule = RuleModuleWithMetaDocs<
  string,
  readonly unknown[],
  ESLintPluginDocs
>;

type TypeScriptESLintRules = Record<
  string,
  RuleModuleWithMetaDocs<string, unknown[], ESLintPluginDocs>
>;

declare const rules: TypeScriptESLintRules;

declare namespace rules {
  export type {
    ESLintPluginDocs,
    ESLintPluginRuleModule,
    TypeScriptESLintRules,
  };
}

export = rules;
