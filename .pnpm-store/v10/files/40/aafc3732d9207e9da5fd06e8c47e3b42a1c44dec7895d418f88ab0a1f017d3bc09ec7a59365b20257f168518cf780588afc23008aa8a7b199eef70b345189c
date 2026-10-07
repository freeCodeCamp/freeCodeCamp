# process

```require('process');``` just like any other module.

Works in node.js and browsers via the browser.js shim provided with the module.

## browser implementation

The goal of this module is not to be a full-fledged alternative to the builtin process module. This module mostly exists to provide the nextTick functionality and little more. We keep this module lean because it will often be included by default by tools like browserify when it detects a module has used the `process` global.

It also exposes a "browser" member (i.e. `process.browser`) which is `true` in this implementation but `undefined` in node. This can be used in isomorphic code that adjusts it's behavior depending on which environment it's running in. 

If you are looking to provide other process methods, I suggest you monkey patch them onto the process global in your app. A list of user created patches is below.

* [hrtime](https://github.com/kumavis/browser-process-hrtime)
* [stdout](https://github.com/kumavis/browser-stdout)

## package manager notes

If you are writing a bundler to package modules for client side use, make sure you use the ```browser``` field hint in package.json.

See https://gist.github.com/4339901 for details.

The [browserify](https://github.com/substack/node-browserify) module will properly handle this field when bundling your files.


