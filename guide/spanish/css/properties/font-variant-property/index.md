---
title: Font Variant
localeTitle: Variante de fuente
---
## Propiedad variante de fuente

La propiedad font-variant se usa más comúnmente para cambiar el texto dirigido a mayúsculas. El valor predeterminado es `normal` .

```css
p { 
  font-variant: small-caps; 
 } 
```

La propiedad también acepta `all-small-caps` , `petite-caps` , `all-petite-caps` , `unicase` `titling-caps` y `unicase` ; sin embargo, estos son nuevos en CSS3 y aún no están bien soportados.

Tenga en cuenta que si usa mayúsculas en el marcado HTML, esto anulará el valor de las mayúsculas pequeñas, lo que dará como resultado letras mayúsculas regulares. Si desea mantener el marcado en mayúsculas, pero cambiar a mayúsculas con CSS, simplemente configure `text-transform: lowercase` junto con su declaración de mayúsculas y `text-transform: lowercase` .

Si bien las mayúsculas pueden agregar un toque de elegancia a su tipografía, los diseñadores recomiendan usarlas solo si están integradas en la fuente. Las minúsculas "falsas" son versiones reducidas generadas por computadora de mayúsculas. Las pequeñas gorras "reales", por otro lado, están dibujadas por separado por el diseñador de tipos y aparecen un poco más anchas y gordas que las "falsas".

#### Más información:

[Diseño para hackers](https://designforhackers.com/blog/small-caps/)

[Variante de fuente en MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant)