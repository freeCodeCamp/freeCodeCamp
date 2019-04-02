---
title: Introduction to HTML5 Elements
localeTitle: Introducción a los elementos HTML5
---
## Introducción a los elementos HTML5

Para envolver un elemento HTML alrededor de otro (s) elemento (s) HTML significa colocar el (los) elemento (s) _interno_ (s) después de la etiqueta de apertura de la envoltura y antes de su etiqueta de cierre.  

El siguiente ejemplo representa un elemento `h1` y un elemento `h4` envuelto en un elemento de `header` :
```
<header> 
  <h1> Big title </h1> 
  <h4> Tiny subtitle </h4> 
 </header> 
```

Como puede ver, el `header` contiene los otros elementos que terminan en el mismo nivel (el `h1` termina antes de que comience el `h4` y ambos están anidados en el `header` ).