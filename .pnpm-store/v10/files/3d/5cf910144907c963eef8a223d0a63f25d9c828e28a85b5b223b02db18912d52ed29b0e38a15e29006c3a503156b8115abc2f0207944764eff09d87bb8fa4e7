# stack-trace

Get v8 stack traces as an array of CallSite objects.

## Install

``` bash
npm install stack-trace
```

## Usage

The stack-trace module makes it easy for you to capture the current stack:

``` javascript
var stackTrace = require('stack-trace');
var trace = stackTrace.get();

require('assert').strictEqual(trace[0].getFileName(), __filename);
```

However, sometimes you have already popped the stack you are interested in,
and all you have left is an `Error` object. This module can help:

``` javascript
var stackTrace = require('stack-trace');
var err = new Error('something went wrong');
var trace = stackTrace.parse(err);

require('assert').strictEqual(trace[0].getFileName(), __filename);
```

Please note that parsing the `Error#stack` property is not perfect, only
certain properties can be retrieved with it as noted in the API docs below.

## Long stack traces

stack-trace works great with [long-stack-traces][], when parsing an `err.stack`
that has crossed the event loop boundary, a `CallSite` object returning
`'----------------------------------------'` for `getFileName()` is created.
All other methods of the event loop boundary call site return `null`.

[long-stack-traces]: https://github.com/tlrobinson/long-stack-traces

## API

### stackTrace.get([belowFn])

Returns an array of `CallSite` objects, where element `0` is the current call
site.

When passing a function on the current stack as the `belowFn` parameter, the
returned array will only include `CallSite` objects below this function.

### stackTrace.parse(err)

Parses the `err.stack` property of an `Error` object into an array compatible
with those returned by `stackTrace.get()`. However, only the following methods
are implemented on the returned `CallSite` objects.

* getTypeName
* getFunctionName
* getMethodName
* getFileName
* getLineNumber
* getColumnNumber
* isNative

Note: Except `getFunctionName()`, all of the above methods return exactly the
same values as you would get from `stackTrace.get()`. `getFunctionName()`
is sometimes a little different, but still useful.

### CallSite

The official v8 CallSite object API can be found [here][v8stackapi]. A quick
excerpt:

> A CallSite object defines the following methods:
>
> * **getThis**: returns the value of this
> * **getTypeName**: returns the type of this as a string. This is the name of the function stored in the constructor field of this, if available, otherwise the object's [[Class]] internal property.
> * **getFunction**: returns the current function
> * **getFunctionName**: returns the name of the current function, typically its name property. If a name property is not available an attempt will be made to try to infer a name from the function's context.
> * **getMethodName**: returns the name of the property of this or one of its prototypes that holds the current function
> * **getFileName**: if this function was defined in a script returns the name of the script
> * **getLineNumber**: if this function was defined in a script returns the current line number
> * **getColumnNumber**: if this function was defined in a script returns the current column number
> * **getEvalOrigin**: if this function was created using a call to eval returns a CallSite object representing the location where eval was called
> * **isToplevel**: is this a toplevel invocation, that is, is this the global object?
> * **isEval**: does this call take place in code defined by a call to eval?
> * **isNative**: is this call in native V8 code?
> * **isConstructor**: is this a constructor call?

[v8stackapi]: http://code.google.com/p/v8/wiki/JavaScriptStackTraceApi

## License

stack-trace is licensed under the MIT license.
