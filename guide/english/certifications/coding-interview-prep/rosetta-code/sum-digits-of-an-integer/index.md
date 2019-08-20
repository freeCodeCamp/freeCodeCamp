---
title: Sum digits of an integer
---
# Sum digits of an integer

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function sumDigits(n) {
  n += ''
  for (var s=0, i=0, e=n.length; i<e; i+=1) s+=parseInt(n.charAt(i),36)
  return s
}
```

</details>