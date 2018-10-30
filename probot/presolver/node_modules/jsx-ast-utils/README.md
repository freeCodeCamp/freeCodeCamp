<p align="center">
  <a href="https://travis-ci.org/evcohen/jsx-ast-utils">
    <img src="https://api.travis-ci.org/evcohen/jsx-ast-utils.svg?branch=master"
         alt="build status">
  </a>
  <a href="https://npmjs.org/package/jsx-ast-utils">
    <img src="https://img.shields.io/npm/v/jsx-ast-utils.svg"
         alt="npm version">
  </a>
  <a href="https://github.com/evcohen/jsx-ast-utils/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/jsx-ast-utils.svg"
         alt="license">
  </a>
  <a href='https://coveralls.io/github/evcohen/jsx-ast-utils?branch=master'>
    <img src='https://coveralls.io/repos/github/evcohen/jsx-ast-utils/badge.svg?branch=master' alt='Coverage Status' />
  </a>
  <a href='https://npmjs.org/package/jsx-ast-utils'>
    <img src='https://img.shields.io/npm/dt/jsx-ast-utils.svg'
    alt='Total npm downloads' />
  </a>
</p>

# jsx-ast-utils

AST utility module for statically analyzing JSX.

## Installation
```sh
$ npm i jsx-ast-utils --save
```

## Usage
This is a utility module to evaluate AST objects for JSX syntax. This can be super useful when writing linting rules for JSX code. It was originally in the code for [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y), however I thought it could be useful to be extracted and maintained separately so **you** could write new interesting rules to statically analyze JSX.

### ESLint example
```js
import { hasProp } from 'jsx-ast-utils';
// OR: var hasProp = require('jsx-ast-utils').hasProp;
// OR: const hasProp = require('jsx-ast-utils/hasProp');
// OR: import hasProp from 'jsx-ast-utils/hasProp';

module.exports = context => ({
  JSXOpeningElement: node => {
    const onChange = hasProp(node.attributes, 'onChange');

    if (onChange) {
      context.report({
        node,
        message: `No onChange!`
      });
    }
  }
});
```

