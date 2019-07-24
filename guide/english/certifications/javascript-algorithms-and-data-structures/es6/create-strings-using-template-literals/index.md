---
title: Create Strings Using Template Literals
---

# Create Strings Using Template Literals

---
## Problem Explanation
Instead of using string concatenation, ES6 offers template literals to create strings. In this challenge, you have to use template literals to create an array of text warnings.

It's required to use template literals to return a list as every element in the array as the element will be wrapped in a `<li></li>` tag.


---
## Hints

### Hint 1

*   Use `map()` function to apply the template literals on all of the `arr` elements 

### Hint 2

*   Inside the `map()` use an arrow function which has `element` as a parameter and returns `<li></li>` that has the text-warning class and containing the `element` inside it

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
```
</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

No map() solution
Despite being a less flexible solution, if you know the number of elements in advance, you can enumerate them as in

```javascript
const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`,
  `<li class="text-warning">${arr[1]}</li>`
  ,`<li class="text-warning">${arr[2]}</li>`];
```
</details>
