# ansistyles [![build status](https://secure.travis-ci.org/thlorenz/ansistyles.png)](http://next.travis-ci.org/thlorenz/ansistyles)

Functions that surround a string with ansistyle codes so it prints in style.

In case you need colors, like `red`, have a look at [ansicolors](https://github.com/thlorenz/ansicolors).

## Installation

    npm install ansistyles

## Usage

```js
var styles = require('ansistyles');

console.log(styles.bright('hello world'));    // prints hello world in 'bright' white
console.log(styles.underline('hello world')); // prints hello world underlined
console.log(styles.inverse('hello world'));   // prints hello world black on white
```

## Combining with ansicolors

Get the ansicolors module:

    npm install ansicolors

```js
var styles = require('ansistyles')
  , colors = require('ansicolors');

  console.log(
    // prints hello world underlined in blue on a green background
    colors.bgGreen(colors.blue(styles.underline('hello world'))) 
  );
```

## Tests

Look at the [tests](https://github.com/thlorenz/ansistyles/blob/master/test/ansistyles.js) to see more examples and/or run them via: 

    npm explore ansistyles && npm test

## More Styles

As you can see from [here](https://github.com/thlorenz/ansistyles/blob/master/ansistyles.js#L4-L15), more styles are available,
but didn't have any effect on the terminals that I tested on Mac Lion and Ubuntu Linux.

I included them for completeness, but didn't show them in the examples because they seem to have no effect.

### reset

A style reset function is also included, please note however that this is not nestable.

Therefore the below only underlines `hell` only, but not `world`.

```js
console.log(styles.underline('hell' + styles.reset('o') + ' world'));
```

It is essentially the same as:

```js
console.log(styles.underline('hell') + styles.reset('') + 'o world');
```



## Alternatives

**ansistyles** tries to meet simple use cases with a very simple API. However, if you need a more powerful ansi formatting tool, 
I'd suggest to look at the [features](https://github.com/TooTallNate/ansi.js#features) of the [ansi module](https://github.com/TooTallNate/ansi.js).
