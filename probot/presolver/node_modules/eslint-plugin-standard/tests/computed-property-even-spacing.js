/**
 * @fileoverview Disallows or enforces spaces inside computed properties.
 * @author Jamund Ferguson
 * @copyright 2015 Jamund Ferguson. All rights reserved.
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var RuleTester = require('eslint').RuleTester
var rule = require('../rules/computed-property-even-spacing')

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('computed-property-even-spacing', rule, {
  valid: [

    // even
    { code: 'bar[ foo ]', options: ['even'] },
    { code: 'bar[foo]', options: ['even'] },
    { code: "bar['foo']", options: ['even'] },
    { code: "bar[ 'foo' ]", options: ['even'] },

    // default - never
    { code: 'obj[foo]' },
    { code: "obj['foo']" },
    { code: 'var x = {[b]: a}', parserOptions: { ecmaVersion: 6 } },

    // always
    { code: 'obj[ foo ]', options: ['always'] },
    { code: 'obj[\nfoo\n]', options: ['always'] },
    { code: "obj[ 'foo' ]", options: ['always'] },
    { code: "obj[ 'foo' + 'bar' ]", options: ['always'] },
    { code: 'obj[ obj2[ foo ] ]', options: ['always'] },
    { code: 'obj.map(function(item) { return [\n1,\n2,\n3,\n4\n]; })', options: ['always'] },
    { code: "obj[ 'map' ](function(item) { return [\n1,\n2,\n3,\n4\n]; })", options: ['always'] },
    { code: "obj[ 'for' + 'Each' ](function(item) { return [\n1,\n2,\n3,\n4\n]; })", options: ['always'] },
    { code: 'obj[ obj2[ foo ] ]', options: ['always'] },
    { code: 'var foo = obj[ 1 ]', options: ['always'] },
    { code: "var foo = obj[ 'foo' ];", options: ['always'] },
    { code: 'var foo = obj[ [1, 1] ];', options: ['always'] },

    // always - objectLiteralComputedProperties
    { code: 'var x = {[ "a" ]: a}', options: ['always'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var y = {[ x ]: a}', options: ['always'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var x = {[ "a" ]() {}}', options: ['always'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var y = {[ x ]() {}}', options: ['always'], parserOptions: { ecmaVersion: 6 } },

    // always - unrelated cases
    { code: 'var foo = {};', options: ['always'] },
    { code: 'var foo = [];', options: ['always'] },

    // never
    { code: 'obj[foo]', options: ['never'] },
    { code: "obj['foo']", options: ['never'] },
    { code: "obj['foo' + 'bar']", options: ['never'] },
    { code: "obj['foo'+'bar']", options: ['never'] },
    { code: 'obj[obj2[foo]]', options: ['never'] },
    { code: 'obj.map(function(item) { return [\n1,\n2,\n3,\n4\n]; })', options: ['never'] },
    { code: "obj['map'](function(item) { return [\n1,\n2,\n3,\n4\n]; })", options: ['never'] },
    { code: "obj['for' + 'Each'](function(item) { return [\n1,\n2,\n3,\n4\n]; })", options: ['never'] },
    { code: "obj['for' + 'Each'](function(item) { return [\n1,\n2,\n3,\n4\n]; })", options: ['never'] },
    { code: 'obj[\nfoo]', options: ['never'] },
    { code: 'obj[foo\n]', options: ['never'] },
    { code: 'var foo = obj[1]', options: ['never'] },
    { code: "var foo = obj['foo'];", options: ['never'] },
    { code: 'var foo = obj[[ 1, 1 ]];', options: ['never'] },

    // never - objectLiteralComputedProperties
    { code: 'var x = {["a"]: a}', options: ['never'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var y = {[x]: a}', options: ['never'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var x = {["a"]() {}}', options: ['never'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var y = {[x]() {}}', options: ['never'], parserOptions: { ecmaVersion: 6 } },

    // never - unrelated cases
    { code: 'var foo = {};', options: ['never'] },
    { code: 'var foo = [];', options: ['never'] },
    { code: 'bar[ foo ]', options: ['even'] },

    // even - unrelated cases
    { code: 'const { a, ...b } = obj', options: ['even'], parserOptions: { ecmaVersion: 6, ecmaFeatures: { experimentalObjectRestSpread: true } } },
    { code: 'func(a, { ...b })', options: ['even'], parserOptions: { ecmaVersion: 6, ecmaFeatures: { experimentalObjectRestSpread: true } } }

  ],

  invalid: [

    // even
    { code: "bar[  'foo'  ]", options: ['even'], errors: [{ message: 'Expected 1 or 0 spaces around "[" and "]"' }] },
    { code: "bar['foo' ]", options: ['even'], errors: [{ message: 'Expected 1 or 0 spaces around "[" and "]"' }] },
    { code: "bar[  'foo' ]", options: ['even'], errors: [{ message: 'Expected 1 or 0 spaces around "[" and "]"' }] },
    { code: "bar[ 'foo']", options: ['even'], errors: [{ message: 'Expected 1 or 0 spaces around "[" and "]"' }] },
    { code: "bar[\n'foo' ]", options: ['even'], errors: [{ message: 'Expected "[" and "]" to be on the same line' }] },
    { code: "bar[\n'foo' ]", options: ['even'], errors: [{ message: 'Expected "[" and "]" to be on the same line' }] },
    { code: "bar[\n'foo' ]", options: ['even'], errors: [{ message: 'Expected "[" and "]" to be on the same line' }] },
    { code: "bar[\n\t'foo' ]", options: ['even'], errors: [{ message: 'Expected "[" and "]" to be on the same line' }] },
    { code: "bar[\n\t'foo'\n]", options: ['even'], errors: [{ message: 'Expected "[" and "]" to be on the same line' }] },

    {
      code: 'var foo = obj[ 1];',
      options: ['always'],
      errors: [
        {
          message: "A space is required before ']'",
          type: 'MemberExpression',
          line: 1
        }
      ]
    },
    {
      code: 'var foo = obj[1 ];',
      options: ['always'],
      errors: [
        {
          message: "A space is required after '['",
          type: 'MemberExpression',
          line: 1
        }
      ]
    },
    {
      code: 'var foo = obj[ 1];',
      options: ['never'],
      errors: [
        {
          message: "There should be no space after '['",
          type: 'MemberExpression',
          line: 1
        }
      ]
    },
    {
      code: 'var foo = obj[1 ];',
      options: ['never'],
      errors: [
        {
          message: "There should be no space before ']'",
          type: 'MemberExpression'
        }
      ]
    },
    {
      code: 'var foo = obj[ 1];',
      options: ['always'],
      errors: [
        {
          message: "A space is required before ']'",
          type: 'MemberExpression',
          line: 1
        }
      ]
    },
    {
      code: 'var foo = obj[1 ];',
      options: ['always'],
      errors: [
        {
          message: "A space is required after '['",
          type: 'MemberExpression',
          line: 1
        }
      ]
    },
    {
      code: 'obj[ foo ]',
      options: ['never'],
      errors: [
        {
          message: "There should be no space after '['",
          type: 'MemberExpression',
          line: 1
        },
        {
          message: "There should be no space before ']'",
          type: 'MemberExpression',
          line: 1
        }
      ]
    },
    {
      code: 'obj[foo ]',
      options: ['never'],
      errors: [
        {
          message: "There should be no space before ']'",
          type: 'MemberExpression',
          line: 1
        }
      ]
    },
    {
      code: 'obj[ foo]',
      options: ['never'],
      errors: [
        {
          message: "There should be no space after '['",
          type: 'MemberExpression',
          line: 1
        }
      ]
    },
    {
      code: 'var foo = obj[1]',
      options: ['always'],
      errors: [
        {
          message: "A space is required after '['",
          type: 'MemberExpression',
          line: 1
        },
        {
          message: "A space is required before ']'",
          type: 'MemberExpression',
          line: 1
        }
      ]
    },

    // always - objectLiteralComputedProperties
    {
      code: 'var x = {[a]: b}',
      options: ['always'],
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "A space is required after '['",
          type: 'Property',
          line: 1
        },
        {
          message: "A space is required before ']'",
          type: 'Property',
          line: 1
        }
      ]
    },
    {
      code: 'var x = {[a ]: b}',
      options: ['always'],
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "A space is required after '['",
          type: 'Property',
          line: 1
        }
      ]
    },
    {
      code: 'var x = {[ a]: b}',
      options: ['always'],
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "A space is required before ']'",
          type: 'Property',
          line: 1
        }
      ]
    },

    // never - objectLiteralComputedProperties
    {
      code: 'var x = {[ a ]: b}',
      options: ['never'],
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "There should be no space after '['",
          type: 'Property',
          line: 1
        },
        {
          message: "There should be no space before ']'",
          type: 'Property',
          line: 1
        }
      ]
    },
    {
      code: 'var x = {[a ]: b}',
      options: ['never'],
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "There should be no space before ']'",
          type: 'Property',
          line: 1
        }
      ]
    },
    {
      code: 'var x = {[ a]: b}',
      options: ['never'],
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "There should be no space after '['",
          type: 'Property',
          line: 1
        }
      ]
    },
    {
      code: 'var x = {[ a\n]: b}',
      options: ['never'],
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "There should be no space after '['",
          type: 'Property',
          line: 1
        }
      ]
    }

  ]
})
