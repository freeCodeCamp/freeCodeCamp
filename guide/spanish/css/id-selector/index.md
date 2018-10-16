---
title: ID Selector
localeTitle: Selector de ID
---
## Selector de ID

El selector de ID de CSS aplica estilos a un elemento html específico. El selector de ID de CSS debe coincidir con el atributo de ID de un elemento HTML. A diferencia de las clases, que se pueden aplicar a múltiples elementos en un sitio, una ID específica solo se puede aplicar a un único elemento en un sitio. El ID de CSS anulará las propiedades de la clase CSS. Para seleccionar un elemento con un ID específico, escriba un carácter de hash (#), seguido del ID del elemento.

### Sintaxis

```css
#specified_id { /* styles */ } 
```

Puede combinar el selector de ID con otros tipos de selectores para diseñar un elemento muy específico.

```css
section#about:hover { color: blue; } 
 
 div.classname#specified_id { color: green; } 
```

### Nota sobre las identificaciones

Se debe evitar la identificación al peinar si es posible. Ya que tiene una alta especificidad y solo se puede anular si inserta estilos, o si agrega estilos a `<style>` . El peso de los identificadores de clase de anulación de ID y los selectores de tipo.

Recuerde, el selector de ID debe coincidir con el atributo ID de un elemento HTML.

```html

<div id="specified_id"><!-- content --></div> 
```

### Especificidad

Los selectores de ID tienen una alta especificidad que los hace difíciles de anular. Las clases tienen una especificidad mucho más baja y generalmente son la manera preferida de diseñar elementos para evitar problemas de especificidad. [Especificidad en MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

#### Más información:

[freeCodeCamp Challenge - Establece el ID de un elemento](https://www.freecodecamp.org/challenges/set-the-id-of-an-element)

[Desafío freeCodeCamp: use un atributo de ID para diseñar un elemento](https://www.freecodecamp.org/challenges/use-an-id-attribute-to-style-an-element)

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors)