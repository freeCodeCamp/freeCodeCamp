---
title: Text Indent Property
localeTitle: Propiedad de sangría de texto
---
## Propiedad de sangría de texto

La propiedad css `text-indent` especifica la cantidad de sangría (espacio vacío) que se coloca antes de las líneas de texto en un bloque. De forma predeterminada, esto controla la sangría de solo la primera línea formateada del bloque, pero las palabras clave de `hanging` y de `each-line` se pueden usar para cambiar este comportamiento.

**Palabras clave**

`hanging` : la sangría afecta a la primera línea del contenedor de bloques, así como a cada línea después de un salto de línea forzado, pero no afecta a las líneas después de un corte de envoltura suave.

`each-line` : invierte las líneas que están sangradas. Todas las líneas excepto la primera línea serán sangradas.

**Sintaxis**

```css
  /* <length> values */ 
  text-indent: 40px; 
 
  /* <percentage> value relative to the containing block width */ 
  text-indent: 10%; 
 
  /* Keyword values */ 
  text-indent: 2em each-line; 
  text-indent: 2em hanging; 
  text-indent: 2em hanging each-line; 
```

_Nota: actualmente, la compatibilidad con las palabras clave se `hanging` y `each-line` solo está disponible detrás del indicador de características de la Plataforma web experimental_

### Más información:

*   [MDN Doc en `text-indent`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
*   [Soporte del navegador para `text-indent`](http://caniuse.com/#feat=css-text-indent)