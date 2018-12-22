---
title: Boolean
---

## Boolean

Boolean is a primitive data type commonly used in computer programming languages. By definition, a boolean has two possible values: `true` or `false`.

In Javascript, there is often implicit type coercion to boolean. If, for example, you have an if statement which checks a certain expression, that expression will be coerced to a boolean: 

```javascript
var a = 'a string';
if (a) {
  console.log(a); // logs 'a string'
}
```

There are only a few values that will be coerced to false: 
- false (not really coerced as it already is false)
- null
- undefined
- NaN (stands for "Not a number")
- 0
- '' or "" (empty string)

All other values will be coerced to true. 
When a value is coerced to a boolean, we also call that either 'falsy' or 'truthy'.

One way that type coercion is used is with the use of the or (`||`) and and (`&&`) operators: 

```javascript
var a = 'word';
var b = false;
var c = true;
var d = 0
var e = 1
var f = 2
var g = null

console.log(a || b); // 'word'
console.log(c || a); // true
console.log(b || a); // 'word'
console.log(e || f); // 1
console.log(f || e); // 2
console.log(d || g); // null
console.log(g || d); // 0
console.log(a && c); // true
console.log(c && a); // 'word'
```
As you can see, the *or* operator checks the first operand. If this is true or truthy, it returns it immediately (which is why we get 'word' in the first case & true in the second case). If it is not true or truthy, it returns the second operand (which is why we get 'word' in the third case). 

The *and* operator works in a similar way, but for 'and' to be true, both operands need to be truthy. So it will always return the second operand if both are true/truthy, otherwise it will return false. That is why in the fourth case we get true and in the last case we get 'word'. 

## The Boolean Object

There is also a native JavaScript object that wraps around a value. The value passed as the first parameter is converted to a boolean value, if necessary. If a value is omitted, 0, -0, null, false, NaN, undefined, or the empty string (""), the object has an initial value of false. All other values, including any object or the string "false", create an object with an initial value of true.

Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object.

## More Details

Any object whose value is not undefined or null, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement. If true, this will execute the function. For example, the condition in the following if statement evaluates to true:

```javascript
var x = new Boolean(false);
if (x) {
  // this code is executed
}
```

This behavior does not apply to Boolean primitives. For example, the condition in the following if statement evaluates to false:

```javascript
var x = false;
if (x) {
  // this code is not executed
}
```

Do not use a Boolean object to convert a non-boolean value to a boolean value. Instead, use Boolean as a function to perform this task:

```javascript
var x = Boolean(expression);     // preferred
var x = new Boolean(expression); // don't use
```

If you specify any object, including a Boolean object whose value is false, as the initial value of a Boolean object, the new Boolean object has a value of true.

```javascript
var myFalse = new Boolean(false);   // initial value of false
var g = new Boolean(myFalse);       // initial value of true
var myString = new String('Hello'); // string object
var s = new Boolean(myString);      // initial value of true
```

Do not use a Boolean object in place of a Boolean primitive.

### Resources

- <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean' target='_blank' rel='nofollow'>Boolean Object</a>
- <a href='https://docs.oracle.com/javase/7/docs/api/java/lang/Boolean.html' target='_blank' rel='nofollow'>Boolean Object</a>


