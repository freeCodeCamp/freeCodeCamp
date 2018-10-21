---
title: Font Size Attribute
localeTitle: Atributo de tamaño de fuente
---
## Atributo de tamaño de fuente

Este atributo especifica el tamaño de fuente como un valor numérico o relativo. Los valores numéricos varían de `1` a `7` siendo `1` el más pequeño y `3` el predeterminado. También se puede definir utilizando un valor relativo, como `+2` o `-3` , que lo establece en relación con el valor del atributo de tamaño del elemento `<basefont>` , o en relación con `3` , el valor predeterminado, si no existe ninguno.

Sintaxis:

`<font size="number">`

Ejemplo:

```html

<html> 
  <body> 
    <font size="6">This is some text!</font> 
  </body> 
 </html> 
```

Nota: `The size attribute of <font> is not supported in HTML5. Use CSS instead.`