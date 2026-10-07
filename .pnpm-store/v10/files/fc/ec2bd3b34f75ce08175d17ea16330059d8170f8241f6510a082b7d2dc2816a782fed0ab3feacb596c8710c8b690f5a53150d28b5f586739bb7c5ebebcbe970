const importPattern = /^:import\(("[^"]*"|'[^']*'|[^"']+)\)$/;
const balancedQuotes = /^("[^"]*"|'[^']*'|[^"']+)$/;

const getDeclsObject = (rule) => {
  const object = {};

  rule.walkDecls((decl) => {
    const before = decl.raws.before ? decl.raws.before.trim() : "";

    object[before + decl.prop] = decl.value;
  });

  return object;
};
/**
 *
 * @param {string} css
 * @param {boolean} removeRules
 * @param {'auto' | 'rule' | 'at-rule'} mode
 */
const extractICSS = (css, removeRules = true, mode = "auto") => {
  const icssImports = {};
  const icssExports = {};

  function addImports(node, path) {
    const unquoted = path.replace(/'|"/g, "");
    icssImports[unquoted] = Object.assign(
      icssImports[unquoted] || {},
      getDeclsObject(node)
    );

    if (removeRules) {
      node.remove();
    }
  }

  function addExports(node) {
    Object.assign(icssExports, getDeclsObject(node));
    if (removeRules) {
      node.remove();
    }
  }

  css.each((node) => {
    if (node.type === "rule" && mode !== "at-rule") {
      if (node.selector.slice(0, 7) === ":import") {
        const matches = importPattern.exec(node.selector);

        if (matches) {
          addImports(node, matches[1]);
        }
      }

      if (node.selector === ":export") {
        addExports(node);
      }
    }

    if (node.type === "atrule" && mode !== "rule") {
      if (node.name === "icss-import") {
        const matches = balancedQuotes.exec(node.params);

        if (matches) {
          addImports(node, matches[1]);
        }
      }
      if (node.name === "icss-export") {
        addExports(node);
      }
    }
  });

  return { icssImports, icssExports };
};

module.exports = extractICSS;
