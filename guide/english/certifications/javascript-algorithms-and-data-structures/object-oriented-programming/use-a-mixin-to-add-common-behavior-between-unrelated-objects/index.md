---
title: Use a Mixin to Add Common Behavior Between Unrelated Objects
---
## Use a Mixin to Add Common Behavior Between Unrelated Objects

### Method

Just like the `flyMixin` function, a new `glideMixin` function must be made to accept both `bird` and `boat` objects as a parameter. Create this new function using the same syntax as the `flyMixin` function and then call the function on both objects. 

### Solution

```javascript

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line
let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("Gliding!");
    }
};
glideMixin(bird);
glideMixin(boat);


```
