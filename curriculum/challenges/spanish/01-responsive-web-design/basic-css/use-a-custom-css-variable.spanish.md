---
id: 5a9d727a424fe3d0e10cad12
title: Use a custom CSS Variable
challengeType: 0
videoUrl: ''
localeTitle: Use una variable CSS personalizada
---

## Descripción
<section id="description"> Después de crear su variable, puede asignar su valor a otras propiedades de CSS haciendo referencia al nombre que le dio. <blockquote> fondo: var (- piel de pingüino); </blockquote> Esto cambiará el fondo de cualquier elemento que estés apuntando a gris porque ese es el valor de la variable <code>--penguin-skin</code> . Tenga en cuenta que los estilos no se aplicarán a menos que los nombres de las variables coincidan exactamente. </section>

## Instrucciones
<section id="instructions"> Aplique la variable <code>--penguin-skin</code> a la propiedad de <code>background</code> de las clases <code>penguin-top</code> , <code>penguin-bottom</code> , <code>right-hand</code> y <code>left-hand</code> . </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Aplique la variable <code>--penguin-skin</code> a la propiedad de <code>background</code> de la clase <code>penguin-top</code> .
    testString: 'assert(code.match(/.penguin-top\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}[\s\S]*.penguin-bottom\s{/gi), "Apply the <code>--penguin-skin</code> variable to the <code>background</code> property of the <code>penguin-top</code> class.");'
  - text: Aplicar la <code>--penguin-skin</code> variable al <code>background</code> propiedad del <code>penguin-bottom</code> la clase.
    testString: 'assert(code.match(/.penguin-bottom\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}[\s\S]*.right-hand\s{/gi), "Apply the <code>--penguin-skin</code> variable to the <code>background</code> property of the <code>penguin-bottom</code> class.");'
  - text: Aplique la variable <code>--penguin-skin</code> a la propiedad de <code>background</code> de la clase de la <code>right-hand</code> .
    testString: 'assert(code.match(/.right-hand\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}[\s\S]*.left-hand\s{/gi), "Apply the <code>--penguin-skin</code> variable to the <code>background</code> property of the <code>right-hand</code> class.");'
  - text: Aplique la variable <code>--penguin-skin</code> a la propiedad de <code>background</code> de la clase de la <code>left-hand</code> .
    testString: 'assert(code.match(/.left-hand\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}/gi), "Apply the <code>--penguin-skin</code> variable to the <code>background</code> property of the <code>left-hand</code> class.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .penguin {
    --penguin-skin: gray;
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

    /* change code below */
    background: black;
    /* change code above */

    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;

    /* change code below */
    background: black;
    /* change code above */

    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;

    /* change code below */
    background: black;
    /* change code above */

    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;

    /* change code below */
    background: black;
    /* change code above */

    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: white;
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: white;
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: white;
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: orange;
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: orange;
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
    background: orange;
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: orange;
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
