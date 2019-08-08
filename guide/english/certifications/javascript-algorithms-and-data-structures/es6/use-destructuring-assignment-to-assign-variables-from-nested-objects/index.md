---
title: Use Destructuring Assignment to Assign Variables from Nested Objects
---
# Use Destructuring Assignment to Assign Variables from Nested Objects


---
## Hints

### Hint 1
Tip to pass final test: *nested destructuring was used*

The test wants you to obtain `max` and `max` only. If you destructure your constant to contain both `max` and `min`, the test will fail.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
const {
  tomorrow: { max: maxOfTomorrow }
} = forecast;
```

</details>