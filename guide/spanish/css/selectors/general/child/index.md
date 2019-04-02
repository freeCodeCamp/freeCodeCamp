---
title: Child
localeTitle: Niño
---
## Niño

El selector secundario está representado por `>` y se coloca entre dos selectores: `parent > child` . Coincide con cualquier segundo selector que sea hijo del primer selector (el padre). El segundo selector debe ser hijos inmediatos del primero.

Aquí hay un ejemplo de la sintaxis:

```css
first selector (parent) > second selector (child) { 
    css declarations; 
 } 
```

Aquí hay un ejemplo de código que coincide con todos los elementos del `span` inmediato de un padre `div` :

```css
div > span { 
    background-color: red; 
 } 
```

### Más información:

*   [Borrador de Trabajo del Selector de Niños del W3C](https://www.w3.org/TR/CSS22/selector.html#child-selectors)