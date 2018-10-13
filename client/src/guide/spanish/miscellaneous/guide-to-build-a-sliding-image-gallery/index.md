---
title: Guide to Build a Sliding Image Gallery
localeTitle: Guía para construir una galería de imágenes deslizante
---
Este tutorial lo guiará a través de la construcción de un control deslizante de imagen utilizando la biblioteca [jQuery](https://jquery.com/) .

[![GIF mostrando Slider en acción](//discourse-user-assets.s3.amazonaws.com/original/2X/0/08d83a22c28da836a06853b1f1ea669b398326b9.gif)](https://codepen.io/atjonathan/pen/BKMxxq)

Este tutorial tendrá cuatro partes:

*   [HTML](#html)
*   [SCSS](#scss)
*   [JS](#js)
*   [Referencias](#references)

## HTML

Usaremos [Bootstrap](http://getbootstrap.com/) para este tutorial para que las cosas se vean bien, sin perder mucho tiempo.

Nuestra estructura será la siguiente:
```
<div class="container"> 
 
  <!-- The wrapper for our slider --> 
  <div class="slider"> 
    <ul class="slides"><!-- Each image will be inside this unordered list --></ul> 
  </div> 
 
  <div class="buttons"><!-- Pause and play buttons will go in here --></div> 
 
 </div> 
```

Dentro de nuestra `ul` con la clase de `slides` tendremos lo siguiente:
```
<li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
```

Dentro de nuestra clase `.buttons` debes tener lo siguiente:
```
<button type="button" class="btn btn-default pause"> 
    <span class="glyphicon glyphicon-pause"></span> 
 </button> 
 <button type="button" class="btn btn-default play"> 
    <span class="glyphicon glyphicon-play"></span> 
 </button> 
```

Aquí hay un ejemplo de cómo debería verse su `html` :

> Nota: debe reemplazar el atributo `src` imagen con su propio contenido.
```
<div class="container"> 
 
  <div class="slider"> 
    <ul class="slides"> 
      <li class="slide"><img src="https://unsplash.it/1280/720/?image=120" /></li> 
      <li class="slide"><img src="https://unsplash.it/1280/720/?image=70" /></li> 
      <li class="slide"><img src="https://unsplash.it/1280/720/?image=50" /></li> 
      <li class="slide"><img src="https://unsplash.it/1280/720/?image=170" /></li> 
      <li class="slide"><img src="https://unsplash.it/1280/720/?image=190" /></li> 
    </ul> 
  </div> 
 
  <div class="buttons"> 
    <button type="button" class="btn btn-default pause"> 
      <span class="glyphicon glyphicon-pause"></span> 
    </button> 
    <button type="button" class="btn btn-default play"> 
      <span class="glyphicon glyphicon-play"></span> 
    </button> 
  </div> 
 
 </div> 
```

## SCSS

Estamos usando [Sass](http://sass-lang.com/) y la sintaxis de SCSS para poder anidar y usar variables ![:heart_decoration:](//forum.freecodecamp.com/images/emoji/emoji_one/heart_decoration.png?v=2 ": heart_decoration:")

Podemos usar el siguiente SCSS para definir nuestro estilo:
```
// Variables 
 $width: 720px; 
 
 .slider { 
  width: $width; 
  height: 400px; 
  overflow: hidden; 
  margin: 0 auto; 
  text-align: center; 
 
  .slides { 
    display: block; 
    width: 6000px; 
    height: 400px; 
    margin: 0; 
    padding: 0; 
  } 
 
  .slide { 
    float: left; 
    list-style-type: none; 
    width: $width; 
    height: 400px; 
 
    img { 
      width: 100%; 
      height: 100%; 
    } 
  } 
 } 
 
 .buttons { 
  margin: 0; 
  width: $width; 
  position: relative; 
  top: -40px; 
  margin: 0 auto; 
 
  .play { 
    display: none; 
  } 
 
  .btn { 
    display: flex; 
    margin: 0 auto; 
    text-align: center; 
  } 
 } 
```

## JS

#### Variables

_En el siguiente fragmento de código, definimos las variables utilizadas más adelante en nuestro código._
```
var animationSpeed = 1000; // How quickly the next slide animates. 
 var pause = 3000; // The pause between each slide. 
```

Usaremos una variable en blanco donde llamaremos al método `setInterval` :
```
var interval; 
```

#### Animación Vamos a envolver nuestras animaciones deslizantes dentro de una función:
```
function startSlider() {} 
```

Estamos utilizando el método de JavaScript nativo `setInterval()` para automatizar el contenido de la función en un desencadenante basado en el tiempo.
```
interval = setInterval(function() {}, pause); 
```

Usamos la variable de `pause` para ver cuántos milisegundos hay que esperar antes de volver a llamar a la función. Lea más sobre el método nativo de `setInterval` aquí: https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval. Dentro de nuestra función usaremos jQuery para desvanecerse entre diapositivas a la velocidad de la variable animationSpeed:
```
$('.slides > li:first') 
  .fadeOut(animationSpeed) 
  .next() 
  .fadeIn(animationSpeed) 
  .end() 
  .appendTo('.slides'); 
```

*   Nos dirigimos a la primera diapositiva usando `$('.slides > li:first')` . - `.fadeOut(animationSpeed)` desvanecerá la primera diapositiva y luego, utilizando `.next()` , pasamos a la siguiente diapositiva. - Una vez que hayamos pasado a la siguiente diapositiva, la `.fadeIn(animationSpeed)` en: `.fadeIn(animationSpeed)` . - Esta secuencia continuará hasta la última diapositiva ( `.end()` ), luego detendremos la animación. Ahora llamaremos la función `startSlider` para iniciar la animación:
    
    startSlider ();
    

#### Reproducir y pausar _Esta función es opcional, pero bastante fácil de implementar._ Ocultaremos el botón de reproducción, por lo que no vemos los botones de reproducción y pausa:
```
$('.play').hide(); // Hiding the play button. 
```

Ahora crearemos nuestro botón de pausa (que se muestra automáticamente en la carga de la página):
```
$('.pause').click(function() { 
    clearInterval(interval); 
    $(this).hide(); 
    $('.play').show(); 
 }); 
```

*   Llamaremos a nuestra función cada vez que se haga clic en el botón de pausa utilizando jQuery. - Eliminaremos el intervalo usando el método `clearInterval` y usando nuestra variable de `interval` como parámetro, indicando qué intervalo se debe detener. - Debido a que nuestro control deslizante está pausado, `$(this).hide();` el botón de pausa usando `$(this).hide();` . Nota: estamos usando `this` , que se referirá a lo que nuestros padres están llamando, es decir, `.pause` . - Luego mostraremos nuestro botón de reproducción para que el usuario pueda reanudar la animación: `$('.play').show();` . El siguiente código configura nuestro botón de reproducción (se oculta automáticamente en la carga de la página):
    
    $ ('. play'). click (función () { startSlider (); $ (este) .hide (); $ ('. pausa'). show (); });
    
*   Llamaremos a nuestra función cada vez que se haga clic en el botón de reproducción utilizando jQuery.
    
    *   `startSlider` o reiniciaremos el intervalo utilizando la función `startSlider` .
    *   Debido a que nuestro control deslizante se está reproduciendo actualmente, `$(this).hide();` el botón de reproducción usando `$(this).hide();` . Nota: estamos usando `this` , que se referirá a lo que nuestros padres están llamando, es decir, `.play` .
    *   Luego mostraremos nuestro botón de pausa para que el usuario pueda detener la animación a voluntad: `$('.pause').show();` .

## Referencias

*   [Verifique](https://codepen.io/atjonathan/pen/BKMxxq) el código fuente y el ejemplo en [CodePen](https://codepen.io/atjonathan/pen/BKMxxq) para este tutorial.