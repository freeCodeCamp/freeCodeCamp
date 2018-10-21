---
title: Verify an Object's Constructor with instanceof
---
## Verify an Object's Constructor with instanceof

### Method:

Just like in the last challenge, create a new object - `myHouse` - using the constructor given.

#### Example:

```javascript

let hound = new Dog();

```

Remember to give the `House` function a parameter to initialise the number of rooms. Then simply call the `instanceof` operator to return true on your new House.

### Solution:

```javascript

/* jshint expr: true */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line
let myHouse = new House(5);
myHouse instanceof House;

```
