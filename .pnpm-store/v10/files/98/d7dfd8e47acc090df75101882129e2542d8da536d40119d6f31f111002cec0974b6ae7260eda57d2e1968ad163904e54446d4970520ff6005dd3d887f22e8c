// @ts-check

// @ts-ignore
import { fs as nodeFs, os, path } from "#node-imports";
import { initialize as cacheInitialize } from "./cache.mjs";
import { version } from "./constants.mjs";
import { requireMarkdownItCjs } from "./defer-require.cjs";
import { resolveModule } from "./resolve-module.cjs";
import rules from "./rules.mjs";
import { parse as micromarkParse } from "./micromark-parse.mjs";
import parseConfiguration from "./parse-configuration.mjs";
import * as helpers from "../helpers/helpers.cjs";

/**
 * Validate the list of rules for structure and reuse.
 *
 * @param {Rule[]} ruleList List of rules.
 * @param {boolean} synchronous Whether to execute synchronously.
 * @returns {Error | null} Error message if validation fails.
 */
function validateRuleList(ruleList, synchronous) {
  let result = null;
  if (ruleList.length === rules.length) {
    // No need to validate if only using built-in rules
    return result;
  }
  /** @type {Object.<string, boolean>} */
  const allIds = {};
  for (const [ index, rule ] of ruleList.entries()) {
    const customIndex = index - rules.length;
    // eslint-disable-next-line jsdoc/reject-any-type, jsdoc/require-jsdoc
    function newError(/** @type {string} */ property, /** @type {any} */ value) {
      return new Error(
        `Property '${property}' of custom rule at index ${customIndex} is incorrect: '${value}'.`);
    }
    for (const property of [ "names", "tags" ]) {
      // @ts-ignore
      const value = rule[property];
      if (!result &&
        (!value || !Array.isArray(value) || (value.length === 0) ||
         !value.every(helpers.isString) || value.some(helpers.isEmptyString))) {
        result = newError(property, value);
      }
    }
    for (const propertyInfo of [
      [ "description", "string" ],
      [ "function", "function" ]
    ]) {
      const property = propertyInfo[0];
      // @ts-ignore
      const value = rule[property];
      if (!result && (!value || (typeof value !== propertyInfo[1]))) {
        result = newError(property, value);
      }
    }
    if (
      !result &&
      (rule.parser !== undefined) &&
      (rule.parser !== "markdownit") &&
      (rule.parser !== "micromark") &&
      (rule.parser !== "none")
    ) {
      result = newError("parser", rule.parser);
    }
    if (
      !result &&
      rule.information &&
      !helpers.isUrl(rule.information)
    ) {
      result = newError("information", rule.information);
    }
    if (
      !result &&
      (rule.asynchronous !== undefined) &&
      (typeof rule.asynchronous !== "boolean")
    ) {
      result = newError("asynchronous", rule.asynchronous);
    }
    if (!result && rule.asynchronous && synchronous) {
      result = new Error(
        "Custom rule " + rule.names.join("/") + " at index " + customIndex +
        " is asynchronous and can not be used in a synchronous context."
      );
    }
    if (!result) {
      for (const name of rule.names) {
        const nameUpper = name.toUpperCase();
        if (!result && (allIds[nameUpper] !== undefined)) {
          result = new Error("Name '" + name + "' of custom rule at index " +
            customIndex + " is already used as a name or tag.");
        }
        allIds[nameUpper] = true;
      }
      for (const tag of rule.tags) {
        const tagUpper = tag.toUpperCase();
        if (!result && allIds[tagUpper]) {
          result = new Error("Tag '" + tag + "' of custom rule at index " +
            customIndex + " is already used as a name.");
        }
        allIds[tagUpper] = false;
      }
    }
  }
  return result;
}

/**
 * Creates a LintResults instance with toString for pretty display.
 *
 * @param {Rule[]} ruleList List of rules.
 * @returns {LintResults} New LintResults instance.
 */
function newResults(ruleList) {
  /**
   * Returns the string representation of a LintResults instance.
   *
   * @param {boolean} useAlias True if rule alias should be used instead of name.
   * @returns {string} String representation of the instance.
   * @this {LintResults}
   */
  function toString(useAlias) {
    // eslint-disable-next-line consistent-this, unicorn/no-this-assignment
    const lintResults = this;
    /** @type {Object.<string, Rule> | null} */
    let ruleNameToRule = null;
    const results = [];
    const keys = Object.keys(lintResults);
    keys.sort();
    for (const file of keys) {
      const fileResults = lintResults[file];
      if (Array.isArray(fileResults)) {
        for (const result of fileResults) {
          const ruleMoniker = result.ruleNames ?
            result.ruleNames.join("/") :
            // @ts-ignore
            (result.ruleName + "/" + result.ruleAlias);
          results.push(
            file + ": " +
            result.lineNumber + ": " +
            ruleMoniker + " " +
            result.ruleDescription +
            (result.errorDetail ?
              " [" + result.errorDetail + "]" :
              "") +
            (result.errorContext ?
              " [Context: \"" + result.errorContext + "\"]" :
              ""));
        }
      } else {
        if (!ruleNameToRule) {
          ruleNameToRule = {};
          for (const rule of ruleList) {
            const ruleName = rule.names[0].toUpperCase();
            ruleNameToRule[ruleName] = rule;
          }
        }
        for (const [ ruleName, ruleResults ] of Object.entries(fileResults)) {
          const rule = ruleNameToRule[ruleName.toUpperCase()];
          for (const lineNumber of ruleResults) {
            // @ts-ignore
            const nameIndex = Math.min(useAlias ? 1 : 0, rule.names.length - 1);
            const result =
              file + ": " +
              lineNumber + ": " +
              // @ts-ignore
              rule.names[nameIndex] + " " +
              // @ts-ignore
              rule.description;
            results.push(result);
          }
        }
      }
    }
    return results.join("\n");
  }
  const lintResults = {};
  Object.defineProperty(lintResults, "toString", { "value": toString });
  // @ts-ignore
  return lintResults;
}

/**
 * Result object for removeFrontMatter.
 *
 * @typedef {Object} RemoveFrontMatterResult
 * @property {string} content Markdown content.
 * @property {string[]} frontMatterLines Front matter lines.
 */

/**
 * Remove front matter (if present at beginning of content).
 *
 * @param {string} content Markdown content.
 * @param {RegExp | null} frontMatter Regular expression to match front matter.
 * @returns {RemoveFrontMatterResult} Trimmed content and front matter lines.
 */
function removeFrontMatter(content, frontMatter) {
  /** @type {string[]} */
  let frontMatterLines = [];
  if (frontMatter) {
    const frontMatterMatch = content.match(frontMatter);
    if (frontMatterMatch && !frontMatterMatch.index) {
      const contentMatched = frontMatterMatch[0];
      content = content.slice(contentMatched.length);
      frontMatterLines = contentMatched.split(helpers.newLineRe);
      if ((frontMatterLines.length > 0) &&
          (frontMatterLines[frontMatterLines.length - 1] === "")) {
        frontMatterLines.length--;
      }
    }
  }
  return {
    "content": content,
    "frontMatterLines": frontMatterLines
  };
}

