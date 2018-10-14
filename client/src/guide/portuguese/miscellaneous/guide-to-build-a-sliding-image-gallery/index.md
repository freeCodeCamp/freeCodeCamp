---
title: Guide to Build a Sliding Image Gallery
localeTitle: Guia para criar uma galeria de imagens deslizante
---
Este tutorial irá orientá-lo na construção de um controle deslizante de imagens usando a biblioteca [jQuery](https://jquery.com/) .

[![GIF mostrando o Slider em ação](//discourse-user-assets.s3.amazonaws.com/original/2X/0/08d83a22c28da836a06853b1f1ea669b398326b9.gif)](https://codepen.io/atjonathan/pen/BKMxxq)

Este tutorial terá quatro partes:

*   [HTML](#html)
*   [SCSS](#scss)
*   [JS](#js)
*   [Referências](#references)

## HTML

Estaremos usando [Bootstrap](http://getbootstrap.com/) para este tutorial para manter as coisas com bom aspecto, sem gastar muito tempo.

Nossa estrutura será a seguinte:
```
<div class="container"> 
 
  <!-- The wrapper for our slider --> 
  <div class="slider"> 
    <ul class="slides"><!-- Each image will be inside this unordered list --></ul> 
  </div> 
 
  <div class="buttons"><!-- Pause and play buttons will go in here --></div> 
 
 </div> 
```

Dentro de nossa `ul` com a classe de `slides` , teremos o seguinte:
```
<li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
```

Dentro da nossa classe `.buttons` você deve ter o seguinte:
```
<button type="button" class="btn btn-default pause"> 
    <span class="glyphicon glyphicon-pause"></span> 
 </button> 
 <button type="button" class="btn btn-default play"> 
    <span class="glyphicon glyphicon-play"></span> 
 </button> 
```

Aqui está um exemplo de como o seu `html` deve ser:

> Nota: Você deve substituir o atributo image `src` pelo seu próprio conteúdo.
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

Estamos usando o [Sass](http://sass-lang.com/) e a sintaxe do SCSS para que possamos aninhar e usar variáveis ![:heart_decoration:](//forum.freecodecamp.com/images/emoji/emoji_one/heart_decoration.png?v=2 ": heart_decoration:")

Podemos usar o seguinte SCSS para definir nosso estilo:
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

#### Variáveis

_No trecho de código a seguir, definimos variáveis ​​usadas posteriormente em nosso código._
```
var animationSpeed = 1000; // How quickly the next slide animates. 
 var pause = 3000; // The pause between each slide. 
```

Nós vamos usar uma variável em branco onde vamos chamar o método `setInterval` :
```
var interval; 
```

#### Animação Vamos embrulhar nossas animações deslizantes dentro de uma função:
```
function startSlider() {} 
```

Estamos usando o método JavaScript nativo `setInterval()` para automatizar o conteúdo da função em um acionador baseado em tempo.
```
interval = setInterval(function() {}, pause); 
```

Usamos a variável de `pause` para ver quantos milissegundos esperar antes de chamar a função novamente. Leia mais sobre o método `setInterval` nativo aqui: https://developer.mozilla.org/pt-BR/docs/Web/API/WindowTimers/setInterval. Dentro de nossa função, usaremos o jQuery para desbotar entre os slides na velocidade da variável animationSpeed:
```
$('.slides > li:first') 
  .fadeOut(animationSpeed) 
  .next() 
  .fadeIn(animationSpeed) 
  .end() 
  .appendTo('.slides'); 
```

*   Estamos segmentando o primeiro slide usando `$('.slides > li:first')` . - `.fadeOut(animationSpeed)` fará desaparecer o primeiro slide e, em seguida, usando `.next()` , passamos para o próximo slide. - Uma vez que nos mudamos para o próximo slide, faremos o seguinte em: `.fadeIn(animationSpeed)` . - Esta sequência continuará até o último slide ( `.end()` ), então paramos a animação. Vamos agora chamar a função `startSlider` para iniciar a animação:
    
    startSlider ();
    

#### Reproduzir e pausar _Esse recurso é opcional, mas muito fácil de implementar._ Vamos esconder o botão play, por isso não vemos os botões play e pause:
```
$('.play').hide(); // Hiding the play button. 
```

Vamos agora criar o nosso botão de pausa (mostrado automaticamente no carregamento da página):
```
$('.pause').click(function() { 
    clearInterval(interval); 
    $(this).hide(); 
    $('.play').show(); 
 }); 
```

*   Vamos chamar nossa função toda vez que o botão de pausa for clicado usando jQuery. - `clearInterval` o intervalo usando o método `clearInterval` e usando nossa variável de `interval` como parâmetro, indicando qual intervalo interromper. - Como o controle deslizante está pausado, `$(this).hide();` o botão de pausa usando `$(this).hide();` . Nota: estamos usando `this` , que se refere ao que nosso pai está chamando, ou seja, `.pause` . - Em seguida, mostraremos nosso botão de reprodução para que o usuário possa retomar a animação: `$('.play').show();` . O código a seguir configura nosso botão de reprodução (ocultado automaticamente no carregamento da página):
    
    $ ('. play'). click (function () { startSlider (); $ (this) .hide (); $ ('. pause'). show (); });
    
*   Vamos chamar nossa função toda vez que o botão de reprodução for clicado usando jQuery.
    
    *   Vamos iniciar ou reiniciar o intervalo usando a função `startSlider` .
    *   Como o controle deslizante está sendo reproduzido no momento, ocultaremos o botão de reprodução usando `$(this).hide();` . Nota: estamos usando `this` , que se refere ao que nossos pais estão chamando, ie `.play` .
    *   Em seguida, mostraremos nosso botão de pausa para que o usuário possa interromper a animação à vontade: `$('.pause').show();` .

## Referências

*   [Confira](https://codepen.io/atjonathan/pen/BKMxxq) o código-fonte e o exemplo no [CodePen](https://codepen.io/atjonathan/pen/BKMxxq) para este tutorial.