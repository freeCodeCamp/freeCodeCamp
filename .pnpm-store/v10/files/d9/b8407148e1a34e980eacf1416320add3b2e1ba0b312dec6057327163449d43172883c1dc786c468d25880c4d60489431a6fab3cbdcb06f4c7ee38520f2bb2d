"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FEATURES", {
  enumerable: true,
  get: function () {
    return _features.FEATURES;
  }
});
Object.defineProperty(exports, "buildCheckInRHS", {
  enumerable: true,
  get: function () {
    return _fields.buildCheckInRHS;
  }
});
Object.defineProperty(exports, "buildNamedEvaluationVisitor", {
  enumerable: true,
  get: function () {
    return _decorators.buildNamedEvaluationVisitor;
  }
});
exports.createClassFeaturePlugin = createClassFeaturePlugin;
Object.defineProperty(exports, "enableFeature", {
  enumerable: true,
  get: function () {
    return _features.enableFeature;
  }
});
Object.defineProperty(exports, "injectInitialization", {
  enumerable: true,
  get: function () {
    return _misc.injectInitialization;
  }
});
var _core = require("@babel/core");
var _semver = require("semver");
var _fields = require("./fields.js");
var _decorators = require("./decorators.js");
var _decorators2 = require("./decorators-2018-09.js");
var _misc = require("./misc.js");
var _features = require("./features.js");
var _typescript = require("./typescript.js");
const versionKey = "@babel/plugin-class-features/version";
function createClassFeaturePlugin({
  name,
  feature,
  loose,
  manipulateOptions,
  api,
  inherits,
  decoratorVersion
}) {
  var _api$assumption;
  if (feature & _features.FEATURES.decorators) {
    if (decoratorVersion === "2023-11" || decoratorVersion === "2023-05" || decoratorVersion === "2023-01" || decoratorVersion === "2022-03" || decoratorVersion === "2021-12") {
      return (0, _decorators.default)(api, {
        loose
      }, decoratorVersion, inherits);
    }
  }
  api != null ? api : api = {
    assumption: () => void 0
  };
  const setPublicClassFields = api.assumption("setPublicClassFields");
  const privateFieldsAsSymbols = api.assumption("privateFieldsAsSymbols");
  const privateFieldsAsProperties = api.assumption("privateFieldsAsProperties");
  const noUninitializedPrivateFieldAccess = (_api$assumption = api.assumption("noUninitializedPrivateFieldAccess")) != null ? _api$assumption : false;
  const constantSuper = api.assumption("constantSuper");
  const noDocumentAll = api.assumption("noDocumentAll");
  if (privateFieldsAsProperties && privateFieldsAsSymbols) {
    throw new Error(`Cannot enable both the "privateFieldsAsProperties" and ` + `"privateFieldsAsSymbols" assumptions as the same time.`);
  }
  const privateFieldsAsSymbolsOrProperties = privateFieldsAsProperties || privateFieldsAsSymbols;
  if (loose === true) {
    const explicit = [];
    if (setPublicClassFields !== undefined) {
      explicit.push(`"setPublicClassFields"`);
    }
    if (privateFieldsAsProperties !== undefined) {
      explicit.push(`"privateFieldsAsProperties"`);
    }
    if (privateFieldsAsSymbols !== undefined) {
      explicit.push(`"privateFieldsAsSymbols"`);
    }
    if (explicit.length !== 0) {
      console.warn(`[${name}]: You are using the "loose: true" option and you are` + ` explicitly setting a value for the ${explicit.join(" and ")}` + ` assumption${explicit.length > 1 ? "s" : ""}. The "loose" option` + ` can cause incompatibilities with the other class features` + ` plugins, so it's recommended that you replace it with the` + ` following top-level option:\n` + `\t"assumptions": {\n` + `\t\t"setPublicClassFields": true,\n` + `\t\t"privateFieldsAsSymbols": true\n` + `\t}`);
    }
  }
  return {
    name,
    manipulateOptions,
    inherits,
    pre(file) {
      (0, _features.enableFeature)(file, feature, loose);
      if (typeof file.get(versionKey) === "number") {
        file.set(versionKey, "7.28.6");
        return;
      }
      if (!file.get(versionKey) || _semver.lt(file.get(versionKey), "7.28.6")) {
        file.set(versionKey, "7.28.6");
      }
    },
    visitor: {
      Class(path, {
        file
      }) {
        if (file.get(versionKey) !== "7.28.6") return;
        if (!(0, _features.shouldTransform)(path, file)) return;
        const pathIsClassDeclaration = path.isClassDeclaration();
        if (pathIsClassDeclaration) (0, _typescript.assertFieldTransformed)(path);
        const loose = (0, _features.isLoose)(file, feature);
        let constructor;
        const isDecorated = (0, _decorators.hasDecorators)(path.node);
        const props = [];
        const elements = [];
        const computedPaths = [];
        const privateNames = new Set();
        const body = path.get("body");
        for (const path of body.get("body")) {
          if ((path.isClassProperty() || path.isClassMethod()) && path.node.computed) {
            computedPaths.push(path);
          }
          if (path.isPrivate()) {
            const {
              name
            } = path.node.key.id;
            const getName = `get ${name}`;
            const setName = `set ${name}`;
            if (path.isClassPrivateMethod()) {
              if (path.node.kind === "get") {
                if (privateNames.has(getName) || privateNames.has(name) && !privateNames.has(setName)) {
                  throw path.buildCodeFrameError("Duplicate private field");
                }
                privateNames.add(getName).add(name);
              } else if (path.node.kind === "set") {
                if (privateNames.has(setName) || privateNames.has(name) && !privateNames.has(getName)) {
                  throw path.buildCodeFrameError("Duplicate private field");
                }
                privateNames.add(setName).add(name);
              }
            } else {
              if (privateNames.has(name) && !privateNames.has(getName) && !privateNames.has(setName) || privateNames.has(name) && (privateNames.has(getName) || privateNames.has(setName))) {
                throw path.buildCodeFrameError("Duplicate private field");
              }
              privateNames.add(name);
            }
          }
          if (path.isClassMethod({
            kind: "constructor"
          })) {
            constructor = path;
          } else {
            elements.push(path);
            if (path.isProperty() || path.isPrivate() || path.isStaticBlock != null && path.isStaticBlock()) {
              props.push(path);
            }
          }
        }
        if (!props.length && !isDecorated) return;
        const innerBinding = path.node.id;
        let ref;
        if (!innerBinding || !pathIsClassDeclaration) {
          var _path$ensureFunctionN;
          (_path$ensureFunctionN = path.ensureFunctionName) != null ? _path$ensureFunctionN : path.ensureFunctionName = require("@babel/traverse").NodePath.prototype.ensureFunctionName;
          path.ensureFunctionName(false);
          ref = path.scope.generateUidIdentifier((innerBinding == null ? void 0 : innerBinding.name) || "Class");
        }
        const classRefForDefine = ref != null ? ref : _core.types.cloneNode(innerBinding);
        const privateNamesMap = (0, _fields.buildPrivateNamesMap)(classRefForDefine.name, privateFieldsAsSymbolsOrProperties != null ? privateFieldsAsSymbolsOrProperties : loose, props, file);
        const privateNamesNodes = (0, _fields.buildPrivateNamesNodes)(privateNamesMap, privateFieldsAsProperties != null ? privateFieldsAsProperties : loose, privateFieldsAsSymbols != null ? privateFieldsAsSymbols : false, file);
        (0, _fields.transformPrivateNamesUsage)(classRefForDefine, path, privateNamesMap, {
          privateFieldsAsProperties: privateFieldsAsSymbolsOrProperties != null ? privateFieldsAsSymbolsOrProperties : loose,
          noUninitializedPrivateFieldAccess,
          noDocumentAll,
          innerBinding
        }, file);
        let keysNodes, staticNodes, instanceNodes, lastInstanceNodeReturnsThis, pureStaticNodes, classBindingNode, wrapClass;
        if (isDecorated) {
          staticNodes = pureStaticNodes = keysNodes = [];
          ({
            instanceNodes,
            wrapClass
          } = (0, _decorators2.buildDecoratedClass)(classRefForDefine, path, elements, file));
        } else {
          keysNodes = (0, _misc.extractComputedKeys)(path, computedPaths, file);
          ({
            staticNodes,
            pureStaticNodes,
            instanceNodes,
            lastInstanceNodeReturnsThis,
            classBindingNode,
            wrapClass
          } = (0, _fields.buildFieldsInitNodes)(ref, path.node.superClass, props, privateNamesMap, file, setPublicClassFields != null ? setPublicClassFields : loose, privateFieldsAsSymbolsOrProperties != null ? privateFieldsAsSymbolsOrProperties : loose, noUninitializedPrivateFieldAccess, constantSuper != null ? constantSuper : loose, innerBinding));
        }
        if (instanceNodes.length > 0) {
          (0, _misc.injectInitialization)(path, constructor, instanceNodes, (referenceVisitor, state) => {
            if (isDecorated) return;
            for (const prop of props) {
              if (_core.types.isStaticBlock != null && _core.types.isStaticBlock(prop.node) || prop.node.static) continue;
              prop.traverse(referenceVisitor, state);
            }
          }, lastInstanceNodeReturnsThis);
        }
        const wrappedPath = wrapClass(path);
        wrappedPath.insertBefore([...privateNamesNodes, ...keysNodes]);
        if (staticNodes.length > 0) {
          wrappedPath.insertAfter(staticNodes);
        }
        if (pureStaticNodes.length > 0) {
          wrappedPath.find(parent => parent.isStatement() || parent.isDeclaration()).insertAfter(pureStaticNodes);
        }
        if (classBindingNode != null && pathIsClassDeclaration) {
          wrappedPath.insertAfter(classBindingNode);
        }
      },
      ExportDefaultDeclaration(path, {
        file
      }) {
        if (file.get(versionKey) !== "7.28.6") return;
        const decl = path.get("declaration");
        if (decl.isClassDeclaration() && (0, _decorators.hasDecorators)(decl.node)) {
          if (decl.node.id) {
            var _path$splitExportDecl;
            (_path$splitExportDecl = path.splitExportDeclaration) != null ? _path$splitExportDecl : path.splitExportDeclaration = require("@babel/traverse").NodePath.prototype.splitExportDeclaration;
            path.splitExportDeclaration();
          } else {
            decl.node.type = "ClassExpression";
          }
        }
      }
    }
  };
}

//# sourceMappingURL=index.js.map
