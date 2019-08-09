---
title: Use Destructuring Assignment to Assign Variables from Objects
---

# Use Destructuring Assignment to Assign Variables from Objects

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// change code below this line
  
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// change code above this line

console.log(highToday); // should be 77
console.log(highTomorrow); // should be 80
```

</details>