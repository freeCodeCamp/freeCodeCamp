---
title: Clear Property
localeTitle: Propriedade clara
---
## Propriedade clara

Você pode usar a propriedade `clear` para empurrar para baixo um elemento, impedindo que ele apareça ao lado do elemento precedente flutuante.

A propriedade `clear` pode ter os seguintes valores:

Esta propriedade é usada depois que a propriedade `float` é usada para "limpar" o `float` .

```css
clear: none; 
 clear: left; 
 clear: right; 
 clear: both; 
 clear: inline-start; 
 clear: inline-end; 
```

### Exemplo:

![Clear Property Image](https://image.ibb.co/defebR/clear.png "Propriedade clara")

No exemplo acima, o `div` amarelo tem a propriedade `float:left` e pode caber sob o `div` coral. No entanto, como o `div` amarelo também tem a propriedade `clear: both` se movem abaixo dos elementos flutuantes.

#### Mais Informações:

*   https://css-tricks.com/almanac/properties/c/clear/
*   https://www.w3schools.com/cssref/pr _class_ clear.asp
*   https://developer.mozilla.org/pt-BR/docs/Web/CSS/clear