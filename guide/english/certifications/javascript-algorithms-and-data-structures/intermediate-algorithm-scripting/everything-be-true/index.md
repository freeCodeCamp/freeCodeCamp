---
title: Everything Be True
---

# Everything Be True

---
## Problem Explanation

The program needs to check if the second argument is a <a href='http://forum.freecodecamp.com/t/javascript-truthy-value/15975' target='_blank' rel='nofollow'>truthy</a> element, and it must check this for each object in the first argument.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-truthy-value/15975' target='_blank' rel='nofollow'>JavaScript Truthy</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-arguments/14283.md' target='_blank' rel='nofollow'>JavaScript Arguments</a>


---
## Hints

### Hint 1

Remember to iterate through the first argument to check each object.

### Hint 2

Only if all of them are truthy will we return true, so make sure all of them check.

### Hint 3
You could use loops or callback functions, there are multiple ways to solve this problem.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

**Using for-in loop & hasOwnProperty**

```javascript
function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

// test here
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
```


#### Code Explanation

*   First I create a counter to check how many cases are actually true.
*   Then check for each object if the value is truthy
*   Outside the loop, I check to see if the counter variable has the same value as the length of **collection**, if true then return **true**, otherwise, return **false**

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-loops/14681' target='_blank' rel='nofollow'>JS Loops</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty' target='_blank' rel='nofollow'>Object.prototype.hasOwnProperty()</a>
</details>


<details><summary>Solution 2 (Click to Show/Hide)</summary>

**Using Array.every()**

```javascript
function truthCheck(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

// test here
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
```


#### Code Explanation

*   Uses the native "every" method to test whether all elements in the array pass the test.
*   This link will help <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every' target='_blank' rel='nofollow'>Array.prototype.every()</a>

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-every/14287' target='_blank' rel='nofollow'>JS Array.prototype.every()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every' target='_blank' rel='nofollow'>MDN Array.prototype.every()</a>
</details>

<details><summary>Solution 3 (Click to Show/Hide)</summary>


```javascript
function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
```


#### Code Explanation

*   For _every_ object in the `collection` array, check the truthiness of object's property passed in `pre` parameter
*   `Array#every` method internally checks if the value returned from the callback is truthy.
*   Return `true` if it passes for _every_ object. Otherwise, return `false`.

#### Relevant Links

*   <a href='http://devdocs.io/javascript/global_objects/array/every' target='_blank' rel='nofollow'>`Array#every`</a>

</details>
