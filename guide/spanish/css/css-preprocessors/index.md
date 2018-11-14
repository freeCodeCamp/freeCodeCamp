---
title: CSS Preprocessors
localeTitle: Preprocesadores CSS
---
## Preprocesadores CSS

Los preprocesadores CSS se están convirtiendo cada vez más en un pilar en el flujo de trabajo de los desarrolladores web front-end. CSS es un lenguaje increíblemente complicado y lleno de matices, y en un esfuerzo por facilitar su uso, los desarrolladores a menudo recurren al uso de preprocesadores como SASS o LESS.

Los preprocesadores de CSS compilan el código que se escribe con un compilador especial y luego lo usan para crear un archivo css, que luego puede ser referenciado por el documento HTML principal. Cuando use cualquier preprocesador CSS, podrá programar en CSS normal de la misma manera que lo haría si el preprocesador no estuviera en su lugar, pero también tiene más opciones disponibles para usted. Algunos, como SASS, tienen estándares de estilo específicos que hacen que la redacción del documento sea aún más fácil, como la libertad de omitir llaves si decide hacerlo.

Por supuesto, los preprocesadores CSS también ofrecen otras características. Muchas de las funciones ofrecidas son increíblemente similares en todos los preprocesadores, con solo leves variaciones en la sintaxis. Por lo tanto, puede elegir a casi cualquier persona que desee y podrá lograr las mismas cosas. Algunas de las características más útiles son:

### Variables

Uno de los elementos más utilizados en cualquier lenguaje de programación es la variable, algo de lo que CSS carece notablemente. Al tener variables a su disposición, puede definir un valor una vez y reutilizarlo durante todo el programa. Un ejemplo de esto en SASS sería:

```SASS
$yourcolor: #000056 
 .yourDiv { 
  color: $yourcolor; 
 } 
```

Al declarar la variable `SASS yourcolor` una vez, ahora es posible reutilizar el mismo color exacto en todo el documento sin tener que volver a escribir la definición.

### Bucles

Otro elemento común en los idiomas son los bucles, otra cosa que carece de CSS. Los bucles se pueden usar para repetir las mismas instrucciones varias veces sin tener que volver a ingresar varias veces. Un ejemplo con SASS sería:

\`\` \`SASS @for $ vfoo 35px a 85px { .margin - # {vfoo} { margen: $ vfoo 10px; } }
```
This loop saves us from having the to write the same code multiple times to change the margin size. 
 
 ### If/Else Statements 
 Yet another feature which CSS lacks are If/Else statements. These will run a set of instructions only if a given condition is true. An example of this in SASS would be: 
```

HABLAR CON DESCARO A ancho @if (cuerpo)> 500px { color de fondo: azul; } else { color de fondo: blanco; } \`\` \` Aquí, el color de fondo cambiará de color dependiendo del ancho del cuerpo de la página.

Estas son solo algunas de las funciones principales de los Preprocesadores CSS. Como puede ver, los Preprocesadores CSS son herramientas increíblemente útiles y versátiles. Muchos desarrolladores web los usan, y es altamente recomendable aprender al menos uno de ellos.

#### Más información:

SASS: http://sass-lang.com/

MENOS: http://lesscss.org/

Stylus: http://stylus-lang.com/

Página MDN: https://developer.mozilla.org/en-US/docs/Glossary/CSS\_preprocessor