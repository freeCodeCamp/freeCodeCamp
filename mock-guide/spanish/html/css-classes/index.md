---
title: CSS Classes
localeTitle: Clases de CSS
---
## Clases de CSS

Las clases son una forma eficiente de agrupar elementos HTML para que puedan compartir los mismos estilos. Las clases de CSS (hojas de estilo en cascada) se pueden utilizar para organizar y decorar elementos de páginas web.

Al escribir HTML, puede agregar clases a un elemento. Simplemente agregue el atributo `class="myclass"` al elemento. Varios elementos pueden tener la misma clase y un elemento puede tener varias clases. Puede asignar varias clases a un elemento agregando todos los nombres de clase deseados separados por un espacio al atributo de `class` en HTML.

```html

<h1 class="super-man other-class third-class">"Here I come to save the day!"</h1> 
 <p>is a popular catchphrase that <span class="super-man">Super Man</span> often said.</p> 
```

A continuación, puede diseñar estos elementos con CSS. Se hace referencia a las clases con punto (.) Delante de ellas en CSS, pero no debe poner puntos en su HTML.

```css
.super-man { 
  color: red; 
  background-color: blue; 
 } 
```

Este código da un fondo azul y un color rojo texto a todos los elementos que tienen el `super-man` clase. [Ver este ejemplo en CodePen](https://codepen.io/Tlandis/pen/RLvomV) .

También puede declarar más de una clase a su elemento, como:

```html

<div class="ironMan alfred"> 
 We're going to save you. 
 </div> 
```

Luego en tu archivo css:

```css
.ironMan{ 
 color:red; 
 } 
 
 .alfred{ 
 background-color: black; 
 } 
```

**Nota:** los nombres de las clases son tradicionalmente en minúsculas, con cada palabra en un nombre de clase de varias palabras separadas por guiones (por ejemplo, "super-man").

También puedes combinar clases en la misma línea:

```css
.superMan .spiderMan { 
 color: red; 
 background-color: blue; 
 } 
```

Puedes ver el resultado del código anterior [aquí](https://codepen.io/Tlandis/pen/RLvomV) . Aprende cómo combinar clases de css usando selectores [aquí](https://www.w3schools.com/css/css_combinators.asp) .

#### Más información:

*   [Selector de clases CSS, escuelas w3](https://www.w3schools.com/cssref/sel_class.asp)
*   [Clases de HTML, Escuelas w3](https://www.w3schools.com/html/html_classes.asp)
*   [trucos css](https://css-tricks.com/how-css-selectors-work/)
*   [Cómo codificar en HTML5 y CSS3](http://howtocodeinhtml.com/chapter7.html)
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)