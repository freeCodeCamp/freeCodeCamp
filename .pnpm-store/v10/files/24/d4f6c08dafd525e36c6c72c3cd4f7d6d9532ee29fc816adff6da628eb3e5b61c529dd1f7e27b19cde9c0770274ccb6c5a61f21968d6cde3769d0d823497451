# pretty-error

[![Dependency status](https://david-dm.org/AriaMinaei/pretty-error.svg)](https://david-dm.org/AriaMinaei/pretty-error)
[![Build Status](https://secure.travis-ci.org/AriaMinaei/pretty-error.svg?branch=master)](https://travis-ci.org/AriaMinaei/pretty-error) [![npm](https://img.shields.io/npm/dm/pretty-error.svg)](https://npmjs.org/package/pretty-error)

A small tool to see node.js errors with less clutter:

![screenshot of pretty-error](https://github.com/AriaMinaei/pretty-error/raw/master/docs/images/pretty-error-screenshot.png)

... which is more readable compared to node's unformatted errors:

![screenshot of normal errors](https://github.com/AriaMinaei/pretty-error/raw/master/docs/images/normal-error-screenshot.png)

## Installation

Install with npm:

	$ npm install pretty-error

## Usage and Examples

To see an error rendered with colors, you can do this:

```javascript
var PrettyError = require('pretty-error');
var pe = new PrettyError();

var renderedError = pe.render(new Error('Some error message'));
console.log(renderedError);
```

Of course, you can render caught exceptions too:

```javascript
try {
   doSomethingThatThrowsAnError();
} catch (error) {
   console.log(pe.render(error));
}
```

But if you want pretty-error to render all errors, there is a shortcut for it:

```javascript
require('pretty-error').start();
```

... which is essentially equal to:

```javascript
var PrettyError = require('pretty-error');

// instantiate PrettyError, which can then be used to render error objects
var pe = new PrettyError();
pe.start();
```

You can also preload pretty-error into your code using node's [`--require`](https://nodejs.org/api/cli.html#cli_r_require_module) argument:

```
$ node --require pretty-error/start your-module.js
```

## How it Works

PrettyError turns error objects into something similar to an html document, and then uses [RenderKid](https://github.com/AriaMinaei/renderkid) to render the document using simple html/css-like commands. This allows PrettyError to be themed using simple css-like declarations.

## Theming

PrettyError's default theme is a bunch of simple css-like rules. [Here](https://github.com/AriaMinaei/pretty-error/blob/master/src/defaultStyle.coffee) is the source of the default theme.

Since the default theme is all css, you can customize it to fit your taste. Let's do a minimal one:

```javascript
// the start() shortcut returns an instance of PrettyError ...
pe = require('pretty-error').start();

// ... which we can then use to customize like this:
pe.appendStyle({
   // this is a simple selector to the element that says 'Error'
   'pretty-error > header > title > kind': {
      // which we can hide:
      display: 'none'
   },

   // the 'colon' after 'Error':
   'pretty-error > header > colon': {
      // we hide that too:
      display: 'none'
   },

   // our error message
   'pretty-error > header > message': {
      // let's change its color:
      color: 'bright-white',

      // we can use black, red, green, yellow, blue, magenta, cyan, white,
      // grey, bright-red, bright-green, bright-yellow, bright-blue,
      // bright-magenta, bright-cyan, and bright-white

      // we can also change the background color:
      background: 'cyan',

      // it understands paddings too!
      padding: '0 1' // top/bottom left/right
   },

   // each trace item ...
   'pretty-error > trace > item': {
      // ... can have a margin ...
      marginLeft: 2,

      // ... and a bullet character!
      bullet: '"<grey>o</grey>"'

      // Notes on bullets:
      //
      // The string inside the quotation mark gets used as the character
      // to show for the bullet point.
      //
      // You can set its color/background color using tags.
      //
      // This example sets the background color to white, and the text color
      // to cyan, the character will be a hyphen with a space character
      // on each side:
      // example: '"<bg-white><cyan> - </cyan></bg-white>"'
      //
      // Note that we should use a margin of 3, since the bullet will be
      // 3 characters long.
   },

   'pretty-error > trace > item > header > pointer > file': {
      color: 'bright-cyan'
   },

   'pretty-error > trace > item > header > pointer > colon': {
      color: 'cyan'
   },

   'pretty-error > trace > item > header > pointer > line': {
      color: 'bright-cyan'
   },

   'pretty-error > trace > item > header > what': {
      color: 'bright-white'
   },

   'pretty-error > trace > item > footer > addr': {
      display: 'none'
   }
});
```

This is how our minimal theme will look like: ![screenshot of our custom theme](https://github.com/AriaMinaei/pretty-error/raw/master/docs/images/custom-theme-screenshot.png)

Read [RenderKid](https://github.com/AriaMinaei/renderkid)'s docs to learn about all the css rules that are supported.

## Customization

There are a few methods to help you customize the contents of your error logs.

Let's instantiate first:

```javascript
PrettyError = require('pretty-error');
pe = new PrettyError();

// or:
pe = require('pretty-error').start();
```

#### Shortening paths

You might want to substitute long paths with shorter, more readable aliases:

```javascript
pe.alias('E:/open-source/theatrejs/lib', '(Theare.js)');
```

#### Skipping packages

You might want to skip trace lines that belong to specific packages (chai, when, socket.io):

```javascript
pe.skipPackage('chai', 'when', 'socket.io');
```

#### Skipping node files

```javascript
// this will skip node.js, path.js, event.js, etc.
pe.skipNodeFiles();
```

#### Skipping paths

```javascript
pe.skipPath('/home/dir/someFile.js');
```

#### Skipping by callback

You can customize which trace lines get logged and which won't:
```javascript
pe.skip(function(traceLine, lineNumber){
   // if we know which package this trace line comes from, and it isn't
   // our 'demo' package ...
   if (typeof traceLine.packageName !== 'undefined' && traceLine.packageName !== 'demo') {
      // then skip this line
      return true;
   }

   // You can console.log(traceLine) to see all of it's properties.
   // Don't expect all these properties to be present, and don't assume
   // that our traceLine is always an object.
});
```

#### Modifying each trace line's contents

```javascript
pe.filter(function(traceLine, lineNumber){
   // the 'what' clause is something like:
   // 'DynamicTimeline.module.exports.DynamicTimeline._verifyProp'
   if (typeof traceLine.what !== 'undefined'){

      // we can shorten it with a regex:
      traceLine.what = traceLine.what.replace(
         /(.*\.module\.exports\.)(.*)/, '$2'
      );
   }
});
```

## Disabling colors
```javascript
pe.withoutColors(); // Errors will be rendered without coloring
```

## Integrating with frameworks

PrettyError is very simple to set up, so it should be easy to use within other frameworks.

### Integrating with [express](https://github.com/visionmedia/express)

Most frameworks such as express, catch errors automatically and provide a mechanism to handle those errors. Here is an example of how you can use PrettyError to log unhandled errors in express:

```javascript
// this is app.js

var express = require('express');
var PrettyError = require('pretty-error');

var app = express();

app.get('/', function(req, res) {
   // this will throw an error:
   var a = b;
});

var server = app.listen(3000, function(){
   console.log('Server started \n');
});


// we can now instantiaite Prettyerror:
pe = new PrettyError();

// and use it for our app's error handler:
app.use(function(err, req, res, next){
   console.log(pe.render(err));
   next();
});

// we can optionally configure prettyError to simplify the stack trace:

pe.skipNodeFiles(); // this will skip events.js and http.js and similar core node files
pe.skipPackage('express'); // this will skip all the trace lines about express` core and sub-modules
```

## Troubleshooting

`PrettyError.start()` modifies the stack traces of all errors thrown anywhere in your code, so it could potentially break packages that rely on node's original stack traces. I've only encountered this problem once, and it was with BlueBird when `Promise.longStackTraces()` was on.

In order to avoid this problem, it's better to not use `PrettyError.start()` and instead, manually catch errors and render them with PrettyError:

```javascript
var PrettyError = require('pretty-error');
var pe = new PrettyError();

// To render exceptions thrown in non-promies code:
process.on('uncaughtException', function(error){
   console.log(pe.render(error));
});

// To render unhandled rejections created in BlueBird:
process.on('unhandledRejection', function(reason){
   console.log("Unhandled rejection");
   console.log(pe.render(reason));
});

// While PrettyError.start() works out of the box with when.js` unhandled rejections,
// now that wer'e manually rendering errors, we have to instead use npmjs.org/packages/pretty-monitor
// to handle when.js rejections.

```

The only drawback with this approach is that exceptions thrown in the first tick are not prettified. To fix that, you can delay your application's startup for one tick:

```javascript
// (continued form above)

throw new Error(); // not prettified
process.nextTick(function(){
   throw new Error(); // prettified
});

```

## License

MIT
