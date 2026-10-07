"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateMissingPluginMessage;
const pluginNameMap = {
  asyncDoExpressions: {
    syntax: {
      name: "@babel/plugin-syntax-async-do-expressions",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-async-do-expressions"
    }
  },
  decimal: {
    syntax: {
      name: "@babel/plugin-syntax-decimal",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-decimal"
    }
  },
  decorators: {
    syntax: {
      name: "@babel/plugin-syntax-decorators",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-decorators"
    },
    transform: {
      name: "@babel/plugin-proposal-decorators",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-decorators"
    }
  },
  doExpressions: {
    syntax: {
      name: "@babel/plugin-syntax-do-expressions",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-do-expressions"
    },
    transform: {
      name: "@babel/plugin-proposal-do-expressions",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-do-expressions"
    }
  },
  exportDefaultFrom: {
    syntax: {
      name: "@babel/plugin-syntax-export-default-from",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-export-default-from"
    },
    transform: {
      name: "@babel/plugin-proposal-export-default-from",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-export-default-from"
    }
  },
  flow: {
    syntax: {
      name: "@babel/plugin-syntax-flow",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-flow"
    },
    transform: {
      name: "@babel/preset-flow",
      url: "https://github.com/babel/babel/tree/main/packages/babel-preset-flow"
    }
  },
  functionBind: {
    syntax: {
      name: "@babel/plugin-syntax-function-bind",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-function-bind"
    },
    transform: {
      name: "@babel/plugin-proposal-function-bind",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-function-bind"
    }
  },
  functionSent: {
    syntax: {
      name: "@babel/plugin-syntax-function-sent",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-function-sent"
    },
    transform: {
      name: "@babel/plugin-proposal-function-sent",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-function-sent"
    }
  },
  jsx: {
    syntax: {
      name: "@babel/plugin-syntax-jsx",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx"
    },
    transform: {
      name: "@babel/preset-react",
      url: "https://github.com/babel/babel/tree/main/packages/babel-preset-react"
    }
  },
  importAttributes: {
    syntax: {
      name: "@babel/plugin-syntax-import-attributes",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-import-attributes"
    }
  },
  pipelineOperator: {
    syntax: {
      name: "@babel/plugin-syntax-pipeline-operator",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-pipeline-operator"
    },
    transform: {
      name: "@babel/plugin-proposal-pipeline-operator",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-pipeline-operator"
    }
  },
  recordAndTuple: {
    syntax: {
      name: "@babel/plugin-syntax-record-and-tuple",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-record-and-tuple"
    }
  },
  throwExpressions: {
    syntax: {
      name: "@babel/plugin-syntax-throw-expressions",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-throw-expressions"
    },
    transform: {
      name: "@babel/plugin-proposal-throw-expressions",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-throw-expressions"
    }
  },
  typescript: {
    syntax: {
      name: "@babel/plugin-syntax-typescript",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-typescript"
    },
    transform: {
      name: "@babel/preset-typescript",
      url: "https://github.com/babel/babel/tree/main/packages/babel-preset-typescript"
    }
  }
};
{
  Object.assign(pluginNameMap, {
    asyncGenerators: {
      syntax: {
        name: "@babel/plugin-syntax-async-generators",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-async-generators"
      },
      transform: {
        name: "@babel/plugin-transform-async-generator-functions",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-async-generator-functions"
      }
    },
    classProperties: {
      syntax: {
        name: "@babel/plugin-syntax-class-properties",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties"
      },
      transform: {
        name: "@babel/plugin-transform-class-properties",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-class-properties"
      }
    },
    classPrivateProperties: {
      syntax: {
        name: "@babel/plugin-syntax-class-properties",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties"
      },
      transform: {
        name: "@babel/plugin-transform-class-properties",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-class-properties"
      }
    },
    classPrivateMethods: {
      syntax: {
        name: "@babel/plugin-syntax-class-properties",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties"
      },
      transform: {
        name: "@babel/plugin-transform-private-methods",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-private-methods"
      }
    },
    classStaticBlock: {
      syntax: {
        name: "@babel/plugin-syntax-class-static-block",
        url: "https://github.com/babel/babel/tree/HEAD/packages/babel-plugin-syntax-class-static-block"
      },
      transform: {
        name: "@babel/plugin-transform-class-static-block",
        url: "https://github.com/babel/babel/tree/HEAD/packages/babel-plugin-transform-class-static-block"
      }
    },
    dynamicImport: {
      syntax: {
        name: "@babel/plugin-syntax-dynamic-import",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-dynamic-import"
      }
    },
    exportNamespaceFrom: {
      syntax: {
        name: "@babel/plugin-syntax-export-namespace-from",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-export-namespace-from"
      },
      transform: {
        name: "@babel/plugin-transform-export-namespace-from",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-export-namespace-from"
      }
    },
    importAssertions: {
      syntax: {
        name: "@babel/plugin-syntax-import-assertions",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-import-assertions"
      }
    },
    importMeta: {
      syntax: {
        name: "@babel/plugin-syntax-import-meta",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-import-meta"
      }
    },
    logicalAssignment: {
      syntax: {
        name: "@babel/plugin-syntax-logical-assignment-operators",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-logical-assignment-operators"
      },
      transform: {
        name: "@babel/plugin-transform-logical-assignment-operators",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-logical-assignment-operators"
      }
    },
    moduleStringNames: {
      syntax: {
        name: "@babel/plugin-syntax-module-string-names",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-module-string-names"
      }
    },
    numericSeparator: {
      syntax: {
        name: "@babel/plugin-syntax-numeric-separator",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-numeric-separator"
      },
      transform: {
        name: "@babel/plugin-transform-numeric-separator",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-numeric-separator"
      }
    },
    nullishCoalescingOperator: {
      syntax: {
        name: "@babel/plugin-syntax-nullish-coalescing-operator",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-nullish-coalescing-operator"
      },
      transform: {
        name: "@babel/plugin-transform-nullish-coalescing-operator",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-nullish-coalescing-opearator"
      }
    },
    objectRestSpread: {
      syntax: {
        name: "@babel/plugin-syntax-object-rest-spread",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-object-rest-spread"
      },
      transform: {
        name: "@babel/plugin-transform-object-rest-spread",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-object-rest-spread"
      }
    },
    optionalCatchBinding: {
      syntax: {
        name: "@babel/plugin-syntax-optional-catch-binding",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-optional-catch-binding"
      },
      transform: {
        name: "@babel/plugin-transform-optional-catch-binding",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-optional-catch-binding"
      }
    },
    optionalChaining: {
      syntax: {
        name: "@babel/plugin-syntax-optional-chaining",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-optional-chaining"
      },
      transform: {
        name: "@babel/plugin-transform-optional-chaining",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-optional-chaining"
      }
    },
    privateIn: {
      syntax: {
        name: "@babel/plugin-syntax-private-property-in-object",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-private-property-in-object"
      },
      transform: {
        name: "@babel/plugin-transform-private-property-in-object",
        url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-private-property-in-object"
      }
    },
    regexpUnicodeSets: {
      syntax: {
        name: "@babel/plugin-syntax-unicode-sets-regex",
        url: "https://github.com/babel/babel/blob/main/packages/babel-plugin-syntax-unicode-sets-regex/README.md"
      },
      transform: {
        name: "@babel/plugin-transform-unicode-sets-regex",
        url: "https://github.com/babel/babel/blob/main/packages/babel-plugin-proposalunicode-sets-regex/README.md"
      }
    }
  });
}
const getNameURLCombination = ({
  name,
  url
}) => `${name} (${url})`;
function generateMissingPluginMessage(missingPluginName, loc, codeFrame) {
  let helpMessage = `Support for the experimental syntax '${missingPluginName}' isn't currently enabled ` + `(${loc.line}:${loc.column + 1}):\n\n` + codeFrame;
  const pluginInfo = pluginNameMap[missingPluginName];
  if (pluginInfo) {
    const {
      syntax: syntaxPlugin,
      transform: transformPlugin
    } = pluginInfo;
    if (syntaxPlugin) {
      const syntaxPluginInfo = getNameURLCombination(syntaxPlugin);
      if (transformPlugin) {
        const transformPluginInfo = getNameURLCombination(transformPlugin);
        const sectionType = transformPlugin.name.startsWith("@babel/plugin") ? "plugins" : "presets";
        helpMessage += `\n\nAdd ${transformPluginInfo} to the '${sectionType}' section of your Babel config to enable transformation.
If you want to leave it as-is, add ${syntaxPluginInfo} to the 'plugins' section to enable parsing.`;
      } else {
        helpMessage += `\n\nAdd ${syntaxPluginInfo} to the 'plugins' section of your Babel config ` + `to enable parsing.`;
      }
    }
  }
  return helpMessage;
}
0 && 0;

//# sourceMappingURL=missing-plugin-helper.js.map
