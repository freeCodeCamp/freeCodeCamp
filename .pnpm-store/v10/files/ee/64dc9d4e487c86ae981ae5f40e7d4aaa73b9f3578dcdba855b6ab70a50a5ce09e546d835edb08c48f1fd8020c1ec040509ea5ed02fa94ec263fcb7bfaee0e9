
var seed = Math.random();
var n = 'rc'+ seed;
var N = 'RC'+ seed;
var assert = require('assert')


// Basic usage
process.env[n+'_someOpt__a'] = 42
process.env[n+'_someOpt__x__'] = 99
process.env[n+'_someOpt__a__b'] = 186
process.env[n+'_someOpt__a__b__c'] = 243
process.env[n+'_someOpt__x__y'] = 1862
process.env[n+'_someOpt__z'] = 186577

// Should ignore empty strings from orphaned '__'
process.env[n+'_someOpt__z__x__'] = 18629
process.env[n+'_someOpt__w__w__'] = 18629

// Leading '__' should ignore everything up to 'z'
process.env[n+'___z__i__'] = 9999

// should ignore case for config name section.
process.env[N+'_test_upperCase'] = 187

function testPrefix(prefix) {
	var config = require('../')(prefix, {
	  option: true
	})

	console.log('\n\n------ nested-env-vars ------\n',{prefix: prefix}, '\n', config);

	assert.equal(config.option, true)
	assert.equal(config.someOpt.a, 42)
	assert.equal(config.someOpt.x, 99)
	// Should not override `a` once it's been set
	assert.equal(config.someOpt.a/*.b*/, 42)
	// Should not override `x` once it's been set
	assert.equal(config.someOpt.x/*.y*/, 99)
	assert.equal(config.someOpt.z, 186577)
	// Should not override `z` once it's been set
	assert.equal(config.someOpt.z/*.x*/, 186577)
	assert.equal(config.someOpt.w.w, 18629)
	assert.equal(config.z.i, 9999)

	assert.equal(config.test_upperCase, 187)
}

testPrefix(n);
testPrefix(N);
