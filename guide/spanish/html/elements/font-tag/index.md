---
title: Font Tag
localeTitle: Etiqueta de fuente
---
## Etiqueta de fuente

_Esta característica está en desuso en HTML 4.01 y eliminada en HTML 5._

El Elemento de fuente HTML `<font>` define el tamaño de fuente, el color y la cara de su contenido. Se normalizó en HTML 3.2, pero luego quedó obsoleto en HTML 4.01 y ahora está obsoleto en HTML5. Aunque todavía puede funcionar en algunos navegadores, se recomienda dejar de usarlo, ya que podría eliminarse en cualquier momento. Las fuentes de estilo pueden lograrse y controlarse mucho mejor a través de CSS, de hecho, todo estilo debe escribirse solo con CSS.

El comportamiento **anterior** del elemento `<font>` :

*   **Color:** este atributo le permite establecer el color del texto en un color con nombre como 'azul' o un color hexadecimal en el formato de #RRGGBB.
*   **Cara:** este atributo le permite establecer la familia de fuentes y contendrá una lista separada por comas de uno o más nombres de fuentes. Si el navegador no admite la primera fuente de la lista, se moverá a la segunda fuente. Si no se admite o no se enumera ninguna fuente, el navegador usualmente predeterminará una fuente para ese sistema.
*   **Tamaño:** este atributo le permite especificar el tamaño de la fuente. Hay dos formas de hacer esto, ya sea configurando un valor numérico o un valor relativo. Los valores numéricos varían de 1 a 7, 1 es el más pequeño y 3 es el predeterminado. Los valores relativos, como -2 o +2, establecen el valor en relación con el tamaño del elemento `<basefont>` o '3' el valor predeterminado.

Un ejemplo:

```html

<font face="fontNameHere" size="7" color="blue">My Text Here</font> 
```

#### Más información:

*   [MDN - etiqueta de fuente HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font)
*   [MDN - Fuente CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/font)