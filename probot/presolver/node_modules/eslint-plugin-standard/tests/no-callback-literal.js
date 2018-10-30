/**
 * @fileoverview Tests for the no-callback-literal rule
 * @author Jamund Ferguson
 * @copyright 2016 Jamund Ferguson. All rights reserved.
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var RuleTester = require('eslint').RuleTester
var rule = require('../rules/no-callback-literal')

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('no-callback-literal', rule, {
  valid: [

    // random stuff
    'horse()',
    'sort(null)',
    'require("zyx")',
    'require("zyx", data)',

    // callback()
    'callback()',
    'callback(undefined)',
    'callback(null)',
    'callback(x)',
    'callback(new Error("error"))',
    'callback(friendly, data)',
    'callback(null, data)',
    'callback(x, data)',
    'callback(new Error("error"), data)',

    // cb()
    'cb()',
    'cb(undefined)',
    'cb(null)',
    'cb(null, "super")',

    // custom callback
    {
      code: 'callback(44); cb("55"); power(new Error("super thing")); power(null);',
      options: [['power']]
    }
  ],

  invalid: [
    // callback
    { code: 'callback(undefined, "snork")', errors: [{ message: 'Expected "null" instead of "undefined" in error position of callback.' }] },
    { code: 'callback(false, "snork")', errors: [{ message: 'Unexpected literal in error position of callback.' }] },
    { code: 'callback("help")', errors: [{ message: 'Unexpected literal in error position of callback.' }] },
    { code: 'callback("help", data)', errors: [{ message: 'Unexpected literal in error position of callback.' }] },

    // cb
    { code: 'cb(undefined, "snork")', errors: [{ message: 'Expected "null" instead of "undefined" in error position of callback.' }] },
    { code: 'cb(false)', errors: [{ message: 'Unexpected literal in error position of callback.' }] },
    { code: 'cb("help")', errors: [{ message: 'Unexpected literal in error position of callback.' }] },
    { code: 'cb("help", data)', errors: [{ message: 'Unexpected literal in error position of callback.' }] },

    // custom callback name
    {
      code: 'next(44)',
      options: [['next']],
      errors: [{ message: 'Unexpected literal in error position of callback.' }]
    }
  ]
})