/**
 * Map rule names/tags to canonical rule name.
 *
 * @param {Rule[]} ruleList List of rules.
 * @returns {Object.<string, string[]>} Map of alias to rule name.
 */
function mapAliasToRuleNames(ruleList) {
  /** @type {Object.<string, string[]>} */
  const aliasToRuleNames = {};
  // const tagToRuleNames = {};
  for (const rule of ruleList) {
    const ruleName = rule.names[0].toUpperCase();
    // The following is useful for updating README.md:
    // console.log(
    //   "* **[" + ruleName + "](doc/Rules.md#" + ruleName.toLowerCase() +
    //    ")** *" + rule.names.slice(1).join("/") + "* - " + rule.description);
    for (const name of rule.names) {
      const nameUpper = name.toUpperCase();
      aliasToRuleNames[nameUpper] = [ ruleName ];
    }
    for (const tag of rule.tags) {
      const tagUpper = tag.toUpperCase();
      const ruleNames = aliasToRuleNames[tagUpper] || [];
      ruleNames.push(ruleName);
      aliasToRuleNames[tagUpper] = ruleNames;
      // tagToRuleNames[tag] = ruleName;
    }
  }
  // The following is useful for updating README.md:
  // Object.keys(tagToRuleNames).sort().forEach(function forTag(tag) {
  //   console.log("* **" + tag + "** - " +
  //     aliasToRuleNames[tag.toUpperCase()].join(", "));
  // });
  // @ts-ignore
  return aliasToRuleNames;
}

/**
 * Result object for getEffectiveConfig.
 *
 * @typedef {Object} GetEffectiveConfigResult
 * @property {Configuration} effectiveConfig Effective configuration.
 * @property {Map<string, boolean>} rulesEnabled Rules enabled.
 * @property {Map<string, "error" | "warning">} rulesSeverity Rules severity.
 */

/**
 * Apply (and normalize) configuration object.
 *
 * @param {Rule[]} ruleList List of rules.
 * @param {Configuration} config Configuration object.
 * @param {Object.<string, string[]>} aliasToRuleNames Map of alias to rule names.
 * @returns {GetEffectiveConfigResult} Effective configuration and rule severities.
 */
function getEffectiveConfig(ruleList, config, aliasToRuleNames) {
  let ruleDefaultEnable = true;
  /** @type {"error" | "warning"} */
  let ruleDefaultSeverity = "error";
  Object.entries(config).every(([ key, value ]) => {
    if (key.toUpperCase() === "DEFAULT") {
      ruleDefaultEnable = !!value;
      if (value === "warning") {
        ruleDefaultSeverity = "warning";
      }
      return false;
    }
    return true;
  });
  /** @type {Configuration} */
  const effectiveConfig = {};
  /** @type {Map<string, boolean>} */
  const rulesEnabled = new Map();
  /** @type {Map<string, "error" | "warning">} */
  const rulesSeverity = new Map();
  const emptyObject = Object.freeze({});
  for (const ruleName of ruleList.map((rule) => rule.names[0].toUpperCase())) {
    effectiveConfig[ruleName] = emptyObject;
    rulesEnabled.set(ruleName, ruleDefaultEnable);
    rulesSeverity.set(ruleName, ruleDefaultSeverity);
  }
  // for (const ruleName of deprecatedRuleNames) {
  //   effectiveConfig[ruleName] = false;
  // }
  for (const [ key, value ] of Object.entries(config)) {
    const keyUpper = key.toUpperCase();
    /** @type {boolean} */
    let enabled = false;
    /** @type {"error" | "warning"} */
    let severity = "error";
    let effectiveValue = {};
    if (value) {
      if (value instanceof Object) {
        /** @type {{ enabled?: boolean, severity?: "error" | "warning" }} */
        const valueObject = value;
        enabled = (valueObject.enabled === undefined) ? true : !!valueObject.enabled;
        severity = (valueObject.severity === "warning") ? "warning" : "error";
        effectiveValue = Object.fromEntries(
          Object.entries(value).filter(
            ([ k ]) => (k !== "enabled") && (k !== "severity")
          )
        );
      } else {
        enabled = true;
        severity = (value === "warning") ? "warning" : "error";
      }
    }
    for (const ruleName of (aliasToRuleNames[keyUpper] || [])) {
      Object.freeze(effectiveValue);
      effectiveConfig[ruleName] = effectiveValue;
      rulesEnabled.set(ruleName, enabled);
      rulesSeverity.set(ruleName, severity);
    }
  }
  return {
    effectiveConfig,
    rulesEnabled,
    rulesSeverity
  };
}

/**
 * Result object for getEnabledRulesPerLineNumber.
 *
 * @typedef {Object} EnabledRulesPerLineNumberResult
 * @property {Configuration} effectiveConfig Effective configuration.
 * @property {Map<string, boolean>[]} enabledRulesPerLineNumber Enabled rules per line number.
 * @property {Rule[]} enabledRuleList Enabled rule list.
 * @property {Map<string, "error" | "warning">} rulesSeverity Rules severity.
 */

/**
 * Create a mapping of enabled rules per line.
 *
 * @param {Rule[]} ruleList List of rules.
 * @param {string[]} lines List of content lines.
 * @param {string[]} frontMatterLines List of front matter lines.
 * @param {boolean} noInlineConfig Whether to allow inline configuration.
 * @param {Configuration} config Configuration object.
 * @param {ConfigurationParser[] | undefined} configParsers Configuration parsers.
 * @param {Object.<string, string[]>} aliasToRuleNames Map of alias to rule names.
 * @returns {EnabledRulesPerLineNumberResult} Effective configuration and enabled rules per line number.
 */
