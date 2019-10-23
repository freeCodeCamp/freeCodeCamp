---
id: 5a9d725e424fe3d0e10cad10
title: Use CSS Variables to change several elements at once
challengeType: 0
videoUrl: ''
localeTitle: Usa las variables CSS para cambiar varios elementos a la vez
---

## Description
<section id="description"> <dfn>Las variables CSS</dfn> son una forma poderosa de cambiar muchas propiedades de estilo CSS a la vez, cambiando solo un valor. Siga las instrucciones a continuación para ver cómo, cambiando solo tres valores puede cambiar el estilo de muchos elementos. </section>

## Instructions
<section id="instructions"> En la clase <code>penguin</code> , cambie el valor <code>black</code> a <code>gray</code> , el valor <code>gray</code> a <code>white</code> y el <code>yellow</code> a <code>orange</code> . </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: La clase <code>penguin</code> debe declarar la variable <code>--penguin-skin</code> y asignarle el valor <code>gray</code> .
    testString: 'assert(code.match(/.penguin\s*?{[\s\S]*--penguin-skin\s*?:\s*?gray\s*?;[\s\S]*}/gi), "<code>penguin</code> class should declare the <code>--penguin-skin</code> variable and assign it to <code>gray</code>.");'
  - text: La clase <code>penguin</code> debe declarar la variable <code>--penguin-belly</code> y asignarle el valor <code>white</code> .
    testString: 'assert(code.match(/.penguin\s*?{[\s\S]*--penguin-belly\s*?:\s*?white\s*?;[\s\S]*}/gi), "<code>penguin</code> class should declare the <code>--penguin-belly</code> variable and assign it to <code>white</code>.");'
  - text: La clase <code>penguin</code> debe declarar la variable <code>--penguin-beak</code> y asignarle el valor <code>orange</code> .
    testString: 'assert(code.match(/.penguin\s*?{[\s\S]*--penguin-beak\s*?:\s*?orange\s*?;[\s\S]*}/gi), "<code>penguin</code> class should declare the <code>--penguin-beak</code> variable and assign it to <code>orange</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .penguin {

    /* change code below */
    --penguin-skin: black;
    --penguin-belly: gray;
    --penguin-beak: yellow;
    /* change code above */

    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background:#c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
