"use strict";

var _acornLoose = require("acorn-loose");
var _acornWalk = require("acorn-walk");
var _createNormalizedModuleKey = require("../utils/create-normalized-module-key");
/* eslint-disable @babel/no-invalid-this */

function createNamedReference(name, normalizedModuleKey) {
  return `export const ${name} = {
    $$typeof: Symbol.for('react.module.reference'),
    filepath: '${normalizedModuleKey}',
    name: '${name}'
  }`;
}
function createDefaultReference(name, normalizedModuleKey) {
  return `export default {
    $$typeof: Symbol.for('react.module.reference'),
    filepath: '${normalizedModuleKey}',
    name: '${name}'
  }`;
}
const partialHydrationReferenceLoader = async function partialHydrationReferenceLoader(content) {
  if (!content.includes(`use client`)) {
    return content;
  }
  const references = [];
  let hasClientExportDirective = false;
  const normalizedModuleKey = (0, _createNormalizedModuleKey.createNormalizedModuleKey)(this.resourcePath, this.rootContext);
  (0, _acornWalk.simple)((0, _acornLoose.parse)(content, {
    ecmaVersion: 2020,
    sourceType: `module`
  }), {
    ExpressionStatement(plainAcornNode) {
      const node = plainAcornNode;
      if (node.directive === `use client`) {
        hasClientExportDirective = true;
      }
    },
    ExportNamedDeclaration(plainAcornNode) {
      var _node$declaration, _node$declaration$id;
      const node = plainAcornNode;
      if (!hasClientExportDirective) return;

      // Handle cases shown in `fixtures/esm-declaration.js`
      switch (node === null || node === void 0 ? void 0 : (_node$declaration = node.declaration) === null || _node$declaration === void 0 ? void 0 : _node$declaration.type) {
        case `VariableDeclaration`:
          for (const {
            id
          } of node.declaration.declarations || []) {
            if (id.type === `Identifier` && id.name) {
              references.push(createNamedReference(id.name, normalizedModuleKey));
            }
            if (id.type === `ObjectPattern`) {
              // @ts-ignore Wrong type
              for (const {
                value
              } of id.properties) {
                if (value.type === `Identifier` && value.name) {
                  references.push(createNamedReference(value.name, normalizedModuleKey));
                }
              }
            }
            if (id.type === `ArrayPattern`) {
              for (const element of id.elements || []) {
                if ((element === null || element === void 0 ? void 0 : element.type) === `Identifier` && element.name) {
                  references.push(createNamedReference(element.name, normalizedModuleKey));
                }
              }
            }
          }
          break;
        case `FunctionDeclaration`:
        case `ClassDeclaration`:
          if (((_node$declaration$id = node.declaration.id) === null || _node$declaration$id === void 0 ? void 0 : _node$declaration$id.type) === `Identifier` && node.declaration.id.name) {
            references.push(createNamedReference(node.declaration.id.name, normalizedModuleKey));
          }
          break;
      }

      // Handle cases shown in `fixtures/esm-list.js`
      if (node.specifiers.length) {
        for (const specifier of node.specifiers) {
          if (specifier.type === `ExportSpecifier` && specifier.exported.type === `Identifier` && specifier.exported.name) {
            if (specifier.exported.name === `default`) {
              references.push(createDefaultReference(`default`, normalizedModuleKey));
            } else {
              references.push(createNamedReference(specifier.exported.name, normalizedModuleKey));
            }
          }
        }
      }
    },
    ExportDefaultDeclaration(plainAcornNode) {
      const node = plainAcornNode;
      if (!hasClientExportDirective) return;
      switch (node.declaration.type) {
        // Handle cases shown in `fixtures/esm-default-expression.js`
        case `Identifier`:
          if (node.declaration.name) {
            references.push(createDefaultReference(`default`, normalizedModuleKey));
          }
          break;
        case `FunctionDeclaration`:
        case `ClassDeclaration`:
          references.push(createDefaultReference(`default`, normalizedModuleKey));
          break;
      }
    },
    // TODO: Explore how to only walk top level tokens
    AssignmentExpression(plainAcornNode) {
      var _left$object, _left$object2, _left$property, _left$property2;
      const node = plainAcornNode;
      const {
        left
      } = node;
      if (!hasClientExportDirective) return;

      // Handle cases shown in `fixtures/cjs-exports.js`
      if ((left === null || left === void 0 ? void 0 : left.type) === `MemberExpression` && (left === null || left === void 0 ? void 0 : (_left$object = left.object) === null || _left$object === void 0 ? void 0 : _left$object.type) === `Identifier` && ((_left$object2 = left.object) === null || _left$object2 === void 0 ? void 0 : _left$object2.name) === `exports` && (left === null || left === void 0 ? void 0 : (_left$property = left.property) === null || _left$property === void 0 ? void 0 : _left$property.type) === `Identifier` && (_left$property2 = left.property) !== null && _left$property2 !== void 0 && _left$property2.name) {
        references.push(createNamedReference(left.property.name, normalizedModuleKey));
      }
    }
  });
  return hasClientExportDirective ? references.join(`\n`) : content;
};
module.exports = partialHydrationReferenceLoader;
//# sourceMappingURL=partial-hydration-reference-loader.js.map