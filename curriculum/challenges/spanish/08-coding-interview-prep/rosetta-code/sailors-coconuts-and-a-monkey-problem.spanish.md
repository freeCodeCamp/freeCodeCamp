---
title: 'Sailors, coconuts and a monkey problem'
id: 59da22823d04c95919d46269
challengeType: 5
videoUrl: ''
localeTitle: 'Marineros, cocos y un problema de monos.'
---

## Description
<section id="description"><p> Cinco marineros naufragan en una isla y recogen una gran pila de cocos durante el día. </p><p> Esa noche, el primer marinero se despierta y decide tomar su primera parte temprano, así que trata de dividir el montón de cocos en cinco pilas pero encuentra que le queda un coco, así que se lo arroja a un mono y luego lo esconde &quot;suyo&quot;. una de las cinco pilas de cocos del mismo tamaño y empuja las otras cuatro pilas juntas para formar una sola pila visible de cocos de nuevo y se va a la cama. </p><p> Para abreviar una larga historia, cada uno de los marineros, a su vez, se levanta una vez durante la noche y realiza las mismas acciones de dividir la pila de coco en cinco, encontrando que queda un coco y le da ese resto de coco al mono. </p><p> Por la mañana (después de la acción subrepticia y separada de cada uno de los cinco marineros durante la noche), los cocos restantes se dividen en cinco pilas iguales para cada uno de los marineros, con lo cual se encuentra que la pila de cocos se divide por igual entre los marineros. sin resto. (Nada para el mono por la mañana.) </p><p> La tarea: </p><pre> <code> Create a function that returns the the minimum possible size of the initial pile of coconuts collected during the day for N sailors.</code> </pre><p> Nota: </p><pre> <code> Of course the tale is told in a world where the collection of any amount of coconuts in a day and multiple divisions of the pile, etc can occur in time fitting the story line, so as not to affect the mathematics.</code> </pre><p> Cf: </p><p> <a href="https://www.youtube.com/watch?v=U9qU20VmvaU" title="enlace: https://www.youtube.com/watch?v=U9qU20VmvaU">Monos y cocos - Numberphile</a> (Video) Solución analítica. </p><pre> <code> &lt;a href=&quot;http://oeis.org/A002021&quot; title=&quot;link: http://oeis.org/A002021&quot;&gt;A002021 Pile of coconuts problem&lt;/a&gt; The On-Line Encyclopedia of Integer Sequences. (Although some of its references may use the alternate form of the tale).</code> </pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>splitCoconuts</code> es una función.
    testString: 'assert(typeof splitCoconuts === "function", "<code>splitCoconuts</code> is a function.");'
  - text: <code>splitCoconuts(5)</code> debe devolver 3121.
    testString: 'assert(splitCoconuts(5) === 3121, "<code>splitCoconuts(5)</code> should return 3121.");'
  - text: <code>splitCoconuts(6)</code> debe devolver 233275.
    testString: 'assert(splitCoconuts(6) === 233275, "<code>splitCoconuts(6)</code> should return 233275.");'
  - text: <code>splitCoconuts(7)</code> debe devolver 823537.
    testString: 'assert(splitCoconuts(7) === 823537, "<code>splitCoconuts(7)</code> should return 823537.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// noprotect
function splitCoconuts(intSailors) {
  // Good luck!
  return true;
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
