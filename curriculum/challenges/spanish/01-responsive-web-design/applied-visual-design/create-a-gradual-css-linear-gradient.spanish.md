---
id: 587d78a5367417b2b2512ad6
title: Create a Gradual CSS Linear Gradient
localeTitle: Crear un gradiente lineal gradual de CSS
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
aplicación de un color en elementos HTML no se limita a un tono plano. CSS proporciona la capacidad de usar transiciones de color, también conocidas como degradados, en elementos. Se accede a través de la función <code>linear-gradient()</code> la propiedad de <code>background</code> . Aquí está la sintaxis general: 
<code>background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);</code> 
El primer argumento especifica la dirección a partir de la cual comienza la transición de color: se puede establecer como un grado, donde 90 grados forman un degradado vertical y 45 grados se inclinan como una barra invertida. Los siguientes argumentos especifican el orden de los colores utilizados en el degradado. 
Ejemplo: 
<code>background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));</code> 
</section>

## Instructions
<section id='instructions'> 
Use un <code>linear-gradient()</code> para el <code>background</code> del elemento <code>div</code> y <code>#CCFFFF</code> desde una dirección de 35 grados para cambiar el color de <code>#CCFFFF</code> a <code>#FFCCCC</code> . 
<strong>Nota</strong> <br> Si bien hay otras formas de especificar un valor de color, como <code>rgb()</code> o <code>hsl()</code> , use valores hexadecimales para este desafío. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El elemento <code>div</code> debe tener un <code>background</code> <code>linear-gradient</code> con la dirección y los colores especificados.
    testString: 'assert(code.match(/background:\s*?linear-gradient\(35deg,\s*?(#CCFFFF|#CFF),\s*?(#FFCCCC|#FCC)\);/gi), "The <code>div</code> element should have a <code>linear-gradient</code> <code>background</code> with the specified direction and colors.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;

  }

</style>

<div></div>
```

</div>



</section>

## Solution
<section id='solution'>


```js
var code = "<style> div{border-radius: 20px; width: 70%; height: 400px; margin: 50px auto; background: linear-gradient(35deg, #cff, #fcc);}</style><div></div>"
```

</section>
