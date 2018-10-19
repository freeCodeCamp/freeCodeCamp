---
title: Use the map Method to Extract Data from an Array
---
## Use the map Method to Extract Data from an Array

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1
array.prototype.map takes a function as in input and returns an array. The returned array includes elements that is processed by the function. This function takes individual elements as input.

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Intermediate Code Solution:
```javascript
  rating = watchList.map( (item) => ({"title":item["Title"], "rating":item["imdbRating"]}) );
```
 ### Code Explanation:
Using ES6 notation, each item in array is processed to extract title and rating.
Parantheses are needed to return an object.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions' target='_blank' rel='nofollow'>Arrow Functions</a>
