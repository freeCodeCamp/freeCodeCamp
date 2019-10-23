---
id: 587d78a5367417b2b2512ad9
title: Use the CSS Transform scale Property to Change the Size of an Element
challengeType: 0
videoUrl: ''
localeTitle: Use a propriedade de escala de transformação de CSS para alterar o tamanho de um elemento
---

## Description
<section id="description"> Para alterar a escala de um elemento, o CSS possui a propriedade <code>transform</code> , junto com sua função <code>scale()</code> . O exemplo de código a seguir dobra o tamanho de todos os elementos de parágrafo na página: <blockquote>p {<br>&nbsp;&nbsp;transform:scale(2);<br>}</blockquote></section>

## Instructions
<section id="instructions"> Aumente o tamanho do elemento com o id de <code>ball2</code> para 1,5 vezes o tamanho original. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Defina a propriedade de <code>transform</code> para <code>#ball2</code> para dimensioná-la 1,5 vezes seu tamanho.'
    testString: 'assert(code.match(/#ball2\s*?{\s*?left:\s*?65%;\s*?transform:\s*?scale\(1\.5\);\s*?}|#ball2\s*?{\s*?transform:\s*?scale\(1\.5\);\s*?left:\s*?65%;\s*?}/gi), "Set the <code>transform</code> property for <code>#ball2</code> to scale it 1.5 times its size.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .ball {
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;

  }


</style>

<div class="ball" id= "ball1"></div>
<div class="ball" id= "ball2"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
