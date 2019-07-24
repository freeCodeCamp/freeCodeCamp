---
title: Understand Where an Object’s Prototype Comes From
---
# Understand Where an Object’s Prototype Comes From


---
## Hints

### Hint 1

* You should use isPrototypeOf() to complete this challenge.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line
Dog.prototype.isPrototypeOf(beagle);

```
</details>
