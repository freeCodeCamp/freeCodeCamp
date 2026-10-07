# normalize-package-data [![Build Status](https://travis-ci.org/npm/normalize-package-data.png?branch=master)](https://travis-ci.org/npm/normalize-package-data)

normalize-package-data exports a function that normalizes package metadata. This data is typically found in a package.json file, but in principle could come from any source - for example the npm registry.

normalize-package-data is used by [read-package-json](https://npmjs.org/package/read-package-json) to normalize the data it reads from a package.json file. In turn, read-package-json is used by [npm](https://npmjs.org/package/npm) and various npm-related tools.

## Installation

```
npm install normalize-package-data
```

## Usage

Basic usage is really simple. You call the function that normalize-package-data exports. Let's call it `normalizeData`.

```javascript
normalizeData = require('normalize-package-data')
packageData = require("./package.json")
normalizeData(packageData)
// packageData is now normalized
```

#### Strict mode

You may activate strict validation by passing true as the second argument.

```javascript
normalizeData = require('normalize-package-data')
packageData = require("./package.json")
normalizeData(packageData, true)
// packageData is now normalized
```

If strict mode is activated, only Semver 2.0 version strings are accepted. Otherwise, Semver 1.0 strings are accepted as well. Packages must have a name, and the name field must not have contain leading or trailing whitespace.

#### Warnings

Optionally, you may pass a "warning" function. It gets called whenever the `normalizeData` function encounters something that doesn't look right. It indicates less than perfect input data.

```javascript
normalizeData = require('normalize-package-data')
packageData = require("./package.json")
warnFn = function(msg) { console.error(msg) }
normalizeData(packageData, warnFn)
// packageData is now normalized. Any number of warnings may have been logged.
```

You may combine strict validation with warnings by passing `true` as the second argument, and `warnFn` as third.

When `private` field is set to `true`, warnings will be suppressed.

### Potential exceptions

If the supplied data has an invalid name or version vield, `normalizeData` will throw an error. Depending on where you call `normalizeData`, you may want to catch these errors so can pass them to a callback.

## What normalization (currently) entails

* The value of `name` field gets trimmed (unless in strict mode).
* The value of the `version` field gets cleaned by `semver.clean`. See [documentation for the semver module](https://github.com/isaacs/node-semver).
* If `name` and/or `version` fields are missing, they are set to empty strings.
* If `files` field is not an array, it will be removed.
* If `bin` field is a string, then `bin` field will become an object with `name` set to the value of the `name` field, and `bin` set to the original string value.
* If `man` field is a string, it will become an array with the original string as its sole member.
* If `keywords` field is string, it is considered to be a list of keywords separated by one or more white-space characters. It gets converted to an array by splitting on `\s+`.
* All people fields (`author`, `maintainers`, `contributors`) get converted into objects with name, email and url properties.
* If `bundledDependencies` field (a typo) exists and `bundleDependencies` field does not, `bundledDependencies` will get renamed to `bundleDependencies`.
* If the value of any of the dependencies fields  (`dependencies`, `devDependencies`, `optionalDependencies`) is a string, it gets converted into an object with familiar `name=>value` pairs.
* The values in `optionalDependencies` get added to `dependencies`. The `optionalDependencies` array is left untouched.
* As of v2: Dependencies that point at known hosted git providers (currently: github, bitbucket, gitlab) will have their URLs canonicalized, but protocols will be preserved.
* As of v2: Dependencies that use shortcuts for hosted git providers (`org/proj`, `github:org/proj`, `bitbucket:org/proj`, `gitlab:org/proj`, `gist:docid`) will have the shortcut left in place. (In the case of github, the `org/proj` form will be expanded to `github:org/proj`.) THIS MARKS A BREAKING CHANGE FROM V1, where the shorcut was previously expanded to a URL.
* If `description` field does not exist, but `readme` field does, then (more or less) the first paragraph of text that's found in the readme is taken as value for `description`.
* If `repository` field is a string, it will become an object with `url` set to the original string value, and `type` set to `"git"`.
* If `repository.url` is not a valid url, but in the style of "[owner-name]/[repo-name]", `repository.url` will be set to git+https://github.com/[owner-name]/[repo-name].git
* If `bugs` field is a string, the value of `bugs` field is changed into an object with `url` set to the original string value.
* If `bugs` field does not exist, but `repository` field points to a repository hosted on GitHub, the value of the `bugs` field gets set to an url in the form of https://github.com/[owner-name]/[repo-name]/issues . If the repository field points to a GitHub Gist repo url, the associated http url is chosen.
* If `bugs` field is an object, the resulting value only has email and url properties. If email and url properties are not strings, they are ignored. If no valid values for either email or url is found, bugs field will be removed.
* If `homepage` field is not a string, it will be removed.
* If the url in the `homepage` field does not specify a protocol, then http is assumed. For example, `myproject.org` will be changed to `http://myproject.org`.
* If `homepage` field does not exist, but `repository` field points to a repository hosted on GitHub, the value of the `homepage` field gets set to an url in the form of https://github.com/[owner-name]/[repo-name]#readme . If the repository field points to a GitHub Gist repo url, the associated http url is chosen.

### Rules for name field

If `name` field is given, the value of the name field must be a string. The string may not:

* start with a period.
* contain the following characters: `/@\s+%`
* contain any characters that would need to be encoded for use in urls.
* resemble the word `node_modules` or `favicon.ico` (case doesn't matter).

### Rules for version field

If `version` field is given, the value of the version field must be a valid *semver* string, as determined by the `semver.valid` method. See [documentation for the semver module](https://github.com/isaacs/node-semver).

### Rules for license field

The `license` field should be a valid *SPDX license expression* or one of the special values allowed by [validate-npm-package-license](https://npmjs.com/package/validate-npm-package-license). See [documentation for the license field in package.json](https://docs.npmjs.com/files/package.json#license).

## Credits

This package contains code based on read-package-json written by Isaac Z. Schlueter. Used with permisson.

## License

normalize-package-data is released under the [BSD 2-Clause License](http://opensource.org/licenses/MIT).  
Copyright (c) 2013 Meryn Stol  
