---
title: JSON Parse
---
## JSON Parse

The `JSON.parse()` method parses a string and construct a new object described by a string.

#### Syntax:
```javascript
    JSON.parse(text [, reviver])
```

##### Parameters:
`text`
    The string to parse as JSON

`reviver`(Optional)
    The function will receive `key` and `value` as arguments. This function can be used to tranform the result value.

Here is an example on how to use `JSON.parse()`:

```javascript
var data = '{"foo": "bar"}';

console.log(data.foo); // This will print `undefined` since `data` is of type string and has no property named as `foo`

// You can use JSON.parse to create a new JSON object from the given string
var convertedData = JSON.parse(data);

console.log(convertedData.foo); // This will print `bar
```

<a href='https://repl.it/MwgK/0' target='_blank' rel='nofollow'>Repl.it Demo</a>

Here is an example with `reviver`:

```javascript
var data = '{"value": 5}';

var result = JSON.parse(data, function(key, value) {
    if (typeof value === 'number') {
        return value * 10;
    }
    return value;
});

// Original Data
console.log("Original Data:", data); // This will print Original Data: {"value": 5}
// Result after parsing
console.log("Parsed Result: ", result); // This will print Parsed Result:  { value: 50 }
```

In the above example, all numberic values are being multipled by `10` - <a href='https://repl.it/Mwfp/0' target='_blank' rel='nofollow'>Repl.it Demo</a>

#### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse' target='_blank' rel='nofollow'>JSON.parse - MDN</a>

