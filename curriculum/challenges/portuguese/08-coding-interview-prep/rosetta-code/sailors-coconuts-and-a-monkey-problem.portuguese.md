---
title: 'Sailors, coconuts and a monkey problem'
id: 59da22823d04c95919d46269
challengeType: 5
videoUrl: ''
localeTitle: 'Marinheiros, cocos e um problema de macaco'
---

## Description
<section id="description"><p> Cinco marinheiros naufragam numa ilha e recolhem uma grande pilha de cocos durante o dia. </p><p> Naquela noite, o primeiro marinheiro acorda e decide tomar sua primeira parte mais cedo, então tenta dividir a pilha de cocos igualmente em cinco pilhas, mas descobre que sobrou um coco, então ele o joga em um macaco e depois esconde &quot;seu&quot;. uma das cinco pilhas de cocos iguais e empurra as outras quatro pilhas juntas para formar uma única pilha visível de cocos novamente e vai para a cama. </p><p> Para encurtar a história, cada um dos marinheiros, por sua vez, se levanta uma vez durante a noite e realiza as mesmas ações de dividir a pilha de côco em cinco, descobrindo que sobrou um coco e dando aquele único coco restante ao macaco. </p><p> De manhã (após a ação sub-reptícia e separada de cada um dos cinco marinheiros durante a noite), os cocos remanescentes são divididos em cinco pilhas iguais para cada um dos marinheiros, após o que se verifica que a pilha de cocos se divide igualmente entre os marinheiros. sem resto. (Nada para o macaco de manhã.) </p><p> A tarefa: </p><pre> <code> Create a function that returns the the minimum possible size of the initial pile of coconuts collected during the day for N sailors.</code> </pre><p> Nota: </p><pre> <code> Of course the tale is told in a world where the collection of any amount of coconuts in a day and multiple divisions of the pile, etc can occur in time fitting the story line, so as not to affect the mathematics.</code> </pre><p> Cf: </p><p> <a href="https://www.youtube.com/watch?v=U9qU20VmvaU" title="link: https://www.youtube.com/watch?v=U9qU20VmvaU">Macacos e Cocos - Solução</a> Analítica <a href="https://www.youtube.com/watch?v=U9qU20VmvaU" title="link: https://www.youtube.com/watch?v=U9qU20VmvaU">Numberphile</a> (Video). </p><pre> <code> &lt;a href=&quot;http://oeis.org/A002021&quot; title=&quot;link: http://oeis.org/A002021&quot;&gt;A002021 Pile of coconuts problem&lt;/a&gt; The On-Line Encyclopedia of Integer Sequences. (Although some of its references may use the alternate form of the tale).</code> </pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>splitCoconuts</code> é uma função.
    testString: 'assert(typeof splitCoconuts === "function", "<code>splitCoconuts</code> is a function.");'
  - text: <code>splitCoconuts(5)</code> deve retornar 3121.
    testString: 'assert(splitCoconuts(5) === 3121, "<code>splitCoconuts(5)</code> should return 3121.");'
  - text: <code>splitCoconuts(6)</code> deve retornar 233275.
    testString: 'assert(splitCoconuts(6) === 233275, "<code>splitCoconuts(6)</code> should return 233275.");'
  - text: <code>splitCoconuts(7)</code> deve retornar 823537.
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
