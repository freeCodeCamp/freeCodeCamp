---
title: Josephus problem
id: 5a23c84252665b21eecc7ec5
challengeType: 5
videoUrl: ''
localeTitle: Problema Josephus
---

## Description
<section id="description"> <a href="https://en.wikipedia.org/wiki/Josephus problem">O problema de Josefo</a> é um enigma matemático com uma descrição sombria: prisioneiros de $ n $ estão de pé em um círculo, numerados sequencialmente de $ 0 $ a $ n-1 $. Um carrasco caminha ao longo do círculo, partindo do prisioneiro de US $ 0, removendo cada prisioneiro de $ k $ e matando-o. À medida que o processo continua, o círculo se torna cada vez menor, até restar apenas um prisioneiro, que é então libertado. Por exemplo, se houver $ n = 5 $ prisioneiros e $ k = 2 $, a ordem em que os prisioneiros são mortos (vamos chamá-la de &quot;sequência de mortes&quot;) será 1, 3, 0 e 4, e o sobrevivente será # 2. Dado qualquer <big>$ n, k&gt; 0 $</big> , descubra qual prisioneiro será o último sobrevivente. Em um desses incidentes, havia 41 prisioneiros e a cada <sup>3º</sup> prisioneiro estava sendo morto ( <big>$ k = 3 $</big> ). Entre eles havia um esperto nome Josephus, que resolveu o problema, permaneceu na posição de sobrevivente e continuou a contar a história. Qual número ele era? Escreva uma função que tome o número inicial de prisioneiros e &#39;k&#39; como parâmetro e retorne o número do prisioneiro que sobrevive. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>josephus</code> deveria ser uma função.
    testString: 'assert(typeof josephus=="function","<code>josephus</code> should be a function.");'
  - text: '<code>josephus(30,3)</code> deve retornar um número.'
    testString: 'assert(typeof josephus(30,3)=="number","<code>josephus(30,3)</code> should return a number.");'
  - text: '<code>josephus(30,3)</code> deve retornar <code>29</code> .'
    testString: 'assert.equal(josephus(30,3),29,"<code>josephus(30,3)</code> should return <code>29</code>.");'
  - text: '<code>josephus(30,5)</code> deve retornar <code>3</code> .'
    testString: 'assert.equal(josephus(30,5),3,"<code>josephus(30,5)</code> should return <code>3</code>.");'
  - text: '<code>josephus(20,2)</code> deve retornar <code>9</code> .'
    testString: 'assert.equal(josephus(20,2),9,"<code>josephus(20,2)</code> should return <code>9</code>.");'
  - text: '<code>josephus(17,6)</code> deve retornar <code>2</code> .'
    testString: 'assert.equal(josephus(17,6),2,"<code>josephus(17,6)</code> should return <code>2</code>.");'
  - text: '<code>josephus(29,4)</code> deve retornar <code>2</code> .'
    testString: 'assert.equal(josephus(29,4),2,"<code>josephus(29,4)</code> should return <code>2</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function josephus (init, kill) {
  // Good luck!
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
