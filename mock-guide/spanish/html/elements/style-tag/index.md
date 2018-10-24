---
title: Style Tag
localeTitle: Etiqueta de estilo
---
## Etiqueta de estilo

La etiqueta de estilo se usa como un archivo css, excepto dentro de un HTML, así:
```
    <head> 
      <title>Your Title</title> 
      <style> 
        p { 
          color:red; 
        } 
      </style> 
    </head> 
```

Eso haría que el color de la etiqueta del párrafo sea rojo. Es algo útil si solo quieres poner un poco de código, pero si quieres una hoja de estilo realmente larga, entonces recomiendo usar `<link />` .

#### Más información:

[Escuelas W3C](https://www.w3schools.com/tags/tag_style.asp)

Más información:

La etiqueta de estilo se utiliza para establecer cualquier estilo CSS para una página web dentro de un documento. La etiqueta de estilo debe estar anidada en la sección de encabezado del documento html:

```html

<head> 
  <style> 
  h1 { 
     text-align: center; 
     font-family: sans-serif; 
     } 
  </style> 
 </head> 
```

Puede escribir cualquier código CSS dentro de la etiqueta de estilo de acuerdo con su sintaxis.