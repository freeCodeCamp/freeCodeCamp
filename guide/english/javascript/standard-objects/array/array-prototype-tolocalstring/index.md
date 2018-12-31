---
title: Array.prototype.toLocaleString
---
## Array.prototype.toLocaleString

The `toLocaleString()` method returns a string representing the elements of an array. All the elements are converted to Strings using their toLocaleString methods. The result of calling this function is intended to be locale-specific.

##### Syntax:
```
arr.toLocaleString();
```

##### Parameters
- `locales` (Optional) - argument holding either a string or an array of language tags [BCP 47 language tag](http://tools.ietf.org/html/rfc5646).
- `options` (Optional) - object with configuration properties

##### Return value
A string representing the elements of the array separated by a locale-specific String (such as a comma “,”)

## Examples

```javascript
var number = 12345;
var date = new Date();
var myArray = [number, date, 'foo'];
var myString = myArray.toLocaleString(); 

console.log(myString); 
// OUTPUT '12345,10/25/2017, 4:20:02 PM,foo'
```

Different outputs could be displayed based on the language and region identifier (the locale).

```javascript
var number = 54321;
var date = new Date();
var myArray = [number, date, 'foo'];
var myJPString = myArray.toLocaleString('ja-JP');

console.log(myJPString);
// OUTPUT '54321,10/26/2017, 5:20:02 PM,foo'
```

### More Information:
Source: [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)
