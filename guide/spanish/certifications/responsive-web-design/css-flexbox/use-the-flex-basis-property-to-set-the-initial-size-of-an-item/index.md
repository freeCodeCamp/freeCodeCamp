---
title: Use the flex-basis Property to Set the Initial Size of an Item
localeTitle: Utilice la propiedad de base flexible para establecer el tamaño inicial de un artículo
---
## Utilice la propiedad de base flexible para establecer el tamaño inicial de un artículo

Puede lograr el mismo efecto que los dos desafíos anteriores con `flax-basis` . Después de configurar los valores apropiados, verá que `#box-2` es más grande que `#box-1` antes de que se aplique cualquier reducción o crecimiento.

```css
#box-1 { 
  background-color: dodgerblue; 
  height: 200px; 
  flex-basis: 10em; 
 } 
 
 #box-2 { 
  background-color: orangered; 
  height: 200px; 
  flex-basis: 20em; 
 } 

```