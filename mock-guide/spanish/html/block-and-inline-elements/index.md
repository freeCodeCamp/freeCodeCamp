---
title: Block and Inline Elements
localeTitle: Bloque y elementos en línea
---
## Bloque y elementos en línea

Vamos a entenderlos usando los siguientes ejemplos:

#### Ejemplo de código con salida:

![Salida de bloque](https://user-images.githubusercontent.com/16048167/31070017-6f2cf0a2-a77c-11e7-9de6-110b9d0b488d.PNG)

#### Elemento de nivel de bloque:

Un elemento de nivel de bloque ocupa todo el espacio del elemento principal (contenedor) como `<div>` y `<p>` en el ejemplo.

Tenga en cuenta que tanto `<div>` como `<p>` comienzan desde una nueva línea cada vez, formando una estructura de **bloque** . Los elementos a nivel de bloque comienzan en nuevas líneas.

Los **elementos** comunes **a nivel de bloque** son `<div>` , `<p>` , `<article>` , `<section>` , `<figure>` , `<footer>` etc.

#### Elemento en línea:

En línea como el nombre dice "incluido como parte del texto principal y no como una sección separada". Los elementos en línea ocupan el espacio según sea necesario dentro del espacio definido por el elemento principal. A diferencia de los elementos a nivel de bloque, no comienzan en nuevas líneas.

Algunos de los **elementos en línea** son `<a>` , `<span>` , `<img>` , `<code>` , `<cite>` , `<button>` , `<input>` etc.

#### Ejemplo de código con salida:

![Salida en línea](https://user-images.githubusercontent.com/16048167/31069389-e1e3fc10-a779-11e7-86d2-6685e0061f52.png)

**_Nota_** : Los elementos de nivel de bloque pueden contener otros elementos de nivel de bloque o elementos en línea. Los elementos en línea **no pueden** contener elementos a nivel de bloque.

#### Cambios en HTML5

Si bien la comprensión de los elementos de bloque y en línea sigue siendo relevante, debe tener en cuenta que estos términos se definieron en versiones anteriores de la especificación HTML. En HTML5, un conjunto más complejo de "categorías de contenido" reemplaza los elementos de nivel de bloque y en línea. Los elementos de nivel de bloque se ubican en gran parte en la categoría "contenido de flujo" en HTML5, mientras que los elementos en línea corresponden a la categoría de "contenido de frases". Para obtener más información sobre las nuevas categorías de contenido en HTML5, incluido el contenido de flujo y el contenido de frases, consulte la [página de categorías de contenido en la red de desarrolladores de Mozilla.](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories)

#### Más información:

Por favor refiérase a [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Block-level_vs._inline)