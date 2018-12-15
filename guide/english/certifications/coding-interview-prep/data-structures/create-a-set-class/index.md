---
title: Create a Set Class
---
## Create a Set Class

### Method:
- A Set is an abstract data structure.
- It can store unique value and the collection is unordered.
- In this challenge, we have to implement `.add()` method. This method should only add unique values to `collection`.
  - The method should return `true`, if the value is sucessfully added to the collection, otherwise it should return `false`.

### Solution:
```js
function Set() {
    // the var collection will hold our set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    this.add = function(el) {
        return this.has(el) ? false : Boolean(collection.push(el));
    }
}
```

### Resources:
- [Wikipedia](https://en.wikipedia.org/wiki/Set_(abstract_data_type))
