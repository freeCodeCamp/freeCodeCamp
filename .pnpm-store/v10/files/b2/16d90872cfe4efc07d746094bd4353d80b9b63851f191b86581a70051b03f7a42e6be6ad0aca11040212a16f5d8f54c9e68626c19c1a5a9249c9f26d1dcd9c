"use strict";

const ICSSUtils = require("icss-utils");

const matchImports = /^(.+?|\([\s\S]+?\))\s+from\s+("[^"]*"|'[^']*'|[\w-]+)$/;
const matchValueDefinition = /(?:\s+|^)([\w-]+):?(.*?)$/;
const matchImport = /^([\w-]+)(?:\s+as\s+([\w-]+))?/;

module.exports = (options) => {
  let importIndex = 0;
  const createImportedName =
    (options && options.createImportedName) ||
    ((importName /*, path*/) =>
      `i__const_${importName.replace(/\W/g, "_")}_${importIndex++}`);

  return {
    postcssPlugin: "postcss-modules-values",
    prepare(result) {
      const importAliases = [];
      const definitions = {};

      return {
        Once(root, postcss) {
          root.walkAtRules(/value/i, (atRule) => {
            const matches = atRule.params.match(matchImports);

            if (matches) {
              let [, /*match*/ aliases, path] = matches;

              // We can use constants for path names
              if (definitions[path]) {
                path = definitions[path];
              }

              const imports = aliases
                .replace(/^\(\s*([\s\S]+)\s*\)$/, "$1")
                .split(/\s*,\s*/)
                .map((alias) => {
                  const tokens = matchImport.exec(alias);

                  if (tokens) {
                    const [, /*match*/ theirName, myName = theirName] = tokens;
                    const importedName = createImportedName(myName);
                    definitions[myName] = importedName;
                    return { theirName, importedName };
                  } else {
                    throw new Error(`@import statement "${alias}" is invalid!`);
                  }
                });

              importAliases.push({ path, imports });

              atRule.remove();

              return;
            }

            if (atRule.params.indexOf("@value") !== -1) {
              result.warn("Invalid value definition: " + atRule.params);
            }

            let [, key, value] = `${atRule.params}${atRule.raws.between}`.match(
              matchValueDefinition
            );

            const normalizedValue = value.replace(/\/\*((?!\*\/).*?)\*\//g, "");

            if (normalizedValue.length === 0) {
              result.warn("Invalid value definition: " + atRule.params);
              atRule.remove();

              return;
            }

            let isOnlySpace = /^\s+$/.test(normalizedValue);

            if (!isOnlySpace) {
              value = value.trim();
            }

            // Add to the definitions, knowing that values can refer to each other
            definitions[key] = ICSSUtils.replaceValueSymbols(
              value,
              definitions
            );

            atRule.remove();
          });

          /* If we have no definitions, don't continue */
          if (!Object.keys(definitions).length) {
            return;
          }

          /* Perform replacements */
          ICSSUtils.replaceSymbols(root, definitions);

          /* We want to export anything defined by now, but don't add it to the CSS yet or it well get picked up by the replacement stuff */
          const exportDeclarations = Object.keys(definitions).map((key) =>
            postcss.decl({
              value: definitions[key],
              prop: key,
              raws: { before: "\n  " },
            })
          );

          /* Add export rules if any */
          if (exportDeclarations.length > 0) {
            const exportRule = postcss.rule({
              selector: ":export",
              raws: { after: "\n" },
            });

            exportRule.append(exportDeclarations);

            root.prepend(exportRule);
          }

          /* Add import rules */
          importAliases.reverse().forEach(({ path, imports }) => {
            const importRule = postcss.rule({
              selector: `:import(${path})`,
              raws: { after: "\n" },
            });

            imports.forEach(({ theirName, importedName }) => {
              importRule.append({
                value: theirName,
                prop: importedName,
                raws: { before: "\n  " },
              });
            });

            root.prepend(importRule);
          });
        },
      };
    },
  };
};

module.exports.postcss = true;
