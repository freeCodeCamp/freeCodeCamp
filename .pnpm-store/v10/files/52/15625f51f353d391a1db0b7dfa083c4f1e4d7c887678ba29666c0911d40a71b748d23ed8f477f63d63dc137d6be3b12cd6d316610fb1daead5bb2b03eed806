"use strict";

const selectorParser = require("postcss-selector-parser");

const hasOwnProperty = Object.prototype.hasOwnProperty;

function getSingleLocalNamesForComposes(root) {
  return root.nodes.map((node) => {
    if (node.type !== "selector" || node.nodes.length !== 1) {
      throw new Error(
        `composition is only allowed when selector is single :local class name not in "${root}"`
      );
    }

    node = node.nodes[0];

    if (
      node.type !== "pseudo" ||
      node.value !== ":local" ||
      node.nodes.length !== 1
    ) {
      throw new Error(
        'composition is only allowed when selector is single :local class name not in "' +
          root +
          '", "' +
          node +
          '" is weird'
      );
    }

    node = node.first;

    if (node.type !== "selector" || node.length !== 1) {
      throw new Error(
        'composition is only allowed when selector is single :local class name not in "' +
          root +
          '", "' +
          node +
          '" is weird'
      );
    }

    node = node.first;

    if (node.type !== "class") {
      // 'id' is not possible, because you can't compose ids
      throw new Error(
        'composition is only allowed when selector is single :local class name not in "' +
          root +
          '", "' +
          node +
          '" is weird'
      );
    }

    return node.value;
  });
}

const whitespace = "[\\x20\\t\\r\\n\\f]";
const unescapeRegExp = new RegExp(
  "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)",
  "ig"
);

function unescape(str) {
  return str.replace(unescapeRegExp, (_, escaped, escapedWhitespace) => {
    const high = "0x" + escaped - 0x10000;

    // NaN means non-codepoint
    // Workaround erroneous numeric interpretation of +"0x"
    return high !== high || escapedWhitespace
      ? escaped
      : high < 0
      ? // BMP codepoint
        String.fromCharCode(high + 0x10000)
      : // Supplemental Plane codepoint (surrogate pair)
        String.fromCharCode((high >> 10) | 0xd800, (high & 0x3ff) | 0xdc00);
  });
}

