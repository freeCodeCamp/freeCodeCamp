---
id: bd7158d8c442eddfaeb5bd0f
title: Build a Pomodoro Clock
localeTitle: Construir un reloj pomodoro
isRequired: true
challengeType: 3
---

## Description
<section id='description'> 
<strong>Objetivo:</strong> crear una aplicación <a href='https://codepen.io' target='_blank'>CodePen.io</a> que sea funcionalmente similar a esta: <a href='https://codepen.io/freeCodeCamp/full/XpKrrW' target='_blank'>https://codepen.io/freeCodeCamp/full/XpKrrW</a> . 
Cumplir con las siguientes <a href='https://en.wikipedia.org/wiki/User_story' target='_blank'>historias de usuario</a> y obtener todas las pruebas para pasar. Dale tu propio estilo personal. 
Puede usar cualquier combinación de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux y jQuery para completar este proyecto. Debería usar un marco frontend (como React, por ejemplo) porque esta sección trata sobre el aprendizaje de marcos frontend. No se recomiendan las tecnologías adicionales no enumeradas anteriormente y su uso es bajo su propio riesgo. Estamos considerando la compatibilidad con otros marcos de frontend, como Angular y Vue, pero actualmente no se admiten. Aceptaremos e intentaremos solucionar todos los informes de problemas que utilizan la pila de tecnología sugerida para este proyecto. ¡Feliz codificación! 
<strong>Historia de usuario # 1:</strong> Puedo ver un elemento con <code>id=&quot;break-label&quot;</code> que contiene una cadena (por ejemplo, &quot;Break Length&quot;). 
<strong>Historia de usuario n. ° 2:</strong> Puedo ver un elemento con <code>id=&quot;session-label&quot;</code> que contiene una cadena (por ejemplo, &quot;Session Length&quot;). 
<strong>Historia de usuario n. ° 3:</strong> Puedo ver dos elementos seleccionables con las ID correspondientes: <code>id=&quot;break-decrement&quot;</code> e <code>id=&quot;session-decrement&quot;</code> . 
<strong>Historia de usuario n. ° 4:</strong> Puedo ver dos elementos seleccionables con las identificaciones correspondientes: <code>id=&quot;break-increment&quot;</code> e <code>id=&quot;session-increment&quot;</code> . 
<strong>Historia de usuario # 5:</strong> Puedo ver un elemento con una <code>id=&quot;break-length&quot;</code> correspondiente <code>id=&quot;break-length&quot;</code> , que por defecto (en carga) muestra un valor de 5. 
<strong>Historia de usuario # 6:</strong> Puedo ver un elemento con una <code>id=&quot;session-length&quot;</code> correspondiente <code>id=&quot;session-length&quot;</code> , que por defecto muestra un valor de 25. 
<strong>Historia de usuario # 7:</strong> Puedo ver un elemento con una <code>id=&quot;timer-label&quot;</code> correspondiente <code>id=&quot;timer-label&quot;</code> , que contiene una cadena que indica que una sesión está inicializada (por ejemplo, &quot; Sesión&quot;). 
<strong>Historia de usuario n. ° 8:</strong> Puedo ver un elemento con el <code>id=&quot;time-left&quot;</code> correspondiente <code>id=&quot;time-left&quot;</code> . NOTA: En pausa o en ejecución, el valor en este campo siempre debe mostrarse en formato <code>mm:ss</code> (es decir, 25:00). 
<strong>Historia de usuario # 9:</strong> Puedo ver un elemento <code>id=&quot;start_stop&quot;</code> con una <code>id=&quot;start_stop&quot;</code> correspondiente <code>id=&quot;start_stop&quot;</code> . 
<strong>Historia de usuario # 10:</strong> Puedo ver un elemento pulsable con una <code>id=&quot;reset&quot;</code> correspondiente <code>id=&quot;reset&quot;</code> . 
<strong>Historia de usuario n. ° 11:</strong> Cuando hago clic en el elemento con el id de <code>reset</code> , se debe detener cualquier temporizador en ejecución, el valor dentro de <code>id=&quot;break-length&quot;</code> debería volver a <code>5</code> , el valor dentro de <code>id=&quot;session-length&quot;</code> debería vuelva a 25, y el elemento con <code>id=&quot;time-left&quot;</code> debería restablecerse a su estado predeterminado. 
<strong>Historia del usuario n. ° 12:</strong> Cuando hago clic en el elemento con el id de <code>break-decrement</code> , el valor dentro de <code>id=&quot;break-length&quot;</code> reduce en un valor de 1, y puedo ver el valor actualizado. 
<strong>Historia de usuario n. ° 13:</strong> Cuando hago clic en el elemento con el ID de <code>break-increment</code> de <code>break-increment</code> , el valor dentro de <code>id=&quot;break-length&quot;</code> incrementa en un valor de 1, y puedo ver el valor actualizado. 
<strong>Historia de usuario n. ° 14:</strong> Cuando hago clic en el elemento con el id de <code>session-decrement</code> de <code>session-decrement</code> , el valor dentro de <code>id=&quot;session-length&quot;</code> reduce en un valor de 1, y puedo ver el valor actualizado. 
<strong>Historia de usuario n. ° 15:</strong> Cuando hago clic en el elemento con el id de <code>session-increment</code> de <code>session-increment</code> , el valor dentro de <code>id=&quot;session-length&quot;</code> incrementa en un valor de 1, y puedo ver el valor actualizado. 
<strong>Historia de usuario n. ° 16:</strong> No debería poder establecer una sesión o duración de interrupción en &lt;= 0. 
<strong>Historia de usuario n. ° 17:</strong> No debería poder configurar una sesión o duración de interrupción en&gt; 60. 
<strong>Historia de usuario n. ° 18 :</strong> Cuando hago clic por primera vez en el elemento con <code>id=&quot;start_stop&quot;</code> , el temporizador debería comenzar a ejecutarse desde el valor actualmente mostrado en <code>id=&quot;session-length&quot;</code> , incluso si el valor se ha incrementado o disminuido desde el valor original de 25. 
<strong>Historia de usuario n. ° 19:</strong> si el temporizador se está ejecutando, el elemento con el id del <code>time-left</code> debe mostrar el tiempo restante en formato <code>mm:ss</code> (disminuyendo en un valor de 1 y actualizando la pantalla cada 1000 ms). 
<strong>Historia de usuario # 20:</strong> Si el temporizador se está ejecutando y hago clic en el elemento con <code>id=&quot;start_stop&quot;</code> , la cuenta regresiva debe <code>id=&quot;start_stop&quot;</code> . 
<strong>Historia de usuario n. ° 21:</strong> si el temporizador está en pausa y hago clic en el elemento con <code>id=&quot;start_stop&quot;</code> , la cuenta regresiva debería reanudarse desde el punto en el que se pausó. 
<strong>Historia de usuario n. ° 22:</strong> cuando la cuenta regresiva de la sesión llega a cero (NOTA: el temporizador DEBE alcanzar las 00:00), y comienza una nueva cuenta regresiva, el elemento con la identificación de <code>timer-label</code> del <code>timer-label</code> debe mostrar una cadena que indica que ha comenzado una ruptura. 
<strong>Historia de usuario # 23:</strong> cuando la cuenta regresiva de la sesión llega a cero (NOTA: el temporizador DEBE alcanzar las 00:00), debe comenzar una nueva cuenta regresiva de receso, contando desde el valor que se muestra actualmente en el elemento <code>id=&quot;break-length&quot;</code> . 
<strong>Historia de usuario n. ° 24:</strong> Cuando una cuenta regresiva de ruptura llega a cero (NOTA: el temporizador DEBE alcanzar las 00:00), y comienza una nueva cuenta regresiva, el elemento con la identificación de <code>timer-label</code> del <code>timer-label</code> debe mostrar una cadena que indica que la sesión ha comenzado. 
<strong>Historia de usuario # 25:</strong> Cuando una cuenta regresiva de ruptura llega a cero (NOTA: el temporizador DEBE alcanzar las 00:00), debe comenzar una nueva cuenta regresiva de la sesión, contando desde el valor actualmente mostrado en el elemento <code>id=&quot;session-length&quot;</code> . 
<strong>Historia de usuario n. ° 26:</strong> cuando una cuenta regresiva llega a cero (NOTA: el temporizador DEBE alcanzar las 00:00), debe reproducirse un sonido que indique que el tiempo ha transcurrido. Esto debe utilizar una etiqueta de <code>audio</code> HTML5 y tener un <code>id=&quot;beep&quot;</code> correspondiente <code>id=&quot;beep&quot;</code> . 
<strong>Historia de usuario # 27:</strong> El elemento de audio con <code>id=&quot;beep&quot;</code> debe ser de 1 segundo o más. 
<strong>Historia del usuario n. ° 28:</strong> el elemento de audio con el identificador de <code>beep</code> debe dejar de reproducirse y volver al principio cuando se hace clic en el elemento con el identificador de <code>reset</code> . 
Puede construir su proyecto por medio de <a href='http://codepen.io/freeCodeCamp/pen/MJjpwO' target='_blank'>este bolígrafo CodePen</a> . O puede usar este enlace CDN para ejecutar las pruebas en cualquier entorno que desee: <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code> 
Una vez que haya terminado, envíe la URL a su Proyecto de trabajo con todas sus pruebas aprobadas. 
Recuerda usar el método de <a href='https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>lectura-búsqueda-pregunta</a> si te atascas. 
</section>

## Instructions
<section id='instructions'> 

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
