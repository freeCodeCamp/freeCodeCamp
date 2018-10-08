---
id: 587d78a5367417b2b2512ad9
title: Use the CSS Transform scale Property to Change the Size of an Element
localeTitle: Use la propiedad de escala de transformación CSS para cambiar el tamaño de un elemento
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Para cambiar la escala de un elemento, CSS tiene la propiedad de <code>transform</code> , junto con su función <code>scale()</code> . El siguiente ejemplo de código duplica el tamaño de todos los elementos de párrafo en la página: 
<blockquote>p {<br>&nbsp;&nbsp;transform:scale(2);<br>}</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Aumente el tamaño del elemento con el id de <code>ball2</code> a 1.5 veces su tamaño original. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39;Establezca la propiedad de <code>transform</code> para <code>#ball2</code> para escalarla 1.5 veces su tamaño.&#39;
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
var code = "#ball2 {left: 65%; transform: scale(1.5);}"
```

</section>