function getEnabledRulesPerLineNumber(
  ruleList,
  lines,
  frontMatterLines,
  noInlineConfig,
  config,
  configParsers,
  aliasToRuleNames) {
  // Shared variables
  /** @type {Map<string, boolean>} */
  let enabledRules = new Map();
  /** @type {Map<string, boolean>} */
  let capturedRules = enabledRules;
  const enabledRulesPerLineNumber = new Array(1 + frontMatterLines.length);
  // Helper functions
  // eslint-disable-next-line jsdoc/require-jsdoc
  function handleInlineConfig(/** @type {string[]} */ input, /** @type {(act: string, par: string, ind: number) => void} */ forEachMatch, /** @type {(() => void)|undefined} */ forEachLine = undefined) {
    for (const [ lineIndex, line ] of input.entries()) {
      if (!noInlineConfig) {
        let match = null;
        while ((match = helpers.inlineCommentStartRe.exec(line))) {
          const action = match[2].toUpperCase();
          const startIndex = match.index + match[1].length;
          const endIndex = line.indexOf("-->", startIndex);
          if (endIndex === -1) {
            break;
          }
          const parameter = line.slice(startIndex, endIndex);
          forEachMatch(action, parameter, lineIndex + 1);
        }
      }
      if (forEachLine) {
        forEachLine();
      }
    }
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function configureFile(/** @type {string} */ action, /** @type {string} */ parameter) {
    if (action === "CONFIGURE-FILE") {
      const { "config": parsed } = parseConfiguration(
        "CONFIGURE-FILE", parameter, configParsers
      );
      if (parsed) {
        config = {
          ...config,
          ...parsed
        };
      }
    }
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function applyEnableDisable(/** @type {string} */ action, /** @type {string} */ parameter, /** @type {Map<string, boolean>} */ state) {
    state = new Map(state);
    const enabled = (action.startsWith("ENABLE"));
    const trimmed = parameter && parameter.trim();
    // eslint-disable-next-line no-use-before-define
    const items = trimmed ? trimmed.toUpperCase().split(/\s+/) : allRuleNames;
    for (const nameUpper of items) {
      for (const ruleName of (aliasToRuleNames[nameUpper] || [])) {
        state.set(ruleName, enabled);
      }
    }
    return state;
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function enableDisableFile(/** @type {string} */ action, /** @type {string} */ parameter) {
    if ((action === "ENABLE-FILE") || (action === "DISABLE-FILE")) {
      enabledRules = applyEnableDisable(action, parameter, enabledRules);
    }
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function captureRestoreEnableDisable(/** @type {string} */ action, /** @type {string} */ parameter) {
    if (action === "CAPTURE") {
      capturedRules = enabledRules;
    } else if (action === "RESTORE") {
      enabledRules = capturedRules;
    } else if ((action === "ENABLE") || (action === "DISABLE")) {
      enabledRules = applyEnableDisable(action, parameter, enabledRules);
    }
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function updateLineState() {
    enabledRulesPerLineNumber.push(enabledRules);
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function disableLineNextLine(/** @type {string} */ action, /** @type {string} */ parameter, /** @type {number} */ lineNumber) {
    const disableLine = (action === "DISABLE-LINE");
    const disableNextLine = (action === "DISABLE-NEXT-LINE");
    if (disableLine || disableNextLine) {
      const nextLineNumber =
        frontMatterLines.length + lineNumber + (disableNextLine ? 1 : 0);
      enabledRulesPerLineNumber[nextLineNumber] =
        applyEnableDisable(
          action,
          parameter,
          enabledRulesPerLineNumber[nextLineNumber]
        );
    }
  }
  // Handle inline comments
  handleInlineConfig([ lines.join("\n") ], configureFile);
  const { effectiveConfig, rulesEnabled, rulesSeverity } = getEffectiveConfig(ruleList, config, aliasToRuleNames);
  const allRuleNames = [ ...rulesEnabled.keys() ];
  enabledRules = new Map(rulesEnabled);
  capturedRules = enabledRules;
  handleInlineConfig(lines, enableDisableFile);
  handleInlineConfig(lines, captureRestoreEnableDisable, updateLineState);
  handleInlineConfig(lines, disableLineNextLine);
  // Create the list of rules that are used at least once
  const enabledRuleList = ruleList.filter((rule) => {
    const ruleName = rule.names[0].toUpperCase();
    return enabledRulesPerLineNumber.some((enabledRulesForLine) => enabledRulesForLine.get(ruleName));
  });
  // Return results
  return {
    effectiveConfig,
    enabledRulesPerLineNumber,
    enabledRuleList,
    rulesSeverity
  };
}

/**
 * Lints a string containing Markdown content.
 *
 * @param {Rule[]} ruleList List of rules.
 * @param {Object.<string, string[]>} aliasToRuleNames Map of alias to rule names.
 * @param {string} name Identifier for the content.
 * @param {string} content Markdown content.
 * @param {MarkdownItFactory} markdownItFactory Function to create a markdown-it parser.
 * @param {Configuration} config Configuration object.
 * @param {ConfigurationParser[] | undefined} configParsers Configuration parsers.
 * @param {RegExp | null} frontMatter Regular expression for front matter.
 * @param {boolean} handleRuleFailures Whether to handle exceptions in rules.
 * @param {boolean} noInlineConfig Whether to allow inline configuration.
 * @param {boolean} synchronous Whether to execute synchronously.
 * @param {LintContentCallback} callback Callback (err, result) function.
 * @returns {void}
 */
function lintContent(
  ruleList,
  aliasToRuleNames,
  name,
  content,
  markdownItFactory,
  config,
  configParsers,
  frontMatter,
  handleRuleFailures,
  noInlineConfig,
  synchronous,
  callback) {
  // Provide a consistent error-reporting callback
  // eslint-disable-next-line jsdoc/reject-any-type
  const callbackError = (/** @type {any} */ error) => callback(error instanceof Error ? error : new Error(error));
  // Remove UTF-8 byte order marker (if present)
  content = content.replace(/^\uFEFF/, "");
  // Remove front matter
  const removeFrontMatterResult = removeFrontMatter(content, frontMatter);
  const { frontMatterLines } = removeFrontMatterResult;
  content = removeFrontMatterResult.content;
  // Get enabled rules per line (with HTML comments present)
  const { effectiveConfig, enabledRulesPerLineNumber, enabledRuleList, rulesSeverity } =
    getEnabledRulesPerLineNumber(
      ruleList,
      content.split(helpers.newLineRe),
      frontMatterLines,
      noInlineConfig,
      config,
      configParsers,
      aliasToRuleNames
    );
  const needMarkdownItTokens = enabledRuleList.some(
    (rule) => (rule.parser === "markdownit") || (rule.parser === undefined)
  );
  const needMicromarkTokens = enabledRuleList.some(
    (rule) => (rule.parser === "micromark")
  );
  const customRulesPresent = (ruleList.length !== rules.length);
  // Parse content into parser tokens
  const micromarkTokens = needMicromarkTokens ?
    micromarkParse(content, { "freezeTokens": customRulesPresent }) :
    [];
  // Hide the content of HTML comments from rules
  const preClearedContent = content;
  content = helpers.clearHtmlCommentText(content);
  // Parse content into lines and get markdown-it tokens
  const lines = content.split(helpers.newLineRe);
  // Function to run after fetching markdown-it tokens (when needed)
  const lintContentInternal = (/** @type {MarkdownItToken[]} */ markdownitTokens) => {
    // Create (frozen) parameters for rules
    /** @type {MarkdownParsers} */
    // @ts-ignore
    const parsersMarkdownIt = Object.freeze({
      "markdownit": Object.freeze({
        "tokens": markdownitTokens
      })
    });
    /** @type {MarkdownParsers} */
    // @ts-ignore
    const parsersMicromark = Object.freeze({
      "micromark": Object.freeze({
        "tokens": micromarkTokens
      })
    });
    /** @type {MarkdownParsers} */
    // @ts-ignore
    const parsersNone = Object.freeze({});
    const paramsBase = {
      name,
      version,
      "lines": Object.freeze(lines),
      "frontMatterLines": Object.freeze(frontMatterLines)
    };
    cacheInitialize({
      ...paramsBase,
      "parsers": parsersMicromark,
      "config": null
    });
    // Function to run for each rule
    /** @type {LintError[]} */
    const results = [];
    /**
     * @param {Rule} rule Rule.
     * @returns {Promise<void> | null} Promise.
     */
    const forRule = (rule) => {
      // Configure rule
      const ruleName = rule.names[0].toUpperCase();
      const tokens = {};
      let parsers = parsersNone;
      if (rule.parser === undefined) {
        tokens.tokens = markdownitTokens;
        parsers = parsersMarkdownIt;
      } else if (rule.parser === "markdownit") {
        parsers = parsersMarkdownIt;
      } else if (rule.parser === "micromark") {
        parsers = parsersMicromark;
      }
      const params = Object.freeze({
        ...paramsBase,
        ...tokens,
        parsers,
        /** @type {RuleConfiguration} */
        // @ts-ignore
        "config": effectiveConfig[ruleName]
      });
      // eslint-disable-next-line jsdoc/require-jsdoc
      function throwError(/** @type {string} */ property) {
        throw new Error(
          `Value of '${property}' passed to onError by '${ruleName}' is incorrect for '${name}'.`);
      }
      // eslint-disable-next-line jsdoc/require-jsdoc
      function onError(/** @type {RuleOnErrorInfo} */ errorInfo) {
        if (!errorInfo ||
          !helpers.isNumber(errorInfo.lineNumber) ||
          (errorInfo.lineNumber < 1) ||
          (errorInfo.lineNumber > lines.length)) {
          throwError("lineNumber");
        }
        const lineNumber = errorInfo.lineNumber + frontMatterLines.length;
        if (!enabledRulesPerLineNumber[lineNumber].get(ruleName)) {
          return;
        }
        if (errorInfo.detail &&
          !helpers.isString(errorInfo.detail)) {
          throwError("detail");
        }
        if (errorInfo.context &&
          !helpers.isString(errorInfo.context)) {
          throwError("context");
        }
        if (errorInfo.information &&
          !helpers.isUrl(errorInfo.information)) {
          throwError("information");
        }
        if (errorInfo.range &&
          (!Array.isArray(errorInfo.range) ||
            (errorInfo.range.length !== 2) ||
            !helpers.isNumber(errorInfo.range[0]) ||
            (errorInfo.range[0] < 1) ||
            !helpers.isNumber(errorInfo.range[1]) ||
            (errorInfo.range[1] < 1) ||
            ((errorInfo.range[0] + errorInfo.range[1] - 1) >
            lines[errorInfo.lineNumber - 1].length))) {
          throwError("range");
        }
        const fixInfo = errorInfo.fixInfo;
        const cleanFixInfo = {};
        if (fixInfo) {
          if (!helpers.isObject(fixInfo)) {
            throwError("fixInfo");
          }
          if (fixInfo.lineNumber !== undefined) {
            if ((!helpers.isNumber(fixInfo.lineNumber) ||
              (fixInfo.lineNumber < 1) ||
              (fixInfo.lineNumber > lines.length))) {
              throwError("fixInfo.lineNumber");
            }
            cleanFixInfo.lineNumber =
              fixInfo.lineNumber + frontMatterLines.length;
          }
          const effectiveLineNumber = fixInfo.lineNumber || errorInfo.lineNumber;
          if (fixInfo.editColumn !== undefined) {
            if ((!helpers.isNumber(fixInfo.editColumn) ||
              (fixInfo.editColumn < 1) ||
              (fixInfo.editColumn >
                lines[effectiveLineNumber - 1].length + 1))) {
              throwError("fixInfo.editColumn");
            }
            cleanFixInfo.editColumn = fixInfo.editColumn;
          }
          if (fixInfo.deleteCount !== undefined) {
            if ((!helpers.isNumber(fixInfo.deleteCount) ||
              (fixInfo.deleteCount < -1) ||
              (fixInfo.deleteCount >
                lines[effectiveLineNumber - 1].length))) {
              throwError("fixInfo.deleteCount");
            }
            cleanFixInfo.deleteCount = fixInfo.deleteCount;
          }
          if (fixInfo.insertText !== undefined) {
            if (!helpers.isString(fixInfo.insertText)) {
              throwError("fixInfo.insertText");
            }
            cleanFixInfo.insertText = fixInfo.insertText;
          }
        }
        const information = errorInfo.information || rule.information;
        results.push({
          lineNumber,
          "ruleNames": rule.names,
          "ruleDescription": rule.description,
          "ruleInformation": information ? information.href : null,
          "errorDetail": errorInfo.detail?.replace(helpers.newLineRe, " ") || null,
          "errorContext": errorInfo.context?.replace(helpers.newLineRe, " ") || null,
          "errorRange": errorInfo.range ? [ ...errorInfo.range ] : null,
          "fixInfo": fixInfo ? cleanFixInfo : null,
          // @ts-ignore
          "severity": rulesSeverity.get(ruleName)
        });
      }
      // Call (possibly external) rule function to report errors
      // @ts-ignore
      const catchCallsOnError = (error) => onError({
        "lineNumber": 1,
        "detail": `This rule threw an exception: ${error.message || error}`
      });
      const invokeRuleFunction = () => rule.function(params, onError);
      if (rule.asynchronous) {
        // Asynchronous rule, ensure it returns a Promise
        const ruleFunctionPromise =
          Promise.resolve().then(invokeRuleFunction);
        return handleRuleFailures ?
          ruleFunctionPromise.catch(catchCallsOnError) :
          ruleFunctionPromise;
      }
      // Synchronous rule
      try {
        invokeRuleFunction();
      } catch(error) {
        if (handleRuleFailures) {
          catchCallsOnError(error);
        } else {
          throw error;
        }
      }
      return null;
    };
    const formatResults = () => {
      // Sort results by rule name by line number
      results.sort((a, b) => (
        a.ruleNames[0].localeCompare(b.ruleNames[0]) ||
        a.lineNumber - b.lineNumber
      ));
      return results;
    };
    // Run all rules
    const ruleListAsync = enabledRuleList.filter((rule) => rule.asynchronous);
    const ruleListSync = enabledRuleList.filter((rule) => !rule.asynchronous);
    const ruleListAsyncFirst = [
      ...ruleListAsync,
      ...ruleListSync
    ];
    const callbackSuccess = () => callback(null, formatResults());
    try {
      const ruleResults = ruleListAsyncFirst.map(forRule);
      if (ruleListAsync.length > 0) {
        Promise.all(ruleResults.slice(0, ruleListAsync.length))
          .then(callbackSuccess)
          .catch(callbackError);
      } else {
        callbackSuccess();
      }
    } catch(error) {
      callbackError(error);
    } finally {
      cacheInitialize();
    }
  };
  if (!needMarkdownItTokens || synchronous) {
    // Need/able to call into markdown-it and lintContentInternal synchronously
    const markdownItTokens = needMarkdownItTokens ?
      requireMarkdownItCjs().getMarkdownItTokens(markdownItFactory(), preClearedContent, lines) :
      [];
    lintContentInternal(markdownItTokens);
  } else {
    // Need to call into markdown-it and lintContentInternal asynchronously
    Promise.all([
      // eslint-disable-next-line no-inline-comments
      import(/* webpackMode: "eager" */ "./markdownit.cjs"),
      // eslint-disable-next-line no-promise-executor-return
      new Promise((resolve) => resolve(markdownItFactory()))
    ]).then(([ markdownitCjs, markdownIt ]) => {
      const markdownItTokens = markdownitCjs.getMarkdownItTokens(markdownIt, preClearedContent, lines);
      lintContentInternal(markdownItTokens);
    }).catch(callbackError);
  }
}

/**
 * Lints a file containing Markdown content.
 *
 * @param {Rule[]} ruleList List of rules.
 * @param {Object.<string, string[]>} aliasToRuleNames Map of alias to rule names.
 * @param {string} file Path of file to lint.
 * @param {MarkdownItFactory} markdownItFactory Function to create a markdown-it parser.
 * @param {Configuration} config Configuration object.
 * @param {ConfigurationParser[] | undefined} configParsers Configuration parsers.
 * @param {RegExp | null} frontMatter Regular expression for front matter.
 * @param {boolean} handleRuleFailures Whether to handle exceptions in rules.
 * @param {boolean} noInlineConfig Whether to allow inline configuration.
 * @param {FsLike} fs File system implementation.
 * @param {boolean} synchronous Whether to execute synchronously.
 * @param {LintContentCallback} callback Callback (err, result) function.
 * @returns {void}
 */
function lintFile(
  ruleList,
  aliasToRuleNames,
  file,
  markdownItFactory,
  config,
  configParsers,
  frontMatter,
  handleRuleFailures,
  noInlineConfig,
  fs,
  synchronous,
  callback) {
  // eslint-disable-next-line jsdoc/require-jsdoc
  function lintContentWrapper(/** @type {Error | null} */ err, /** @type {string} */ content) {
    if (err) {
      return callback(err);
    }
    return lintContent(
      ruleList,
      aliasToRuleNames,
      file,
      content,
      markdownItFactory,
      config,
      configParsers,
      frontMatter,
      handleRuleFailures,
      noInlineConfig,
      synchronous,
      callback
    );
  }
  // Make a/synchronous call to read file
  if (synchronous) {
    lintContentWrapper(null, fs.readFileSync(file, "utf8"));
  } else {
    fs.readFile(file, "utf8", lintContentWrapper);
  }
}

/**
 * Lint files and strings specified in the Options object.
 *
 * @param {Options | null} options Options object.
 * @param {boolean} synchronous Whether to execute synchronously.
 * @param {LintCallback} callback Callback (err, result) function.
 * @returns {void}
 */
function lintInput(options, synchronous, callback) {
  // Normalize inputs
  options = options || {};
  callback = callback || function noop() {};
  /** @type {Rule[]} */
  // @ts-ignore
  const customRuleList =
    [ options.customRules || [] ]
      .flat()
      .map((rule) => ({
        "names": helpers.cloneIfArray(rule.names),
        "description": rule.description,
        "information": helpers.cloneIfUrl(rule.information),
        "tags": helpers.cloneIfArray(rule.tags),
        "parser": rule.parser,
        "asynchronous": rule.asynchronous,
        "function": rule.function
      }));
  // eslint-disable-next-line unicorn/prefer-spread
  const ruleList = rules.concat(customRuleList);
  const ruleErr = validateRuleList(ruleList, synchronous);
  if (ruleErr) {
    callback(ruleErr);
    return;
  }
  /** @type {string[]} */
  let files = [];
  if (Array.isArray(options.files)) {
    files = [ ...options.files ];
  } else if (options.files) {
    files = [ String(options.files) ];
  }
  const strings = options.strings || {};
  const stringsKeys = Object.keys(strings);
  const config = options.config || { "default": true };
  const configParsers = options.configParsers || undefined;
  const frontMatter = (options.frontMatter === undefined) ?
    helpers.frontMatterRe :
    options.frontMatter;
  const handleRuleFailures = !!options.handleRuleFailures;
  const noInlineConfig = !!options.noInlineConfig;
  // @ts-ignore
  // eslint-disable-next-line dot-notation
  const resultVersion = (options["resultVersion"] === undefined) ? 3 : options["resultVersion"];
  const markdownItFactory =
    options.markdownItFactory ||
    (() => { throw new Error("The option 'markdownItFactory' was required (due to the option 'customRules' including a rule requiring the 'markdown-it' parser), but 'markdownItFactory' was not set."); });
  /** @type {FsLike} */
  // @ts-ignore
  const fs = options.fs || nodeFs;
  const aliasToRuleNames = mapAliasToRuleNames(ruleList);
  const results = newResults(ruleList);
  let done = false;
  let concurrency = 0;
  // eslint-disable-next-line jsdoc/require-jsdoc
  function lintWorker() {
    /** @type {string | undefined} */
    let currentItem = undefined;
    // eslint-disable-next-line jsdoc/require-jsdoc
    function lintWorkerCallback(/** @type {Error | null} */ err, /** @type {LintError[] | undefined} */ result) {
      concurrency--;
      if (err) {
        done = true;
        return callback(err);
      }
      // @ts-ignore
      results[currentItem] = result;
      if (!synchronous) {
        lintWorker();
      }
      return null;
    }
    if (done) {
      // Abort for error or nothing left to do
    } else if ((currentItem = files.shift())) {
      // Lint next file
      concurrency++;
      lintFile(
        ruleList,
        aliasToRuleNames,
        currentItem,
        markdownItFactory,
        config,
        configParsers,
        frontMatter,
        handleRuleFailures,
        noInlineConfig,
        fs,
        synchronous,
        lintWorkerCallback
      );
    } else if ((currentItem = stringsKeys.shift())) {
      // Lint next string
      concurrency++;
      lintContent(
        ruleList,
        aliasToRuleNames,
        currentItem,
        strings[currentItem] || "",
        markdownItFactory,
        config,
        configParsers,
        frontMatter,
        handleRuleFailures,
        noInlineConfig,
        synchronous,
        lintWorkerCallback
      );
    } else if (concurrency === 0) {
      // Finish
      done = true;
      // Deprecated: Convert results to specified resultVersion
      let convertedResults = results;
      if (resultVersion === 0) {
        convertedResults = helpers.convertToResultVersion0(results);
      } else if (resultVersion === 1) {
        convertedResults = helpers.convertToResultVersion1(results);
      } else if (resultVersion === 2) {
        convertedResults = helpers.convertToResultVersion2(results);
      }
      return callback(null, convertedResults);
    }
    return null;
  }
  if (synchronous) {
    while (!done) {
      lintWorker();
    }
  } else {
    // Testing on a Raspberry Pi 4 Model B with an artificial 5ms file access
    // delay suggests that a concurrency factor of 8 can eliminate the impact
    // of that delay (i.e., total time is the same as with no delay).
    lintWorker();
    lintWorker();
    lintWorker();
    lintWorker();
    lintWorker();
    lintWorker();
    lintWorker();
    lintWorker();
  }
}

/**
 * Lint specified Markdown files.
 *
 * @param {Options | null} options Configuration options.
 * @param {LintCallback} callback Callback (err, result) function.
 * @returns {void}
 */
export function lintAsync(options, callback) {
  return lintInput(options, false, callback);
}

/**
 * Lint specified Markdown files.
 *
 * @param {Options | null} options Configuration options.
 * @returns {Promise<LintResults>} Results object.
 */
export function lintPromise(options) {
  return new Promise((resolve, reject) => {
    lintAsync(options, (error, results) => {
      if (error || !results) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

/**
 * Lint specified Markdown files.
 *
 * @param {Options | null} options Configuration options.
 * @returns {LintResults} Results object.
 */
export function lintSync(options) {
  let results = null;
  lintInput(options, true, function callback(error, res) {
    if (error) {
      throw error;
    }
    results = res;
  });
  // @ts-ignore
  return results;
}

/**
 * Node fs instance (or compatible object).
 *
 * @typedef FsLike
 * @property {(path: string, callback: (err: Error) => void) => void} access access method.
 * @property {(path: string) => void} accessSync accessSync method.
 * @property {(path: string, encoding: string, callback: (err: Error, data: string) => void) => void} readFile readFile method.
 * @property {(path: string, encoding: string) => string} readFileSync readFileSync method.
 */

/**
 * Resolve referenced "extends" path in a configuration file
 * using path.resolve() with require.resolve() as a fallback.
 *
 * @param {string} configFile Configuration file name.
 * @param {string} referenceId Referenced identifier to resolve.
 * @param {FsLike} fs File system implementation.
 * @param {ResolveConfigExtendsCallback} callback Callback (err, result) function.
 * @returns {void}
 */
function resolveConfigExtends(configFile, referenceId, fs, callback) {
  const configFileDirname = path.dirname(configFile);
  const resolvedExtendsFile = path.resolve(configFileDirname, referenceId);
  fs.access(resolvedExtendsFile, (err) => {
    if (err) {
      // Not a file, try require.resolve
      try {
        return callback(
          null,
          resolveModule(referenceId, [ configFileDirname ])
        );
      } catch {
        // Unable to resolve, use resolvedExtendsFile
      }
    }
    return callback(null, resolvedExtendsFile);
  });
}

/**
 * Resolve referenced "extends" path in a configuration file
 * using path.resolve() with require.resolve() as a fallback.
 *
 * @param {string} configFile Configuration file name.
 * @param {string} referenceId Referenced identifier to resolve.
 * @param {FsLike} fs File system implementation.
 * @returns {string} Resolved path to file.
 */
function resolveConfigExtendsSync(configFile, referenceId, fs) {
  const configFileDirname = path.dirname(configFile);
  const resolvedExtendsFile = path.resolve(configFileDirname, referenceId);
  try {
    fs.accessSync(resolvedExtendsFile);
    return resolvedExtendsFile;
  } catch {
    // Not a file, try require.resolve
  }
  try {
    return resolveModule(referenceId, [ configFileDirname ]);
  } catch {
    // Unable to resolve, return resolvedExtendsFile
  }
  return resolvedExtendsFile;
}

/**
 * Extend specified configuration object.
 *
 * @param {Configuration} config Configuration object.
 * @param {string} file Configuration file name.
 * @param {ConfigurationParser[] | undefined} parsers Parsing function(s).
 * @param {FsLike} fs File system implementation.
 * @param {ReadConfigCallback} callback Callback (err, result) function.
 * @returns {void}
 */
function extendConfig(config, file, parsers, fs, callback) {
  const configExtends = config.extends;
  if (configExtends) {
    return resolveConfigExtends(
      file,
      helpers.expandTildePath(configExtends, os),
      fs,
      // eslint-disable-next-line no-use-before-define
      (_, resolvedExtends) => readConfigAsync(
        // @ts-ignore
        resolvedExtends,
        parsers,
        fs,
        (err, extendsConfig) => {
          if (err) {
            return callback(err);
          }
          const result = {
            ...extendsConfig,
            ...config
          };
          delete result.extends;
          return callback(null, result);
        }
      )
    );
  }
  return callback(null, config);
}

/**
 * Extend specified configuration object.
 *
 * @param {Configuration} config Configuration object.
 * @param {string} file Configuration file name.
 * @param {ConfigurationParser[] | undefined} parsers Parsing function(s).
 * @param {FsLike} fs File system implementation.
 * @returns {Promise<Configuration>} Configuration object.
 */
export function extendConfigPromise(config, file, parsers, fs) {
  return new Promise((resolve, reject) => {
    extendConfig(config, file, parsers, fs, (error, results) => {
      if (error || !results) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

/**
 * Read specified configuration file.
 *
 * @param {string} file Configuration file name.
 * @param {ConfigurationParser[] | ReadConfigCallback} [parsers] Parsing function(s).
 * @param {FsLike | ReadConfigCallback} [fs] File system implementation.
 * @param {ReadConfigCallback} [callback] Callback (err, result) function.
 * @returns {void}
 */
export function readConfigAsync(file, parsers, fs, callback) {
  if (!callback) {
    if (fs) {
      // @ts-ignore
      callback = fs;
      // @ts-ignore
      fs = null;
    } else {
      // @ts-ignore
      callback = parsers;
      // @ts-ignore
      parsers = null;
    }
  }
  /** @type {FsLike} */
  // @ts-ignore
  const fsLike = fs || nodeFs;
  // Read file
  file = helpers.expandTildePath(file, os);
  fsLike.readFile(file, "utf8", (err, content) => {
    if (err) {
      // @ts-ignore
      return callback(err);
    }
    // Try to parse file
    // @ts-ignore
    const { config, message } = parseConfiguration(file, content, parsers);
    if (!config) {
      // @ts-ignore
      return callback(new Error(message));
    }
    // Extend configuration
    // @ts-ignore
    return extendConfig(config, file, parsers, fsLike, callback);
  });
}

/**
 * Read specified configuration file.
 *
 * @param {string} file Configuration file name.
 * @param {ConfigurationParser[]} [parsers] Parsing function(s).
 * @param {FsLike} [fs] File system implementation.
 * @returns {Promise<Configuration>} Configuration object.
 */
export function readConfigPromise(file, parsers, fs) {
  return new Promise((resolve, reject) => {
    readConfigAsync(file, parsers, fs, (error, results) => {
      if (error || !results) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

/**
 * Read specified configuration file.
 *
 * @param {string} file Configuration file name.
 * @param {ConfigurationParser[]} [parsers] Parsing function(s).
 * @param {FsLike} [fs] File system implementation.
 * @returns {Configuration} Configuration object.
 */
export function readConfigSync(file, parsers, fs) {
  /** @type {FsLike} */
  // @ts-ignore
  const fsLike = fs || nodeFs;
  // Read file
  file = helpers.expandTildePath(file, os);
  const content = fsLike.readFileSync(file, "utf8");
  // Try to parse file
  const { config, message } = parseConfiguration(file, content, parsers);
  if (!config) {
    // @ts-ignore
    throw new Error(message);
  }
  // Extend configuration
  const configExtends = config.extends;
  if (configExtends) {
    delete config.extends;
    const resolvedExtends = resolveConfigExtendsSync(
      file,
      helpers.expandTildePath(configExtends, os),
      fsLike
    );
    return {
      ...readConfigSync(resolvedExtends, parsers, fs),
      ...config
    };
  }
  return config;
}

/**
 * Normalizes the fields of a RuleOnErrorFixInfo instance.
 *
 * @param {FixInfo} fixInfo RuleOnErrorFixInfo instance.
 * @param {number} [lineNumber] Line number.
 * @returns {FixInfoNormalized} Normalized RuleOnErrorFixInfo instance.
 */
function normalizeFixInfo(fixInfo, lineNumber = 0) {
  return {
    "lineNumber": fixInfo.lineNumber || lineNumber,
    "editColumn": fixInfo.editColumn || 1,
    "deleteCount": fixInfo.deleteCount || 0,
    "insertText": fixInfo.insertText || ""
  };
}

/**
 * Applies the specified fix to a Markdown content line.
 *
 * @param {string} line Line of Markdown content.
 * @param {FixInfo} fixInfo FixInfo instance.
 * @param {string} [lineEnding] Line ending to use.
 * @returns {string | null} Fixed content or null if deleted.
 */
export function applyFix(line, fixInfo, lineEnding = "\n") {
  const { editColumn, deleteCount, insertText } = normalizeFixInfo(fixInfo);
  const editIndex = editColumn - 1;
  return (deleteCount === -1) ?
    null :
    line.slice(0, editIndex) + insertText.replace(/\n/g, lineEnding) + line.slice(editIndex + deleteCount);
}

/**
 * Applies as many of the specified fixes as possible to Markdown content.
 *
 * @param {string} input Lines of Markdown content.
 * @param {LintError[]} errors LintError instances.
 * @returns {string} Fixed content.
 */
export function applyFixes(input, errors) {
  const lineEnding = helpers.getPreferredLineEnding(input, os);
  const lines = input.split(helpers.newLineRe);
  // Normalize fixInfo objects
  let fixInfos = errors
    .filter((error) => error.fixInfo)
    // @ts-ignore
    .map((error) => normalizeFixInfo(error.fixInfo, error.lineNumber));
  // Sort bottom-to-top, line-deletes last, right-to-left, long-to-short
  fixInfos.sort((a, b) => {
    const aDeletingLine = (a.deleteCount === -1);
    const bDeletingLine = (b.deleteCount === -1);
    return (
      (b.lineNumber - a.lineNumber) ||
      (aDeletingLine ? 1 : (bDeletingLine ? -1 : 0)) ||
      (b.editColumn - a.editColumn) ||
      (b.insertText.length - a.insertText.length)
    );
  });
  // Remove duplicate entries (needed for following collapse step)
  /** @type {RuleOnErrorFixInfo} */
  let lastFixInfo = {};
  fixInfos = fixInfos.filter((fixInfo) => {
    const unique = (
      (fixInfo.lineNumber !== lastFixInfo.lineNumber) ||
      (fixInfo.editColumn !== lastFixInfo.editColumn) ||
      (fixInfo.deleteCount !== lastFixInfo.deleteCount) ||
      (fixInfo.insertText !== lastFixInfo.insertText)
    );
    lastFixInfo = fixInfo;
    return unique;
  });
  // Collapse insert/no-delete and no-insert/delete for same line/column
  lastFixInfo = {
    "lineNumber": -1
  };
  for (const fixInfo of fixInfos) {
    if (
      (fixInfo.lineNumber === lastFixInfo.lineNumber) &&
      (fixInfo.editColumn === lastFixInfo.editColumn) &&
      !fixInfo.insertText &&
      (fixInfo.deleteCount > 0) &&
      lastFixInfo.insertText &&
      !lastFixInfo.deleteCount) {
      fixInfo.insertText = lastFixInfo.insertText;
      lastFixInfo.lineNumber = 0;
    }
    lastFixInfo = fixInfo;
  }
  fixInfos = fixInfos.filter((fixInfo) => fixInfo.lineNumber);
  // Apply all (remaining/updated) fixes
  let lastLineIndex = -1;
  let lastEditIndex = -1;
  for (const fixInfo of fixInfos) {
    const { lineNumber, editColumn, deleteCount } = fixInfo;
    const lineIndex = lineNumber - 1;
    const editIndex = editColumn - 1;
    if (
      (lineIndex !== lastLineIndex) ||
      (deleteCount === -1) ||
      ((editIndex + deleteCount) <=
        (lastEditIndex - ((deleteCount > 0) ? 0 : 1)))
    ) {
      // @ts-ignore
      lines[lineIndex] = applyFix(lines[lineIndex], fixInfo, lineEnding);
    }
    lastLineIndex = lineIndex;
    lastEditIndex = editIndex;
  }
  // Return corrected input
  return lines.filter((line) => line !== null).join(lineEnding);
}

/**
 * Gets the (semantic) version of the library.
 *
 * @returns {string} SemVer string.
 */
export function getVersion() {
  return version;
}

// Type declarations

/**
 * Function to implement rule logic.
 *
 * @callback RuleFunction
 * @param {RuleParams} params Rule parameters.
 * @param {RuleOnError} onError Error-reporting callback.
 * @returns {void}
 */

/**
 * Rule parameters.
 *
 * @typedef {Object} RuleParams
 * @property {string} name File/string name.
 * @property {MarkdownParsers} parsers Markdown parser data.
 * @property {readonly string[]} lines File/string lines.
 * @property {readonly string[]} frontMatterLines Front matter lines.
 * @property {RuleConfiguration} config Rule configuration.
 * @property {string} version Version of the markdownlint library.
 */

/**
 * Markdown parser data.
 *
 * @typedef {Object} MarkdownParsers
 * @property {ParserMarkdownIt} markdownit Markdown parser data from markdown-it (only present when Rule.parser is "markdownit").
 * @property {ParserMicromark} micromark Markdown parser data from micromark (only present when Rule.parser is "micromark").
 */

/**
 * Markdown parser data from markdown-it.
 *
 * @typedef {Object} ParserMarkdownIt
 * @property {MarkdownItToken[]} tokens Token objects from markdown-it.
 */

/**
 * Markdown parser data from micromark.
 *
 * @typedef {Object} ParserMicromark
 * @property {MicromarkToken[]} tokens Token objects from micromark.
 */

/**
 * markdown-it token.
 *
 * @typedef {Object} MarkdownItToken
 * @property {string[][]} attrs HTML attributes.
 * @property {boolean} block Block-level token.
 * @property {MarkdownItToken[]} children Child nodes.
 * @property {string} content Tag contents.
 * @property {boolean} hidden Ignore element.
 * @property {string} info Fence info.
 * @property {number} level Nesting level.
 * @property {number[]} map Beginning/ending line numbers.
 * @property {string} markup Markup text.
 * @property {Object} meta Arbitrary data.
 * @property {number} nesting Level change.
 * @property {string} tag HTML tag name.
 * @property {string} type Token type.
 * @property {number} lineNumber Line number (1-based).
 * @property {string} line Line content.
 */

/** @typedef {import("micromark-util-types").TokenType} MicromarkTokenType */

/**
 * micromark token.
 *
 * @typedef {Object} MicromarkToken
 * @property {MicromarkTokenType} type Token type.
 * @property {number} startLine Start line (1-based).
 * @property {number} startColumn Start column (1-based).
 * @property {number} endLine End line (1-based).
 * @property {number} endColumn End column (1-based).
 * @property {string} text Token text.
 * @property {MicromarkToken[]} children Child tokens.
 * @property {MicromarkToken | null} parent Parent token.
 */

/**
 * Error-reporting callback.
 *
 * @callback RuleOnError
 * @param {RuleOnErrorInfo} onErrorInfo Error information.
 * @returns {void}
 */

/**
 * Fix information for RuleOnError callback.
 *
 * @typedef {Object} RuleOnErrorInfo
 * @property {number} lineNumber Line number (1-based).
 * @property {string} [detail] Detail about the error.
 * @property {string} [context] Context for the error.
 * @property {URL} [information] Link to more information.
 * @property {number[]} [range] Column number (1-based) and length.
 * @property {RuleOnErrorFixInfo} [fixInfo] Fix information.
 */

/**
 * Fix information for RuleOnErrorInfo.
 *
 * @typedef {Object} RuleOnErrorFixInfo
 * @property {number} [lineNumber] Line number (1-based).
 * @property {number} [editColumn] Column of the fix (1-based).
 * @property {number} [deleteCount] Count of characters to delete.
 * @property {string} [insertText] Text to insert (after deleting).
 */

/**
 * Rule definition.
 *
 * @typedef {Object} Rule
 * @property {string[]} names Rule name(s).
 * @property {string} description Rule description.
 * @property {URL} [information] Link to more information.
 * @property {string[]} tags Rule tag(s).
 * @property {"markdownit" | "micromark" | "none"} parser Parser used.
 * @property {boolean} [asynchronous] True if asynchronous.
 * @property {RuleFunction} function Rule implementation.
 */

/**
 * Method used by the markdown-it parser to parse input.
 *
 * @callback MarkdownItParse
 * @param {string} src Source string.
 * @param {Object} env Environment sandbox.
 * @returns {import("markdown-it").Token[]} Tokens.
 */

/**
 * Instance of the markdown-it parser.
 *
 * @typedef MarkdownIt
 * @property {MarkdownItParse} parse Method to parse input.
 */

/**
 * Gets an instance of the markdown-it parser. Any plugins should already have been loaded.
 *
 * @callback MarkdownItFactory
 * @returns {MarkdownIt|Promise<MarkdownIt>} Instance of the markdown-it parser.
 */

/**
 * Configuration options.
 *
 * @typedef {Object} Options
 * @property {Configuration} [config] Configuration object.
 * @property {ConfigurationParser[]} [configParsers] Configuration parsers.
 * @property {Rule[] | Rule} [customRules] Custom rules.
 * @property {string[] | string} [files] Files to lint.
 * @property {RegExp | null} [frontMatter] Front matter pattern.
 * @property {FsLike} [fs] File system implementation.
 * @property {boolean} [handleRuleFailures] True to catch exceptions.
 * @property {MarkdownItFactory} [markdownItFactory] Function to create a markdown-it parser.
 * @property {boolean} [noInlineConfig] True to ignore HTML directives.
 * @property {Object.<string, string>} [strings] Strings to lint.
 */

/**
 * A markdown-it plugin.
 *
 * @typedef {Object[]} Plugin
 */

/**
 * Lint results.
 *
 * @typedef {Object.<string, LintError[]>} LintResults
 */

/**
 * Lint error.
 *
 * @typedef {Object} LintError
 * @property {number} lineNumber Line number (1-based).
 * @property {string[]} ruleNames Rule name(s).
 * @property {string} ruleDescription Rule description.
 * @property {string | null} ruleInformation Link to more information.
 * @property {string | null} errorDetail Detail about the error.
 * @property {string | null} errorContext Context for the error.
 * @property {number[] | null} errorRange Column number (1-based) and length.
 * @property {FixInfo | null} fixInfo Fix information.
 * @property {"error" | "warning"} severity Severity of the error.
 */

/**
 * Fix information.
 *
 * @typedef {Object} FixInfo
 * @property {number} [lineNumber] Line number (1-based).
 * @property {number} [editColumn] Column of the fix (1-based).
 * @property {number} [deleteCount] Count of characters to delete.
 * @property {string} [insertText] Text to insert (after deleting).
 */

/**
 * FixInfo with all optional properties present.
 *
 * @typedef {Object} FixInfoNormalized
 * @property {number} lineNumber Line number (1-based).
 * @property {number} editColumn Column of the fix (1-based).
 * @property {number} deleteCount Count of characters to delete.
 * @property {string} insertText Text to insert (after deleting).
 */

/**
 * Called with the result of linting a string or document.
 *
 * @callback LintContentCallback
 * @param {Error | null} error Error iff failed.
 * @param {LintError[]} [result] Result iff successful.
 * @returns {void}
 */

/**
 * Called with the result of the lint function.
 *
 * @callback LintCallback
 * @param {Error | null} error Error object iff failed.
 * @param {LintResults} [results] Lint results iff succeeded.
 * @returns {void}
 */

/**
 * Configuration object for linting rules. For the JSON schema, see
 * {@link ../schema/markdownlint-config-schema.json}.
 *
 * @typedef {import("./configuration.d.ts").Configuration} Configuration
 */

/**
 * Configuration object for linting rules strictly. For the JSON schema, see
 * {@link ../schema/markdownlint-config-schema-strict.json}.
 *
 * @typedef {import("./configuration-strict.d.ts").ConfigurationStrict} ConfigurationStrict
 */

/**
 * Rule configuration object.
 *
 * @typedef {boolean | Object} RuleConfiguration Rule configuration.
 */

/**
 * Parses a configuration string and returns a configuration object.
 *
 * @callback ConfigurationParser
 * @param {string} text Configuration string.
 * @returns {Configuration}
 */

/**
 * Called with the result of the readConfig function.
 *
 * @callback ReadConfigCallback
 * @param {Error | null} err Error object or null.
 * @param {Configuration} [config] Configuration object.
 * @returns {void}
 */

/**
 * Called with the result of the resolveConfigExtends function.
 *
 * @callback ResolveConfigExtendsCallback
 * @param {Error | null} err Error object or null.
 * @param {string} [path] Resolved path to file.
 * @returns {void}
 */
