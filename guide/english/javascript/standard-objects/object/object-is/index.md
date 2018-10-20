---
title: Object Is
---
# Object Is

## Description
The ```object.is()``` method is used to determine if two values are the same value. This method was introduced in ES6.

## Syntax

```Object.is(val1, val2)```

### Parameters

**val1** - first value to compare

**val2** - second value to compare


## Return value

A [Boolean](https://guide.freecodecamp.org/javascript/booleans) indicating whether the two arguments have the same value


## Description

```Object.is()``` compares two values for sameness, returning ```true``` if both values meet one of the following conditions:

* ```undefined```
* ```null```
* Both ```true``` or both ```false```
* String of the same length and same characters
* Same object
* Both numbers and:
  * Both ```+0``` or both ```-0``` 
  * Both ```NaN```
  * or both a number that is not zero and not ```NaN```

## Examples

 ```

Object.is('string', 'string'); // true
Object.is(undefined, undefined); // true
Object.is(null, null); // true

Object.is('string, 'word'); // false
Object.is(true, false); // false
Object.is([], []); //false  

var obj = {name: Jane};
Object.is(obj, obj); // true

Object.is(NaN, NaN); // true

Object.is(+0, -0); // false
Object.is(-0, -0); // true

 ```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Object.is() MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
<br>
[Strict equality operator ```===```](https://guide.freecodecamp.org/certificates/comparison-with-the-strict-equality-operator)


