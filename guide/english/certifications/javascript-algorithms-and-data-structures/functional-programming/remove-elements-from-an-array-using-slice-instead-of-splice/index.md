---
title: Remove Elements from an Array Using slice Instead of splice
---

# Remove Elements from an Array Using slice Instead of splice

---
## Problem Explanation
- The difference between splice and slice method is that the slice method does not mutate the original array, but returns a new one.
- The slice method takes 2 two arguments for the indices to begin and end the slice (the end is non-inclusive).
- If you do not want to mutate the original array, you can use the slice method.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function nonMutatingSplice(cities) {
  // Add your code below this line

  return cities.slice(0, 3);

  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

</details>