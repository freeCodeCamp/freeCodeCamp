const util = require('./util.js');

test('parseField', () => {
	process.env.FOO = 'foo_value';
	expect(() => util.parseField({}, '${FOO}', 'tokenHelper')).toThrow('It is not allowed to use environment variables in the value of the tokenHelper');
	expect(() => util.parseField({}, '${FOO}', '//registry.npmjs.org/:tokenHelper')).toThrow('It is not allowed to use environment variables in the value of the //registry.npmjs.org/:tokenHelper');
	expect(util.parseField({}, '${FOO}', 'foo')).toBe('foo_value');
});