## API
### AST Resources
1. [JSX spec](https://github.com/facebook/jsx/blob/master/AST.md)
2. [JS spec](https://github.com/estree/estree/blob/master/spec.md)

### hasProp
```js
hasProp(props, prop, options);
```
Returns boolean indicating whether an prop exists as an attribute on a JSX element node.

#### Props
Object - The attributes on the visited node. (Usually `node.attributes`).
#### Prop
String - A string representation of the prop you want to check for existence.
#### Options
Object - An object representing options for existence checking
  1. `ignoreCase` - automatically set to `true`.
  2. `spreadStrict` - automatically set to `true`. This means if spread operator exists in
     props, it will assume the prop you are looking for is not in the spread.
     Example: `<div {...props} />` looking for specific prop here will return false if `spreadStrict` is `true`.

<hr />

### hasAnyProp

```js
hasAnyProp(props, prop, options);
```
Returns a boolean indicating if **any** of props in `prop` argument exist on the node.

#### Props
Object - The attributes on the visited node. (Usually `node.attributes`).
#### Prop
Array<String> - An array of strings representing the props you want to check for existence.
#### Options
Object - An object representing options for existence checking
  1. `ignoreCase` - automatically set to `true`.
  2. `spreadStrict` - automatically set to `true`. This means if spread operator exists in
     props, it will assume the prop you are looking for is not in the spread.
     Example: `<div {...props} />` looking for specific prop here will return false if `spreadStrict` is `true`.

<hr />

### hasEveryProp

```js
hasEveryProp(props, prop, options);
```
Returns a boolean indicating if **all** of props in `prop` argument exist on the node.

#### Props
Object - The attributes on the visited node. (Usually `node.attributes`).
#### Prop
Array<String> - An array of strings representing the props you want to check for existence.
#### Options
Object - An object representing options for existence checking
 1. `ignoreCase` - automatically set to `true`.
 2. `spreadStrict` - automatically set to `true`. This means if spread operator exists in
    props, it will assume the prop you are looking for is not in the spread.
    Example: `<div {...props} />` looking for specific prop here will return false if `spreadStrict` is `true`.

<hr />

### getProp

```js
getProp(props, prop, options);
```
Returns the JSXAttribute itself or undefined, indicating the prop is not present on the JSXOpeningElement.

#### Props
Object - The attributes on the visited node. (Usually `node.attributes`).
#### Prop
String - A string representation of the prop you want to check for existence.
#### Options
Object - An object representing options for existence checking
  1. `ignoreCase` - automatically set to `true`.

<hr />

### elementType
```js
elementType(node)
```
Returns the tagName associated with a JSXElement.

#### Node
Object - The visited JSXElement node object.

<hr />

### getPropValue

```js
getPropValue(prop);
```
Returns the value of a given attribute. Different types of attributes have their associated values in different properties on the object.

This function should return the most *closely* associated value with the intention of the JSX.

#### Prop
Object - The JSXAttribute collected by AST parser.

<hr />

### getLiteralPropValue

```js
getLiteralPropValue(prop);
```
Returns the value of a given attribute. Different types of attributes have their associated values in different properties on the object.

This function should return a value only if we can extract a literal value from its attribute (i.e. values that have generic types in JavaScript - strings, numbers, booleans, etc.)

#### Prop
Object - The JSXAttribute collected by AST parser.

<hr />

### propName

```js
propName(prop);
```
Returns the name associated with a JSXAttribute. For example, given `<div foo="bar" />` and the JSXAttribute for `foo`, this will return the string `"foo"`.

#### Prop
Object - The JSXAttribute collected by AST parser.

### eventHandlers

```js
console.log(eventHandlers);
/*
[
  'onCopy',
  'onCut',
  'onPaste',
  'onCompositionEnd',
  'onCompositionStart',
  'onCompositionUpdate',
  'onKeyDown',
  'onKeyPress',
  'onKeyUp',
  'onFocus',
  'onBlur',
  'onChange',
  'onInput',
  'onSubmit',
  'onClick',
  'onContextMenu',
  'onDblClick',
  'onDoubleClick',
  'onDrag',
  'onDragEnd',
  'onDragEnter',
  'onDragExit',
  'onDragLeave',
  'onDragOver',
  'onDragStart',
  'onDrop',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onMouseOut',
  'onMouseOver',
  'onMouseUp',
  'onSelect',
  'onTouchCancel',
  'onTouchEnd',
  'onTouchMove',
  'onTouchStart',
  'onScroll',
  'onWheel',
  'onAbort',
  'onCanPlay',
  'onCanPlayThrough',
  'onDurationChange',
  'onEmptied',
  'onEncrypted',
  'onEnded',
  'onError',
  'onLoadedData',
  'onLoadedMetadata',
  'onLoadStart',
  'onPause',
  'onPlay',
  'onPlaying',
  'onProgress',
  'onRateChange',
  'onSeeked',
  'onSeeking',
  'onStalled',
  'onSuspend',
  'onTimeUpdate',
  'onVolumeChange',
  'onWaiting',
  'onLoad',
  'onError',
  'onAnimationStart',
  'onAnimationEnd',
  'onAnimationIteration',
  'onTransitionEnd',
]
*/
```

Contains a flat list of common event handler props used in JSX to attach behaviors
to DOM events.

#### eventHandlersByType

The same list as `eventHandlers`, grouped into types.

```js
console.log(eventHandlersByType);
/*
{
  clipboard: [ 'onCopy', 'onCut', 'onPaste' ],
  composition: [ 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate' ],
  keyboard: [ 'onKeyDown', 'onKeyPress', 'onKeyUp' ],
  focus: [ 'onFocus', 'onBlur' ],
  form: [ 'onChange', 'onInput', 'onSubmit' ],
  mouse: [ 'onClick', 'onContextMenu', 'onDblClick', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp' ],
  selection: [ 'onSelect' ],
  touch: [ 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart' ],
  ui: [ 'onScroll' ],
  wheel: [ 'onWheel' ],
  media: [ 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting' ],
  image: [ 'onLoad', 'onError' ],
  animation: [ 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration' ],
  transition: [ 'onTransitionEnd' ],
}
*/
```
