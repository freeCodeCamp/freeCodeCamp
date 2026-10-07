'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helperPluginUtils = require('@babel/helper-plugin-utils');
var core = require('@babel/core');
var pluginTransformParameters = require('@babel/plugin-transform-parameters');
var helperCompilationTargets = require('@babel/helper-compilation-targets');
var compatData = require('@babel/compat-data/corejs2-built-ins');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var compatData__default = /*#__PURE__*/_interopDefault(compatData);

const {
  isObjectProperty: isObjectProperty$1,
  isArrayPattern,
  isObjectPattern,
  isAssignmentPattern: isAssignmentPattern$1,
  isRestElement,
  isIdentifier
} = core.types;
function shouldStoreRHSInTemporaryVariable(node) {
  if (isArrayPattern(node)) {
    const nonNullElements = node.elements.filter(element => element !== null);
    if (nonNullElements.length > 1) return true;else return shouldStoreRHSInTemporaryVariable(nonNullElements[0]);
  } else if (isObjectPattern(node)) {
    const {
      properties
    } = node;
    if (properties.length > 1) return true;else if (properties.length === 0) return false;else {
      const firstProperty = properties[0];
      if (isObjectProperty$1(firstProperty)) {
        return shouldStoreRHSInTemporaryVariable(firstProperty.value);
      } else {
        return shouldStoreRHSInTemporaryVariable(firstProperty);
      }
    }
  } else if (isAssignmentPattern$1(node)) {
    return shouldStoreRHSInTemporaryVariable(node.left);
  } else if (isRestElement(node)) {
    if (isIdentifier(node.argument)) return true;
    return shouldStoreRHSInTemporaryVariable(node.argument);
  } else {
    return false;
  }
}

