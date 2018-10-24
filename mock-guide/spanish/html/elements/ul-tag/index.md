---
title: Ul Tag
localeTitle: Etiqueta de ul
---
## Etiqueta de ul

La lista no ordenada `<ul>` es una etiqueta utilizada para crear listas con viñetas. Para crear una lista dentro de `<ul>` , use la etiqueta `<li>` . Para crear listas de estilos, vaya a las listas de estilos CSS y realice los cambios.

`<ul>` se puede anidar dentro de otras listas y es compatible con otras etiquetas como `<a>` , `<p>` , `<button>` , las etiquetas de estilo html ( `<strong>` , `<em>` , etc.).

### Ejemplo

Para crear lo siguiente:

```html

 <ul> 
    <li>This is the bulleted list #1</li> 
    <li>This is the bulleted list #2</li> 
    <li>This is the bulleted list #3</li> 
      <li> 
        <ul> 
          <li>This is the bulleted nested list #1</li> 
        </ul> 
      </li> 
  </ul> 
```

Usted usaría este código HTML: `html <html> <head> <title></title> </head> <body> <ul> <li>This is the bulleted list #1</li> <li>This is the bulleted list #2</li> <li>This is the bulleted list #3</li> <li> <ul> <li>This is the bulleted nested list #1</li> </ul> </li> </ul> </body> </html>`

## Otros recursos

*   [La lista ordenada `<ol>`](https://github.com/freeCodeCamp/guides/blob/master/src/pages/html/elements/ol-tag/index.md)