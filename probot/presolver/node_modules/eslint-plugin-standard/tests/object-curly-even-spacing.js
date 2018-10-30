/**
 * @fileoverview Disallows or enforces spaces inside of object literals.
 * @author Jamund Ferguson
 * @copyright 2014 Vignesh Anand. All rights reserved.
 * @copyright 2015 Jamund Ferguson. All rights reserved.
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var RuleTester = require('eslint').RuleTester
var rule = require('../rules/object-curly-even-spacing')
var parserOptions = { ecmaVersion: 6, sourceType: 'module' }

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('object-curly-even-spacing', rule, {
  valid: [

    // either
    { code: "var x = { a: 'b' }", options: ['either'] },
    { code: "var x = {\na: 'b'\n}", options: ['either'] },
    { code: "var x = {\n\ta: 'b'\n}", options: ['either'] },
    { code: "var x = {\n a: 'b' \n}", options: ['either'] },
    { code: 'var foo = {};', options: ['either'] },
    { code: 'var {x} = y', options: ['either'], parserOptions: parserOptions },
    { code: 'var {} = y', options: ['either'], parserOptions: parserOptions },
    { code: 'var { x } = y', options: ['either'], parserOptions: parserOptions },
    { code: 'var {\nx\n} = y', options: ['either'], parserOptions: parserOptions },
    { code: 'var {\n\tx\n} = y', options: ['either'], parserOptions: parserOptions },
    { code: "import {x} from 'y'", options: ['either'], parserOptions: parserOptions },

    // always - object literals
    { code: 'var obj = { foo: bar, baz: qux };', options: ['always'] },
    { code: 'var obj = { foo: { bar: quxx }, baz: qux };', options: ['always'] },
    { code: 'var obj = {\nfoo: bar,\nbaz: qux\n};', options: ['always'] },

    // always - destructuring
    { code: 'var { x } = y', options: ['always'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var { x, y } = y', options: ['always'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var { x,y } = y', options: ['always'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var {\nx,y } = y', options: ['always'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var {\nx,y\n} = z', options: ['always'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var { x = 10, y } = y', options: ['always'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var { x: { z }, y } = y', options: ['always'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var {\ny,\n} = x', options: ['always'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var { y, } = x', options: ['always'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var {} = x', options: ['always'], parserOptions: { ecmaVersion: 6 } },

    // always - import / export
    { code: "import { door } from 'room'", options: ['always'], parserOptions: parserOptions },
    { code: "import {\ndoor } from 'room'", options: ['always'], parserOptions: parserOptions },
    { code: "export { door } from 'room'", options: ['always'], parserOptions: parserOptions },
    { code: "import { house, mouse } from 'caravan'", options: ['always'], parserOptions: parserOptions },
    { code: 'export { door }', options: ['always'], parserOptions: parserOptions },
    { code: "import {} from 'room'", options: ['always'], parserOptions: parserOptions },
    { code: "export {} from 'room'", options: ['always'], parserOptions: parserOptions },
    { code: "import 'room'", options: ['always'], parserOptions: parserOptions },

    // always - empty object
    { code: 'var foo = {};', options: ['always'] },

    // always - objectsInObjects
    { code: "var obj = { 'foo': { 'bar': 1, 'baz': 2 }};", options: ['always', {'objectsInObjects': false}] },

    // always - arraysInObjects
    { code: "var obj = { 'foo': [ 1, 2 ]};", options: ['always', {'arraysInObjects': false}] },

    // always - arraysInObjects, objectsInObjects
    { code: "var obj = { 'qux': [ 1, 2 ], 'foo': { 'bar': 1, 'baz': 2 }};", options: ['always', {'arraysInObjects': false, 'objectsInObjects': false}] },

    // always - arraysInObjects, objectsInObjects (reverse)
    { code: "var obj = { 'foo': { 'bar': 1, 'baz': 2 }, 'qux': [ 1, 2 ]};", options: ['always', {'arraysInObjects': false, 'objectsInObjects': false}] },

    // never
    { code: 'var obj = {foo: bar,\nbaz: qux\n};', options: ['never'] },
    { code: 'var obj = {\nfoo: bar,\nbaz: qux};', options: ['never'] },

    // never - object literals
    { code: 'var obj = {foo: bar, baz: qux};', options: ['never'] },
    { code: 'var obj = {foo: {bar: quxx}, baz: qux};', options: ['never'] },
    { code: 'var obj = {foo: {\nbar: quxx}, baz: qux\n};', options: ['never'] },
    { code: 'var obj = {foo: {\nbar: quxx\n}, baz: qux};', options: ['never'] },
    { code: 'var obj = {\nfoo: bar,\nbaz: qux\n};', options: ['never'] },

    // never - destructuring
    { code: 'var {x} = y', options: ['never'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var {x, y} = y', options: ['never'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var {x,y} = y', options: ['never'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var {\nx,y\n} = y', options: ['never'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var {x = 10} = y', options: ['never'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var {x = 10, y} = y', options: ['never'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var {x: {z}, y} = y', options: ['never'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var {\nx: {z\n}, y} = y', options: ['never'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var {\ny,\n} = x', options: ['never'], parserOptions: { ecmaVersion: 6 } },
    { code: 'var {y,} = x', options: ['never'], parserOptions: { ecmaVersion: 6 } },

    // never - import / export
    { code: "import {door} from 'room'", options: ['never'], parserOptions: parserOptions },
    { code: "export {door} from 'room'", options: ['never'], parserOptions: parserOptions },
    { code: "import {\ndoor} from 'room'", options: ['never'], parserOptions: parserOptions },
    { code: "export {\ndoor\n} from 'room'", options: ['never'], parserOptions: parserOptions },
    { code: "import {house,mouse} from 'caravan'", options: ['never'], parserOptions: parserOptions },
    { code: "import {house, mouse} from 'caravan'", options: ['never'], parserOptions: parserOptions },
    { code: 'export {door}', options: ['never'], parserOptions: parserOptions },
    { code: "import 'room'", options: ['never'], parserOptions: parserOptions },

    // never - empty object
    { code: 'var foo = {};', options: ['never'] },

    // never - objectsInObjects
    { code: "var obj = {'foo': {'bar': 1, 'baz': 2} };", options: ['never', {'objectsInObjects': true}] }

  ],

  invalid: [

    // either
    {
      code: "import {   x   } from 'y'",
      options: ['either'],
      parserOptions: parserOptions,
      errors: [
        {
          message: 'Expected consistent spacing',
          type: 'ImportDeclaration',
          line: 1,
          column: 1
        }
      ]

    },
    {
      code: "import { x   } from 'y'",
      options: ['either'],
      parserOptions: parserOptions,
      errors: [
        {
          message: 'Expected consistent spacing',
          type: 'ImportDeclaration',
          line: 1,
          column: 1
        }
      ]

    },
    {
      code: "import { x} from 'y'",
      options: ['either'],
      parserOptions: parserOptions,
      errors: [
        {
          message: 'Expected consistent spacing',
          type: 'ImportDeclaration',
          line: 1,
          column: 1
        }
      ]

    },
    {
      code: "import { x} from 'y'",
      options: ['either'],
      parserOptions: parserOptions,
      errors: [
        {
          message: 'Expected consistent spacing',
          type: 'ImportDeclaration',
          line: 1,
          column: 1
        }
      ]

    },
    {
      code: 'var { x} = y',
      options: ['either'],
      parserOptions: parserOptions,
      errors: [
        {
          message: 'Expected consistent spacing',
          type: 'ObjectPattern',
          line: 1,
          column: 5
        }
      ]

    },
    {
      code: 'var { x  } = y',
      options: ['either'],
      parserOptions: parserOptions,
      errors: [
        {
          message: 'Expected consistent spacing',
          type: 'ObjectPattern',
          line: 1,
          column: 5
        }
      ]
    },
    {
      code: "var x = { x: '10'  }",
      options: ['either'],
      parserOptions: parserOptions,
      errors: [
        {
          message: 'Expected consistent spacing',
          type: 'ObjectExpression',
          line: 1,
          column: 9
        }
      ]
    },

    // import

    {
      code: "import {bar} from 'foo.js';",
      options: ['always'],
      parserOptions: parserOptions,
      errors: [
        {
          message: "A space is required after '{'",
          type: 'ImportDeclaration',
          line: 1,
          column: 8
        },
        {
          message: "A space is required before '}'",
          type: 'ImportDeclaration',
          line: 1,
          column: 12
        }
      ]
    },
    {
      code: 'export {bar};',
      options: ['always'],
      parserOptions: parserOptions,
      errors: [
        {
          message: "A space is required after '{'",
          type: 'ExportNamedDeclaration',
          line: 1,
          column: 8
        },
        {
          message: "A space is required before '}'",
          type: 'ExportNamedDeclaration',
          line: 1,
          column: 12
        }
      ]
    },

    // always - arraysInObjects
    {
      code: "var obj = { 'foo': [ 1, 2 ] };",
      options: ['always', {'arraysInObjects': false}],
      errors: [
        {
          message: "There should be no space before '}'",
          type: 'ObjectExpression'
        }
      ]
    },
    {
      code: "var obj = { 'foo': [ 1, 2 ] , 'bar': [ 'baz', 'qux' ] };",
      options: ['always', {'arraysInObjects': false}],
      errors: [
        {
          message: "There should be no space before '}'",
          type: 'ObjectExpression'
        }
      ]
    },

    // always-objectsInObjects
    {
      code: "var obj = { 'foo': { 'bar': 1, 'baz': 2 } };",
      options: ['always', {'objectsInObjects': false}],
      errors: [
        {
          message: "There should be no space before '}'",
          type: 'ObjectExpression',
          line: 1,
          column: 43
        }
      ]
    },
    {
      code: "var obj = { 'foo': [ 1, 2 ] , 'bar': { 'baz': 1, 'qux': 2 } };",
      options: ['always', {'objectsInObjects': false}],
      errors: [
        {
          message: "There should be no space before '}'",
          type: 'ObjectExpression',
          line: 1,
          column: 61
        }
      ]
    },

    // always-destructuring trailing comma
    {
      code: 'var { a,} = x;',
      options: ['always'],
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "A space is required before '}'",
          type: 'ObjectPattern',
          line: 1,
          column: 9
        }
      ]
    },
    {
      code: 'var {a, } = x;',
      options: ['never'],
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "There should be no space before '}'",
          type: 'ObjectPattern',
          line: 1,
          column: 9
        }
      ]
    },

    // never-objectsInObjects
    {
      code: "var obj = {'foo': {'bar': 1, 'baz': 2}};",
      options: ['never', {'objectsInObjects': true}],
      errors: [
        {
          message: "A space is required before '}'",
          type: 'ObjectExpression',
          line: 1,
          column: 39
        }
      ]
    },
    {
      code: "var obj = {'foo': [1, 2] , 'bar': {'baz': 1, 'qux': 2}};",
      options: ['never', {'objectsInObjects': true}],
      errors: [
        {
          message: "A space is required before '}'",
          type: 'ObjectExpression',
          line: 1,
          column: 55
        }
      ]
    },

    // always & never
    {
      code: 'var obj = {foo: bar, baz: qux};',
      options: ['always'],
      errors: [
        {
          message: "A space is required after '{'",
          type: 'ObjectExpression',
          line: 1,
          column: 11
        },
        {
          message: "A space is required before '}'",
          type: 'ObjectExpression',
          line: 1,
          column: 30
        }
      ]
    },
    {
      code: 'var obj = {foo: bar, baz: qux };',
      options: ['always'],
      errors: [
        {
          message: "A space is required after '{'",
          type: 'ObjectExpression',
          line: 1,
          column: 11
        }
      ]
    },
    {
      code: 'var obj = { foo: bar, baz: qux};',
      options: ['always'],
      errors: [
        {
          message: "A space is required before '}'",
          type: 'ObjectExpression',
          line: 1,
          column: 31
        }
      ]
    },
    {
      code: 'var obj = { foo: bar, baz: qux };',
      options: ['never'],
      errors: [
        {
          message: "There should be no space after '{'",
          type: 'ObjectExpression',
          line: 1,
          column: 11
        },
        {
          message: "There should be no space before '}'",
          type: 'ObjectExpression',
          line: 1,
          column: 32
        }
      ]
    },
    {
      code: 'var obj = {foo: bar, baz: qux };',
      options: ['never'],
      errors: [
        {
          message: "There should be no space before '}'",
          type: 'ObjectExpression',
          line: 1,
          column: 31
        }
      ]
    },
    {
      code: 'var obj = { foo: bar, baz: qux};',
      options: ['never'],
      errors: [
        {
          message: "There should be no space after '{'",
          type: 'ObjectExpression',
          line: 1,
          column: 11
        }
      ]
    },
    {
      code: 'var obj = { foo: { bar: quxx}, baz: qux};',
      options: ['never'],
      errors: [
        {
          message: "There should be no space after '{'",
          type: 'ObjectExpression',
          line: 1,
          column: 11
        },
        {
          message: "There should be no space after '{'",
          type: 'ObjectExpression',
          line: 1,
          column: 18
        }
      ]
    },
    {
      code: 'var obj = {foo: {bar: quxx }, baz: qux };',
      options: ['never'],
      errors: [
        {
          message: "There should be no space before '}'",
          type: 'ObjectExpression',
          line: 1,
          column: 28
        },
        {
          message: "There should be no space before '}'",
          type: 'ObjectExpression',
          line: 1,
          column: 40
        }
      ]
    },
    {
      code: 'export const thing = {value: 1 };',
      parserOptions: parserOptions,
      options: ['always'],
      errors: [
        {
          message: "A space is required after '{'",
          type: 'ObjectExpression',
          line: 1,
          column: 22
        }
      ]
    },

    // destructuring
    {
      code: 'var {x, y} = y',
      parserOptions: { ecmaVersion: 6 },
      options: ['always'],
      errors: [
        {
          message: "A space is required after '{'",
          type: 'ObjectPattern',
          line: 1,
          column: 5
        },
        {
          message: "A space is required before '}'",
          type: 'ObjectPattern',
          line: 1,
          column: 10
        }
      ]
    },
    {
      code: 'var { x, y} = y',
      parserOptions: { ecmaVersion: 6 },
      options: ['always'],
      errors: [
        {
          message: "A space is required before '}'",
          type: 'ObjectPattern',
          line: 1,
          column: 11
        }
      ]
    },
    {
      code: 'var { x, y } = y',
      parserOptions: { ecmaVersion: 6 },
      options: ['never'],
      errors: [
        {
          message: "There should be no space after '{'",
          type: 'ObjectPattern',
          line: 1,
          column: 5
        },
        {
          message: "There should be no space before '}'",
          type: 'ObjectPattern',
          line: 1,
          column: 12
        }
      ]
    },
    {
      code: 'var {x, y } = y',
      parserOptions: { ecmaVersion: 6 },
      options: ['never'],
      errors: [
        {
          message: "There should be no space before '}'",
          type: 'ObjectPattern',
          line: 1,
          column: 11
        }
      ]
    },
    {
      code: 'var { x=10} = y',
      parserOptions: { ecmaVersion: 6 },
      options: ['always'],
      errors: [
        {
          message: "A space is required before '}'",
          type: 'ObjectPattern',
          line: 1,
          column: 11
        }
      ]
    },
    {
      code: 'var {x=10 } = y',
      parserOptions: { ecmaVersion: 6 },
      options: ['always'],
      errors: [
        {
          message: "A space is required after '{'",
          type: 'ObjectPattern',
          line: 1,
          column: 5
        }
      ]
    },

    // never - arraysInObjects
    {
      code: "var obj = {'foo': [1, 2]};",
      options: ['never', {'arraysInObjects': true}],
      errors: [
        {
          message: "A space is required before '}'",
          type: 'ObjectExpression'
        }
      ]
    },
    {
      code: "var obj = {'foo': [1, 2] , 'bar': ['baz', 'qux']};",
      options: ['never', {'arraysInObjects': true}],
      errors: [
        {
          message: "A space is required before '}'",
          type: 'ObjectExpression'
        }
      ]
    }
  ]
})
