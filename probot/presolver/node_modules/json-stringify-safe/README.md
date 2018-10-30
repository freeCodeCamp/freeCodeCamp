# json-stringify-safe

Like JSON.stringify, but doesn't throw on circular references.

## Usage

Takes the same arguments as `JSON.stringify`.

```javascript
var stringify = require('json-stringify-safe');
var circularObj = {};
circularObj.circularRef = circularObj;
circularObj.list = [ circularObj, circularObj ];
console.log(stringify(circularObj, null, 2));
```

Output:

```json
{
  "circularRef": "[Circular]",
  "list": [
    "[Circular]",
    "[Circular]"
  ]
}
```

## Details

```
stringify(obj, serializer, indent, decycler)
```

The first three arguments are the same as to JSON.stringify.  The last
is an argument that's only used when the object has been seen already.

The default `decycler` function returns the string `'[Circular]'`.
If, for example, you pass in `function(k,v){}` (return nothing) then it
will prune cycles.  If you pass in `function(k,v){ return {foo: 'bar'}}`,
then cyclical objects will always be represented as `{"foo":"bar"}` in
the result.

```
stringify.getSerialize(serializer, decycler)
```

Returns a serializer that can be used elsewhere.  This is the actual
function that's passed to JSON.stringify.

**Note** that the function returned from `getSerialize` is stateful for now, so
do **not** use it more than once.
