---
title: Array.prototype.values
---
## Array.prototype.values
The `values` method returns a new `Array Iterator` object that contains the values for each index in the array.

### Syntax
```javascript
arr.values()
```

### Returns
A new `array` ittertator object.

### Example
```javascript
let friends = ["Rachel", "Monica", "Chandler", "Phoebe", "Joey", "Ross"]

for (let friend of friends) {
  console.log(friend)
}

// Rachel
// Monica
// Chandler
// Phoebe
// Joey
// Ross
```

#### More Information:
[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values)
