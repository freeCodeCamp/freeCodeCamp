---
title: Copy Array Items Using slice()
---
## Copy Array Items Using slice()

- the `slice()` function must be used to return an array consisting of only `warm` and `sunny`.
- Therefore, two parameters must be passed to the `slice()` function. The first parameter must be the index you would like the substring to start at. The second parameter must be the index at which the substring ends. 
- Note: The second parameter will end the substring at that exact index.
## Example:
```javascript
 return arr.slice(1,4);
 /* This will return a substring consisting of indexs [1,2,3]
    Note: arr[4] is NOT included.
```
## Solution:
```javascript
function forecast(arr) {
  // change code below this line
  return arr.slice(2,4);
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```
