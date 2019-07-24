---
title: Use Closure to Protect Properties Within an Object from Being Modified Externally
---
# Use Closure to Protect Properties Within an Object from Being Modified Externally

---
## Problem Explanation

Just like in the example given, rather than declaring the `weight` variable with the `this` keyword, the `let` keyword must be used to declare it as a private variable. This way it can only be accessed inside the `Bird` function. The `getWeight` method must then be added inside the `Bird` function to access the `weight` variable. 


---
## Solutions
<details><summary>Solution 1 (Click to Show/Hide)</summary>


```javascript
function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };
}
```

</details>

<details><summary>Solution 1 (Click to Show/Hide)</summary>

In ES6 syntax we can make the function a bit less verbose:

```
function Bird() {
  let weight = 15;
  this.getWeight = () => weight;  
}
```

</details>
