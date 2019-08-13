---
title: Seek and Destroy
---

# Seek and Destroy

---
## Problem Explanation

This problem is a bit tricky because you have to familiarize yourself with Arguments, as you will have to work with two **or more** but on the script you only see two. Many people hardcode this program for three arguments. You will remove any number from the first argument that is the same as any other other arguments.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-arguments/14283' target='_blank' rel='nofollow'>Arguments object</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289' target='_blank' rel='nofollow'>Array.filter()</a>


---
## Hints

### Hint 1

You need to work with `arguments` as if it was a regular array. The best way is to convert it into one.

### Hint 2

You need to filter, this also means you need to create a callback function. You can use various methods like: `indexOf()`, `includes()`. If you need another approach, `reduce()` might also be of use; keep reading those docs!

### Hint 3

To convert `arguments` into an array use this code `var args = Array.prototype.slice.call(arguments);`


---
## Solutions
<details><summary>Solution 1 (Click to Show/Hide)</summary>


```javascript
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}
```


#### Code Explanation

1.  Create an array of `arguments` using `Array.prototype.slice.call()` and store it in the variable `args`. We'll use this to check against `arr`.

2.  Start a basic `for` loop to iterate through `arr`. Nest another `for` loop inside the first, changing the integer variable `j` and arr to args. This second loop will iterate through `args` .

    *   Within the second loop create an `if` statement, checking strictly `===` that the current val of `arr[i]` is equal to `args[j]`.

    *   If the value at the current index _is_ equal in both arrays, use `delete` to remove it from `arr`.

3.  Outside of the nested loops: return the modified array using the `Boolean` object as a filter for any `null`'s created by the `delete` operator.

#### Relevant Links

*   [arguments</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289' target='_blank' rel='nofollow'>Array.filter()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete' target='_blank' rel='nofollow'>delete</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-boolean/14311' target='_blank' rel='nofollow'>Boolean</a>


</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}
```


#### Code Explanation

1.  Declare a variable named `args` and set it equal to a new `Array` object `from()` the `arguments` passed into the function. On the same or next line, use the `slice()` method on `args` starting from the second index, 1\. This separates the arguments used for filtering into their own array of `args`.

2.  Return the filtered array, using `includes()` in the callback function to check if `val` is _not_ in `args`; returning `true` to keep the value in the original array or `false` to remove it.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-arguments/14283' target='_blank' rel='nofollow'>arguments</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302' target='_blank' rel='nofollow'>Array.slice()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes' target='_blank' rel='nofollow'>Array.includes()</a>
</details>

<details><summary>Solution 3 (Click to Show/Hide)</summary>


```javascript
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));
```

#### Code Explanation

*  Code using ES6 syntax to declare function using arrow functions.
*  Using spread operator to retrieve the arguments.
*  Return the filtered array, using `includes()`.

#### Relevant Links
* [Spread Operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)

</details>
