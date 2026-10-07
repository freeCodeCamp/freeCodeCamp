stackframe 
==========
## JS Object representation of a stack frame

[![Build Status](https://img.shields.io/github/workflow/status/stacktracejs/stackframe/Continuous%20Integration/master?logo=github&style=flat-square)](https://github.com/stacktracejs/stackframe/actions?query=workflow%3AContinuous+Integration+branch%3Amaster)
[![Coverage Status](https://img.shields.io/coveralls/stacktracejs/stackframe.svg?style=flat-square)](https://coveralls.io/r/stacktracejs/stackframe?branch=master)
[![GitHub license](https://img.shields.io/github/license/stacktracejs/stackframe.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![dependencies](https://img.shields.io/badge/dependencies-0-green.svg?style=flat-square)](https://github.com/stacktracejs/stackframe/releases)
[![gzip size](https://img.shields.io/badge/gzipped-0.96k-green.svg?style=flat-square)](https://github.com/stacktracejs/stackframe/releases)
[![module format](https://img.shields.io/badge/module%20format-umd-lightgrey.svg?style=flat-square&colorB=ff69b4)](https://github.com/stacktracejs/stackframe/releases)
[![code of conduct](https://img.shields.io/badge/code%20of-conduct-lightgrey.svg?style=flat-square&colorB=ff69b4)](http://todogroup.org/opencodeofconduct/#stacktrace.js/me@eriwen.com)

Underlies functionality of other modules within [stacktrace.js](https://www.stacktracejs.com).

Written to closely resemble StackFrame representations in [Gecko](http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14) and [V8](https://github.com/v8/v8/wiki/Stack%20Trace%20API)

## Usage
```js
// Create StackFrame and set properties
var stackFrame = new StackFrame({
    functionName: 'funName',
    args: ['args'],
    fileName: 'http://localhost:3000/file.js',
    lineNumber: 1,
    columnNumber: 3288, 
    isEval: true,
    isNative: false,
    source: 'ORIGINAL_STACK_LINE'
    evalOrigin: new StackFrame({functionName: 'withinEval', lineNumber: 2, columnNumber: 43})
});

stackFrame.functionName      // => "funName"
stackFrame.setFunctionName('newName')
stackFrame.getFunctionName() // => "newName"

stackFrame.args              // => ["args"]
stackFrame.setArgs([])
stackFrame.getArgs()         // => []

stackFrame.fileName          // => 'http://localhost:3000/file.min.js'
stackFrame.setFileName('http://localhost:3000/file.js')  
stackFrame.getFileName()     // => 'http://localhost:3000/file.js'

stackFrame.lineNumber        // => 1
stackFrame.setLineNumber(325)
stackFrame.getLineNumber()   // => 325

stackFrame.columnNumber      // => 3288
stackFrame.setColumnNumber(20)
stackFrame.getColumnNumber() // => 20

stackFrame.source            // => 'ORIGINAL_STACK_LINE'
stackFrame.setSource('NEW_SOURCE')
stackFrame.getSource()       // => 'NEW_SOURCE'

stackFrame.isEval            // => true
stackFrame.setIsEval(false)
stackFrame.getIsEval()       // => false

stackFrame.isNative          // => false
stackFrame.setIsNative(true)
stackFrame.getIsNative()     // => true

stackFrame.evalOrigin                         // => StackFrame({functionName: 'withinEval', lineNumber: ...})
stackFrame.setEvalOrigin({functionName: 'evalFn', fileName: 'anonymous'})
stackFrame.getEvalOrigin().getFunctionName()  // => 'evalFn'

stackFrame.toString() // => 'funName(args)@http://localhost:3000/file.js:325:20'
```

## Browser Support
[![Sauce Test Status](https://saucelabs.com/browser-matrix/stacktracejs.svg)](https://saucelabs.com/u/stacktracejs)

## Installation
```
npm install stackframe
bower install stackframe
https://raw.githubusercontent.com/stacktracejs/stackframe/master/dist/stackframe.min.js
```
