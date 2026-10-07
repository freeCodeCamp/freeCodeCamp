import { Linter, Rule } from "eslint";

//#region src/index.d.ts
declare const testingLibraryPlugin: {
  readonly meta: {
    readonly name: string;
    readonly version: string;
  };
  readonly rules: Record<string, Rule.RuleModule>;
  readonly configs: {
    dom: Linter.LegacyConfig<Linter.RulesRecord, Linter.RulesRecord>;
    angular: Linter.LegacyConfig<Linter.RulesRecord, Linter.RulesRecord>;
    react: Linter.LegacyConfig<Linter.RulesRecord, Linter.RulesRecord>;
    vue: Linter.LegacyConfig<Linter.RulesRecord, Linter.RulesRecord>;
    svelte: Linter.LegacyConfig<Linter.RulesRecord, Linter.RulesRecord>;
    marko: Linter.LegacyConfig<Linter.RulesRecord, Linter.RulesRecord>;
    "flat/dom": Linter.Config<Linter.RulesRecord>;
    "flat/angular": Linter.Config<Linter.RulesRecord>;
    "flat/react": Linter.Config<Linter.RulesRecord>;
    "flat/vue": Linter.Config<Linter.RulesRecord>;
    "flat/svelte": Linter.Config<Linter.RulesRecord>;
    "flat/marko": Linter.Config<Linter.RulesRecord>;
  };
};
//#endregion
export { testingLibraryPlugin as default };