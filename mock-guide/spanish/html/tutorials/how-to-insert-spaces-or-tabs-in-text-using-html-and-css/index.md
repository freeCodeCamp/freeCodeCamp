---
title: How to Insert Spaces or Tabs in Text Using HTML and CSS
localeTitle: Cómo insertar espacios o tabulaciones en texto usando HTML y CSS
---
## Cómo insertar espacios o tabulaciones en texto usando HTML y CSS

Hay una multitud de formas de insertar espacios usando html. Por simplicidad lo haremos repase uno de estos, que están insertando una etiqueta Span.

## Etiqueta Span

`<span>`

Las etiquetas de `<span>` son etiquetas de cierre automático, lo que significa que no necesitan un `/>` .

## Ejemplo de span

A continuación se muestra un ejemplo de cómo una etiqueta `<span>` inserta un espacio entre el texto.

`<p>Hello may name is <span> James</p>`

Si asigna una clase a su `<span>` entonces podría agregarle algo de css. Al igual que,

`<p>Hello my name is <span class=tab> James</p>`

Luego, ya sea en una hoja de estilo externa o en una hoja de estilo interna, puede dar la `class .tab` Algunas propiedades.

## Ejemplo de clase de span

Por ejemplo

`.tab {padding-left: 2px;}`

También puede dar a `<span>` algunas propiedades de estilo en línea, como se muestra a continuación.

`<p>Hello my name is <span style="padding-left: 2px;"> James</p>`

## Más información

Para más información sobre la etiqueta o sobre; Cómo insertar espacios o tabulaciones en el texto Utilizando HTML y CSS, puede visitar w3schools. https://www.w3schools.com/tags/tag\_span.asp