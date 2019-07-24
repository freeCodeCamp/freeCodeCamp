---
title: Use Destructuring Assignment to Assign Variables from Arrays
---
# Use Destructuring Assignment to Assign Variables from Arrays


---
## Hints

### Hint # 1
We have to take some precaution in this case.

1. No need of const [b,a] as it will keep the effect of assignment local.

2. const [b,a] = [a,b] will result in the value of a,b as undefined(simple assignment rule left to right).


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
let a = 8,
  b = 6;
[a, b] = [b, a];
```
</details>