---
title: Z Index
localeTitle: Índice Z
---
## Índice Z

El índice Z (índice `z-index` ) es una propiedad CSS que define el orden de los elementos HTML superpuestos. Los elementos con un índice más alto se colocarán sobre los elementos con un índice más bajo.

**Nota** : el índice Z solo funciona en los elementos posicionados ( `position:absolute` , `position:relative` o `position:fixed` ).

#### Valores posibles

```css
/* Default value if not specified */ 
 z-index: auto; 
 
 /* Integer values */ 
 z-index: 1; 
 z-index: 100; 
 z-index: 9999; 
 z-index: -1; 
 
 /* Global values */ 
 z-index: inherit; 
 z-index: initial; 
 z-index: unset; 
```

#### Ejemplo de uso

En este ejemplo, puede ver tres cuadros mostrados uno encima del otro en diferentes órdenes utilizando `z-index` .

_HTML_

```html

<div class="container"> 
  <div class="box" id="blue"></div> 
  <div class="box" id="red"></div> 
  <div class="box" id="green"></div> 
 </div> 
```

_CSS_

```css
#blue { 
  background-color: blue; 
 } 
 
 #red { 
  background-color: red; 
 } 
 
 #green { 
  background-color: green; 
 } 
```

Como `z-index` no se definió, tendrá un valor predeterminado de `auto` . Este es un resultado:

![Una imagen de tres cajas.](https://image.prntscr.com/image/Yc9oGkdKTnm_YIHzaKQmbQ.png)

Intente cambiar el orden a Verde, Azul, Rojo en CSS usando `z-index` .

```css
#blue { 
  background-color: blue; 
  z-index: 2; 
 } 
 
 #red { 
  background-color: red; 
  z-index: 1; 
 } 
 
 #green { 
  background-color: green; 
  z-index: 3; 
 } 
```

Su resultado será:

![Una imagen de tres cajas.](https://image.prntscr.com/image/Am9XxPO4Q2mq-PcokJ47Wg.png)

Utilice Z Index si necesita colocar un elemento de fondo debajo de un contenedor. Puede colocar fácilmente el fondo debajo de cada elemento dándole un Índice Z negativo como el siguiente:

```css
#background { 
  z-index: -1; 
 } 
```

#### Más información:

[https://css-tricks.com/almanac/properties/z/z-index/](https://css-tricks.com/almanac/properties/z/z-index/)

[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS _Posicionamiento / comprensión_ z\_index](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index)

[https://philipwalton.com/articles/what-no-one-told-you-about-z-index/](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)