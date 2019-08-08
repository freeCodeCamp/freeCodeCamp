---
title: Using Objects for Lookups
---
# Using Objects for Lookups


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
// After converting our case statements into object properties you can make use of the variable `result` to let the function return the correct value.


  result = lookup[val];
  // Only change code above this line
  return result;
}
```

#### Relevant Links

- ["JavaScript object basics" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
</details>

