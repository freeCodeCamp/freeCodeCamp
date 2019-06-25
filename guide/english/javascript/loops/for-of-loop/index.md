---
title: For...Of Loop
---
The `for...of` statement creates a loop iterating over iterable objects (including Array, Map, Set, Arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

```javascript
    for (variable of object) {
        statement
    }
```
| | Description |
|----------|-------------------------------------|
| variable | On each iteration a value of a different property is assigned to variable. |
| object | Object whose enumerable properties are iterated. |


## Examples

### Array
```javascript
    let arr = [ "fred", "tom", "bob" ];

    for (let i of arr) {
        console.log(i);
    }

    // Output:
    // fred
    // tom
    // bob
```

### Map
```javascript
    const m = new Map();
    m.set(1, "black");
    m.set(2, "red");

    for (let n of m) {
        console.log(n);
    }

    // Output:
    // [1, "black"]
    // [2, "red"]
```

### Set
```javascript
    const s = new Set();
    s.add(1);
    s.add("red");

    for (let n of s) {
        console.log(n);
    }

    // Output:
    // 1
    // red
```

### Arguments object
```javascript
    // your browser must support for..of loop
    // and let-scoped variables in for loops

    function displayArgumentsObject() {
        for (let n of arguments) {
            console.log(n);
        }
    }


    displayArgumentsObject(1, 'red');

    // Output:
    // 1
    // red
```

# Other Resources:

* [MDN link](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of)
* [MSDN link](https://msdn.microsoft.com/library/dn858238%28v=vs.94%29.aspx?f=255&MSPPError=-2147217396)
* [arguments @@iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator)
