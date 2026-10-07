"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _helperCreateClassFeaturesPlugin = require("@babel/helper-create-class-features-plugin");
var _helperAnnotateAsPure = require("@babel/helper-annotate-as-pure");
var _default = exports.default = (0, _helperPluginUtils.declare)((api, opt) => {
  api.assertVersion(7);
  const {
    types: t,
    template
  } = api;
  const {
    loose
  } = opt;
  const classWeakSets = new WeakMap();
  const fieldsWeakSets = new WeakMap();
  function unshadow(name, targetScope, scope) {
    while (scope !== targetScope) {
      if (scope.hasOwnBinding(name)) scope.rename(name);
      scope = scope.parent;
    }
  }
  function injectToFieldInit(fieldPath, expr, before = false) {
    if (fieldPath.node.value) {
      const value = fieldPath.get("value");
      if (before) {
        value.insertBefore(expr);
      } else {
        value.insertAfter(expr);
      }
    } else {
      fieldPath.set("value", t.unaryExpression("void", expr));
    }
  }
  function injectInitialization(classPath, init) {
    let firstFieldPath;
    let constructorPath;
    for (const el of classPath.get("body.body")) {
      if ((el.isClassProperty() || el.isClassPrivateProperty()) && !el.node.static) {
        firstFieldPath = el;
        break;
      }
      if (!constructorPath && el.isClassMethod({
        kind: "constructor"
      })) {
        constructorPath = el;
      }
    }
    if (firstFieldPath) {
      injectToFieldInit(firstFieldPath, init, true);
    } else {
      (0, _helperCreateClassFeaturesPlugin.injectInitialization)(classPath, constructorPath, [t.expressionStatement(init)]);
    }
  }
  function getWeakSetId(weakSets, outerClass, reference, name = "", inject) {
    let id = weakSets.get(reference.node);
    if (!id) {
      id = outerClass.scope.generateUidIdentifier(`${name || ""} brandCheck`);
      weakSets.set(reference.node, id);
      inject(reference, template.expression.ast`${t.cloneNode(id)}.add(this)`);
      const newExpr = t.newExpression(t.identifier("WeakSet"), []);
      (0, _helperAnnotateAsPure.default)(newExpr);
      outerClass.insertBefore(template.ast`var ${id} = ${newExpr}`);
    }
    return t.cloneNode(id);
  }
  return {
    name: "transform-private-property-in-object",
    inherits: require("@babel/plugin-syntax-private-property-in-object").default,
    pre() {
      (0, _helperCreateClassFeaturesPlugin.enableFeature)(this.file, _helperCreateClassFeaturesPlugin.FEATURES.privateIn, loose);
    },
    visitor: {
      BinaryExpression(path, state) {
        const {
          node
        } = path;
        const {
          file
        } = state;
        if (node.operator !== "in") return;
        if (!t.isPrivateName(node.left)) return;
        const {
          name
        } = node.left.id;
        let privateElement;
        const outerClass = path.findParent(path => {
          if (!path.isClass()) return false;
          privateElement = path.get("body.body").find(({
            node
          }) => t.isPrivate(node) && node.key.id.name === name);
          return !!privateElement;
        });
        if (outerClass.parentPath.scope.path.isPattern()) {
          outerClass.replaceWith(template.ast`(() => ${outerClass.node})()`);
          return;
        }
        if (privateElement.node.type === "ClassPrivateMethod") {
          if (privateElement.node.static) {
            if (outerClass.node.id) {
              unshadow(outerClass.node.id.name, outerClass.scope, path.scope);
            } else {
              outerClass.set("id", path.scope.generateUidIdentifier("class"));
            }
            path.replaceWith(template.expression.ast`
                ${t.cloneNode(outerClass.node.id)} === ${(0, _helperCreateClassFeaturesPlugin.buildCheckInRHS)(node.right, file)}
              `);
          } else {
            var _outerClass$node$id;
            const id = getWeakSetId(classWeakSets, outerClass, outerClass, (_outerClass$node$id = outerClass.node.id) == null ? void 0 : _outerClass$node$id.name, injectInitialization);
            path.replaceWith(template.expression.ast`${id}.has(${(0, _helperCreateClassFeaturesPlugin.buildCheckInRHS)(node.right, file)})`);
          }
        } else {
          const id = getWeakSetId(fieldsWeakSets, outerClass, privateElement, privateElement.node.key.id.name, injectToFieldInit);
          path.replaceWith(template.expression.ast`${id}.has(${(0, _helperCreateClassFeaturesPlugin.buildCheckInRHS)(node.right, file)})`);
        }
      }
    }
  };
});

//# sourceMappingURL=index.js.map
