---
title: Use Destructuring Assignment to Extract Values from Objects
---
# Use Destructuring Assignment to Extract Values from Objects

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

const { today, tomorrow } = HIGH_TEMPERATURES;

// change code above this line

console.log(yesterday) // should be not defined
console.log(today); // should be 77
console.log(tomorrow); // should be 80
```

</details>