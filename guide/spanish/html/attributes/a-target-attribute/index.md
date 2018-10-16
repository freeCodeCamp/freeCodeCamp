---
title: A Target Attribute
localeTitle: Un atributo de destino
---
## Un atributo de destino

El `<a target>` atributo especifica dónde abrir el documento vinculado en una `a` etiqueta (ancla).

#### Ejemplos:

Un atributo de destino con el valor de "\_blank" abre el documento vinculado en una nueva ventana o pestaña.

```html

    <a href="https://www.freecodecamp.org" target="_blank">freeCodeCamp</a> 
```

Un atributo de destino con el valor de "\_self" abre el documento vinculado en el mismo marco en el que se hizo clic (este es el valor predeterminado y, por lo general, no es necesario especificarlo).

```html

    <a href="https://www.freecodecamp.org" target="_self">freeCodeCamp</a> 
```

```html

    <a href="https://www.freecodecamp.org">freeCodeCamp</a> 
```

Un atributo de destino con el valor de "\_parent" abre el documento vinculado en el marco principal.

```html

    <a href="https://www.freecodecamp.org" target="_parent">freeCodeCamp</a> 
```

Un atributo de destino con el valor de "\_top" abre el documento vinculado en el cuerpo completo de la ventana.

```html

    <a href="https://www.freecodecamp.org" target="_top">freeCodeCamp</a> 
```

Un atributo de destino con el valor de _"nombre de marco"_ Abre el documento vinculado en un marco con nombre específico.

```html

    <a href="https://www.freecodecamp.org" target="framename">freeCodeCamp</a> 
```

#### Más información:

Atributo de destino: [w3schools](https://www.w3schools.com/tags/att_a_target.asp)