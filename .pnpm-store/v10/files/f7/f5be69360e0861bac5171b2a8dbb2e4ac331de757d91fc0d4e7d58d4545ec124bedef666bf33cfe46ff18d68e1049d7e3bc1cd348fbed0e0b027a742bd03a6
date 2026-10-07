"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const create = context => {
  const sourceCode = context.getSourceCode();
  const {
    checkIntersections = true,
    checkUnions = true
  } = context.options[1] || {};

  const checkForDuplicates = node => {
    const uniqueMembers = [];
    const duplicates = [];
    const source = node.types.map(type => {
      return {
        node: type,
        text: sourceCode.getText(type)
      };
    });
    const hasComments = node.types.some(type => {
      const count = sourceCode.getCommentsBefore(type).length + sourceCode.getCommentsAfter(type).length;
      return count > 0;
    });

    const fix = fixer => {
      const result = uniqueMembers.map(t => {
        return t.text;
      }).join(node.type === 'UnionTypeAnnotation' ? ' | ' : ' & ');
      return fixer.replaceText(node, result);
    };

    for (const member of source) {
      const match = uniqueMembers.find(uniqueMember => {
        return uniqueMember.text === member.text;
      });

      if (match) {
        duplicates.push(member);
      } else {
        uniqueMembers.push(member);
      }
    }

    for (const duplicate of duplicates) {
      context.report(_objectSpread({
        data: {
          name: duplicate.text,
          type: node.type === 'UnionTypeAnnotation' ? 'union' : 'intersection'
        },
        messageId: 'duplicate',
        node
      }, hasComments ? {
        suggest: [{
          fix,
          messageId: 'suggestFix'
        }]
      } : {
        fix
      }));
    }
  };

  return {
    IntersectionTypeAnnotation(node) {
      if (checkIntersections === true) {
        checkForDuplicates(node);
      }
    },

    UnionTypeAnnotation(node) {
      if (checkUnions === true) {
        checkForDuplicates(node);
      }
    }

  };
};

var _default = {
  create,
  meta: {
    fixable: 'code',
    messages: {
      duplicate: 'Duplicate {{type}} member found "{{name}}".',
      suggestFix: 'Remove duplicate members of type (removes all comments).'
    },
    schema: [{
      properties: {
        checkIntersections: {
          type: 'boolean'
        },
        checkUnions: {
          type: 'boolean'
        }
      },
      type: 'object'
    }]
  }
};
exports.default = _default;
module.exports = exports.default;