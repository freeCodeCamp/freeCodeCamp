---
title: RegExp.prototype.test
---
## RegExp.prototype.test

The ```test()``` method returns ```true``` if a string matches the regular expression, and ```false``` if it doesn't.

## Examples

```javascript
let str = 'freeCodeCamp';
let regEx = /Code/;
let result = regEx.test(str);

console.log(result); // prints true
```
**Note:** Regular expressions are case-sensitive. The above example will return ```false``` if the ```regEx``` is ```/code/``` instead of ```/Code/```. To make the regular expression case-insensitive, you have to add the ```i``` flag to the regular expression.

```javascript
let str = 'freeCodeCamp';
let regEx = /code/;
let result = regEx.test(str);

console.log(result); // prints false

// Include the 'i' flag.

regEx = /code/i;
result = regEx.test(str);
console.log(result); // prints true
```

#### More Information:

Check out the [official MDN ```RegExp.prototype.test()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) page for more information.
