---
id: 587d78a7367417b2b2512ae2
title: Create Visual Direction by Fading an Element from Left to Right
localeTitle: Crear dirección visual mediante el desvanecimiento de un elemento de izquierda a derecha
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Para este desafío, cambiará la <code>opacity</code> de un elemento animado para que se desvanezca gradualmente a medida que llega al lado derecho de la pantalla. 
En la animación mostrada, el elemento redondo con el fondo degradado se mueve hacia la derecha en la marca del 50% de la animación según la regla <code>@keyframes</code> . 
</section>

## Instructions
<section id='instructions'> 
Dirija el elemento con el id de la <code>ball</code> y agregue la propiedad de <code>opacity</code> establecida en 0.1 al <code>50%</code> , de modo que el elemento se desvanezca a medida que se mueve hacia la derecha. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La regla de <code>keyframes</code> para el desvanecimiento debe establecer la propiedad de <code>opacity</code> en 0.1 al 50%.
    testString: 'assert(code.match(/@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi), "The <code>keyframes</code> rule for fade should set the <code>opacity</code> property to 0.1 at 50%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;

    }
  }

</style>

<div id="ball"></div>
```

</div>



</section>

## Solution
<section id='solution'>


```js
var code = "@keyframes fade {50% { left: 60%; opacity: 0.1;}}"
```

</section>
