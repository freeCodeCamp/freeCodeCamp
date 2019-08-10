---
title: Falsy Bouncer
---

# Falsy Bouncer

---
## Problem Explanation

Remove all <a href='https://guide.freecodecamp.org/javascript/falsy-values/' target='_blank' rel='nofollow'>falsy</a> values from an array.

#### Relevant Links

*   <a href='https://guide.freecodecamp.org/javascript/falsy-values/' target='_blank' rel='nofollow'>Falsy Values</a>

---
## Hints

### Hint 1

Falsy is something which evaluates to FALSE. There are only six falsy values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false of course.

### Hint 2

We need to make sure we have all the falsy values to compare, we can know it, maybe with a function with all the falsy values...


### Hint 3

Then we need to add a `filter()` with the falsy values function...


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function bouncer(arr) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
```

#### Code Explanation
* We create a new empty array.
* We use a for cycle to iterate over all elements of the provided array (arr).
* We use the if statement to check if the current element is <a href='http://forum.freecodecamp.com/t/javascript-truthy-value/15975' target='_blank' rel='nofollow'>truthy</a> or <a href='https://guide.freecodecamp.org/javascript/falsy-values/' target='_blank' rel='nofollow'>falsy</a>.
* If the element is truthy, we push it to the new array (newArray). This result in the new array (newArray) containing only truthy elements.
* We return the new array (newArray).

#### Relevant Links

* [Boolean](https://forum.freecodecamp.com/t/javascript-boolean/14311)
* [Truthy value](https://forum.freecodecamp.com/t/javascript-truthy-value/15975)
* [Falsey values](https://www.freecodecamp.org/forum/t/javascript-falsy-values/14664)
* [Array.prototype.push](https://www.freecodecamp.org/forum/t/javascript-array-prototype-push/14298)

</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

```js
function bouncer(arr) {
  return arr.filter(Boolean);
}
```

#### Code Explanation

* The `Array.prototype.filter` method expects a function that returns a `Boolean` value which takes a single argument and returns `true` for <a href='http://forum.freecodecamp.com/t/javascript-truthy-value/15975' target='_blank' rel='nofollow'>truthy</a> value or `false` for <a href='https://guide.freecodecamp.org/javascript/falsy-values/' target='_blank' rel='nofollow'>falsy</a> value. Hence we pass the built-in `Boolean` function.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-boolean/14311' target='_blank' rel='nofollow'>Boolean</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-truthy-value/15975' target='_blank' rel='nofollow'>Truthy</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289' target='_blank' rel='nofollow'>Array.prototype.filter()</a>
</details>
