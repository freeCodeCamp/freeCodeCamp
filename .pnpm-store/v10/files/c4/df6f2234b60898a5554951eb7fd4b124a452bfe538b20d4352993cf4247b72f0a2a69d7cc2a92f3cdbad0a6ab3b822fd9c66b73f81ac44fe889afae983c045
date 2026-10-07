# stackback

Returns an array of CallSite objects for a captured stacktrace. Useful if you want to access the frame for an error object.

## use

```javascript
var stackback = require('stackback');

// error generated from somewhere
var err = new Error('some sample error');

// stack is an array of CallSite objects
var stack = stackback(err);
```

## CallSite object

From the [V8 StackTrace API](https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi)

The structured stack trace is an Array of CallSite objects, each of which represents a stack frame. A CallSite object defines the following methods

getThis: returns the value of this  
getTypeName: returns the type of this as a string. This is the name of the function stored in the constructor field of this, if available, otherwise the object's [[Class]] internal property.  
getFunction: returns the current function  
getFunctionName: returns the name of the current function, typically its name property. If a name property is not available an attempt will be made to try to infer a name from the function's context.  
getMethodName: returns the name of the property of this or one of its prototypes that holds the current function  
getFileName: if this function was defined in a script returns the name of the script  
getLineNumber: if this function was defined in a script returns the current line number  
getColumnNumber: if this function was defined in a script returns the current column number  
getEvalOrigin: if this function was created using a call to eval returns a CallSite object representing the location where eval was called  
isToplevel: is this a toplevel invocation, that is, is this the global object?  
isEval: does this call take place in code defined by a call to eval?  
isNative: is this call in native V8 code?  
isConstructor: is this a constructor call?  

## install

```shell
npm install stackback
```
