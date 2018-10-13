---
title: JSON Stringify
---
## JSON Stringify

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

The `JSON.stringify()` method converts a *JSON-safe* JavaScript value to a JSON compliant string. 

What are JSON-safe values one may ask! Let's make a list of all JSON-unsafe values and anything that isn't on the list can be considered JSON-safe.

#### JSON-unsafe values:
- `undefined`
- `function(){}`
- (ES6+) `Symbol`
- An object with circular reference(s) in it

#### Syntax

```javascript
  JSON.stringify( value [, replacer [, space]])
```
In its simplest and most used form: 

```javascript
  JSON.stringify( value )
```

#### Parameters

  `value` : The JavaScript value to be 'stringified'.
  
  `replacer` : (Optional) A function or an array which serves as a filter for properties of the value object to be included in the JSON string.
  
  `space` : (Optional) A numeric or string value to provide indentation to the JSON string. If a numeric value is provided, that many spaces (upto 10) act as indentaion at each level. If a string value is provided, that string (upto first 10 chracters) acts as indentation at each level.

#### Return type

The return type of the method is: `string`.

## Description

The JSON-safe values are converted to their corresponding JSON string form. The JSON-unsafe values on the other hand return :
- `undefined` if they are passed as values to the method 
- `null` if they are passed as an array element
- nothing if passed as properties on an object
- throws an error if its an object with circular references(s) on it.

```javascript
  //JSON-safe values
  JSON.stringify({});                  // '{}'
  JSON.stringify(true);                // 'true'
  JSON.stringify('foo');               // '"foo"'
  JSON.stringify([1, 'false', false]); // '[1,"false",false]'
  JSON.stringify({ x: 5 });            // '{"x":5}'
  JSON.stringify(new Date(2006, 0, 2, 15, 4, 5))  // '"2006-01-02T15:04:05.000Z"'
  
  //JSON-unsafe values passed as values to the method
  JSON.stringify( undefined );					// undefined
  JSON.stringify( function(){} );					// undefined

  //JSON-unsafe values passed as array elements
  JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] });  // '{"x":[10,null,null,null]}' 
 
 //JSON-unsafe values passed as properties on a object
  JSON.stringify({ x: undefined, y: Object, z: Symbol('') });  // '{}'
  
  //JSON-unsafe object with circular reference on it
  var o = { },
    a = {
      b: 42,
      c: o,
      d: function(){}
    };

  // create a circular reference inside `a`
  o.e = a;

  // would throw an error on the circular reference
  // JSON.stringify( a );

```
`JSON.stringify(...)` behaves differently if an object passed to it has a `toJSON()` method defined on it. The return value from the `toJSON()` method will be serialized instead of the object itself.

This comes in exceptionally handy when an object contains any illegal JSON value. 
```javascript
   //JSON-unsafe values passed as properties on a object
   var obj = { x: undefined, y: Object, z: Symbol('') };
   
   //JSON.stringify(obj);  logs '{}'
   obj.toJSON = function(){
    return {
      x:"undefined",
      y: "Function",
      z:"Symbol"
    }
   }
   JSON.stringify(obj);  //"{"x":"undefined","y":"Function","z":"Symbol"}"
    
  //JSON-unsafe object with circular reference on it
  var o = { },
    a = {
      b: 42,
      c: o,
      d: function(){}
    };

  // create a circular reference inside `a`
  o.e = a;

  // would throw an error on the circular reference
  // JSON.stringify( a );
  
  // define a custom JSON value serialization
  a.toJSON = function() {
    // only include the `b` property for serialization
    return { b: this.b };
  };

  JSON.stringify( a ); // "{"b":42}"
```

#### The `replacer`
The `replacer`, as mentioned earlier, is a filter which indicates which properties are to be included in the JSON string. It can either be an array or a function.
When an array, the replacer contains the string representations of only those properties which are to be included in the JSON string.
```javascript
  var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};
  JSON.stringify(foo, ['week', 'month']);    // '{"week":45,"month":7}', only keep "week" and "month" properties
```

If `replacer` is a function, it will be called once for the object itself, and then once for each property in the object, and each time is passed two arguments, *key* and *value*. To skip a *key* in the serialization, `undefined` should be returned. Otherwise, the *value* provided should be returned. If any of these *values* are objects themselves, the `replacer` function serializes them recursively as well.
```javascript
  function replacer(key, value) {
    // Filtering out properties
    if (typeof value === 'string') {
      return undefined;
    }
    return value;
  }

  var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};
  JSON.stringify(foo, replacer);  // '{"week":45,"month":7}'
```
If an array is passed to `JSON.stringify()` and `replacer` returns `undefined` for any of its elements, the element's value is replaced with `null`. `replacer` functions cannot remove values from an array.
```javascript
  function replacer(key, value) {
    // Filtering out properties
    if (typeof value === 'string') {
      return undefined;
    }
    return value;
  }

  var foo = ['Mozilla', 'box', 45, 'car', 7];
  JSON.stringify(foo, replacer);  // "[null,null,45,null,7]"
```

#### The `space`
The `space` parameter used for indentation makes the result of `JSON.stringify()` prettier.
```javascript
  var a = {
    b: 42,
    c: "42",
    d: [1,2,3]
  };

  JSON.stringify( a, null, 3 );
  // "{
  //    "b": 42,
  //    "c": "42",
  //    "d": [
  //       1,
  //       2,
  //       3
  //    ]
  // }"

  JSON.stringify( a, null, "-----" );
  // "{
  // -----"b": 42,
  // -----"c": "42",
  // -----"d": [
  // ----------1,
  // ----------2,
  // ----------3
  // -----]
  // }"
```
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Refer to [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
