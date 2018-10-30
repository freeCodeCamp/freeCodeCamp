# deglob [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/standard/deglob/master.svg
[travis-url]: https://travis-ci.org/standard/deglob
[npm-image]: https://img.shields.io/npm/v/deglob.svg
[npm-url]: https://npmjs.org/package/deglob
[downloads-image]: https://img.shields.io/npm/dm/deglob.svg
[downloads-url]: https://npmjs.org/package/deglob
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

Take a list of glob patterns and return an array of file locations, respecting `.gitignore` and allowing for ignore patterns via `package.json`.

Giant swaths of this code were extracted from [standard](https://standardjs.com). It seems useful outside of that tool, so I've attempted to extract it! :)

## Install

```
npm install --save deglob
```

## Usage

```js
var deglob = require('deglob')

deglob(['**/*.js'], function(err, files) {
  files.forEach(function(file) {
    console.log('found file ' + file)
  })
})

// pass in some options to customize!

var path = require('path')
var opts = {
  cwd: path.join(__dirname, 'someDir'),
  useGitIgnore: false,
  usePackageJson: false
}

deglob(['**/*.js'], opts, function(err, files) {
  files.forEach(function(file) {
    console.log('found file ' + file)
  })
})
```

## Ignoring files in package.json
`deglob` will look for a `package.json` file by default and use any ignore patterns defined.

To define patterns in package.json add somthing like this:
```js
"config": {
  "ignore": ['**/*.bad']
}
```
If you do not fancy the `config` key, provide a different one using the `configKey` option.


## Options
Option         | Default       | Description
-------------- | --------      | -------
useGitIgnore   | true          | Turn on/off allowing ignore patterns via `.gitignore`
usePackageJson | true          | Turn on/off allowing ignore patterns via `package.json` config.
configKey      | 'config'      | This is the parent key in `package.json` to look for the `ignore` attribute.
gitIgnoreFile  | '.gitignore'  | Name of the `.gitignore` file look for (probably best to leave it default)
ignore         | []            | List of additional ignore patterns to use
cwd            | process.cwd() | This is the working directory to start the deglobbing

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
