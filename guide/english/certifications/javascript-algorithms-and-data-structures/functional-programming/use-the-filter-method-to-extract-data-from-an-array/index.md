---
title: Use the filter method to extract data from an array
---
## Use the filter method to extract data from an array

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1
This challange is solved in 2 steps. 
First, Array.prototype.filter is used to filter the array so it's left with elements that have imdbRating > 8.0. 
After that, Array.prototype.map can be used to shape the output to the desired format.

### Solution

```javascript

// Add your code below this line

var filteredList = watchList.map(function(e) {
  return {title: e["Title"], rating: e["imdbRating"]}
}).filter((e) => e.rating >= 8);

console.log(filteredList); 

```
