var assert = require('assert')
var safeRegex = require('safe-regex')

var validator = require('./')

var invalid4 = require('./fixtures/invalid-ipv4-addresses')
var invalid6 = require('./fixtures/invalid-ipv6-addresses')
var valid4 = require('./fixtures/valid-ipv4-addresses')
var valid6 = require('./fixtures/valid-ipv6-addresses')

var validate = validator()
var validate4 = validator({ version: 4 })
var validate6 = validator({ version: 6 })

var i

for (i = 0; i < validator.__all_regexes__.length; i++) assert.ok(safeRegex(validator.__all_regexes__[i]), validator.__all_regexes__[i] + ' should be safe regex')

for (i = 0; i < invalid4.length; i++) assert.strictEqual(validate4(invalid4[i]), false, invalid4[i] + ' should be invalid IPv4')
for (i = 0; i < invalid6.length; i++) assert.strictEqual(validate6(invalid6[i]), false, invalid6[i] + ' should be invalid IPv6')

for (i = 0; i < valid4.length; i++) assert.strictEqual(validate(valid4[i]), true, valid4[i] + ' should be valid IP')
for (i = 0; i < valid4.length; i++) assert.strictEqual(validate4(valid4[i]), true, valid4[i] + ' should be valid IPv4')

for (i = 0; i < valid6.length; i++) assert.strictEqual(validate(valid6[i]), true, valid6[i] + ' should be valid IP')
for (i = 0; i < valid6.length; i++) assert.strictEqual(validate6(valid6[i]), true, valid6[i] + ' should be valid IPv6')
