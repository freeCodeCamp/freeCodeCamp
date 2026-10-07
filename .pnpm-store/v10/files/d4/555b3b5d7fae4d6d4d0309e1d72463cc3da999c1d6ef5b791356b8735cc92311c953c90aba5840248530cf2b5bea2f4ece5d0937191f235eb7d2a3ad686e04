"use strict";

const selectorParser = require("postcss-selector-parser");
const valueParser = require("postcss-value-parser");
const { extractICSS } = require("icss-utils");

const isSpacing = (node) => node.type === "combinator" && node.value === " ";

function normalizeNodeArray(nodes) {
  const array = [];

  nodes.forEach((x) => {
    if (Array.isArray(x)) {
      normalizeNodeArray(x).forEach((item) => {
        array.push(item);
      });
    } else if (x) {
      array.push(x);
    }
  });

  if (array.length > 0 && isSpacing(array[array.length - 1])) {
    array.pop();
  }
  return array;
}

function localizeNode(rule, mode, localAliasMap) {
  const transform = (node, context) => {
    if (context.ignoreNextSpacing && !isSpacing(node)) {
      throw new Error("Missing whitespace after " + context.ignoreNextSpacing);
    }

    if (context.enforceNoSpacing && isSpacing(node)) {
      throw new Error("Missing whitespace before " + context.enforceNoSpacing);
    }

    let newNodes;

    switch (node.type) {
      case "root": {
        let resultingGlobal;

        context.hasPureGlobals = false;

        newNodes = node.nodes.map((n) => {
          const nContext = {
            global: context.global,
            lastWasSpacing: true,
            hasLocals: false,
            explicit: false,
          };

          n = transform(n, nContext);

          if (typeof resultingGlobal === "undefined") {
            resultingGlobal = nContext.global;
          } else if (resultingGlobal !== nContext.global) {
            throw new Error(
              'Inconsistent rule global/local result in rule "' +
                node +
                '" (multiple selectors must result in the same mode for the rule)'
            );
          }

          if (!nContext.hasLocals) {
            context.hasPureGlobals = true;
          }

          return n;
        });

        context.global = resultingGlobal;

        node.nodes = normalizeNodeArray(newNodes);
        break;
      }
      case "selector": {
        newNodes = node.map((childNode) => transform(childNode, context));

        node = node.clone();
        node.nodes = normalizeNodeArray(newNodes);
        break;
      }
      case "combinator": {
        if (isSpacing(node)) {
          if (context.ignoreNextSpacing) {
            context.ignoreNextSpacing = false;
            context.lastWasSpacing = false;
            context.enforceNoSpacing = false;
            return null;
          }
          context.lastWasSpacing = true;
          return node;
        }
        break;
      }
      case "pseudo": {
        let childContext;
        const isNested = !!node.length;
        const isScoped = node.value === ":local" || node.value === ":global";
        const isImportExport =
          node.value === ":import" || node.value === ":export";

        if (isImportExport) {
          context.hasLocals = true;
          // :local(.foo)
        } else if (isNested) {
          if (isScoped) {
            if (node.nodes.length === 0) {
              throw new Error(`${node.value}() can't be empty`);
            }

            if (context.inside) {
              throw new Error(
                `A ${node.value} is not allowed inside of a ${context.inside}(...)`
              );
            }

            childContext = {
              global: node.value === ":global",
              inside: node.value,
              hasLocals: false,
              explicit: true,
            };

            newNodes = node
              .map((childNode) => transform(childNode, childContext))
              .reduce((acc, next) => acc.concat(next.nodes), []);

            if (newNodes.length) {
              const { before, after } = node.spaces;

              const first = newNodes[0];
              const last = newNodes[newNodes.length - 1];

              first.spaces = { before, after: first.spaces.after };
              last.spaces = { before: last.spaces.before, after };
            }

            node = newNodes;

            break;
          } else {
            childContext = {
              global: context.global,
              inside: context.inside,
              lastWasSpacing: true,
              hasLocals: false,
              explicit: context.explicit,
            };
            newNodes = node.map((childNode) => {
              const newContext = {
                ...childContext,
                enforceNoSpacing: false,
              };

              const result = transform(childNode, newContext);

              childContext.global = newContext.global;
              childContext.hasLocals = newContext.hasLocals;

              return result;
            });

            node = node.clone();
            node.nodes = normalizeNodeArray(newNodes);

            if (childContext.hasLocals) {
              context.hasLocals = true;
            }
          }
          break;

          //:local .foo .bar
        } else if (isScoped) {
          if (context.inside) {
            throw new Error(
              `A ${node.value} is not allowed inside of a ${context.inside}(...)`
            );
          }

          const addBackSpacing = !!node.spaces.before;

          context.ignoreNextSpacing = context.lastWasSpacing
            ? node.value
            : false;

          context.enforceNoSpacing = context.lastWasSpacing
            ? false
            : node.value;

          context.global = node.value === ":global";
          context.explicit = true;

          // because this node has spacing that is lost when we remove it
          // we make up for it by adding an extra combinator in since adding
          // spacing on the parent selector doesn't work
          return addBackSpacing
            ? selectorParser.combinator({ value: " " })
            : null;
        }
        break;
      }
      case "id":
      case "class": {
        if (!node.value) {
          throw new Error("Invalid class or id selector syntax");
        }

        if (context.global) {
          break;
        }

        const isImportedValue = localAliasMap.has(node.value);
        const isImportedWithExplicitScope = isImportedValue && context.explicit;

        if (!isImportedValue || isImportedWithExplicitScope) {
          const innerNode = node.clone();
          innerNode.spaces = { before: "", after: "" };

          node = selectorParser.pseudo({
            value: ":local",
            nodes: [innerNode],
            spaces: node.spaces,
          });

          context.hasLocals = true;
        }

        break;
      }
    }

    context.lastWasSpacing = false;
    context.ignoreNextSpacing = false;
    context.enforceNoSpacing = false;

    return node;
  };

  const rootContext = {
    global: mode === "global",
    hasPureGlobals: false,
  };

  rootContext.selector = selectorParser((root) => {
    transform(root, rootContext);
  }).processSync(rule, { updateSelector: false, lossless: true });

  return rootContext;
}

