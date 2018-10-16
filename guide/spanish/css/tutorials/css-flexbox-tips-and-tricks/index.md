---
title: CSS Flexbox Tips and Tricks
localeTitle: CSS Flexbox Consejos y trucos
---
# CSS Flexbox

[CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) nos permite formatear fácilmente nuestro HTML como nunca antes había sabido que era posible. Con flexbox es posible alinear vertical y horizontalmente, fácilmente. ¿Como el sonido de eso? Sí yo también.

También es fantástico para el diseño general de su sitio web o aplicación, es fácil de aprender, tiene un buen soporte (en todos los navegadores modernos) y es excelente para trabajar, por no mencionar que no se tarda mucho en comprenderlo. !

## Flexbox

Aquí hay una lista de las propiedades de flexbox que se pueden usar para colocar elementos en css:

### CSS que puede ser aplicado al contenedor.
```
display: flexbox | inline-flex; 
 flex-direction: row | row-reverse | column | column-reverse; 
 flex-wrap: nowrap | wrap | wrap-reverse; 
 flex-flow: <'flex-direction'> || <'flex-wrap'> 
 justify-content: flex-start | flex-end | center | space-between | space-around; 
 align-items: flex-start | flex-end | center | baseline | stretch; 
 align-content: flex-start | flex-end | center | space-between | space-around | stretch; 
```

### CSS que se puede aplicar a elementos / elementos en el contenedor
```
order: <integer>; 
 flex-grow: <number>; /* default 0 */ 
 flex-shrink: <number>; /* default 1 */ 
 flex-basis: <length> | auto; /* default auto */ 
 flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ] 
 align-self: auto | flex-start | flex-end | center | baseline | stretch; 
```

Así que ahora tienes tu caja de herramientas pero preguntas "¿Qué hago con mis herramientas, cómo uso estas?", Déjame mostrarte.

### Display Flex

`display: flex;` es solo para decirle a su navegador, hey, me gustaría usar flexbox con este contenedor, por favor. Esto inicializará este cuadro como un contenedor flexible y aplicará algunas propiedades de flexión predeterminadas.

Así es como se ve el contenedor sin `display: flex;`

![CSS parque infantil sin propiedades de flexión](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8f20f30d24cba9a7f56bf950a3f23d37d356ca51.png)

Después de añadir `display: flex;` obtenemos lo siguiente, las propiedades de flexión predeterminadas se aplican haciendo que se muestre como tal

![Pantalla de juegos CSS estilo flex por defecto](//discourse-user-assets.s3.amazonaws.com/original/2X/6/66404664f9177ae748be00f769faf67d5956034d.png)

### Dirección de flexión

`flex-direction:` nos permite controlar cómo se muestran los elementos en el contenedor, ¿los quiere de izquierda a derecha, de derecha a izquierda, de arriba a abajo o de abajo a arriba? Puede hacer todo esto fácilmente configurando la dirección de flexión del contenedor.

Flexbox aplica fila como el predeterminado para la dirección. Aquí es cómo se ven todos:

`flex-direction: row;`

![dirección flexible: fila; ejemplo](//discourse-user-assets.s3.amazonaws.com/original/2X/9/951cc993820547efa28e70dca905f5531a4488d5.png)

`flex-direction: row-reverse;`

![dirección de flexión: ejemplo de fila inversa](//discourse-user-assets.s3.amazonaws.com/original/2X/c/cf738aaf83f29eccdb461e91b775b10e41b92389.png)

`flex-direction: column;`

![dirección flexible: ejemplo de columna](//discourse-user-assets.s3.amazonaws.com/original/2X/7/7ef77565bc07ee86fd3033a531dd76b49709cf7e.png)

`flex-direction: column-reverse;`

![dirección de flexión: ejemplo de columna inversa](//discourse-user-assets.s3.amazonaws.com/original/2X/e/ec9a1ec064bf0027fa61016ca620df14d9bd47a9.png)

### Flex Wrap

De manera predeterminada, Flexbox intentará ajustar todos los elementos en una fila, pero puede cambiar esto con la propiedad flex-wrap, esto le permite establecer si los elementos se extenderán o no, hay 3 propiedades para `flex-wrap:`

`flex-wrap: nowrap` este es el ajuste por defecto y buscará que encaje todo en una fila de izquierda a derecha.

`flex-wrap: wrap` esto permitirá que los elementos continúen creando múltiples filas y de izquierda a derecha.

`flex-wrap: wrap-reverse` permite que los elementos estén en varias filas, pero esta vez se muestran de derecha a izquierda.

### Flujo flexible

Flex flow combina el uso de `flex-wrap` y `flex-direction` en una sola propiedad, primero se usa configurando la dirección y luego la envoltura.

`flex-flow: column wrap;` Es un ejemplo si cómo usar esto.

### Justificar contenido

`justify-content` es una propiedad para alinear elementos en el contenedor a lo largo del eje principal (esto cambia según la forma en que se muestra el contenido). Existen múltiples opciones para esto y nos permite llenar cualquier espacio vacío en las filas pero definiendo cómo queremos "justificarlo".

Estas son nuestras opciones cuando justificamos nuestro contenido `flex-start | flex-end | center | space-between | space-around;` .

### Alinear elementos

Alinear elementos nos permite alinear elementos a lo largo del eje transversal. Esto permite posicionar el contenido de muchas maneras diferentes utilizando el contenido justificado y alineando los elementos.

`align-items: flex-start | flex-end | center | baseline | stretch;`

### Alinear contenido

Esto es para alinear elementos con múltiples líneas, es para alinear en el eje transversal y no tendrá efecto en el contenido que es una línea.

`align-content: flex-start | flex-end | center | space-between | space-around | stretch;`

## Juegos y apps

[Flexbox Defense](http://www.flexboxdefense.com/) es un juego web que enseña flexbox de una manera divertida.

[Flexbox Froggy](http://flexboxfroggy.com/) es también un juego web que enseña flexbox de forma divertida.

[Flexbox in 5](http://flexboxin5.com/) es una aplicación web que le permite ver cómo funciona flexbox con unos pocos controles simples.

[Flexyboxes](http://the-echoplex.net/flexyboxes/) es una aplicación que también le permite ver ejemplos de código y cambiar parámetros para ver cómo funciona flexbox visualmente.

[Flexbox Patters](http://www.flexboxpatterns.com) es un sitio web que muestra un montón de ejemplos de flexbox

## Documentación

[Red de desarrolladores de Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

[Trucos CSS](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Videos

[Flexbox Essentials](https://www.youtube.com/watch?v=G7EIAgfkhmg)

[Ejemplos prácticos de Flexbox](https://www.youtube.com/watch?v=H1lREysgdgc)

[¿Qué es el Flexbox?](https://www.youtube.com/watch?v=Vj7NZ6FiQvo&list=PLu8EoSxDXHP7xj_y6NIAhy0wuCd4uVdid)