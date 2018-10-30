# detect-indent [![Build Status](https://travis-ci.org/sindresorhus/detect-indent.svg?branch=master)](https://travis-ci.org/sindresorhus/detect-indent)

> Detect the indentation of code

Pass in a string of any kind of text and get the indentation.


## Use cases

- Persisting the indentation when modifying a file.
- Have new content match the existing indentation.
- Setting the right indentation in your editor.


## Install

```
$ npm install --save detect-indent
```


## Usage

Here we modify a JSON file while persisting the indentation:

```js
var fs = require('fs');
var detectIndent = require('detect-indent');

/*
{
    "ilove": "pizza"
}
*/
var file = fs.readFileSync('foo.json', 'utf8');

// tries to detect the indentation and falls back to a default if it can't
var indent = detectIndent(file).indent || '    ';

var json = JSON.parse(file);

json.ilove = 'unicorns';

fs.writeFileSync('foo.json', JSON.stringify(json, null, indent));
/*
{
    "ilove": "unicorns"
}
*/
```


## API

Accepts a string and returns an object with stats about the indentation:  

* `amount` {number} - Amount of indentation, e.g. `2`  
* `type` {string|null} - Type of indentation. Possible values are `tab`, `space` or `null` if no indentation is detected  
* `indent`   {string} - Actual indentation


## Algorithm

The current algorithm looks for the most common difference between two consecutive non-empty lines.

In the following example, even if the 4-space indentation is used 3 times whereas the 2-space one is used 2 times, it is detected as less used because there were only 2 differences with this value instead of 4 for the 2-space indentation:

```css
html {
  box-sizing: border-box;
}

body {
  background: gray;
}

p {
    line-height: 1.3em;
    margin-top: 1em;
    text-indent: 2em;
}
```

[Source.](https://medium.com/@heatherarthur/detecting-code-indentation-eff3ed0fb56b#3918)

Furthermore, if there are more than one most used difference, the indentation with the most lines is selected.

In the following example, the indentation is detected as 4-spaces:

```css
body {
  background: gray;
}

p {
    line-height: 1.3em;
    margin-top: 1em;
    text-indent: 2em;
}
```


## Related

- [detect-indent-cli](https://github.com/sindresorhus/detect-indent-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
