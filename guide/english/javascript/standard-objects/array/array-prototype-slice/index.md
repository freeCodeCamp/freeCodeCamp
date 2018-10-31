---
title: Array.prototype.slice
---
The JavaScript array method `.slice()` will return a new array object which will be a segment (a slice) of the original array. The original array is not modified.

**Syntax**

```javascript
  array.slice()
  arr.slice(startIndex)
  arr.slice(startIndex, endIndex) 
```

## Parameters

* **startIndex** The zero-based index where the slice should begin. If the value is omitted, it will start at 0.

* **endIndex** The slice will end **before** this zero-based index. A negative index is used to offset from the end of the array. If the value is omitted, the segment will slice to the end of the array.

## Examples

```javascript
  var array = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus']
  
  var everything = array.slice()
  // everything = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus']
  
  var kitchen = array.slice(2, 4)
  // kitchen = ['cup', 'sandwich']
  
  var random = array.slice(4)
  // random = ['bag', 'phone', 'cactus']
  
  var noPlants = array.slice(0, -1)
  // noPlats = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone']
  
  // array will still equal ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus']
```

#### More Information:
Source : <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice' target='_blank' rel='nofollow'>MDN</a>


<!-- Please add any articles you think might be helpful to read before writing the article -->


