---
title: Use the filter method to extract data from an array
localeTitle: 使用filter方法从数组中提取数据
---
## 使用filter方法从数组中提取数据

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

这个挑战分两步解决。 首先，Array.prototype.filter用于过滤数组，因此它的元素具有imdbRating> 8.0。 之后，可以使用Array.prototype.map将输出整形为所需的格式。

### 解

```javascript
// Add your code below this line 
 
 var filteredList = watchList.map(function(e) { 
  return {title: e["Title"], rating: e["imdbRating"]} 
 }).filter((e) => e.rating >= 8); 
 
 console.log(filteredList); 

```