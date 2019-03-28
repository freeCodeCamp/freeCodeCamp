---
title: Implement map on a Prototype
---

## Implement map on a Prototype

### Solution 1 - Solve this challenge using `this` and the forEach method

The `this` keyword gives us access to the object we are calling myMap on.

From there we can use the forEach method to add elements to already declared empty array as we modify each element with the given callback method.

```javascript
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  this.forEach(a => newArray.push(callback(a)));
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
```

### Solution 2 - Solve this challenge using a "for" loop and `this`

The use of a "for" loop allows us to apply the callback function to every item in the Global array and then push the modified items to the empty new array that is returned in the end.

```javascript
// The global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  
  // Add your code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  // Add your code above this line
  
  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});
```

### Useful Links

[this. JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)<br/>
[this. Javascript W3Schools](https://www.w3schools.com/js/js_this.asp)   
[for loop MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)   
[Array.prototype MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)   