const {
  isAssignmentPattern,
  isObjectProperty
} = core.types;
{
  const node = core.types.identifier("a");
  const property = core.types.objectProperty(core.types.identifier("key"), node);
  const pattern = core.types.objectPattern([property]);
  var ZERO_REFS = core.types.isReferenced(node, property, pattern) ? 1 : 0;
}
var index = helperPluginUtils.declare((api, opts) => {
  var _api$assumption, _api$assumption2, _api$assumption3, _api$assumption4;
  api.assertVersion(7);
  const targets = api.targets();
  const supportsObjectAssign = !helperCompilationTargets.isRequired("es6.object.assign", targets, {
    compatData: compatData__default.default
  });
  const {
    useBuiltIns = supportsObjectAssign,
    loose = false
  } = opts;
  if (typeof loose !== "boolean") {
    throw new Error(".loose must be a boolean, or undefined");
  }
  const ignoreFunctionLength = (_api$assumption = api.assumption("ignoreFunctionLength")) != null ? _api$assumption : loose;
  const objectRestNoSymbols = (_api$assumption2 = api.assumption("objectRestNoSymbols")) != null ? _api$assumption2 : loose;
  const pureGetters = (_api$assumption3 = api.assumption("pureGetters")) != null ? _api$assumption3 : loose;
  const setSpreadProperties = (_api$assumption4 = api.assumption("setSpreadProperties")) != null ? _api$assumption4 : loose;
  function getExtendsHelper(file) {
    return useBuiltIns ? core.types.memberExpression(core.types.identifier("Object"), core.types.identifier("assign")) : file.addHelper("extends");
  }
  function hasRestElement(path) {
    let foundRestElement = false;
    visitRestElements(path, restElement => {
      foundRestElement = true;
      restElement.stop();
    });
    return foundRestElement;
  }
  function hasObjectPatternRestElement(path) {
    let foundRestElement = false;
    visitRestElements(path, restElement => {
      if (restElement.parentPath.isObjectPattern()) {
        foundRestElement = true;
        restElement.stop();
      }
    });
    return foundRestElement;
  }
  function visitRestElements(path, visitor) {
    path.traverse({
      Expression(path) {
        const {
          parent,
          key
        } = path;
        if (isAssignmentPattern(parent) && key === "right" || isObjectProperty(parent) && parent.computed && key === "key") {
          path.skip();
        }
      },
      RestElement: visitor
    });
  }
  function hasSpread(node) {
    for (const prop of node.properties) {
      if (core.types.isSpreadElement(prop)) {
        return true;
      }
    }
    return false;
  }
  function extractNormalizedKeys(node) {
    const props = node.properties;
    const keys = [];
    let allLiteral = true;
    let hasTemplateLiteral = false;
    for (const prop of props) {
      if (core.types.isIdentifier(prop.key) && !prop.computed) {
        keys.push(core.types.stringLiteral(prop.key.name));
      } else if (core.types.isTemplateLiteral(prop.key)) {
        keys.push(core.types.cloneNode(prop.key));
        hasTemplateLiteral = true;
      } else if (core.types.isLiteral(prop.key)) {
        keys.push(core.types.stringLiteral(String(prop.key.value)));
      } else {
        keys.push(core.types.cloneNode(prop.key));
        allLiteral = false;
      }
    }
    return {
      keys,
      allLiteral,
      hasTemplateLiteral
    };
  }
  function replaceImpureComputedKeys(properties, scope) {
    const impureComputedPropertyDeclarators = [];
    for (const propPath of properties) {
      const key = propPath.get("key");
      if (propPath.node.computed && !key.isPure()) {
        const name = scope.generateUidBasedOnNode(key.node);
        const declarator = core.types.variableDeclarator(core.types.identifier(name), key.node);
        impureComputedPropertyDeclarators.push(declarator);
        key.replaceWith(core.types.identifier(name));
      }
    }
    return impureComputedPropertyDeclarators;
  }
  function removeUnusedExcludedKeys(path) {
    const bindings = path.getOuterBindingIdentifierPaths();
    Object.keys(bindings).forEach(bindingName => {
      const bindingParentPath = bindings[bindingName].parentPath;
      if (path.scope.getBinding(bindingName).references > ZERO_REFS || !bindingParentPath.isObjectProperty()) {
        return;
      }
      bindingParentPath.remove();
    });
  }
  function createObjectRest(path, file, objRef) {
    const props = path.get("properties");
    const last = props[props.length - 1];
    core.types.assertRestElement(last.node);
    const restElement = core.types.cloneNode(last.node);
    last.remove();
    const impureComputedPropertyDeclarators = replaceImpureComputedKeys(path.get("properties"), path.scope);
    const {
      keys,
      allLiteral,
      hasTemplateLiteral
    } = extractNormalizedKeys(path.node);
    if (keys.length === 0) {
      return [impureComputedPropertyDeclarators, restElement.argument, core.types.callExpression(getExtendsHelper(file), [core.types.objectExpression([]), core.types.sequenceExpression([core.types.callExpression(file.addHelper("objectDestructuringEmpty"), [core.types.cloneNode(objRef)]), core.types.cloneNode(objRef)])])];
    }
    let keyExpression;
    if (!allLiteral) {
      keyExpression = core.types.callExpression(core.types.memberExpression(core.types.arrayExpression(keys), core.types.identifier("map")), [file.addHelper("toPropertyKey")]);
    } else {
      keyExpression = core.types.arrayExpression(keys);
      if (!hasTemplateLiteral && !core.types.isProgram(path.scope.block)) {
        const program = path.findParent(path => path.isProgram());
        const id = path.scope.generateUidIdentifier("excluded");
        program.scope.push({
          id,
          init: keyExpression,
          kind: "const"
        });
        keyExpression = core.types.cloneNode(id);
      }
    }
    return [impureComputedPropertyDeclarators, restElement.argument, core.types.callExpression(file.addHelper(`objectWithoutProperties${objectRestNoSymbols ? "Loose" : ""}`), [core.types.cloneNode(objRef), keyExpression])];
  }
  function replaceRestElement(parentPath, paramPath, container) {
    if (paramPath.isAssignmentPattern()) {
      replaceRestElement(parentPath, paramPath.get("left"), container);
      return;
    }
    if (paramPath.isArrayPattern() && hasRestElement(paramPath)) {
      const elements = paramPath.get("elements");
      for (let i = 0; i < elements.length; i++) {
        replaceRestElement(parentPath, elements[i], container);
      }
    }
    if (paramPath.isObjectPattern() && hasRestElement(paramPath)) {
      const uid = parentPath.scope.generateUidIdentifier("ref");
      const declar = core.types.variableDeclaration("let", [core.types.variableDeclarator(paramPath.node, uid)]);
      if (container) {
        container.push(declar);
      } else {
        parentPath.ensureBlock();
        parentPath.get("body").unshiftContainer("body", declar);
      }
      paramPath.replaceWith(core.types.cloneNode(uid));
    }
  }
  return {
    name: "transform-object-rest-spread",
    inherits: require("@babel/plugin-syntax-object-rest-spread").default,
    visitor: {
      Function(path) {
        const params = path.get("params");
        const paramsWithRestElement = new Set();
        const idsInRestParams = new Set();
        for (let i = 0; i < params.length; ++i) {
          const param = params[i];
          if (hasRestElement(param)) {
            paramsWithRestElement.add(i);
            for (const name of Object.keys(param.getBindingIdentifiers())) {
              idsInRestParams.add(name);
            }
          }
        }
        let idInRest = false;
        const IdentifierHandler = function (path, functionScope) {
          const name = path.node.name;
          if (path.scope.getBinding(name) === functionScope.getBinding(name) && idsInRestParams.has(name)) {
            idInRest = true;
            path.stop();
          }
        };
        let i;
        for (i = 0; i < params.length && !idInRest; ++i) {
          const param = params[i];
          if (!paramsWithRestElement.has(i)) {
            if (param.isReferencedIdentifier() || param.isBindingIdentifier()) {
              IdentifierHandler(param, path.scope);
            } else {
              param.traverse({
                "Scope|TypeAnnotation|TSTypeAnnotation": path => path.skip(),
                "ReferencedIdentifier|BindingIdentifier": IdentifierHandler
              }, path.scope);
            }
          }
        }
        if (!idInRest) {
          for (let i = 0; i < params.length; ++i) {
            const param = params[i];
            if (paramsWithRestElement.has(i)) {
              replaceRestElement(path, param);
            }
          }
        } else {
          const shouldTransformParam = idx => idx >= i - 1 || paramsWithRestElement.has(idx);
          pluginTransformParameters.convertFunctionParams(path, ignoreFunctionLength, shouldTransformParam, replaceRestElement);
        }
      },
      VariableDeclarator(path, file) {
        if (!path.get("id").isObjectPattern()) {
          return;
        }
        let insertionPath = path;
        const originalPath = path;
        visitRestElements(path.get("id"), path => {
          if (!path.parentPath.isObjectPattern()) {
            return;
          }
          if (shouldStoreRHSInTemporaryVariable(originalPath.node.id) && !core.types.isIdentifier(originalPath.node.init)) {
            const initRef = path.scope.generateUidIdentifierBasedOnNode(originalPath.node.init, "ref");
            originalPath.insertBefore(core.types.variableDeclarator(initRef, originalPath.node.init));
            originalPath.replaceWith(core.types.variableDeclarator(originalPath.node.id, core.types.cloneNode(initRef)));
            return;
          }
          let ref = originalPath.node.init;
          const refPropertyPath = [];
          let kind;
          path.findParent(path => {
            if (path.isObjectProperty()) {
              refPropertyPath.unshift(path);
            } else if (path.isVariableDeclarator()) {
              kind = path.parentPath.node.kind;
              return true;
            }
          });
          const impureObjRefComputedDeclarators = replaceImpureComputedKeys(refPropertyPath, path.scope);
          refPropertyPath.forEach(prop => {
            const {
              node
            } = prop;
            ref = core.types.memberExpression(ref, core.types.cloneNode(node.key), node.computed || core.types.isLiteral(node.key));
          });
          const objectPatternPath = path.findParent(path => path.isObjectPattern());
          const [impureComputedPropertyDeclarators, argument, callExpression] = createObjectRest(objectPatternPath, file, ref);
          if (pureGetters) {
            removeUnusedExcludedKeys(objectPatternPath);
          }
          core.types.assertIdentifier(argument);
          insertionPath.insertBefore(impureComputedPropertyDeclarators);
          insertionPath.insertBefore(impureObjRefComputedDeclarators);
          insertionPath = insertionPath.insertAfter(core.types.variableDeclarator(argument, callExpression))[0];
          path.scope.registerBinding(kind, insertionPath);
          if (objectPatternPath.node.properties.length === 0) {
            objectPatternPath.findParent(path => path.isObjectProperty() || path.isVariableDeclarator()).remove();
          }
        });
      },
      ExportNamedDeclaration(path) {
        const declaration = path.get("declaration");
        if (!declaration.isVariableDeclaration()) return;
        const hasRest = declaration.get("declarations").some(path => hasObjectPatternRestElement(path.get("id")));
        if (!hasRest) return;
        const specifiers = [];
        for (const name of Object.keys(path.getOuterBindingIdentifiers(true))) {
          specifiers.push(core.types.exportSpecifier(core.types.identifier(name), core.types.identifier(name)));
        }
        path.replaceWith(declaration.node);
        path.insertAfter(core.types.exportNamedDeclaration(null, specifiers));
      },
      CatchClause(path) {
        const paramPath = path.get("param");
        replaceRestElement(path, paramPath);
      },
      AssignmentExpression(path, file) {
        const leftPath = path.get("left");
        if (leftPath.isObjectPattern() && hasRestElement(leftPath)) {
          const nodes = [];
          const refName = path.scope.generateUidBasedOnNode(path.node.right, "ref");
          nodes.push(core.types.variableDeclaration("var", [core.types.variableDeclarator(core.types.identifier(refName), path.node.right)]));
          const [impureComputedPropertyDeclarators, argument, callExpression] = createObjectRest(leftPath, file, core.types.identifier(refName));
          if (impureComputedPropertyDeclarators.length > 0) {
            nodes.push(core.types.variableDeclaration("var", impureComputedPropertyDeclarators));
          }
          const nodeWithoutSpread = core.types.cloneNode(path.node);
          nodeWithoutSpread.right = core.types.identifier(refName);
          nodes.push(core.types.expressionStatement(nodeWithoutSpread));
          nodes.push(core.types.expressionStatement(core.types.assignmentExpression("=", argument, callExpression)));
          nodes.push(core.types.expressionStatement(core.types.identifier(refName)));
          path.replaceWithMultiple(nodes);
        }
      },
      ForXStatement(path) {
        const {
          node,
          scope
        } = path;
        const leftPath = path.get("left");
        const left = node.left;
        if (!hasObjectPatternRestElement(leftPath)) {
          return;
        }
        if (!core.types.isVariableDeclaration(left)) {
          const temp = scope.generateUidIdentifier("ref");
          node.left = core.types.variableDeclaration("var", [core.types.variableDeclarator(temp)]);
          path.ensureBlock();
          const body = path.node.body;
          if (body.body.length === 0 && path.isCompletionRecord()) {
            body.body.unshift(core.types.expressionStatement(scope.buildUndefinedNode()));
          }
          body.body.unshift(core.types.expressionStatement(core.types.assignmentExpression("=", left, core.types.cloneNode(temp))));
        } else {
          const pattern = left.declarations[0].id;
          const key = scope.generateUidIdentifier("ref");
          node.left = core.types.variableDeclaration(left.kind, [core.types.variableDeclarator(key, null)]);
          path.ensureBlock();
          const body = node.body;
          body.body.unshift(core.types.variableDeclaration(node.left.kind, [core.types.variableDeclarator(pattern, core.types.cloneNode(key))]));
        }
      },
      ArrayPattern(path) {
        const objectPatterns = [];
        visitRestElements(path, path => {
          if (!path.parentPath.isObjectPattern()) {
            return;
          }
          const objectPattern = path.parentPath;
          const uid = path.scope.generateUidIdentifier("ref");
          objectPatterns.push(core.types.variableDeclarator(objectPattern.node, uid));
          objectPattern.replaceWith(core.types.cloneNode(uid));
          path.skip();
        });
        if (objectPatterns.length > 0) {
          const statementPath = path.getStatementParent();
          const statementNode = statementPath.node;
          const kind = statementNode.type === "VariableDeclaration" ? statementNode.kind : "var";
          statementPath.insertAfter(core.types.variableDeclaration(kind, objectPatterns));
        }
      },
      ObjectExpression(path, file) {
        if (!hasSpread(path.node)) return;
        let helper;
        if (setSpreadProperties) {
          helper = getExtendsHelper(file);
        } else {
          try {
            helper = file.addHelper("objectSpread2");
          } catch (_unused) {
            this.file.declarations["objectSpread2"] = null;
            helper = file.addHelper("objectSpread");
          }
        }
        let exp = null;
        let props = [];
        function make() {
          const hadProps = props.length > 0;
          const obj = core.types.objectExpression(props);
          props = [];
          if (!exp) {
            exp = core.types.callExpression(helper, [obj]);
            return;
          }
          if (pureGetters) {
            if (hadProps) {
              exp.arguments.push(obj);
            }
            return;
          }
          exp = core.types.callExpression(core.types.cloneNode(helper), [exp, ...(hadProps ? [core.types.objectExpression([]), obj] : [])]);
        }
        for (const prop of path.node.properties) {
          if (core.types.isSpreadElement(prop)) {
            make();
            exp.arguments.push(prop.argument);
          } else {
            props.push(prop);
          }
        }
        if (props.length) make();
        path.replaceWith(exp);
      }
    }
  };
});

exports.default = index;
//# sourceMappingURL=index.js.map
