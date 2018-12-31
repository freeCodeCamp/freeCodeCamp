---
title: Reset an Inherited Constructor Property
---
## Reset an Inherited Constructor Property

### Method

The `duck` and `beagle` objects have been programmed to inherit the `supertypes` constructor properties. To overwrite this two lines of code will have to be written to set the constructors to the desired constructors `Bird` and `Dog`. The following code demonstrates how this can be achieved. 

```javascript

Bird.prototype.constructor = Bird;


```

### Solution

```javascript

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

```
