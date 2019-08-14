---
title: Kaprekar numbers
---
# Kaprekar numbers

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function isKaprekar(n, bs) {
  if (n < 1) return false;
  if (n == 1) return true;
  for (var a = n * n, b = 0, s = 1; a; s *= bs) {
    b += a % bs * s;
    a = Math.floor(a / bs);
    if (b && a + b == n) return true;
  } return false;
} 
```

</details>