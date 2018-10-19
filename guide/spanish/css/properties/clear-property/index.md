---
title: Clear Property
localeTitle: Borrar propiedad
---
## Borrar propiedad

Puede usar la propiedad `clear` para empujar hacia abajo un elemento, evitando que aparezca junto al elemento flotante precedente.

La propiedad `clear` puede tener los siguientes valores:

Esta propiedad se usa después de que la propiedad `float` se utiliza para "borrar" el `float` .

```css
clear: none; 
 clear: left; 
 clear: right; 
 clear: both; 
 clear: inline-start; 
 clear: inline-end; 
```

### Ejemplo:

![Clear Property Image](https://image.ibb.co/defebR/clear.png "Borrar propiedad")

En el ejemplo anterior, el `div` amarillo tiene la propiedad `float:left` , y podría caber debajo del `div` coral. Sin embargo, como el `div` amarillo también tiene la propiedad `clear: both` , se mueve hacia abajo debajo de los elementos flotados.

#### Más información:

*   https://css-tricks.com/almanac/properties/c/clear/
*   https://www.w3schools.com/cssref/pr _class_ clear.asp
*   https://developer.mozilla.org/en-US/docs/Web/CSS/clear