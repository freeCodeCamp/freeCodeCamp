---
title: Cascading CSS Variables
localeTitle: Variables CSS en cascada
---
## Variables CSS en cascada

Las variables CSS en cascada oficialmente llamadas propiedades personalizadas son entidades que se comportan de manera similar a las variables tradicionales. En ese sentido, las variables permiten que los datos se almacenen y actualicen para reflejar los nuevos valores más adelante 2 .

Las variables CSS se definen para que contengan valores específicos y se reutilicen a lo largo de un documento. Se configuran utilizando la notación de propiedades personalizadas (p. Ej., `--main-color: black` ) y se accede mediante la función `var()` (p. Ej., `color: var(--main-color)` ) 1 . Declare la variable CSS en los selectores `:root` o `body` para el acceso global.

Al mantener documentos CSS complejos, no solo es beneficioso utilizar Variables CSS sino también inteligente. Al realizar actualizaciones futuras en lugar de buscar cientos de líneas de código potenciales, solo se necesita actualizar la variable CSS necesaria 1 .

### Sintaxis

```css
:root { 
  --main-bkgnd-color:  #00B8CB; 
 } 
 
 body { 
  background-color: var(--main-bkgnd-color); 
  font-family: 'Raleway', Helvetica, sans-serif; 
 } 
```

Declarando la variable:

```css
--custom-name: value 
```

Usando la variable: `css var(--custom-name)`

### Fuentes

1.  [Visite la página de Variables CSS en cascada de MDN para obtener más información.](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
2.  [Perna, maria antonietta. "Una Guía Práctica de variables CSS (Propiedades personalizadas)" _sitepoint._ 01 de agosto de 2018. Acceso: 5 de octubre de 2018](https://www.sitepoint.com/practical-guide-css-variables-custom-properties/)