---
title: Adding a Default Option in Switch Statements
---

# Adding a Default Option in Switch Statements

* Adding a default option makes sure that in case your variable doesn't match any of the options, the default will be used.

## Solution:
```javascript
function switchOfStuff(val) {
  var answer = "";
  
  switch(val){
    case 'a': answer = 'apple'; 
    break;
    case 'b': answer = 'bird'; 
    break;
    case 'c': answer = 'cat'; 
    break;
    default: answer = 'stuff';
  }
  
  return answer;  
}
```