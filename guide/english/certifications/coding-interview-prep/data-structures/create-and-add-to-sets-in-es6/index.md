---
title: Create and Add to Sets in ES6
---
# Create and Add to Sets in ES6

---
## Problem Explanation

To solve this problem, you have to add an array of items to the set.


---
## Hints

### Hint 1

Use the add function to add an array of strings to the set.


### Hint 2

Use the length attribute on the values of the Set.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  set.add("Taco");
  set.add("Cat");
  set.add("Awesome");
  console.log(Array.from(set));
  return set;
}

checkSet();
```

#### Code Explanation

*   Creating a set object as shown in pre-written code will create the set without duplicate objects.
*   Therefore, by using the add function, we can add items to the set and they will not be duplicated, and will still be represented in the array.


</details>