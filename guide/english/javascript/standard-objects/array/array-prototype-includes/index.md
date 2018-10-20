---
title: Array.prototype.includes
---
## Array.prototype.includes

The `includes()` method determines whether an array includes a value. It returns true or false.  

It takes two arguments:
1. `searchValue` - The element to search for in the array.
2. `fromIndex` - The position in the array to start searching for the proivded `searchValue`. If a negative value is supplied it starts from the array's length minus the negative value.

### Example

```js
const a = [1, 2, 3];
a.includes(2); // true 
a.includes(4); // false
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

