---
title: Float and Clear
localeTitle: Flotar y despejar
---
## Flotar y despejar

La propiedad `float` CSS especifica cómo debe flotar un elemento.

La propiedad de `clear` CSS especifica qué elementos pueden flotar junto al elemento borrado y en qué lado.

### La propiedad `float`

La propiedad `float` se usa para posicionamiento y diseño en páginas web.

La propiedad `float` puede tener uno de los siguientes valores:

`left` - El elemento flota a la izquierda de su contenedor `right` - el elemento flota a la derecha de su contenedor `none` : el elemento no flota (se mostrará justo donde aparece en el texto). Esto es por defecto `inherit` - El elemento hereda el valor flotante de su padre En su uso más simple, la propiedad `float` se puede usar para envolver el texto alrededor de las imágenes.

#### Flotador en la imagen:

![float image for print layout](https://github.com/jamal-pb95/guides/blob/master/assets/css3-float-print-layout.png "css-tricks-float-img")
```
img { 
    float: right; 
 } 
```

Este ejemplo especifica que una imagen debe flotar a la derecha en una página:

![Float image for web layout](https://github.com/jamal-pb95/guides/blob/master/assets/css3-float-web-text-wrap.png "flotar img web")
```
img { 
    float: left; 
 } 
```

Este ejemplo especifica que una imagen debe flotar a la izquierda en una página:
```
img { 
    float: none; 
 } 
```

En el siguiente ejemplo, la imagen se mostrará justo donde aparece en el texto ( `float: none;` ):

### La propiedad `clear`

La propiedad `clear` especifica qué elementos pueden flotar junto al elemento borrado y en qué lado.

La propiedad `clear` puede tener uno de los siguientes valores:

`none` - Permite elementos flotantes en ambos lados. Esto es por defecto `left` - No se permiten elementos flotantes en el lado izquierdo `right` - No se permiten elementos flotantes en el lado derecho `both` - No se permiten elementos flotantes en el lado izquierdo o derecho `inherit` - El elemento hereda el valor claro de su padre La forma más común de usar la propiedad `clear` es después de haber usado una propiedad `float` en un elemento.

Cuando elimines flotadores, debes hacer coincidir el `clear` con el `float` . Si un elemento está flotando a la `left` , entonces debe `clear` a la `left` . Su elemento `float` continuará `float` , pero el elemento borrado aparecerá debajo de él en la página web.

#### Ejemplo:

![unclear footer image](https://github.com/jamal-pb95/guides/blob/master/assets/unclearedfooter.png "imagen de pie de página poco clara") Fuente: CSS-TRICS
```
div { 
    clear: left; 
 } 
```

![clear footer image](https://github.com/jamal-pb95/guides/blob/master/assets/clearedfooter.png "imagen clara de pie de página") Fuente: CSS-TRICS

### Recursos adicionales:

*   MDN CSS: [Float](https://developer.mozilla.org/en-US/docs/Web/CSS/float) & [Clear](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)
*   [W3Schools tutoriales](https://www.w3schools.com/css/css_float.asp)
*   Trucos CSS: [flotar](https://css-tricks.com/all-about-floats/) y [despejar](https://css-tricks.com/almanac/properties/c/clear/)