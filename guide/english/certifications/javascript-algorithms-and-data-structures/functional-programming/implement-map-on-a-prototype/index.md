---
title: Implement map on a Prototype
---

## Implement map on a Prototype

To solve THIS challenge using the keyword this is a key.

It will give us access to the object we are calling myMap.

From there we can use the forEach or for loop to add elements to already declared empty array as we modify each element with the given callback method.

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

### Useful Links
[this. Javascript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)<br/>
[this. Javascript W3Schools](https://www.w3schools.com/js/js_this.asp)
