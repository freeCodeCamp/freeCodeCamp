makeerror [![Build Status](https://secure.travis-ci.org/nshah/nodejs-makeerror.png)](http://travis-ci.org/nshah/nodejs-makeerror)
=========

A library to make errors.


Basics
------

Makes an Error constructor function with the signature below. All arguments are
optional, and if the first argument is not a `String`, it will be assumed to be
`data`:

```javascript
function(message, data)
```

You'll typically do something like:

```javascript
var makeError = require('makeerror')
var UnknownFileTypeError = makeError(
  'UnknownFileTypeError',
  'The specified type is not known.'
)
var er = UnknownFileTypeError()
```

`er` will have a prototype chain that ensures:

```javascript
er instanceof UnknownFileTypeError
er instanceof Error
```


Templatized Error Messages
--------------------------

There is support for simple string substitutions like:

```javascript
var makeError = require('makeerror')
var UnknownFileTypeError = makeError(
  'UnknownFileTypeError',
  'The specified type "{type}" is not known.'
)
var er = UnknownFileTypeError({ type: 'bmp' })
```

Now `er.message` or `er.toString()` will return `'The specified type "bmp" is
not known.'`.


Prototype Hierarchies
---------------------

You can create simple hierarchies as well using the `prototype` chain:

```javascript
var makeError = require('makeerror')
var ParentError = makeError('ParentError')
var ChildError = makeError(
  'ChildError',
  'The child error.',
  { proto: ParentError() }
)
var er = ChildError()
```

`er` will have a prototype chain that ensures:

```javascript
er instanceof ChildError
er instanceof ParentError
er instanceof Error
```
