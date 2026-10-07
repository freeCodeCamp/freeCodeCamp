const envKeyToSetting = require('./envKeyToSetting');

const fixtures = [
	[
		'FOO',
		'foo',
	],
	[
		'//npm.pkg.github.com/:_authToken',
		'//npm.pkg.github.com/:_authToken',
	],
	[
		'_authToken',
		'_authToken',
	],
	[
		'//npm.pkg.github.com/:_authtoken',
		'//npm.pkg.github.com/:_authToken',
	],
	[
		'_authtoken',
		'_authToken',
	],
	[
		'//npm.pkg.github.com/:_auth',
		'//npm.pkg.github.com/:_auth',
	],
	[
		'_auth',
		'_auth',
	],
	[
		'//npm.pkg.github.com/:_always_auth',
		'//npm.pkg.github.com/:_always-auth',
	],
	[
		'_always_auth',
		'_always-auth',
	],
	[
		'//pkgs.dev.azure.com/azure-devops-org/_packaging/feed-name/npm/registry/:_authtoken',
		'//pkgs.dev.azure.com/azure-devops-org/_packaging/feed-name/npm/registry/:_authToken',
	],
];

test('envKeyToSetting()', () => {
	for (const [key, expected] of fixtures) {
		expect(envKeyToSetting(key)).toBe(expected);
	}
})
