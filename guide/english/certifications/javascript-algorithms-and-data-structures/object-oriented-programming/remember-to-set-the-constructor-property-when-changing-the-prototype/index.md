---
title: Remember to Set the Constructor Property when Changing the Prototype
---
# Remember to Set the Constructor Property when Changing the Prototype


---
## Hints

### Hint 1
Remember to define the constructor property when you set a prototype to a new object.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
Dog.prototype = {
  constructor: Dog, // Solution

  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

</details>