# ansicolors [![build status](https://secure.travis-ci.org/thlorenz/ansicolors.png)](http://next.travis-ci.org/thlorenz/ansicolors)

Functions that surround a string with ansicolor codes so it prints in color.

## Installation

    npm install ansicolors

## Usage

```js
var colors = require('ansicolors');

// foreground colors
var redHerring = colors.red('herring');
var blueMoon = colors.blue('moon');
var brighBlueMoon = colors.brightBlue('moon');

console.log(redHerring);      // this will print 'herring' in red
console.log(blueMoon);        // this 'moon' in blue
console.log(brightBlueMoon);  // I think you got the idea

// background colors
console.log(colors.bgYellow('printed on yellow background'));
console.log(colors.bgBrightBlue('printed on bright blue background'));

// mixing background and foreground colors
// below two lines have same result (order in which bg and fg are combined doesn't matter)
console.log(colors.bgYellow(colors.blue('printed on yellow background in blue')));
console.log(colors.blue(colors.bgYellow('printed on yellow background in blue')));
```

## Tests

Look at the [tests](https://github.com/thlorenz/ansicolors/blob/master/test/ansicolors.js) to see more examples and/or run them via: 

    npm explore ansicolors && npm test

## Alternatives

**ansicolors** tries to meet simple use cases with a very simple API. However, if you need a more powerful ansi formatting tool, 
I'd suggest to look at the [features](https://github.com/TooTallNate/ansi.js#features) of the [ansi module](https://github.com/TooTallNate/ansi.js).
