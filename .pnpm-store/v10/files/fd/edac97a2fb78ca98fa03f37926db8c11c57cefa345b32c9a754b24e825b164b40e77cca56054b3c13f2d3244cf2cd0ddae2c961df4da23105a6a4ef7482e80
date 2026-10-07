# FBJS

## Purpose

To make it easier for Facebook to share and consume our own JavaScript. Primarily this will allow us to ship code without worrying too much about where it lives, keeping with the spirit of `@providesModule` but working in the broader JavaScript ecosystem.

**Note:** If you are consuming the code here and you are not also a Facebook project, be prepared for a bad time. APIs may appear or disappear and we may not follow semver strictly, though we will do our best to. This library is being published with our use cases in mind and is not necessarily meant to be consumed by the broader public. In order for us to move fast and ship projects like React and Relay, we've made the decision to not support everybody. We probably won't take your feature requests unless they align with our needs. There will be overlap in functionality here and in other open source projects.

## Usage

Any `@providesModule` modules that are used by your project should be added to `src/`. They will be built and added to `module-map.json`. This file will contain a map from `@providesModule` name to what will be published as `fbjs`. The `module-map.json` file can then be consumed in your own project, along with the [rewrite-modules](https://github.com/facebook/fbjs/blob/master/babel-preset/plugins/rewrite-modules.js) Babel plugin (which we'll publish with this), to rewrite requires in your own project. Then, just make sure `fbjs` is a dependency in your `package.json` and your package will consume the shared code.

```js
// Before transform
const emptyFunction = require('emptyFunction');
// After transform
const emptyFunction = require('fbjs/lib/emptyFunction');
```

See React for an example of this. *Coming soon!*

## Building

It's as easy as just running gulp. This assumes you've also done `npm install -g gulp`.

```sh
gulp
```

Alternatively `npm run build` will also work.

### Layout

Right now these packages represent a subset of packages that we use internally at Facebook. Mostly these are support libraries used when shipping larger libraries, like React and Relay, or products. Each of these packages is in its own directory under `src/`.

### Process

Since we use `@providesModule`, we need to rewrite requires to be relative. Thanks to `@providesModule` requiring global uniqueness, we can do this easily. Eventually we'll try to make this part of the process go away by making more projects use CommonJS.


## TODO

- Flow: Ideally we'd ship our original files with type annotations, however that's not doable right now. We have a couple options:
  - Make sure our transpilation step converts inline type annotations to the comment format.
  - Make our build process also build Flow interface files which we can ship to npm.
- Split into multiple packages. This will be better for more concise versioning, otherwise we'll likely just be shipping lots of major versions.
