---
title: Span Tag
localeTitle: Dia de span
---
## Etiqueta Span

La etiqueta `<span>` es un elemento contenedor de propósito general similar a `<div>` . Los navegadores no realizan ningún cambio visual en `<span>` s de forma predeterminada, pero puede personalizarlos con CSS o manipularlos con JavaScript.

### Ejemplo

```html

<html> 
  <head> 
    <title>The Span Tag</title> 
  </head> 
  <body> 
    <div> 
      <p>This is a normal paragraph without any changes.</p> 
      <p>This paragraph has <span style="color:red">red span styling</span> inside it without affecting the rest of the document.</p> 
    </div> 
  </body> 
 </html> 
```

El código para el párrafo con texto rojo se ve así:

```html

<p>This paragraph has <span style="color:red">red span styling</span> inside it without affecting the rest of the document.</p> 
```

#### Diferencias entre `<span>` y `<div>`

La principal diferencia es que `<span>` es un elemento en línea, mientras que `<div>` es un elemento de bloque. Esto significa que un `<span>` puede aparecer dentro de una oración o párrafo (como en el ejemplo anterior), mientras que un `<div>` comenzará una nueva línea de contenido. Tenga en cuenta que la propiedad de `display` CSS puede cambiar este comportamiento predeterminado, ¡pero va más allá del alcance de este artículo!

#### Más información:

*   [Referencia de elementos HTML MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)