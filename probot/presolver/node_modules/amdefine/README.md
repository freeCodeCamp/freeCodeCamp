# amdefine

A module that can be used to implement AMD's define() in Node. This allows you
to code to the AMD API and have the module work in node programs without
requiring those other programs to use AMD.

## Usage

**1)** Update your package.json to indicate amdefine as a dependency:

```javascript
    "dependencies": {
        "amdefine": ">=0.1.0"
    }
```

Then run `npm install` to get amdefine into your project.

**2)** At the top of each module that uses define(), place this code:

```javascript
if (typeof define !== 'function') { var define = require('amdefine')(module) }
```

**Only use these snippets** when loading amdefine. If you preserve the basic structure,
with the braces, it will be stripped out when using the [RequireJS optimizer](#optimizer).

You can add spaces, line breaks and even require amdefine with a local path, but
keep the rest of the structure to get the stripping behavior.

As you may know, because `if` statements in JavaScript don't have their own scope, the var
declaration in the above snippet is made whether the `if` expression is truthy or not. If
RequireJS is loaded then the declaration is superfluous because `define` is already already
declared in the same scope in RequireJS. Fortunately JavaScript handles multiple `var`
declarations of the same variable in the same scope gracefully.

If you want to deliver amdefine.js with your code rather than specifying it as a dependency
with npm, then just download the latest release and refer to it using a relative path:

[Latest Version](https://github.com/jrburke/amdefine/raw/latest/amdefine.js)

### amdefine/intercept

Consider this very experimental.

Instead of pasting the piece of text for the amdefine setup of a `define`
variable in each module you create or consume, you can use `amdefine/intercept`
instead. It will automatically insert the above snippet in each .js file loaded
by Node.

**Warning**: you should only use this if you are creating an application that
is consuming AMD style defined()'d modules that are distributed via npm and want
to run that code in Node.

For library code where you are not sure if it will be used by others in Node or
in the browser, then explicitly depending on amdefine and placing the code
snippet above is suggested path, instead of using `amdefine/intercept`. The
intercept module affects all .js files loaded in the Node app, and it is
inconsiderate to modify global state like that unless you are also controlling
the top level app.

#### Why distribute AMD-style modules via npm?

npm has a lot of weaknesses for front-end use (installed layout is not great,
should have better support for the `baseUrl + moduleID + '.js' style of loading,
single file JS installs), but some people want a JS package manager and are
willing to live with those constraints. If that is you, but still want to author
in AMD style modules to get dynamic require([]), better direct source usage and
powerful loader plugin support in the browser, then this tool can help.

#### amdefine/intercept usage

Just require it in your top level app module (for example index.js, server.js):

```javascript
require('amdefine/intercept');
```

The module does not return a value, so no need to assign the result to a local
variable.

Then just require() code as you normally would with Node's require(). Any .js
loaded after the intercept require will have the amdefine check injected in
the .js source as it is loaded. It does not modify the source on disk, just
prepends some content to the text of the module as it is loaded by Node.

#### How amdefine/intercept works

It overrides the `Module._extensions['.js']` in Node to automatically prepend
the amdefine snippet above. So, it will affect any .js file loaded by your
app.

## define() usage

It is best if you use the anonymous forms of define() in your module:

```javascript
define(function (require) {
    var dependency = require('dependency');
});
```

or

```javascript
define(['dependency'], function (dependency) {

});
```

## RequireJS optimizer integration. <a name="optimizer"></name>

Version 1.0.3 of the [RequireJS optimizer](http://requirejs.org/docs/optimization.html)
will have support for stripping the `if (typeof define !== 'function')` check
mentioned above, so you can include this snippet for code that runs in the
browser, but avoid taking the cost of the if() statement once the code is
optimized for deployment.

## Node 0.4 Support

If you want to support Node 0.4, then add `require` as the second parameter to amdefine:

```javascript
//Only if you want Node 0.4. If using 0.5 or later, use the above snippet.
if (typeof define !== 'function') { var define = require('amdefine')(module, require) }
```

## Limitations

### Synchronous vs Asynchronous

amdefine creates a define() function that is callable by your code. It will
execute and trace dependencies and call the factory function *synchronously*,
to keep the behavior in line with Node's synchronous dependency tracing.

The exception: calling AMD's callback-style require() from inside a factory
function. The require callback is called on process.nextTick():

```javascript
define(function (require) {
    require(['a'], function(a) {
        //'a' is loaded synchronously, but
        //this callback is called on process.nextTick().
    });
});
```

### Loader Plugins

Loader plugins are supported as long as they call their load() callbacks
synchronously. So ones that do network requests will not work. However plugins
like [text](http://requirejs.org/docs/api.html#text) can load text files locally.

The plugin API's `load.fromText()` is **not supported** in amdefine, so this means
transpiler plugins like the [CoffeeScript loader plugin](https://github.com/jrburke/require-cs)
will not work. This may be fixable, but it is a bit complex, and I do not have
enough node-fu to figure it out yet. See the source for amdefine.js if you want
to get an idea of the issues involved.

## Tests

To run the tests, cd to **tests** and run:

```
node all.js
node all-intercept.js
```

## License

New BSD and MIT. Check the LICENSE file for all the details.