const plugin = (options = {}) => {
  const generateScopedName =
    (options && options.generateScopedName) || plugin.generateScopedName;
  const generateExportEntry =
    (options && options.generateExportEntry) || plugin.generateExportEntry;
  const exportGlobals = options && options.exportGlobals;

  return {
    postcssPlugin: "postcss-modules-scope",
    Once(root, { rule }) {
      const exports = Object.create(null);

      function exportScopedName(name, rawName) {
        const scopedName = generateScopedName(
          rawName ? rawName : name,
          root.source.input.from,
          root.source.input.css
        );
        const exportEntry = generateExportEntry(
          rawName ? rawName : name,
          scopedName,
          root.source.input.from,
          root.source.input.css
        );
        const { key, value } = exportEntry;

        exports[key] = exports[key] || [];

        if (exports[key].indexOf(value) < 0) {
          exports[key].push(value);
        }

        return scopedName;
      }

      function localizeNode(node) {
        switch (node.type) {
          case "selector":
            node.nodes = node.map(localizeNode);
            return node;
          case "class":
            return selectorParser.className({
              value: exportScopedName(
                node.value,
                node.raws && node.raws.value ? node.raws.value : null
              ),
            });
          case "id": {
            return selectorParser.id({
              value: exportScopedName(
                node.value,
                node.raws && node.raws.value ? node.raws.value : null
              ),
            });
          }
        }

        throw new Error(
          `${node.type} ("${node}") is not allowed in a :local block`
        );
      }

      function traverseNode(node) {
        switch (node.type) {
          case "pseudo":
            if (node.value === ":local") {
              if (node.nodes.length !== 1) {
                throw new Error('Unexpected comma (",") in :local block');
              }

              const selector = localizeNode(node.first, node.spaces);
              // move the spaces that were around the psuedo selector to the first
              // non-container node
              selector.first.spaces = node.spaces;

              const nextNode = node.next();

              if (
                nextNode &&
                nextNode.type === "combinator" &&
                nextNode.value === " " &&
                /\\[A-F0-9]{1,6}$/.test(selector.last.value)
              ) {
                selector.last.spaces.after = " ";
              }

              node.replaceWith(selector);

              return;
            }
          /* falls through */
          case "root":
          case "selector": {
            node.each(traverseNode);
            break;
          }
          case "id":
          case "class":
            if (exportGlobals) {
              exports[node.value] = [node.value];
            }
            break;
        }
        return node;
      }

      // Find any :import and remember imported names
      const importedNames = {};

      root.walkRules(/^:import\(.+\)$/, (rule) => {
        rule.walkDecls((decl) => {
          importedNames[decl.prop] = true;
        });
      });

      // Find any :local selectors
      root.walkRules((rule) => {
        let parsedSelector = selectorParser().astSync(rule);

        rule.selector = traverseNode(parsedSelector.clone()).toString();

        rule.walkDecls(/composes|compose-with/i, (decl) => {
          const localNames = getSingleLocalNamesForComposes(parsedSelector);
          const classes = decl.value.split(/\s+/);

          classes.forEach((className) => {
            const global = /^global\(([^)]+)\)$/.exec(className);

            if (global) {
              localNames.forEach((exportedName) => {
                exports[exportedName].push(global[1]);
              });
            } else if (hasOwnProperty.call(importedNames, className)) {
              localNames.forEach((exportedName) => {
                exports[exportedName].push(className);
              });
            } else if (hasOwnProperty.call(exports, className)) {
              localNames.forEach((exportedName) => {
                exports[className].forEach((item) => {
                  exports[exportedName].push(item);
                });
              });
            } else {
              throw decl.error(
                `referenced class name "${className}" in ${decl.prop} not found`
              );
            }
          });

          decl.remove();
        });

        // Find any :local values
        rule.walkDecls((decl) => {
          if (!/:local\s*\((.+?)\)/.test(decl.value)) {
            return;
          }

          let tokens = decl.value.split(/(,|'[^']*'|"[^"]*")/);

          tokens = tokens.map((token, idx) => {
            if (idx === 0 || tokens[idx - 1] === ",") {
              let result = token;

              const localMatch = /:local\s*\((.+?)\)/.exec(token);

              if (localMatch) {
                const input = localMatch.input;
                const matchPattern = localMatch[0];
                const matchVal = localMatch[1];
                const newVal = exportScopedName(matchVal);

                result = input.replace(matchPattern, newVal);
              } else {
                return token;
              }

              return result;
            } else {
              return token;
            }
          });

          decl.value = tokens.join("");
        });
      });

      // Find any :local keyframes
      root.walkAtRules(/keyframes$/i, (atRule) => {
        const localMatch = /^\s*:local\s*\((.+?)\)\s*$/.exec(atRule.params);

        if (!localMatch) {
          return;
        }

        atRule.params = exportScopedName(localMatch[1]);
      });

      // If we found any :locals, insert an :export rule
      const exportedNames = Object.keys(exports);

      if (exportedNames.length > 0) {
        const exportRule = rule({ selector: ":export" });

        exportedNames.forEach((exportedName) =>
          exportRule.append({
            prop: exportedName,
            value: exports[exportedName].join(" "),
            raws: { before: "\n  " },
          })
        );

        root.append(exportRule);
      }
    },
  };
};

plugin.postcss = true;

plugin.generateScopedName = function (name, path) {
  const sanitisedPath = path
    .replace(/\.[^./\\]+$/, "")
    .replace(/[\W_]+/g, "_")
    .replace(/^_|_$/g, "");

  return `_${sanitisedPath}__${name}`.trim();
};

plugin.generateExportEntry = function (name, scopedName) {
  return {
    key: unescape(name),
    value: unescape(scopedName),
  };
};

module.exports = plugin;
