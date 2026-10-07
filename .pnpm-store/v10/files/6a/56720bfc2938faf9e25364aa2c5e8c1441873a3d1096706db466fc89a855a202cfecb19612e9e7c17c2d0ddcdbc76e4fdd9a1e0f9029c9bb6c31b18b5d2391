"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _helperCreateClassFeaturesPlugin = require("@babel/helper-create-class-features-plugin");
function generateUid(scope, denyList) {
  const name = "";
  let uid;
  let i = 1;
  do {
    uid = scope._generateUid(name, i);
    i++;
  } while (denyList.has(uid));
  return uid;
}
var _default = exports.default = (0, _helperPluginUtils.declare)(({
  types: t,
  template,
  assertVersion
}) => {
  assertVersion("^7.12.0");
  return {
    name: "transform-class-static-block",
    inherits: require("@babel/plugin-syntax-class-static-block").default,
    pre() {
      (0, _helperCreateClassFeaturesPlugin.enableFeature)(this.file, _helperCreateClassFeaturesPlugin.FEATURES.staticBlocks, false);
    },
    visitor: {
      ClassBody(classBody) {
        const {
          scope
        } = classBody;
        const privateNames = new Set();
        const body = classBody.get("body");
        for (const path of body) {
          if (path.isPrivate()) {
            privateNames.add(path.get("key.id").node.name);
          }
        }
        for (const path of body) {
          if (!path.isStaticBlock()) continue;
          const staticBlockPrivateId = generateUid(scope, privateNames);
          privateNames.add(staticBlockPrivateId);
          const staticBlockRef = t.privateName(t.identifier(staticBlockPrivateId));
          let replacement;
          const blockBody = path.node.body;
          if (blockBody.length === 1 && t.isExpressionStatement(blockBody[0])) {
            replacement = t.inheritsComments(blockBody[0].expression, blockBody[0]);
          } else {
            replacement = template.expression.ast`(() => { ${blockBody} })()`;
          }
          path.replaceWith(t.classPrivateProperty(staticBlockRef, replacement, [], true));
        }
      }
    }
  };
});

//# sourceMappingURL=index.js.map
