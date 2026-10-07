/* eslint camelcase: 0 */
const AJV = require('ajv');
const assert = require('assert');
const {User} = require('../user');

const ajv = new AJV({allErrors: true});

// Username
exports.test_username_null = () => {
	const isValid = ajv.validate(User, {
		username: null
	});
	assert.equal(isValid, false);
	assert.equal(ajv.errors.length, 1);
	assert.equal(ajv.errors[0].dataPath, '.username');
	assert.equal(ajv.errors[0].message, 'should be string');
};

exports.test_username_invalid_pattern = () => {
	const isValid = ajv.validate(User, {
		username: '!!!'
	});
	assert.equal(isValid, false);
	assert.equal(ajv.errors.length, 1);
	assert.equal(ajv.errors[0].dataPath, '.username');
	assert.equal(ajv.errors[0].message, 'should match pattern "^[a-z][a-z0-9_-]*$"');
};

exports.test_username_too_short = () => {
	const isValid = ajv.validate(User, {
		username: ''
	});
	assert.equal(isValid, false);
	assert.equal(ajv.errors.length, 2);
	assert.equal(ajv.errors[0].dataPath, '.username');
	assert.equal(ajv.errors[0].message, 'should NOT be shorter than 1 characters');
	assert.equal(ajv.errors[1].dataPath, '.username');
	assert.equal(ajv.errors[1].message, 'should match pattern "^[a-z][a-z0-9_-]*$"');
};

exports.test_username_too_long = () => {
	const isValid = ajv.validate(User, {
		username: 'a'.repeat(50)
	});
	assert.equal(isValid, false);
	assert.equal(ajv.errors.length, 1);
	assert.equal(ajv.errors[0].dataPath, '.username');
	assert.equal(ajv.errors[0].message, 'should NOT be longer than 48 characters');
};

exports.test_username_valid = () => {
	assert(ajv.validate(User, {username: 'n8'}));
	assert(ajv.validate(User, {username: 'rauchg'}));
};

// Name
exports.test_name_too_short = () => {
	const isValid = ajv.validate(User, {
		name: ''
	});
	assert.equal(isValid, false);
	assert.equal(ajv.errors.length, 1);
	assert.equal(ajv.errors[0].dataPath, '.name');
	assert.equal(ajv.errors[0].message, 'should NOT be shorter than 1 characters');
};

exports.test_name_too_long = () => {
	const isValid = ajv.validate(User, {
		name: 'a'.repeat(50)
	});
	assert.equal(isValid, false);
	assert.equal(ajv.errors.length, 1);
	assert.equal(ajv.errors[0].dataPath, '.name');
	assert.equal(ajv.errors[0].message, 'should NOT be longer than 32 characters');
};

exports.test_name_valid = () => {
	assert(ajv.validate(User, {name: 'Nate'}));
};

// BillingChecked
exports.test_billing_checked_null = () => {
	const isValid = ajv.validate(User, {
		billingChecked: null
	});
	assert.equal(isValid, false);
	assert.equal(ajv.errors.length, 1);
	assert.equal(ajv.errors[0].dataPath, '.billingChecked');
	assert.equal(ajv.errors[0].message, 'should be boolean');
};

exports.test_billing_checked_valid = () => {
	assert(ajv.validate(User, {billingChecked: true}));
};

// Avatar
exports.test_avatar_too_short = () => {
	const isValid = ajv.validate(User, {
		avatar: 'abc'
	});
	assert.equal(isValid, false);
	assert.equal(ajv.errors.length, 1);
	assert.equal(ajv.errors[0].dataPath, '.avatar');
	assert.equal(ajv.errors[0].message, 'should NOT be shorter than 40 characters');
};

exports.test_avatar_too_long = () => {
	const isValid = ajv.validate(User, {
		avatar: 'a'.repeat(50)
	});
	assert.equal(isValid, false);
	assert.equal(ajv.errors.length, 1);
	assert.equal(ajv.errors[0].dataPath, '.avatar');
	assert.equal(ajv.errors[0].message, 'should NOT be longer than 40 characters');
};

exports.test_avatar_invalid = () => {
	const isValid = ajv.validate(User, {
		avatar: 'n'.repeat(40)
	});
	assert.equal(isValid, false);
	assert.equal(ajv.errors.length, 1);
	assert.equal(ajv.errors[0].dataPath, '.avatar');
	assert.equal(ajv.errors[0].message, 'should match pattern "^[0-9a-f]+$"');
};

exports.test_avatar_valid = () => {
	assert(ajv.validate(User, {avatar: 'a'.repeat(40)}));
};
