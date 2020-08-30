---
id: bd7158d8c442eddfaeb5bd17
title: Build a JavaScript Calculator
challengeType: 3
isRequired: true
videoUrl: ''
localeTitle: Construye una calculadora de JavaScript
---

## Description
<section id="description"> <strong>Objetivo:</strong> crear una aplicación <a href="https://codepen.io" target="_blank">CodePen.io</a> que funcione de manera similar a esta: <a href="https://codepen.io/freeCodeCamp/full/wgGVVX" target="_blank">https://codepen.io/freeCodeCamp/full/wgGVVX</a> . Cumple las siguientes <a href="https://en.wikipedia.org/wiki/User_story" target="_blank">historias de usuario</a> y haz que pasen todas las pruebas. Dale tu propio estilo personal. Puedes usar cualquier combinación de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux y jQuery para completar este proyecto. Deberías usar un marco frontend (como React, por ejemplo) porque esta sección trata sobre el aprendizaje de marcos frontend. No se recomiendan las tecnologías adicionales no enumeradas anteriormente, su uso es bajo su propio riesgo. Actualmente, otros marcos de frontend como Angular y Vue no se admiten por problemas de compatibilidad. Intentaremos solucionar todos los informes de problemas que utilizan la pila de tecnología sugerida para este proyecto. ¡Feliz codificación! <strong>Historia de usuario n. ° 1:</strong> Mi calculadora debe contener un elemento pulsable que contenga un <code>=</code> (signo igual) con un <code>id=&quot;equals&quot;</code> correspondiente <code>id=&quot;equals&quot;</code> . <strong>Historia de usuario n. ° 2:</strong> Mi calculadora debe contener 10 elementos seleccionables que contengan un número cada uno de 0 a 9, con las siguientes ID correspondientes: <code>id=&quot;zero&quot;</code> , <code>id=&quot;one&quot;</code> , <code>id=&quot;two&quot;</code> , <code>id=&quot;three&quot;</code> , <code>id=&quot;four&quot;</code> , <code>id=&quot;five&quot;</code> , <code>id=&quot;six&quot;</code> , <code>id=&quot;seven&quot;</code> , <code>id=&quot;eight&quot;</code> , e <code>id=&quot;nine&quot;</code> . <strong>Historia de usuario n. ° 3:</strong> Mi calculadora debe contener 4 elementos seleccionables, cada uno de los cuales contiene uno de los 4 operadores matemáticos primarios con las siguientes ID correspondientes: <code>id=&quot;add&quot;</code> , <code>id=&quot;subtract&quot;</code> , <code>id=&quot;multiply&quot;</code> , <code>id=&quot;divide&quot;</code> . <strong>Historia de usuario n. ° 4:</strong> Mi calculadora debe contener un elemento pulsable que contenga un <code>.</code> Símbolo (punto decimal) con un <code>id=&quot;decimal&quot;</code> correspondiente <code>id=&quot;decimal&quot;</code> . <strong>Historia de usuario n. ° 5:</strong> Mi calculadora debe contener un elemento seleccionable con un <code>id=&quot;clear&quot;</code> . <strong>Historia de usuario n. ° 6:</strong> Mi calculadora debe contener un elemento para mostrar los valores con una <code>id=&quot;display&quot;</code> correspondiente <code>id=&quot;display&quot;</code> . <strong>Historia de usuario n. ° 7:</strong> En cualquier momento, al presionar el botón de borrar se borran los valores de entrada y salida, y la calculadora vuelve a su estado inicializado; 0 debe mostrarse en el elemento con el id de <code>display</code> . <strong>Historia de usuario n. ° 8:</strong> Al ingresar números, debería poder ver mi entrada en el elemento con la identificación de la <code>display</code> . <strong>Historia de usuario n. ° 9:</strong> en cualquier orden, debería poder sumar, restar, multiplicar y dividir una cadena de números de cualquier longitud, y cuando presiono <code>=</code> , el resultado correcto debe mostrarse en el elemento con la identificación de la <code>display</code> . <strong>Historia de usuario n. ° 10:</strong> al ingresar números, mi calculadora no debe permitir que un número comience con varios ceros. <strong>Historia de usuario # 11:</strong> Cuando se hace clic en el elemento decimal, a <code>.</code> debe añadirse al valor mostrado actualmente; dos <code>.</code> en un número no debe ser aceptado. <strong>Historia de usuario n. ° 12:</strong> Debería poder realizar cualquier operación (+, -, *, /) en números que contengan puntos decimales. <strong>Historia de usuario n. ° 13:</strong> Si se ingresan 2 o más operadores consecutivamente, la operación realizada debe ser la última que se ingresó. <strong>Historia de usuario n. ° 14:</strong> Al presionar a un operador inmediatamente después de <code>=</code> debería comenzar un nuevo cálculo que opera sobre el resultado de la evaluación anterior. <strong>Historia de usuario n. ° 15:</strong> Mi calculadora debe tener varios decimales de precisión cuando se trata de redondeo (tenga en cuenta que no hay un estándar exacto, pero debería poder manejar cálculos como <code>2 / 7</code> con una precisión razonable hasta al menos 4 decimales) . <strong>Nota sobre la lógica de la calculadora:</strong> debe tenerse en cuenta que hay dos escuelas principales de pensamiento en la lógica de entrada de la calculadora: <dfn>lógica de ejecución inmediata</dfn> y <dfn>lógica de fórmula</dfn> . Nuestro ejemplo utiliza la fórmula lógica y observa el orden de prioridad de operación, la ejecución inmediata no. Cualquiera de los dos es aceptable, pero tenga en cuenta que dependiendo de lo que elija, su calculadora puede producir resultados diferentes a los nuestros para ciertas ecuaciones (vea el ejemplo a continuación). Siempre que sus cálculos puedan ser verificados por otra calculadora de producción, no considere esto como un error. <strong>EJEMPLO:</strong> <code>3 + 5 x 6 - 2 / 4 =</code> <br><ul><li> <strong>Lógica de ejecución inmediata:</strong> <code>11.5</code> </li><li> <strong>Fórmula / Lógica de expresión:</strong> <code>32.5</code> </li></ul> Puedes construir tu proyecto por medio de <a href="http://codepen.io/freeCodeCamp/pen/MJjpwO" target="_blank">este bolígrafo CodePen</a> . O puede usar este enlace CDN para ejecutar las pruebas en el entorno que desee: <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code> Una vez que hayas terminado, envía la URL a tu cuenta "Proyecto" con todas las pruebas aprobadas. Recuerda usar el método de <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">lectura-búsqueda-pregunta</a> si necesitas ayuda. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests: []

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
