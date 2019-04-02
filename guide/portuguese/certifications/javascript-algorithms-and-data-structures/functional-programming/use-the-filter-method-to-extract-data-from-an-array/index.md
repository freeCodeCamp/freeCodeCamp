---
title: Use the filter method to extract data from an array
localeTitle: Use o método filter para extrair dados de um array
---
## Use o método filter para extrair dados de um array

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Este desafio é resolvido em 2 etapas. Primeiro, Array.prototype.filter é usado para filtrar a matriz, deixando elementos que tenham imdbRating> 8.0. Depois disso, Array.prototype.map pode ser usado para moldar a saída para o formato desejado.

### Solução

```javascript
// Add your code below this line 
 
 var filteredList = watchList.map(function(e) { 
  return {title: e["Title"], rating: e["imdbRating"]} 
 }).filter((e) => e.rating >= 8); 
 
 console.log(filteredList); 

```