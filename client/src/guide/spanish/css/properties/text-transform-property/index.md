---
title: Text Transform Property
localeTitle: Propiedad de transformación de texto
---
## Propiedad de transformación de texto

La propiedad de `text-transform` en CSS controla mayúsculas y minúsculas y permite el uso de mayúsculas y minúsculas y permite dicho control sin depender del texto original que se escribe.

Los valores más utilizados para esta propiedad son `lowercase` , `uppercase` y `capitalize` .
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

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)

[Trucos CSS](https://css-tricks.com/almanac/properties/t/text-transform/)