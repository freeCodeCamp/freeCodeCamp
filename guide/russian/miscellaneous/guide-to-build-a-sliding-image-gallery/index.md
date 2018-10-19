---
title: Guide to Build a Sliding Image Gallery
localeTitle: Руководство по созданию скользящей галереи изображений
---
Этот учебник поможет вам создать слайдер изображения с помощью библиотеки [jQuery](https://jquery.com/) .

[![GIF показывает слайдер в действии](//discourse-user-assets.s3.amazonaws.com/original/2X/0/08d83a22c28da836a06853b1f1ea669b398326b9.gif)](https://codepen.io/atjonathan/pen/BKMxxq)

Это руководство будет состоять из четырех частей:

*   [HTML](#html)
*   [SCSS](#scss)
*   [JS](#js)
*   [Рекомендации](#references)

## HTML

Мы будем использовать [Bootstrap](http://getbootstrap.com/) для этого учебника, чтобы все выглядело хорошо, не тратя много времени.

Наша структура будет следующей:
```
<div class="container"> 
 
  <!-- The wrapper for our slider --> 
  <div class="slider"> 
    <ul class="slides"><!-- Each image will be inside this unordered list --></ul> 
  </div> 
 
  <div class="buttons"><!-- Pause and play buttons will go in here --></div> 
 
 </div> 
```

Внутри нашей `ul` с классом `slides` мы будем иметь следующее:
```
<li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
```

В нашем классе `.buttons` вы должны иметь следующее:
```
<button type="button" class="btn btn-default pause"> 
    <span class="glyphicon glyphicon-pause"></span> 
 </button> 
 <button type="button" class="btn btn-default play"> 
    <span class="glyphicon glyphicon-play"></span> 
 </button> 
```

Вот пример того, как должен выглядеть ваш `html` :

> Примечание. Вы должны заменить атрибут `src` изображения на свой собственный контент.
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

Мы используем [Sass](http://sass-lang.com/) и синтаксис SCSS, чтобы мы могли вложить и использовать переменные ![:heart_decoration:](//forum.freecodecamp.com/images/emoji/emoji_one/heart_decoration.png?v=2 ": Heart_decoration:")

Мы можем использовать следующий SCSS для определения нашего стиля:
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

#### переменные

_В следующем фрагменте кода мы определяем переменные, используемые позже в нашем коде._
```
var animationSpeed = 1000; // How quickly the next slide animates. 
 var pause = 3000; // The pause between each slide. 
```

Мы будем использовать пустую переменную, где мы будем называть метод `setInterval` :
```
var interval; 
```

#### Анимация Мы обернем анимацию слайдера внутри функции:
```
function startSlider() {} 
```

Мы используем встроенный JavaScript-метод `setInterval()` для автоматизации содержимого функции в триггере, основанном на времени.
```
interval = setInterval(function() {}, pause); 
```

Мы используем переменную `pause` чтобы увидеть, сколько миллисекунд ждать до вызова функции снова. Подробнее о методе `setInterval` здесь: https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval. Внутри нашей функции мы будем использовать jQuery для перехода между слайдами со скоростью переменной animationSpeed:
```
$('.slides > li:first') 
  .fadeOut(animationSpeed) 
  .next() 
  .fadeIn(animationSpeed) 
  .end() 
  .appendTo('.slides'); 
```

*   Мы нацеливаем первый слайд, используя `$('.slides > li:first')` . - `.fadeOut(animationSpeed)` выцветает с первого слайда, а затем используя `.next()` , мы переходим к следующему слайду. - Как только мы переместимся на следующий слайд, мы `.fadeIn(animationSpeed)` его в: `.fadeIn(animationSpeed)` . - Эта последовательность будет продолжаться до последнего слайда ( `.end()` ), затем мы остановим анимацию. Теперь мы вызываем функцию `startSlider` для запуска анимации:
    
    startSlider ();
    

#### Воспроизведение и пауза _Эта функция является необязательной, но довольно проста в реализации._ Мы скроем кнопку воспроизведения, поэтому мы не видим кнопки воспроизведения и паузы:
```
$('.play').hide(); // Hiding the play button. 
```

Теперь мы создадим нашу кнопку паузы (автоматически отображаемую при загрузке страницы):
```
$('.pause').click(function() { 
    clearInterval(interval); 
    $(this).hide(); 
    $('.play').show(); 
 }); 
```

*   Мы будем называть нашу функцию каждый раз, когда нажата кнопка паузы, используя jQuery. - Мы удалим интервал, используя метод `clearInterval` и используем нашу переменную `interval` в качестве параметра, указывая, какой интервал останавливаться. - Поскольку наш слайдер приостановлен, мы `$(this).hide();` кнопку паузы, используя `$(this).hide();` , Примечание: мы используем `this` , что будет ссылаться на то, что вызывает наш родитель, т. `.pause` . - Затем мы покажем нашу кнопку воспроизведения, чтобы пользователь мог возобновить анимацию: `$('.play').show();` , Следующий код устанавливает нашу кнопку воспроизведения (автоматически скрывается при загрузке страницы):
    
    $ ('. play'). click (function () { startSlider (); $ (Это) .hide (); $ ( 'Пауза') шоу (). });
    
*   Мы будем называть нашу функцию каждый раз, когда нажата кнопка воспроизведения с помощью jQuery.
    
    *   Мы начнем или перезапустим интервал, используя функцию `startSlider` .
    *   Поскольку наш слайдер в данный момент играет, мы `$(this).hide();` кнопку воспроизведения, используя `$(this).hide();` , Примечание: мы используем `this` , которое будет ссылаться на то, что вызывает наш родитель, т.е. `.play` .
    *   Затем мы покажем нашу кнопку паузы, чтобы пользователь мог остановить анимацию по желанию: `$('.pause').show();` ,

## Рекомендации

*   [Ознакомьтесь](https://codepen.io/atjonathan/pen/BKMxxq) с исходным кодом и примером для [CodePen](https://codepen.io/atjonathan/pen/BKMxxq) для этого руководства.