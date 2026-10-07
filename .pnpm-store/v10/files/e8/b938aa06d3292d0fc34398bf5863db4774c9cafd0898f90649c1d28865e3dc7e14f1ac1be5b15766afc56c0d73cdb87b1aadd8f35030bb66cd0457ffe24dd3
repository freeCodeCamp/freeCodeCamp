# hoist-non-react-statics

[![NPM version](https://badge.fury.io/js/hoist-non-react-statics.svg)](http://badge.fury.io/js/hoist-non-react-statics)
[![Build Status](https://img.shields.io/travis/mridgway/hoist-non-react-statics.svg)](https://travis-ci.org/mridgway/hoist-non-react-statics)
[![Coverage Status](https://img.shields.io/coveralls/mridgway/hoist-non-react-statics.svg)](https://coveralls.io/r/mridgway/hoist-non-react-statics?branch=master)
[![Dependency Status](https://img.shields.io/david/mridgway/hoist-non-react-statics.svg)](https://david-dm.org/mridgway/hoist-non-react-statics)
[![devDependency Status](https://img.shields.io/david/dev/mridgway/hoist-non-react-statics.svg)](https://david-dm.org/mridgway/hoist-non-react-statics#info=devDependencies)

Copies non-react specific statics from a child component to a parent component. 
Similar to `Object.assign`, but with React static keywords blacklisted from
being overridden.

```bash
$ npm install --save hoist-non-react-statics
```

## Usage

```js
import hoistNonReactStatics from 'hoist-non-react-statics';

hoistNonReactStatics(targetComponent, sourceComponent);
```

If you have specific statics that you don't want to be hoisted, you can also pass a third parameter to exclude them:

```js
hoistNonReactStatics(targetComponent, sourceComponent, { myStatic: true, myOtherStatic: true });
```

## What does this module do?

See this [explanation](https://facebook.github.io/react/docs/higher-order-components.html#static-methods-must-be-copied-over) from the React docs.

## Compatible React Versions

Please use latest 3.x. Versions prior to 3.x will not support ForwardRefs.

| hoist-non-react-statics Version | Compatible React Version |
|--------------------------|-------------------------------|
| 3.x | 0.13-16.x With ForwardRef Support |
| 2.x | 0.13-16.x Without ForwardRef Support |
| 1.x | 0.13-16.2 |

## Browser Support

This package uses `Object.defineProperty` which has a broken implementation in IE8. In order to use this package in IE8, you will need a polyfill that fixes this method.

## License
This software is free to use under the Yahoo Inc. BSD license.
See the [LICENSE file][] for license text and copyright information.

[LICENSE file]: https://github.com/mridgway/hoist-non-react-statics/blob/master/LICENSE.md

Third-party open source code used are listed in our [package.json file]( https://github.com/mridgway/hoist-non-react-statics/blob/master/package.json).
