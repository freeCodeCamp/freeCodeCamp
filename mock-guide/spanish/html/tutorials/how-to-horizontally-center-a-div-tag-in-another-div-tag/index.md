---
title: How to Horizontally Center a Div Tag in Another Div Tag
localeTitle: Cómo centrar horizontalmente una etiqueta Div en otra etiqueta Div
---
## Cómo centrar horizontalmente una etiqueta Div en otra etiqueta Div

Centrar horizontalmente un `<div>` dentro de otro `<div>` es bastante fácil.

Comencemos creando dos etiquetas div con las clases "parent" y "child". El padre será nuestro contenedor, y el niño será el `<div>` que estamos centrando horizontalmente.

```html

<!DOCTYPE html> 
 <html> 
 <head> 
  <meta charset="UTF-8"> 
  <title>How to Horizontally Center a Div Tag in Another Div Tag</title> 
 </head> 
 <body> 
  <div class="parent"> 
    <div class="child"> 
      <p>This is the center.</p> 
    </div> 
  </div> 
 </body> 
 </html> 
```

Hay un par de maneras en que puede abordar esto, pero para este tutorial, concentrémonos en dos. En la primera, centraremos a nuestro hijo `<div>` utilizando el `margin` y en la segunda, utilizaremos `flexbox` .

### Ejemplo de centrado de una etiqueta div con márgenes

Si especifica un `width` en su div hijo, puede usar el `margin: auto` . Esto centrará a su hijo `<div>` distribuyendo uniformemente los márgenes izquierdo y derecho.

```css
.parent { 
  border: 2px solid red; 
 } 
 
 .centered-child { 
  width: 50%; 
  margin: auto; 
  border: 1px solid black; 
 } 
```

### Ejemplo de centrado de una etiqueta Div con Flexbox

Usar flexbox para centrar un `<div>` es ligeramente diferente. Primero, no es necesario que especifique el `width` en su hijo `<div>` . En segundo lugar, en realidad centra el hijo `<div>` aplicando las propiedades css en el `<div>` .

Para centrar a un niño `<div>` usando flexbox, debe usar `display: flex` junto con `justify-content: center` en el padre `<div>` .

```css
.parent { 
  display: flex; 
  justify-content: center; 
  border: 2px solid red; 
 } 
 
 .centered-child { 
  border: 1px solid black; 
 } 
```

#### Más información:

[Matriz de soporte de Flexbox](http://caniuse.com/#search=flexbox)