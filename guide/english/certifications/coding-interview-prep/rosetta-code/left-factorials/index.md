---
title: Left factorials
---
# Left factorials

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function leftFactorial(n) {
  if (n == 0)
    return 0
  if (n == 1)
    return 1;

  // Note: for n>=20, the result may not be correct.
  // This is because JavaScript uses 53 bit integers and
  // for n>=20 result becomes too large.

  let res = 2, fact = 2;
  for (var i = 2; i < n; i++) {
    res += fact;
    fact *= (i + 1);
  }

  return res;
}
```

</details>