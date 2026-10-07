import { ESLint, Rule } from "eslint";

//#region src/index.d.ts
declare const plugin: {
  readonly meta: {
    readonly name: "vitest";
    readonly version: string;
  };
  readonly rules: Record<string, Rule.RuleModule>;
  readonly environments: {
    readonly env: {
      readonly globals: {
        readonly suite: true;
        readonly test: true;
        readonly describe: true;
        readonly it: true;
        readonly expectTypeOf: true;
        readonly assertType: true;
        readonly expect: true;
        readonly assert: true;
        readonly chai: true;
        readonly vitest: true;
        readonly vi: true;
        readonly beforeAll: true;
        readonly afterAll: true;
        readonly beforeEach: true;
        readonly afterEach: true;
        readonly onTestFailed: true;
        readonly onTestFinished: true;
      };
    };
  };
  readonly configs: {
    readonly 'legacy-recommended': {
      plugins: string[];
      rules: {};
    };
    readonly 'legacy-all': {
      plugins: string[];
      rules: {};
    };
    readonly recommended: {
      readonly name: "vitest/recommended";
      readonly plugins: {
        readonly vitest: ESLint.Plugin;
      };
      readonly rules: {
        readonly "vitest/expect-expect": "error";
        readonly "vitest/no-commented-out-tests": "error";
        readonly "vitest/no-conditional-expect": "error";
        readonly "vitest/no-disabled-tests": "warn";
        readonly "vitest/no-focused-tests": "error";
        readonly "vitest/no-identical-title": "error";
        readonly "vitest/no-import-node-test": "error";
        readonly "vitest/no-interpolation-in-snapshots": "error";
        readonly "vitest/no-mocks-import": "error";
        readonly "vitest/no-standalone-expect": "error";
        readonly "vitest/no-unneeded-async-expect-function": "error";
        readonly "vitest/prefer-called-exactly-once-with": "error";
        readonly "vitest/require-local-test-context-for-concurrent-snapshots": "error";
        readonly "vitest/valid-describe-callback": "error";
        readonly "vitest/valid-expect": "error";
        readonly "vitest/valid-expect-in-promise": "error";
        readonly "vitest/valid-title": "error";
      };
    };
    readonly all: {
      readonly name: "vitest/all";
      readonly plugins: {
        readonly vitest: ESLint.Plugin;
      };
      readonly rules: {
        readonly "vitest/consistent-each-for": "warn";
        readonly "vitest/consistent-test-filename": "warn";
        readonly "vitest/consistent-test-it": "warn";
        readonly "vitest/consistent-vitest-vi": "warn";
        readonly "vitest/expect-expect": "warn";
        readonly "vitest/hoisted-apis-on-top": "warn";
        readonly "vitest/max-expects": "warn";
        readonly "vitest/max-nested-describe": "warn";
        readonly "vitest/no-alias-methods": "warn";
        readonly "vitest/no-commented-out-tests": "warn";
        readonly "vitest/no-conditional-expect": "warn";
        readonly "vitest/no-conditional-in-test": "warn";
        readonly "vitest/no-conditional-tests": "warn";
        readonly "vitest/no-disabled-tests": "warn";
        readonly "vitest/no-duplicate-hooks": "warn";
        readonly "vitest/no-focused-tests": "warn";
        readonly "vitest/no-hooks": "warn";
        readonly "vitest/no-identical-title": "warn";
        readonly "vitest/no-import-node-test": "warn";
        readonly "vitest/no-importing-vitest-globals": "off";
        readonly "vitest/no-interpolation-in-snapshots": "warn";
        readonly "vitest/no-large-snapshots": "warn";
        readonly "vitest/no-mocks-import": "warn";
        readonly "vitest/no-restricted-matchers": "warn";
        readonly "vitest/no-restricted-vi-methods": "warn";
        readonly "vitest/no-standalone-expect": "warn";
        readonly "vitest/no-test-prefixes": "warn";
        readonly "vitest/no-test-return-statement": "warn";
        readonly "vitest/no-unneeded-async-expect-function": "warn";
        readonly "vitest/padding-around-after-all-blocks": "warn";
        readonly "vitest/padding-around-after-each-blocks": "warn";
        readonly "vitest/padding-around-all": "warn";
        readonly "vitest/padding-around-before-all-blocks": "warn";
        readonly "vitest/padding-around-before-each-blocks": "warn";
        readonly "vitest/padding-around-describe-blocks": "warn";
        readonly "vitest/padding-around-expect-groups": "warn";
        readonly "vitest/padding-around-test-blocks": "warn";
        readonly "vitest/prefer-called-exactly-once-with": "warn";
        readonly "vitest/prefer-called-once": "off";
        readonly "vitest/prefer-called-times": "warn";
        readonly "vitest/prefer-called-with": "warn";
        readonly "vitest/prefer-comparison-matcher": "warn";
        readonly "vitest/prefer-describe-function-title": "warn";
        readonly "vitest/prefer-each": "warn";
        readonly "vitest/prefer-equality-matcher": "warn";
        readonly "vitest/prefer-expect-assertions": "warn";
        readonly "vitest/prefer-expect-resolves": "warn";
        readonly "vitest/prefer-expect-type-of": "warn";
        readonly "vitest/prefer-hooks-in-order": "warn";
        readonly "vitest/prefer-hooks-on-top": "warn";
        readonly "vitest/prefer-import-in-mock": "warn";
        readonly "vitest/prefer-importing-vitest-globals": "warn";
        readonly "vitest/prefer-lowercase-title": "warn";
        readonly "vitest/prefer-mock-promise-shorthand": "warn";
        readonly "vitest/prefer-snapshot-hint": "warn";
        readonly "vitest/prefer-spy-on": "warn";
        readonly "vitest/prefer-strict-boolean-matchers": "warn";
        readonly "vitest/prefer-strict-equal": "warn";
        readonly "vitest/prefer-to-be-falsy": "off";
        readonly "vitest/prefer-to-be-object": "warn";
        readonly "vitest/prefer-to-be-truthy": "off";
        readonly "vitest/prefer-to-be": "warn";
        readonly "vitest/prefer-to-contain": "warn";
        readonly "vitest/prefer-to-have-been-called-times": "warn";
        readonly "vitest/prefer-to-have-length": "warn";
        readonly "vitest/prefer-todo": "warn";
        readonly "vitest/prefer-vi-mocked": "warn";
        readonly "vitest/require-awaited-expect-poll": "warn";
        readonly "vitest/require-hook": "warn";
        readonly "vitest/require-local-test-context-for-concurrent-snapshots": "warn";
        readonly "vitest/require-mock-type-parameters": "warn";
        readonly "vitest/require-test-timeout": "off";
        readonly "vitest/require-to-throw-message": "warn";
        readonly "vitest/require-top-level-describe": "warn";
        readonly "vitest/unbound-method": "warn";
        readonly "vitest/valid-describe-callback": "warn";
        readonly "vitest/valid-expect-in-promise": "warn";
        readonly "vitest/valid-expect": "warn";
        readonly "vitest/valid-title": "warn";
      };
    };
    readonly env: {
      readonly name: "vitest/env";
      readonly languageOptions: {
        readonly globals: {
          readonly suite: "writable";
          readonly test: "writable";
          readonly describe: "writable";
          readonly it: "writable";
          readonly expectTypeOf: "writable";
          readonly assertType: "writable";
          readonly expect: "writable";
          readonly assert: "writable";
          readonly chai: "writable";
          readonly vitest: "writable";
          readonly vi: "writable";
          readonly beforeAll: "writable";
          readonly afterAll: "writable";
          readonly beforeEach: "writable";
          readonly afterEach: "writable";
          readonly onTestFailed: "writable";
          readonly onTestFinished: "writable";
        };
      };
    };
  };
};
//#endregion
export { plugin as default };