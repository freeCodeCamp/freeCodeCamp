[![Test status](https://api.travis-ci.org/jsbin/loop-protect.svg?branch=master)](https://travis-ci.org/jsbin/loop-protect)

# loop-protect

JS Bin's loop protection implementation as a reusable library.

This code protects use cases where user code includes an infinite loop using a `while`, `for` or `do` loop.  It also prevents infinite loops from being created when a React component references itself.

Note that this does *not* solve the [halting problem](http://en.wikipedia.org/wiki/Halting_problem) but simply rewrites JavaScript (using Babel's AST) wrapping loops with a conditional break. This also *does not* protect against recursive loops in general, just React components.

## Example

With loop protection in place, it means that a user can enter the code as follows on JS Bin, and the final `console.log` will still work.

The code is transformed from this:

```js
while (true) {
  doSomething();
}

console.log('All finished');
```

…to this:

```js
var _LP = Date.now();
while (true) {
  if (Date.now() - _LP > 100)
    break;

  doSomething();
}

console.log('All finished');
```

## Usage

The loop protection is a babel transform, so can be used on the server or in the client.

The previous implementation used an injected library to handle tracking loops - this version does not.

### Example (client) implementation

```js
import Babel from 'babel-standalone';
import protect from 'loop-protect';

const timeout = 100; // defaults to 100ms
Babel.registerPlugin('loopProtection', protect(timeout));

const transform = source => Babel.transform(source, {
  plugins: ['loopProtection'],
}).code;

// rewrite the user's JavaScript to protect loops
var processed = transform(getUserCode());

// run in an iframe, and expose the loopProtect variable under a new name
var iframe = getNewFrame();

// append the iframe to allow our code to run as soon as .close is called
document.body.appendChild(iframe);

// open the iframe and write the code to it
var win = iframe.contentWindow;
var doc = win.document;
doc.open();

doc.write('<script>' + processed + '<' + '/script>');
doc.close();

// code now runs, and if there's an infinite loop, it's cleanly exited
```

### Optional Second Argument

In the above implementation, when code transformed by loop-protect contains an infinite loop, the loop is cleanly exited with a `break` statement, and any code after the loop is executed normally. See [example](https://github.com/jsbin/loop-protect#example). 

But what if you want to log an error to the console to warn the user, or throw an error instead, to stop execution when an infinite loop is encountered? The `protect` function takes an optional second argument which can handle both behaviors. 

1. To log an error to the console, but continue exectution after the loop, pass `protect` a string as a second argument. When an infinite loop is encountered, this string will be logged with `console.error()`, letting the user know of their mistake. 

2. To throw an error and stop execution, pass `protect` a simple callback function which throws a new error. Note that if you define the callback with a `line` parameter, you can use this with a template literal for a more specific error message. For example:

```js
import Babel from 'babel-standalone';
import protect from 'loop-protect';

const callback = line => {
  throw new Error(`Bad loop on line ${line}`);
};

const timeout = 100;
Babel.registerPlugin('loopProtection', protect(timeout, callback));

const transform = source => Babel.transform(source, {
  plugins: ['loopProtection'],
}).code;
  
var processed = transform(getUserCode());

// do more stuff with processed code here
```

With this implementation, the following would result:

```js
while (true) {
  doSomething();
}

console.log('All finished'); // does not execute

// Error: Bad loop on line 1
```

### Optional Third Argument

If your code involves a large, but finite, number of loops, you can use the third
argument, `iterations`, to improve performance.  `Date.now()` is a relatively expensive
operation, and it will only be checked once every `iterations` passes through a loop.

With `iterations = 100` the initial code becomes

```js
var _LPC = 1;
var _LP = Date.now();
while (true) {
  if (_LPC++ % 100 === 0 && Date.now() - _LP > 100)
    break;

  doSomething();
}

console.log('All finished');
```

skipping the first `Date.now()` call and only checking if the loop has been
running too long once every 100 passes.

## Contributors

- Author: [Remy Sharp](https://github.com/remy)
- [All contributors](https://github.com/jsbin/loop-protect/graphs/contributors)

## License

MIT / [http://jsbin.mit-license.org](http://jsbin.mit-license.org)
