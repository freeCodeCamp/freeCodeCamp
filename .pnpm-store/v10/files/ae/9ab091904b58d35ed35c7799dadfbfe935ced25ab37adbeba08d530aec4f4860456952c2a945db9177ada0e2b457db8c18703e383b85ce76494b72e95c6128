# ZEIT's schemas

[![Build Status](https://circleci.com/gh/zeit/schemas.svg?&style=shield)](https://circleci.com/gh/zeit/schemas)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/zeit)

The schemas contained within this package are used all across the ZEIT ecosystem to validate config files, requests to APIs and more. It ensures users always send just the right data.

## Why?

It is important that these schemas stay in sync between projects, so that the validations are always performed in the same way for the same kind of object.

The files located in this repository are `.js` and not `.json`, because parsing JSON takes a little bit longer.

## Usage

To get started, pick one of the schemas in this repository and load it:

```js
const schema = require('@zeit/schemas/deployment/config');
```

Next, set up [AJV](https://github.com/epoberezkin/ajv) (the validator) and run the schema through it:

```js
const AJV = require('ajv');

const ajv = new AJV({ allErrors: true });
const isValid = ajv.validate(schema, <object-to-validate>);

if (!isValid) {
	console.error(`The following entries are wrong: ${JSON.stringify(ajv.errors)}`);
}
```

That is all! :tada:

## Contributing

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link the package to the global module directory: `npm link`
3. Within the module you want to test your local development instance of `@zeit/schemas`, just link it to the dependencies: `npm link @zeit/schemas` and load it!

## Author

Leo Lamprecht ([@notquiteleo](https://twitter.com/notquiteleo)) - [ZEIT](https://zeit.co)
