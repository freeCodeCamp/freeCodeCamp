# update-check 

This is a very minimal approach to update checking for [globally installed](https://docs.npmjs.com/getting-started/installing-npm-packages-globally) packages.

Because it's so simple, the error surface is very tiny and your user's are guaranteed to receive the update message if there's a new version.

You can read more about the reasoning behind this project [here](https://twitter.com/notquiteleo/status/983193273224200192).

## Usage

Firstly, install the package with [yarn](https://yarnpkg.com/en/)...

```bash
yarn add update-check
```

...or [npm](https://www.npmjs.com/):

```bash
npm install update-check
```

Next, initialize it.

If there's a new update available, the package will return the content of latest version's `package.json` file:

```js
const pkg = require('./package');
const checkForUpdate = require('update-check');

let update = null;

try {
	update = await checkForUpdate(pkg);
} catch (err) {
	console.error(`Failed to check for updates: ${err}`);
}

if (update) {
	console.log(`The latest version is ${update.latest}. Please update!`);
}
```

That's it! You're done.

### Configuration

If you want, you can also pass options to customize the package's behavior:

```js
const pkg = require('./package');
const checkForUpdate = require('update-check');

let update = null;

try {
	update = await checkForUpdate(pkg, {
		interval: 3600000,  // For how long to cache latest version (default: 1 day)
		distTag: 'canary'   // A npm distribution tag for comparision (default: 'latest')
	});
} catch (err) {
	console.error(`Failed to check for updates: ${err}`);
}

if (update) {
	console.log(`The latest version is ${update.latest}. Please update!`);
}
```

## Contributing

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link the package to the global module directory: `npm link`
3. Within the module you want to test your local development instance of the package, just link it: `npm link update-check`. Instead of the default one from npm, node will now use your clone.

## Author

Leo Lamprecht ([@notquiteleo](https://twitter.com/notquiteleo)) - [ZEIT](https://zeit.co)

