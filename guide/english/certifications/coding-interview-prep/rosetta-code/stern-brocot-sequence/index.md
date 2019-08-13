---
title: Stern-Brocot sequence
---
# Stern-Brocot sequence

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function sternBrocot(num) {
  function f(n) {
    return n < 2 ? n : (n & 1) ? f(Math.floor(n / 2)) + f(Math.floor(n / 2 + 1)) : f(Math.floor(n / 2));
  }

  function gcd(a, b) {
    return a ? a < b ? gcd(b % a, a) : gcd(a % b, b) : b;
  }
  var n;
  for (n = 1; f(n) != num; n++);
  return n;
}
```

</details>