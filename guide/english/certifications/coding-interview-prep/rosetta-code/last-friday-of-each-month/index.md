---
title: Last Friday of each month
---
# Last Friday of each month

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function lastFriday (year, month) {
  var i, last_day;
  i = 0;
  while (true) {
    last_day = new Date(year, month, i);
    if (last_day.getDay() === 5) {
      return last_day.getDate();
    }
    i -= 1;
  }
};
```

</details>