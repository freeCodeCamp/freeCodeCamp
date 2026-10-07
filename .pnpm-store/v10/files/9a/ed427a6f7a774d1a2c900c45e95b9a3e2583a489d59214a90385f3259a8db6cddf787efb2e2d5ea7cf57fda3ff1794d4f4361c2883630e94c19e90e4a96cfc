"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const schema = [];

const create = context => {
  let globalScope; // do nearly the same thing that eslint does for config globals
  // https://github.com/eslint/eslint/blob/v2.0.0/lib/eslint.js#L118-L194

  const makeDefined = ident => {
    let ii; // start from the right since we're going to remove items from the array

    for (ii = globalScope.through.length - 1; ii >= 0; ii--) {
      const ref = globalScope.through[ii];

      if (ref.identifier.name === ident.name) {
        // use "__defineGeneric" since we don't have a reference to "escope.Variable"
        // eslint-disable-next-line no-underscore-dangle
        globalScope.__defineGeneric(ident.name, globalScope.set, globalScope.variables);

        const variable = globalScope.set.get(ident.name);
        variable.writeable = false; // "through" contains all references whose definition cannot be found
        // so we need to update references and remove the ones that were added

        globalScope.through.splice(ii, 1);
        ref.resolved = variable;
        variable.references.push(ref);
      }
    }
  };

  return {
    ClassImplements(node) {
      makeDefined(node.id);
    },

    DeclareInterface(node) {
      makeDefined(node.id);
    },

    DeclareTypeAlias(node) {
      makeDefined(node.id);
    },

    GenericTypeAnnotation(node) {
      if (node.id.type === 'Identifier') {
        makeDefined(node.id);
      } else if (node.id.type === 'QualifiedTypeIdentifier') {
        let qid;
        qid = node.id;

        do {
          qid = qid.qualification;
        } while (qid.qualification);

        makeDefined(qid);
      }
    },

    // Can be removed once https://github.com/babel/babel-eslint/pull/696 is published
    OpaqueType(node) {
      if (node.id.type === 'Identifier') {
        makeDefined(node.id);
      }
    },

    Program() {
      globalScope = context.getScope();
    },

    TypeParameterDeclaration(node) {
      node.params.forEach(param => {
        makeDefined(param);
      });
    }

  };
};

var _default = {
  create,
  schema
};
exports.default = _default;
module.exports = exports.default;