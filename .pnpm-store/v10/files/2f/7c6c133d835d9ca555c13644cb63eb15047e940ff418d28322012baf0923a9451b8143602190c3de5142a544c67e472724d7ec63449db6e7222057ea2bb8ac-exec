#!/usr/bin/env node

"use strict";

const validators = require("./validators");
const config = require("..");
const prettier = require("../prettier");

// Require locally installed eslint, for `npx eslint-config-prettier` support
// with no local eslint-config-prettier installation.
const localRequire = (request) =>
  require(
    require.resolve(request, {
      paths: [process.cwd(), ...require.resolve.paths("eslint")],
    })
  );

let experimentalApi = {};
try {
  experimentalApi = localRequire("eslint/use-at-your-own-risk");
} catch (_error) {}

const { ESLint, FlatESLint = experimentalApi.FlatESLint } =
  localRequire("eslint");

const SPECIAL_RULES_URL =
  "https://github.com/prettier/eslint-config-prettier#special-rules";

const PRETTIER_RULES_URL =
  "https://github.com/prettier/eslint-config-prettier#arrow-body-style-and-prefer-arrow-callback";

if (module === require.main) {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error(help());
    process.exit(1);
  }

  const eslint = new ESLint();
  const flatESLint = FlatESLint === undefined ? undefined : new FlatESLint();

  Promise.all(
    args.map((file) => {
      switch (process.env.ESLINT_USE_FLAT_CONFIG) {
        case "true": {
          return flatESLint.calculateConfigForFile(file);
        }
        case "false": {
          return eslint.calculateConfigForFile(file);
        }
        default: {
          // This turns synchronous errors (such as `.calculateConfigForFile` not existing)
          // and turns them into promise rejections.
          return Promise.resolve()
            .then(() => flatESLint.calculateConfigForFile(file))
            .catch(() => eslint.calculateConfigForFile(file));
        }
      }
    })
  )
    .then((configs) => {
      const rules = configs.flatMap(
        (
          // Initializing config and rules for files that aren't included in the flat config,
          // which is a very unlikely scenario, but should still be treated as a success
          { rules = {} } = {},
          index
        ) => Object.entries(rules).map((entry) => [...entry, args[index]])
      );
      const result = processRules(rules);
      if (result.stderr) {
        console.error(result.stderr);
      }
      if (result.stdout) {
        console.error(result.stdout);
      }
      process.exit(result.code);
    })
    .catch((error) => {
      console.error(error.message);
      process.exit(1);
    });
}

function help() {
  return `
Usage: npx eslint-config-prettier FILE...

Resolves an ESLint configuration for every given FILE and checks if they
contain rules that are unnecessary or conflict with Prettier. Example:

  npx eslint-config-prettier index.js test/index.js other/file/to/check.js

Exit codes:

0: No automatically detectable problems found.
1: General error.
2: Conflicting rules found.

For more information, see:
https://github.com/prettier/eslint-config-prettier#cli-helper-tool
  `.trim();
}

function processRules(configRules) {
  const regularRules = filterRules(config.rules, (_, value) => value === "off");
  const optionsRules = filterRules(
    config.rules,
    (ruleName, value) => value === 0 && ruleName in validators
  );
  const specialRules = filterRules(
    config.rules,
    (ruleName, value) => value === 0 && !(ruleName in validators)
  );

  const enabledRules = configRules
    .map(([ruleName, value, source]) => {
      const arrayValue = Array.isArray(value) ? value : [value];
      const [level, ...options] = arrayValue;
      const isOff = level === "off" || level === 0;
      return isOff ? null : { ruleName, options, source };
    })
    .filter(Boolean);

  const flaggedRules = enabledRules.filter(
    ({ ruleName }) => ruleName in config.rules
  );

  const regularFlaggedRuleNames = filterRuleNames(
    flaggedRules,
    ({ ruleName }) => ruleName in regularRules
  );
  const optionsFlaggedRuleNames = filterRuleNames(
    flaggedRules,
    ({ ruleName, ...rule }) =>
      ruleName in optionsRules && !validators[ruleName](rule)
  );
  const specialFlaggedRuleNames = filterRuleNames(
    flaggedRules,
    ({ ruleName }) => ruleName in specialRules
  );
  const prettierFlaggedRuleNames = filterRuleNames(
    enabledRules,
    ({ ruleName, source }) =>
      ruleName in prettier.rules &&
      enabledRules.some(
        (rule) =>
          rule.ruleName === "prettier/prettier" && rule.source === source
      )
  );

  const regularMessage = [
    "The following rules are unnecessary or might conflict with Prettier:",
    "",
    printRuleNames(regularFlaggedRuleNames),
  ].join("\n");

  const optionsMessage = [
    "The following rules are enabled with config that might conflict with Prettier. See:",
    SPECIAL_RULES_URL,
    "",
    printRuleNames(optionsFlaggedRuleNames),
  ].join("\n");

  const specialMessage = [
    "The following rules are enabled but cannot be automatically checked. See:",
    SPECIAL_RULES_URL,
    "",
    printRuleNames(specialFlaggedRuleNames),
  ].join("\n");

  const prettierMessage = [
    "The following rules can cause issues when using eslint-plugin-prettier at the same time.",
    "Only enable them if you know what you are doing! See:",
    PRETTIER_RULES_URL,
    "",
    printRuleNames(prettierFlaggedRuleNames),
  ].join("\n");

  if (
    regularFlaggedRuleNames.length === 0 &&
    optionsFlaggedRuleNames.length === 0
  ) {
    const message =
      specialFlaggedRuleNames.length === 0 &&
      prettierFlaggedRuleNames.length === 0
        ? "No rules that are unnecessary or conflict with Prettier were found."
        : [
            specialFlaggedRuleNames.length === 0 ? null : specialMessage,
            prettierFlaggedRuleNames.length === 0 ? null : prettierMessage,
            "Other than that, no rules that are unnecessary or conflict with Prettier were found.",
          ]
            .filter(Boolean)
            .join("\n\n");

    return {
      stdout: message,
      code: 0,
    };
  }

  const message = [
    regularFlaggedRuleNames.length === 0 ? null : regularMessage,
    optionsFlaggedRuleNames.length === 0 ? null : optionsMessage,
    specialFlaggedRuleNames.length === 0 ? null : specialMessage,
    prettierFlaggedRuleNames.length === 0 ? null : prettierMessage,
  ]
    .filter(Boolean)
    .join("\n\n");

  return {
    stdout: message,
    code: 2,
  };
}

function filterRules(rules, fn) {
  return Object.fromEntries(
    Object.entries(rules)
      .filter(([ruleName, value]) => fn(ruleName, value))
      .map(([ruleName]) => [ruleName, true])
  );
}

function filterRuleNames(rules, fn) {
  return [
    ...new Set(rules.filter((rule) => fn(rule)).map((rule) => rule.ruleName)),
  ];
}

function printRuleNames(ruleNames) {
  return ruleNames
    .slice()
    .sort()
    .map((ruleName) => `- ${ruleName}`)
    .join("\n");
}

exports.processRules = processRules;