function localizeDeclNode(node, context) {
  switch (node.type) {
    case "word":
      if (context.localizeNextItem) {
        if (!context.localAliasMap.has(node.value)) {
          node.value = ":local(" + node.value + ")";
          context.localizeNextItem = false;
        }
      }
      break;

    case "function":
      if (
        context.options &&
        context.options.rewriteUrl &&
        node.value.toLowerCase() === "url"
      ) {
        node.nodes.map((nestedNode) => {
          if (nestedNode.type !== "string" && nestedNode.type !== "word") {
            return;
          }

          let newUrl = context.options.rewriteUrl(
            context.global,
            nestedNode.value
          );

          switch (nestedNode.type) {
            case "string":
              if (nestedNode.quote === "'") {
                newUrl = newUrl.replace(/(\\)/g, "\\$1").replace(/'/g, "\\'");
              }

              if (nestedNode.quote === '"') {
                newUrl = newUrl.replace(/(\\)/g, "\\$1").replace(/"/g, '\\"');
              }

              break;
            case "word":
              newUrl = newUrl.replace(/("|'|\)|\\)/g, "\\$1");
              break;
          }

          nestedNode.value = newUrl;
        });
      }
      break;
  }
  return node;
}

// `none` is special value, other is global values
const specialKeywords = [
  "none",
  "inherit",
  "initial",
  "revert",
  "revert-layer",
  "unset",
];

function localizeDeclarationValues(localize, declaration, context) {
  const valueNodes = valueParser(declaration.value);

  valueNodes.walk((node, index, nodes) => {
    if (
      node.type === "function" &&
      (node.value.toLowerCase() === "var" || node.value.toLowerCase() === "env")
    ) {
      return false;
    }

    if (
      node.type === "word" &&
      specialKeywords.includes(node.value.toLowerCase())
    ) {
      return;
    }

    const subContext = {
      options: context.options,
      global: context.global,
      localizeNextItem: localize && !context.global,
      localAliasMap: context.localAliasMap,
    };
    nodes[index] = localizeDeclNode(node, subContext);
  });

  declaration.value = valueNodes.toString();
}

function localizeDeclaration(declaration, context) {
  const isAnimation = /animation$/i.test(declaration.prop);

  if (isAnimation) {
    // letter
    // An uppercase letter or a lowercase letter.
    //
    // ident-start code point
    // A letter, a non-ASCII code point, or U+005F LOW LINE (_).
    //
    // ident code point
    // An ident-start code point, a digit, or U+002D HYPHEN-MINUS (-).

    // We don't validate `hex digits`, because we don't need it, it is work of linters.
    const validIdent =
      /^-?([a-z\u0080-\uFFFF_]|(\\[^\r\n\f])|-)((\\[^\r\n\f])|[a-z\u0080-\uFFFF_0-9-])*$/i;

    /*
    The spec defines some keywords that you can use to describe properties such as the timing
    function. These are still valid animation names, so as long as there is a property that accepts
    a keyword, it is given priority. Only when all the properties that can take a keyword are
    exhausted can the animation name be set to the keyword. I.e.

    animation: infinite infinite;

    The animation will repeat an infinite number of times from the first argument, and will have an
    animation name of infinite from the second.
    */
    const animationKeywords = {
      // animation-direction
      $normal: 1,
      $reverse: 1,
      $alternate: 1,
      "$alternate-reverse": 1,
      // animation-fill-mode
      $forwards: 1,
      $backwards: 1,
      $both: 1,
      // animation-iteration-count
      $infinite: 1,
      // animation-play-state
      $paused: 1,
      $running: 1,
      // animation-timing-function
      $ease: 1,
      "$ease-in": 1,
      "$ease-out": 1,
      "$ease-in-out": 1,
      $linear: 1,
      "$step-end": 1,
      "$step-start": 1,
      // Special
      $none: Infinity, // No matter how many times you write none, it will never be an animation name
      // Global values
      $initial: Infinity,
      $inherit: Infinity,
      $unset: Infinity,
      $revert: Infinity,
      "$revert-layer": Infinity,
    };
    let parsedAnimationKeywords = {};
    const valueNodes = valueParser(declaration.value).walk((node) => {
      // If div-token appeared (represents as comma ','), a possibility of an animation-keywords should be reflesh.
      if (node.type === "div") {
        parsedAnimationKeywords = {};

        return;
      }
      // Do not handle nested functions
      else if (node.type === "function") {
        return false;
      }
      // Ignore all except word
      else if (node.type !== "word") {
        return;
      }

      const value = node.type === "word" ? node.value.toLowerCase() : null;

      let shouldParseAnimationName = false;

      if (value && validIdent.test(value)) {
        if ("$" + value in animationKeywords) {
          parsedAnimationKeywords["$" + value] =
            "$" + value in parsedAnimationKeywords
              ? parsedAnimationKeywords["$" + value] + 1
              : 0;

          shouldParseAnimationName =
            parsedAnimationKeywords["$" + value] >=
            animationKeywords["$" + value];
        } else {
          shouldParseAnimationName = true;
        }
      }

      const subContext = {
        options: context.options,
        global: context.global,
        localizeNextItem: shouldParseAnimationName && !context.global,
        localAliasMap: context.localAliasMap,
      };

      return localizeDeclNode(node, subContext);
    });

    declaration.value = valueNodes.toString();

    return;
  }

  const isAnimationName = /animation(-name)?$/i.test(declaration.prop);

  if (isAnimationName) {
    return localizeDeclarationValues(true, declaration, context);
  }

  const hasUrl = /url\(/i.test(declaration.value);

  if (hasUrl) {
    return localizeDeclarationValues(false, declaration, context);
  }
}

module.exports = (options = {}) => {
  if (
    options &&
    options.mode &&
    options.mode !== "global" &&
    options.mode !== "local" &&
    options.mode !== "pure"
  ) {
    throw new Error(
      'options.mode must be either "global", "local" or "pure" (default "local")'
    );
  }

  const pureMode = options && options.mode === "pure";
  const globalMode = options && options.mode === "global";

  return {
    postcssPlugin: "postcss-modules-local-by-default",
    prepare() {
      const localAliasMap = new Map();

      return {
        Once(root) {
          const { icssImports } = extractICSS(root, false);

          Object.keys(icssImports).forEach((key) => {
            Object.keys(icssImports[key]).forEach((prop) => {
              localAliasMap.set(prop, icssImports[key][prop]);
            });
          });

          root.walkAtRules((atRule) => {
            if (/keyframes$/i.test(atRule.name)) {
              const globalMatch = /^\s*:global\s*\((.+)\)\s*$/.exec(
                atRule.params
              );
              const localMatch = /^\s*:local\s*\((.+)\)\s*$/.exec(
                atRule.params
              );

              let globalKeyframes = globalMode;

              if (globalMatch) {
                if (pureMode) {
                  throw atRule.error(
                    "@keyframes :global(...) is not allowed in pure mode"
                  );
                }
                atRule.params = globalMatch[1];
                globalKeyframes = true;
              } else if (localMatch) {
                atRule.params = localMatch[0];
                globalKeyframes = false;
              } else if (!globalMode) {
                if (atRule.params && !localAliasMap.has(atRule.params)) {
                  atRule.params = ":local(" + atRule.params + ")";
                }
              }

              atRule.walkDecls((declaration) => {
                localizeDeclaration(declaration, {
                  localAliasMap,
                  options: options,
                  global: globalKeyframes,
                });
              });
            } else if (atRule.nodes) {
              atRule.nodes.forEach((declaration) => {
                if (declaration.type === "decl") {
                  localizeDeclaration(declaration, {
                    localAliasMap,
                    options: options,
                    global: globalMode,
                  });
                }
              });
            }
          });

          root.walkRules((rule) => {
            if (
              rule.parent &&
              rule.parent.type === "atrule" &&
              /keyframes$/i.test(rule.parent.name)
            ) {
              // ignore keyframe rules
              return;
            }

            const context = localizeNode(rule, options.mode, localAliasMap);

            context.options = options;
            context.localAliasMap = localAliasMap;

            if (pureMode && context.hasPureGlobals) {
              throw rule.error(
                'Selector "' +
                  rule.selector +
                  '" is not pure ' +
                  "(pure selectors must contain at least one local class or id)"
              );
            }

            rule.selector = context.selector;

            // Less-syntax mixins parse as rules with no nodes
            if (rule.nodes) {
              rule.nodes.forEach((declaration) =>
                localizeDeclaration(declaration, context)
              );
            }
          });
        },
      };
    },
  };
};
module.exports.postcss = true;
