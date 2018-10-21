---
title: Use the filter method to extract data from an array
localeTitle: Используйте метод фильтра для извлечения данных из массива
---
## Используйте метод фильтра для извлечения данных из массива

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Этот вызов решается в 2 этапа. Во-первых, Array.prototype.filter используется для фильтрации массива, поэтому его оставляют элементы с imdbRating> 8.0. После этого Array.prototype.map можно использовать для формирования вывода в желаемом формате.

### Решение

```javascript
// Add your code below this line 
 
 var filteredList = watchList.map(function(e) { 
  return {title: e["Title"], rating: e["imdbRating"]} 
 }).filter((e) => e.rating >= 8); 
 
 console.log(filteredList); 

```