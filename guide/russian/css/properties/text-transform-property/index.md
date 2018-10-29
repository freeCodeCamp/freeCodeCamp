---
title: Text Transform Property
localeTitle: Свойство преобразования текста
---
## Свойство преобразования текста

Свойство `text-transform` в CSS управляет текстовым случаем и капитализацией и позволяет такое управление, не завися от исходного текста, который написан.

Наиболее часто используемые значения для этого свойства `lowercase` , `uppercase` и `capitalize` .
```
<style> 
 .lowercased { 
  text-transform: lowercase; 
 } 
 
 .uppercased { 
  text-transform: uppercase; 
 } 
 
 .capitalized { 
  text-transform: capitalize; 
 } 
 </style> 
 
 <p class="uppercased">this text was lowercase.</p> <!-- = THIS TEXT WAS LOWERCASE. --> 
 <p class="lowercased">THIS TEXT WAS UPPERCASE.</p> <!-- = this text was uppercase. --> 
 <p class="capitalized">this text wasn't capitalized.</p> <!-- = This Text Wasn't Capitalized. --> 
```

#### Дополнительная информация:

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)

[CSS-уловок](https://css-tricks.com/almanac/properties/t/text-transform/)