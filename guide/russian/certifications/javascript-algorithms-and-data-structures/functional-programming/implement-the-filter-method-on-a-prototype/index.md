---
title: Implement the filter Method on a Prototype
localeTitle: Внедрить фильтр на прототипе
---
## Внедрить фильтр на прототипе

```javascript
// the global Array 
 var s = [23, 65, 98, 5]; 
 
 Array.prototype.myFilter = function(callback){ 
  var newArray = []; 
  // Add your code below this line 
  this.forEach(function(x) { 
    if (callback(x) == true) { 
      newArray.push(x); 
    } 
  }) 
  // Add your code above this line 
  return newArray; 
 
 }; 
```

## Другое решение, используемое для looop!

```javascript
Array.prototype.myFilter = function(callback){ 
  var newArray = []; 
  // Add your code below this line 
  for (let i=0; i<this.length;i++){ 
    if(callback(this[i])=== true ){ 
 newArray.push(this[i]); 
    } 
  } 
  // Add your code above this line 
  return newArray; 
 
 }; 
 
 var new_s = s.myFilter(function(item){ 
  return item % 2 === 1; 
 }); 

```