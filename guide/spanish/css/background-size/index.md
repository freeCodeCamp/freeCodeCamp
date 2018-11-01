---
title: Background Size
localeTitle: Tamaño de fondo
---
## Tamaño de fondo

La propiedad de tamaño de fondo especifica el tamaño de las imágenes de fondo. Puede establecer una longitud o un porcentaje, siendo el primer valor el ancho y el segundo la altura. También puede utilizar uno de los 5 valores de palabras clave:

```css
.auto {background-size: auto;} 
 .cover {background-size: cover;} 
 .contain {background-size: contain;} 
 .initial {background-size: initial;} 
 .inherit {background-size: inherit;} 
 /* Percentage and pixel can also be used */ 
 .pixel {background-size: 50px 50px;} 
 .percentage {background-size: 50% 50%;} 
```

Para establecer esta propiedad en varias imágenes de fondo separe los valores utilizando comas:

```css
.multiple { 
    background-image: url(1.png), url(2.png); 
    background-size: 3px 3px, cover; 
 } 
```

#### Más información:

Documentación: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)

Trucos CSS: [tamaño de fondo](https://css-tricks.com/almanac/properties/b/background-size/)

Soporte del navegador: [Caniuse](http://caniuse.com/#search=background-size)
