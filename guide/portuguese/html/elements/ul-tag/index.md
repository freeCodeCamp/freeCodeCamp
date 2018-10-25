---
title: Ul Tag
localeTitle: Tag Ul
---
## Tag Ul

A lista não ordenada `<ul>` é uma tag usada para criar listas com marcadores. Para criar uma lista dentro do `<ul>` , use a tag `<li>` . Para estilizar listas, vá para as listas de estilos CSS e faça as alterações.

O `<ul>` pode ser aninhado dentro de outras listas e é compatível com outras tags, como `<a>` , `<p>` , `<button>` , as tags de estilo html ( `<strong>` , `<em>` , etc).

### Exemplo

Para criar o seguinte:

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

Você usaria esse código HTML: `html <html> <head> <title></title> </head> <body> <ul> <li>This is the bulleted list #1</li> <li>This is the bulleted list #2</li> <li>This is the bulleted list #3</li> <li> <ul> <li>This is the bulleted nested list #1</li> </ul> </li> </ul> </body> </html>`

## Outros recursos

*   [A lista ordenada `<ol>`](https://github.com/freeCodeCamp/guides/blob/master/src/pages/html/elements/ol-tag/index.md)