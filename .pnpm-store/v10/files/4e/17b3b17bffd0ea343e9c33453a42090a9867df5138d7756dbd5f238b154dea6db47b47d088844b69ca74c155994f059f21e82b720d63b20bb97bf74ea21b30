# latest-version

> Get the latest version of an npm package

Fetches the version directly from the registry instead of depending on the massive [npm](https://github.com/npm/npm/blob/8b5e7b6ae5b4cd2d7d62eaf93b1428638b387072/package.json#L37-L85) module like the [latest](https://github.com/bahamas10/node-latest) module does.

## Install

```sh
npm install latest-version
```

## Usage

```js
import latestVersion from 'latest-version';

console.log(await latestVersion('ava'));
//=> '0.18.0'

console.log(await latestVersion('@sindresorhus/df'));
//=> '1.0.1'

// Also works with semver ranges and dist-tags
console.log(await latestVersion('npm', {version: 'latest-5'}));
//=> '5.5.1'
```

## Related

- [latest-version-cli](https://github.com/sindresorhus/latest-version-cli) - CLI for this module
- [package-json](https://github.com/sindresorhus/package-json) - Get the package.json of a package from the npm registry

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-latest-version?utm_source=npm-latest-version&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
