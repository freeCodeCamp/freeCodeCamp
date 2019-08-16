---
title: Leap year
---
# Leap year

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function isLeapYear (year) {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
```

</details>