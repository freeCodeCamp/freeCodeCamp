"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPlugin;
var _pluginSyntaxJsx = require("@babel/plugin-syntax-jsx");
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _core = require("@babel/core");
var _helperModuleImports = require("@babel/helper-module-imports");
var _helperAnnotateAsPure = require("@babel/helper-annotate-as-pure");
const DEFAULT = {
  importSource: "react",
  runtime: "automatic",
  pragma: "React.createElement",
  pragmaFrag: "React.Fragment"
};
const JSX_SOURCE_ANNOTATION_REGEX = /^\s*(?:\*\s*)?@jsxImportSource\s+(\S+)\s*$/m;
const JSX_RUNTIME_ANNOTATION_REGEX = /^\s*(?:\*\s*)?@jsxRuntime\s+(\S+)\s*$/m;
const JSX_ANNOTATION_REGEX = /^\s*(?:\*\s*)?@jsx\s+(\S+)\s*$/m;
const JSX_FRAG_ANNOTATION_REGEX = /^\s*(?:\*\s*)?@jsxFrag\s+(\S+)\s*$/m;
const get = (pass, name) => pass.get(`@babel/plugin-react-jsx/${name}`);
const set = (pass, name, v) => pass.set(`@babel/plugin-react-jsx/${name}`, v);
function hasProto(node) {
  return node.properties.some(value => _core.types.isObjectProperty(value, {
    computed: false,
    shorthand: false
  }) && (_core.types.isIdentifier(value.key, {
    name: "__proto__"
  }) || _core.types.isStringLiteral(value.key, {
    value: "__proto__"
  })));
}
function createPlugin({
  name,
  development
}) {
  return (0, _helperPluginUtils.declare)((_, options) => {
    const {
      pure: PURE_ANNOTATION,
      throwIfNamespace = true,
      filter,
      runtime: RUNTIME_DEFAULT = development ? "automatic" : "classic",
      importSource: IMPORT_SOURCE_DEFAULT = DEFAULT.importSource,
      pragma: PRAGMA_DEFAULT = DEFAULT.pragma,
      pragmaFrag: PRAGMA_FRAG_DEFAULT = DEFAULT.pragmaFrag
    } = options;
    var {
      useSpread = false,
      useBuiltIns = false
    } = options;
    if (RUNTIME_DEFAULT === "classic") {
      if (typeof useSpread !== "boolean") {
        throw new Error("transform-react-jsx currently only accepts a boolean option for " + "useSpread (defaults to false)");
      }
      if (typeof useBuiltIns !== "boolean") {
        throw new Error("transform-react-jsx currently only accepts a boolean option for " + "useBuiltIns (defaults to false)");
      }
      if (useSpread && useBuiltIns) {
        throw new Error("transform-react-jsx currently only accepts useBuiltIns or useSpread " + "but not both");
      }
    }
    let commentsNode = null;
    return {
      name,
      inherits: _pluginSyntaxJsx.default,
      visitor: {
        JSXNamespacedName(path) {
          if (throwIfNamespace) {
            throw path.buildCodeFrameError(`Namespace tags are not supported by default. React's JSX doesn't support namespace tags. \
You can set \`throwIfNamespace: false\` to bypass this warning.`);
          }
        },
        JSXSpreadChild(path) {
          throw path.buildCodeFrameError("Spread children are not supported in React.");
        },
        Program: {
          enter(path, state) {
            const {
              file
            } = state;
            let runtime = RUNTIME_DEFAULT;
            let source = IMPORT_SOURCE_DEFAULT;
            let pragma = PRAGMA_DEFAULT;
            let pragmaFrag = PRAGMA_FRAG_DEFAULT;
            let sourceSet = !!options.importSource;
            let pragmaSet = !!options.pragma;
            let pragmaFragSet = !!options.pragmaFrag;
            if (file.ast.comments) {
              for (const comment of file.ast.comments) {
                const sourceMatches = JSX_SOURCE_ANNOTATION_REGEX.exec(comment.value);
                if (sourceMatches) {
                  source = sourceMatches[1];
                  sourceSet = true;
                }
                const runtimeMatches = JSX_RUNTIME_ANNOTATION_REGEX.exec(comment.value);
                if (runtimeMatches) {
                  runtime = runtimeMatches[1];
                }
                const jsxMatches = JSX_ANNOTATION_REGEX.exec(comment.value);
                if (jsxMatches) {
                  pragma = jsxMatches[1];
                  pragmaSet = true;
                }
                const jsxFragMatches = JSX_FRAG_ANNOTATION_REGEX.exec(comment.value);
                if (jsxFragMatches) {
                  pragmaFrag = jsxFragMatches[1];
                  pragmaFragSet = true;
                }
              }
            }
            set(state, "runtime", runtime);
            if (runtime === "classic") {
              if (sourceSet) {
                throw path.buildCodeFrameError(`importSource cannot be set when runtime is classic.`);
              }
              const createElement = toMemberExpression(pragma);
              const fragment = toMemberExpression(pragmaFrag);
              set(state, "id/createElement", () => _core.types.cloneNode(createElement));
              set(state, "id/fragment", () => _core.types.cloneNode(fragment));
              set(state, "defaultPure", pragma === DEFAULT.pragma);
            } else if (runtime === "automatic") {
              if (pragmaSet || pragmaFragSet) {
                throw path.buildCodeFrameError(`pragma and pragmaFrag cannot be set when runtime is automatic.`);
              }
              const define = (name, id) => set(state, name, createImportLazily(state, path, id, source));
              define("id/jsx", development ? "jsxDEV" : "jsx");
              define("id/jsxs", development ? "jsxDEV" : "jsxs");
              define("id/createElement", "createElement");
              define("id/fragment", "Fragment");
              set(state, "defaultPure", source === DEFAULT.importSource);
            } else {
              throw path.buildCodeFrameError(`Runtime must be either "classic" or "automatic".`);
            }
            if (development) {
              function isDerivedClass(classNode) {
                return classNode.superClass !== null;
              }
              function isThisAllowed(parents) {
                let i = parents.length - 1;
                do {
                  const {
                    node
                  } = parents[i];
                  if (_core.types.isFunctionParent(node) && !_core.types.isArrowFunctionExpression(node)) {
                    if (!_core.types.isMethod(node)) {
                      return true;
                    }
                    if (node.kind !== "constructor") {
                      return true;
                    }
                    return !isDerivedClass(parents[i - 2].node);
                  }
                  if (_core.types.isTSModuleBlock(node)) {
                    return false;
                  }
                } while (i-- > 0);
                return true;
              }
              let fileNameIdentifier;
              function makeSource(node) {
                const location = node.loc;
                if (!location) {
                  return path.scope.buildUndefinedNode();
                }
                if (!fileNameIdentifier) {
                  fileNameIdentifier = path.scope.generateUidIdentifier("_jsxFileName");
                }
                return makeTrace(_core.types.cloneNode(fileNameIdentifier), location.start.line, location.start.column);
              }
              function makeTrace(fileNameIdentifier, lineNumber, column0Based) {
                const fileLineLiteral = lineNumber != null ? _core.types.numericLiteral(lineNumber) : _core.types.nullLiteral();
                const fileColumnLiteral = column0Based != null ? _core.types.numericLiteral(column0Based + 1) : _core.types.nullLiteral();
                return _core.template.expression.ast`{
                    fileName: ${fileNameIdentifier},
                    lineNumber: ${fileLineLiteral},
                    columnNumber: ${fileColumnLiteral},
                  }`;
              }
              _core.types.traverse(path.node, {
                enter(node, parents) {
                  if (!_core.types.isJSXOpeningElement(node)) {
                    return;
                  }
                  const attributes = node.attributes;
                  if (isThisAllowed(parents)) {
                    attributes.push(_core.types.jsxAttribute(_core.types.jsxIdentifier("__self"), _core.types.jsxExpressionContainer(_core.types.thisExpression())));
                  }
                  attributes.push(_core.types.jsxAttribute(_core.types.jsxIdentifier("__source"), _core.types.jsxExpressionContainer(makeSource(node))));
                }
              });
              if (fileNameIdentifier) {
                const {
                  filename = ""
                } = state;
                path.scope.push({
                  id: fileNameIdentifier,
                  init: _core.types.stringLiteral(filename)
                });
              }
            }
          }
        },
        JSXFragment: {
          exit(path, file) {
            let callExpr;
            if (get(file, "runtime") === "classic") {
              callExpr = buildCreateElementFragmentCall(path, file);
            } else {
              callExpr = buildJSXFragmentCall(path, file);
            }
            path.replaceWith(_core.types.inherits(callExpr, path.node));
          }
        },
        JSXElement: {
          exit(path, file) {
            let callExpr;
            if (get(file, "runtime") === "classic" || shouldUseCreateElement(path)) {
              callExpr = buildCreateElementCall(path, file);
            } else {
              callExpr = buildJSXElementCall(path, file);
            }
            path.replaceWith(_core.types.inherits(callExpr, path.node));
          }
        },
        JSXAttribute(path) {
          if (_core.types.isJSXElement(path.node.value)) {
            path.node.value = _core.types.jsxExpressionContainer(path.node.value);
          }
        }
      }
    };
    function call(pass, name, args) {
      const node = _core.types.callExpression(get(pass, `id/${name}`)(), args);
      if (PURE_ANNOTATION != null ? PURE_ANNOTATION : get(pass, "defaultPure")) (0, _helperAnnotateAsPure.default)(node);
      return node;
    }
    function shouldUseCreateElement(path) {
      const openingPath = path.get("openingElement");
      const attributes = openingPath.node.attributes;
      let seenPropsSpread = false;
      for (let i = 0; i < attributes.length; i++) {
        const attr = attributes[i];
        if (seenPropsSpread && _core.types.isJSXAttribute(attr) && attr.name.name === "key") {
          return true;
        } else if (_core.types.isJSXSpreadAttribute(attr)) {
          seenPropsSpread = true;
        }
      }
      return false;
    }
    function convertJSXIdentifier(node, parent) {
      if (_core.types.isJSXIdentifier(node)) {
        if (node.name === "this" && _core.types.isReferenced(node, parent)) {
          return _core.types.thisExpression();
        } else if (_core.types.isValidIdentifier(node.name, false)) {
          node.type = "Identifier";
          return node;
        } else {
          return _core.types.stringLiteral(node.name);
        }
      } else if (_core.types.isJSXMemberExpression(node)) {
        return _core.types.memberExpression(convertJSXIdentifier(node.object, node), convertJSXIdentifier(node.property, node));
      } else if (_core.types.isJSXNamespacedName(node)) {
        return _core.types.stringLiteral(`${node.namespace.name}:${node.name.name}`);
      }
      return node;
    }
    function convertAttributeValue(node) {
      if (_core.types.isJSXExpressionContainer(node)) {
        return node.expression;
      } else {
        return node;
      }
    }
    function processComments(attribs) {
      commentsNode = null;
      if (attribs.length && attribs[0].isJSXSpreadAttribute()) {
        const node = attribs[0].node.argument;
        if (node.leadingComments || node.trailingComments) {
          commentsNode = _core.types.cloneNode(node);
        }
      }
    }
    function accumulateAttribute(array, attribute) {
      if (_core.types.isJSXSpreadAttribute(attribute.node)) {
        const arg = attribute.node.argument;
        if (_core.types.isObjectExpression(arg) && !hasProto(arg)) {
          array.push(...arg.properties);
        } else {
          array.push(_core.types.spreadElement(arg));
        }
        return array;
      }
      const value = convertAttributeValue(attribute.node.name.name !== "key" ? attribute.node.value || _core.types.booleanLiteral(true) : attribute.node.value);
      if (attribute.node.name.name === "key" && value === null) {
        throw attribute.buildCodeFrameError('Please provide an explicit key value. Using "key" as a shorthand for "key={true}" is not allowed.');
      }
      if (_core.types.isStringLiteral(value) && !_core.types.isJSXExpressionContainer(attribute.node.value)) {
        var _value$extra;
        value.value = value.value.replace(/\n\s+/g, " ");
        (_value$extra = value.extra) == null || delete _value$extra.raw;
      }
      if (_core.types.isJSXNamespacedName(attribute.node.name)) {
        attribute.node.name = _core.types.stringLiteral(attribute.node.name.namespace.name + ":" + attribute.node.name.name.name);
      } else if (_core.types.isValidIdentifier(attribute.node.name.name, false)) {
        attribute.node.name.type = "Identifier";
      } else {
        attribute.node.name = _core.types.stringLiteral(attribute.node.name.name);
      }
      array.push(_core.types.inherits(_core.types.objectProperty(attribute.node.name, value), attribute.node));
      return array;
    }
    function buildChildrenProperty(children) {
      let childrenNode;
      if (children.length === 1) {
        childrenNode = children[0];
      } else if (children.length > 1) {
        childrenNode = _core.types.arrayExpression(children);
      } else {
        return undefined;
      }
      return _core.types.objectProperty(_core.types.identifier("children"), childrenNode);
    }
    function buildJSXElementCall(path, file) {
      const openingPath = path.get("openingElement");
      const args = [getTag(openingPath)];
      const attribsArray = [];
      const extracted = Object.create(null);
      for (const attr of openingPath.get("attributes")) {
        if (attr.isJSXAttribute() && _core.types.isJSXIdentifier(attr.node.name)) {
          const {
            name
          } = attr.node.name;
          switch (name) {
            case "__source":
            case "__self":
              if (extracted[name]) throw sourceSelfError(path, name);
            case "key":
              {
                const keyValue = convertAttributeValue(attr.node.value);
                if (keyValue === null) {
                  throw attr.buildCodeFrameError('Please provide an explicit key value. Using "key" as a shorthand for "key={true}" is not allowed.');
                }
                extracted[name] = keyValue;
                break;
              }
            default:
              attribsArray.push(attr);
          }
        } else {
          attribsArray.push(attr);
        }
      }
      const children = _core.types.react.buildChildren(path.node);
      let attribs;
      if (attribsArray.length || children.length) {
        attribs = buildJSXOpeningElementAttributes(attribsArray, children);
        if (commentsNode) {
          _core.types.inheritsComments(attribs, commentsNode);
        }
      } else {
        attribs = _core.types.objectExpression([]);
      }
      args.push(attribs);
      if (development) {
        var _extracted$key;
        args.push((_extracted$key = extracted.key) != null ? _extracted$key : path.scope.buildUndefinedNode(), _core.types.booleanLiteral(children.length > 1));
        if (extracted.__source) {
          args.push(extracted.__source);
          if (extracted.__self) args.push(extracted.__self);
        } else if (extracted.__self) {
          args.push(path.scope.buildUndefinedNode(), extracted.__self);
        }
      } else if (extracted.key !== undefined) {
        args.push(extracted.key);
      }
      return call(file, children.length > 1 ? "jsxs" : "jsx", args);
    }
    function buildJSXOpeningElementAttributes(attribs, children) {
      processComments(attribs);
      const props = attribs.reduce(accumulateAttribute, []);
      if ((children == null ? void 0 : children.length) > 0) {
        props.push(buildChildrenProperty(children));
      }
      return _core.types.objectExpression(props);
    }
    function buildJSXFragmentCall(path, file) {
      const args = [get(file, "id/fragment")()];
      const children = _core.types.react.buildChildren(path.node);
      args.push(_core.types.objectExpression(children.length > 0 ? [buildChildrenProperty(children)] : []));
      if (development) {
        args.push(path.scope.buildUndefinedNode(), _core.types.booleanLiteral(children.length > 1));
      }
      return call(file, children.length > 1 ? "jsxs" : "jsx", args);
    }
    function buildCreateElementFragmentCall(path, file) {
      if (filter && !filter(path.node, file)) return;
      return call(file, "createElement", [get(file, "id/fragment")(), _core.types.nullLiteral(), ..._core.types.react.buildChildren(path.node)]);
    }
    function buildCreateElementCall(path, file) {
      const openingPath = path.get("openingElement");
      return call(file, "createElement", [getTag(openingPath), buildCreateElementOpeningElementAttributes(file, path, openingPath.get("attributes")), ..._core.types.react.buildChildren(path.node)]);
    }
    function getTag(openingPath) {
      const tagExpr = convertJSXIdentifier(openingPath.node.name, openingPath.node);
      let tagName;
      if (_core.types.isIdentifier(tagExpr)) {
        tagName = tagExpr.name;
      } else if (_core.types.isStringLiteral(tagExpr)) {
        tagName = tagExpr.value;
      }
      if (_core.types.react.isCompatTag(tagName)) {
        return _core.types.stringLiteral(tagName);
      } else {
        return tagExpr;
      }
    }
    function buildCreateElementOpeningElementAttributes(file, path, attribs) {
      const runtime = get(file, "runtime");
      if (runtime !== "automatic") {
        const objs = [];
        processComments(attribs);
        const props = attribs.reduce(accumulateAttribute, []);
        if (!useSpread) {
          let start = 0;
          props.forEach((prop, i) => {
            if (_core.types.isSpreadElement(prop)) {
              if (i > start) {
                objs.push(_core.types.objectExpression(props.slice(start, i)));
              }
              objs.push(prop.argument);
              start = i + 1;
            }
          });
          if (props.length > start) {
            objs.push(_core.types.objectExpression(props.slice(start)));
          }
        } else if (props.length) {
          objs.push(_core.types.objectExpression(props));
        }
        if (!objs.length) {
          return _core.types.nullLiteral();
        }
        if (commentsNode) {
          _core.types.inheritsComments(objs[0], commentsNode);
        }
        if (objs.length === 1) {
          if (!(_core.types.isSpreadElement(props[0]) && _core.types.isObjectExpression(props[0].argument))) {
            return objs[0];
          }
        }
        if (!_core.types.isObjectExpression(objs[0])) {
          objs.unshift(_core.types.objectExpression([]));
        }
        const helper = useBuiltIns ? _core.types.memberExpression(_core.types.identifier("Object"), _core.types.identifier("assign")) : file.addHelper("extends");
        return _core.types.callExpression(helper, objs);
      }
      const props = [];
      const found = Object.create(null);
      processComments(attribs);
      for (const attr of attribs) {
        const {
          node
        } = attr;
        const name = _core.types.isJSXAttribute(node) && _core.types.isJSXIdentifier(node.name) && node.name.name;
        if (runtime === "automatic" && (name === "__source" || name === "__self")) {
          if (found[name]) throw sourceSelfError(path, name);
          found[name] = true;
        }
        accumulateAttribute(props, attr);
      }
      const ret = props.length === 1 && _core.types.isSpreadElement(props[0]) && !_core.types.isObjectExpression(props[0].argument) ? props[0].argument : props.length > 0 ? _core.types.objectExpression(props) : _core.types.nullLiteral();
      if (commentsNode) {
        _core.types.inheritsComments(ret, commentsNode);
      }
      return ret;
    }
  });
  function getSource(source, importName) {
    switch (importName) {
      case "Fragment":
        return `${source}/${development ? "jsx-dev-runtime" : "jsx-runtime"}`;
      case "jsxDEV":
        return `${source}/jsx-dev-runtime`;
      case "jsx":
      case "jsxs":
        return `${source}/jsx-runtime`;
      case "createElement":
        return source;
    }
  }
  function createImportLazily(pass, path, importName, source) {
    return () => {
      const actualSource = getSource(source, importName);
      if ((0, _helperModuleImports.isModule)(path)) {
        let reference = get(pass, `imports/${importName}`);
        if (reference) return _core.types.cloneNode(reference);
        reference = (0, _helperModuleImports.addNamed)(path, importName, actualSource, {
          importedInterop: "uncompiled",
          importPosition: "after"
        });
        set(pass, `imports/${importName}`, reference);
        return reference;
      } else {
        let reference = get(pass, `requires/${actualSource}`);
        if (reference) {
          reference = _core.types.cloneNode(reference);
        } else {
          reference = (0, _helperModuleImports.addNamespace)(path, actualSource, {
            importedInterop: "uncompiled"
          });
          set(pass, `requires/${actualSource}`, reference);
        }
        return _core.types.memberExpression(reference, _core.types.identifier(importName));
      }
    };
  }
}
function toMemberExpression(id) {
  return id.split(".").map(name => _core.types.identifier(name)).reduce((object, property) => _core.types.memberExpression(object, property));
}
function sourceSelfError(path, name) {
  const pluginName = `transform-react-jsx-${name.slice(2)}`;
  return path.buildCodeFrameError(`Duplicate ${name} prop found. You are most likely using the deprecated ${pluginName} Babel plugin. Both __source and __self are automatically set when using the automatic runtime. Please remove transform-react-jsx-source and transform-react-jsx-self from your Babel config.`);
}

//# sourceMappingURL=create-plugin.js.map
