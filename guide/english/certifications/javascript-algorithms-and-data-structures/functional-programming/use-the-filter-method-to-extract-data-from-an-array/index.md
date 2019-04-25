---
title: Use the filter method to extract data from an array
---
## Use the filter method to extract data from an array

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1
This challange is solved in 2 steps. 
First, Array.prototype.filter is used to filter the array so it's left with elements that have imdbRating > 8.0. 
After that, Array.prototype.map can be used to shape the output to the desired format.

### Beginner Solution

```javascript

// Add your code below this line

var filteredList = watchList.map((movie) => {
  return {
    title: movie.Title, 
    rating: movie.imdbRating
  }
}).filter((movie) => {
  // return true it will keep the item
  // return false it will reject the item
  return parseFloat(movie.rating) >= 8.0
});
```
#### Code Explanation
In the beginnner solution we're mapping over the watchList array to reduce the amount of data we have to work with and only returning the two items we need.  Once we've reduced the items to what we're interested in (Title and imdbRating) we're filtering through and only returning the remaining items that meet the criteria. In this case it's having an imdbRating of 8.0 or higher.


### Intermediate Solution

```javascript

// Add your code below this line

var filteredList = watchList.map(function(e) {
  return {title: e["Title"], rating: e["imdbRating"]}
}).filter((e) => e.rating >= 8);

console.log(filteredList); 

```
