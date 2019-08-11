---
title: Least common multiple
---
# Least common multiple

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function LCM (A) {
    var n = A.length, a = Math.abs(A[0]);
    for (var i = 1; i < n; i++)
     { var b = Math.abs(A[i]), c = a;
       while (a && b){ a > b ? a %= b : b %= a; }
       a = Math.abs(c*A[i])/(a+b);
     }
    return a;
}
```

</details>