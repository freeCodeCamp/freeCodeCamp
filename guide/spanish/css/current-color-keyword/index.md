---
title: currentColor Keyword
localeTitle: Palabra clave currentColor
---
## La palabra clave currentColor

La palabra clave currentColor, como su nombre indica, es un valor de color válido en CSS. Esto representa el valor de la propiedad de `color` del elemento específico. Esto le permite utilizar el valor de la propiedad de `color` para las propiedades que no lo reciben de forma predeterminada.

### Soporte del navegador

La palabra clave currentColor es compatible muy bien en todos los navegadores. Es compatible con IE9 +, Safari 4+ y todos los demás navegadores modernos. Echa un vistazo a la lista completa en [caniuse.com](https://caniuse.com/#feat=currentcolor)

### Ejemplo

Declaramos que cada div tiene un borde de color de color _actual_ de _3px_ , lo que significa que cada borde de div se coloreará con el mismo valor de su propiedad de `color` . Mira el ejemplo en vivo [aquí](http://jsfiddle.net/tjkp0cm3/)

```css
div{ 
  /* The currentColor keyword for the color value, which means that the border will have the value of the respective div's color property */ 
  border: 3px solid currentColor; 
 } 
 
 /* This div will have green borders, because its color value is green. */ 
 #div1{ 
  color: green; 
 } 
 
 /* This div will have blue borders, because its color value is blue. */ 
 #div2{ 
  color: blue; 
 } 
```

### Aplicación práctica con un SVG

Este es un ejemplo muy común en la web: un botón con un ícono SVG y texto. El color del borde, el texto y los iconos cambian al desplazarse sobre el botón. La imagen de abajo muestra los estados inicial y desplazado del botón en orden.

![Imágenes de botones](https://image.ibb.co/hWveBR/button_variations.png)

Las fuentes de los íconos también podrían usarse para este propósito, pero hay varias ventajas de las fuentes SVG en línea sobre las íconos, y esto puede hacer que los SVG sean la opción para muchos desarrolladores. Citando [trucos CSS](https://css-tricks.com/icon-fonts-vs-svg/) ,

> Puede ser frustrante colocar un icono de fuente. Los íconos se insertan a través de un pseudo-elemento, y depende `line-height` , `vertical-align` , `letter-spacing` `word-spacing` , la forma en que se diseña el glifo de la fuente (¿naturalmente tiene espacio a su alrededor? . Entonces, el tipo de `display` los pseudo elementos afecta si esas propiedades tienen un efecto o no. SVG es el tamaño que tiene.

Para resumir, a veces puede ser frustrante utilizar iconos de fuente con texto.

Podríamos usar este código nuestro para lograr el comportamiento deseado.

```css
button{ 
  color: #016898; 
 } 
 
 .emailIcon{ 
  fill: #016898; 
 } 
 
 button:hover { 
  color: #19B5FE; 
 } 
 
 button:hover .emailIcon{ 
  fill: #19B5FE; 
 } 
```

Ahora, en lugar de cambiar explícitamente el color de `fill` del SVG al `currentColor` , podemos establecer el relleno en `currentColor` . Esto cambia automáticamente el color del SVG al valor de la propiedad de `color` del botón. Ahora solo necesitamos cambiar la propiedad de `color` del botón. Esto hace que el código CSS sea más corto y más inteligente.

```css
.emailIcon{ 
  fill: currentColor; 
 } 
 
 button{ 
  color: #016898; 
 } 
 
 button:hover { 
  color: #19B5FE; 
 } 
```

Vea el ejemplo en vivo en https://repl.it/NNt9/2.

#### Más información:

*   [Documentos MDN en la propiedad de `color` CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
*   [MDN Docs en la palabra clave currentColor](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_example)
*   [Artículo sobre currentColor en osvaldas.info](https://osvaldas.info/keeping-css-short-with-currentcolor)