---
title: Z Index Property
localeTitle: Con propiedad de índice
---
## Índice de Z propiedad

La propiedad z-index especifica el orden de pila de un elemento. Cualquier elemento posicionado en una página web puede superponerse entre sí en un cierto orden, imitando una tercera dimensión perpendicular a la pantalla. Un elemento con un orden de apilamiento mayor siempre está delante de un elemento con un orden de apilamiento inferior. El orden de la pila está controlado por el índice z. Esta propiedad solo funciona para elementos cuyo valor de posición se establece en absoluto, fijo o relativo.

#### Sintaxis

índice z: auto | número | inicial | heredado;

#### Ejemplo
```
div { 
  position: absolute; 
  z-index: -1; 
 } 
```

#### Valores

Auto: establece el orden de pila igual a sus padres. Esto es por defecto Número: establece el orden de apilamiento del elemento. Se permiten números negativos. Cuanto mayor sea el valor, mayor será el elemento. Con un valor igual de índice z, el elemento que se describe en el código HTML a continuación estará al frente. Inicial: Establece esta propiedad a su valor predeterminado. Heredar: hereda esta propiedad de su elemento padre.

#### Más información:

[Índice Z en MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) [Índice Z en W3schools](https://www.w3schools.com/cssref/pr_pos_z-index.asp)