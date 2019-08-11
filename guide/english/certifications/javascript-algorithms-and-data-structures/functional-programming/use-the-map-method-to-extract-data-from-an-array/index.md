---
title: Use the map Method to Extract Data from an Array
---
# Use the map Method to Extract Data from an Array


---
## Hints

### Hint 1
array.prototype.map takes a function as in input and returns an array. The returned array includes elements that is processed by the function. This function takes individual elements as input.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
const rating = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));
```
#### Code Explanation
Using ES6 notation, each item in array is processed to extract title and rating.
Parantheses are needed to return an object.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions' target='_blank' rel='nofollow'>Arrow Functions</a>
</details>
