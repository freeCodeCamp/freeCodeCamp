---
title: Remove from a Set
---
## Remove from a Set

### Method:
- In this challenge we need to implement a `.remove()` method for the Set class we made in the previous challenge.
- The method should return `true` if the element was successfully removed and `false` otherwise. 
### Solution:
```js
function Set() {
    var collection = [];
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    this.values = function() {
        return collection;
    };
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    this.remove = function(element){
        if (this.has(element)){
            collection.splice(collection.indexOf(element), 1);
            return true;
        }
        return false;
    }
}
```

### Resources:
- [Wikipedia](https://en.wikipedia.org/wiki/Set_(abstract_data_type))
