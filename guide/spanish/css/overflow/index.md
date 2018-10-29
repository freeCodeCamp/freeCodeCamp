---
title: Overflow
localeTitle: Rebosar
---
# Rebosar

La propiedad de `overflow` especifica qué sucede si el contenido desborda la caja de un elemento (esta propiedad solo funciona para elementos de bloque con una altura específica).

Esta propiedad especifica si se debe recortar el contenido o agregar barras de desplazamiento cuando el contenido de un elemento es demasiado grande para ajustarse a un área específica.

Por ejemplo, un elemento de nivel de bloque determinado ( `<div>` ) establecido en 300px de ancho, que contiene una imagen de 400px de ancho. La imagen saldrá del div y será visible por defecto. Sin embargo, si el valor de desbordamiento se establece en oculto, la imagen se cortará a 300 px.

## Valores

*   `visible` : este es el valor predeterminado de la propiedad. El contenido no se recorta cuando es más grande que el cuadro.
*   `hidden` : se ocultará el contenido desbordado.
*   `scroll` : similar a oculto, pero los usuarios podrán desplazarse por el contenido oculto.
*   `auto` : si el contenido sale de su caja, ese contenido se ocultará, mientras que una barra de desplazamiento debe ser visible para que los usuarios lean el resto del contenido.
*   `initial` : utiliza el valor predeterminado que es visible.
*   `inherit` : establece el desbordamiento en el valor de su elemento principal.

## Ejemplos

### Visible:

```css
.box-element { overflow: visible; } 
```

![Imagen de ejemplo](https://s26.postimg.org/gweu6g5yh/1-vissible.png)

### Oculto:

```css
.box-element { overflow: hidden; } 
```

![Imagen de ejemplo](https://s26.postimg.org/l49mf77e1/2-hidden.png)

### Voluta:

```css
.box-element { overflow: scroll; } 
```

![Imagen de ejemplo](https://s26.postimg.org/d8z30dxrd/3-scroll.png)

### Auto:

```css
.box-element { overflow: auto; } 
```

![Imagen de ejemplo](https://s26.postimg.org/z5q7ei0bt/4-autoank.png)

## overflow-x y overflow-y

*   `overflow-x` : permite al usuario desplazarse por el contenido que se extiende más allá de la altura del elemento de cuadro.
*   `overflow-y` : permite al usuario desplazarse por el contenido que se extiende más allá del ancho del cuadro.

```css
  .box-element { 
    overflow-x: scroll; 
    overflow-y: auto; 
  } 
```

Y el `.box-element` se verá así: ![Imagen de ejemplo](https://s26.postimg.org/ff2kmdfzd/5-_Xand_Y.png)

Si el contenido desborda el eje Y, entonces ese contenido se ocultará, mientras que una barra de desplazamiento debe ser visible para que los usuarios lean el resto del contenido.

#### Más información:

Trucos CSS: [desbordamiento](https://css-tricks.com/almanac/properties/o/overflow/)