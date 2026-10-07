# [NWSAPI](http://dperini.github.io/nwsapi/)

Fast CSS Selectors API Engine

![](https://img.shields.io/npm/v/nwsapi.svg?colorB=orange&style=flat) ![](https://img.shields.io/github/tag/dperini/nwsapi.svg?style=flat) ![](https://img.shields.io/npm/dw/nwsapi.svg?style=flat) ![](https://img.shields.io/github/issues/dperini/nwsapi.svg?style=flat)

NWSAPI is the development progress of [NWMATCHER](https://github.com/dperini/nwmatcher) aiming at [Selectors Level 4](https://www.w3.org/TR/selectors-4/) conformance. It has been completely reworked to be easily extended and maintained. It is a right-to-left selector parser and compiler written in pure Javascript with no external dependencies. It was initially thought as a cross browser library to improve event delegation and web page scraping in various frameworks but it has become a popular replacement of the native CSS selection and matching functionality in newer browsers and headless environments.

It uses [regular expressions](https://en.wikipedia.org/wiki/Regular_expression) to parse CSS selector strings and [metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming) to transforms these selector strings into Javascript function resolvers. This process is executed only once for each selector string allowing memoization of the function resolvers and achieving unmatched performances.

## Installation

To include NWSAPI in a standard web page:

```html
<script type="text/javascript" src="nwsapi.js"></script>
```

To include NWSAPI in a standard web page and automatically replace the native QSA:

```html
<script type="text/javascript" src="nwsapi.js" onload="NW.Dom.install()"></script>
```

To use NWSAPI with Node.js:

```
$ npm install nwsapi
```

NWSAPI currently supports browsers (as a global, `NW.Dom`) and headless environments (as a CommonJS module).


## Supported Selectors

Here is a list of all the CSS2/CSS3/CSS4 [Supported selectors](https://github.com/dperini/nwsapi/wiki/CSS-supported-selectors).


## Features and Compliance

You can read more about NWSAPI [features and compliance](https://github.com/dperini/nwsapi/wiki/Features-and-compliance) on the wiki.


## API

### DOM Selection

#### `ancestor( selector, context, callback )`

Returns a reference to the nearest ancestor element matching `selector`, starting at `context`. Returns `null` if no element is found. If `callback` is provided, it is invoked for the matched element.

#### `first( selector, context, callback )`

Returns a reference to the first element matching `selector`, starting at `context`. Returns `null` if no element matches. If `callback` is provided, it is invoked for the matched element.

#### `match( selector, element, callback )`

Returns `true` if `element` matches `selector`, starting at `context`; returns `false` otherwise. If `callback` is provided, it is invoked for the matched element.

#### `select( selector, context, callback )`

Returns an array of all the elements matching `selector`, starting at `context`; returns empty `Array` otherwise. If `callback` is provided, it is invoked for each matching element.


### DOM Helpers

#### `byId( id, from )`

Returns a reference to the first element with ID `id`, optionally filtered to descendants of the element `from`.

#### `byTag( tag, from )`

Returns an array of elements having the specified tag name `tag`, optionally filtered to descendants of the element `from`.

#### `byClass( class, from )`

Returns an array of elements having the specified class name `class`, optionally filtered to descendants of the element `from`.


### Engine Configuration

#### `configure( options )`

The following is the list of currently available configuration options, their default values and descriptions, they are boolean flags that can be set to `true` or `false`:

* `IDS_DUPES`: true  - true to allow using multiple elements having the same id, false to disallow
* `LIVECACHE`: true  - true for caching both results and resolvers, false for caching only resolvers
* `MIXEDCASE`: true  - true to match tag names case insensitive, false to match using case sensitive
* `LOGERRORS`: true  - true to print errors and warnings to the console, false to mute both of them


### Examples on extending the basic functionalities

#### `configure( { <configuration-flag>: [ true | false ] } )`

Disable logging errors/warnings to console, disallow duplicate ids. Example:

```js
NW.Dom.configure( { LOGERRORS: false, IDS_DUPES: false } );
```
NOTE: NW.Dom.configure() without parameters return the current configuration.

#### `registerCombinator( symbol, resolver )`

Registers a new symbol and its matching resolver in the combinators table. Example:

```js
NW.Dom.registerCombinator( '^', 'e.parentElement' );
```

#### `registerOperator( symbol, resolver )`

Registers a new symbol and its matching resolver in the attribute operators table. Example:

```js
NW.Dom.registerOperator( '!=', { p1: '^', p2: '$', p3: 'false' } );
```

#### `registerSelector( name, rexp, func )`

Registers a new selector, the matching RE and the resolver function, in the selectors table. Example:

```js
NW.Dom.registerSelector('Controls', /^\:(control)(.*)/i,
  (function(global) {
    return function(match, source, mode, callback) {
      var status = true;
      source = 'if(/^(button|input|select|textarea)/i.test(e.nodeName)){' + source + '}';
      return { 'source': source, 'status': status };
    };
  })(this));
```
