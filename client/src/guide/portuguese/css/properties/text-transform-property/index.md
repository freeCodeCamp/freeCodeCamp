---
title: Text Transform Property
localeTitle: Propriedade de transformação de texto
---
## Propriedade de transformação de texto

A propriedade `text-transform` em CSS controla maiúsculas e minúsculas e permite esse controle sem depender do texto original que é gravado.

Os valores mais usados ​​para essa propriedade são `lowercase` , `uppercase` e `capitalize` .
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

#### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)

[Truques de CSS](https://css-tricks.com/almanac/properties/t/text-transform/)