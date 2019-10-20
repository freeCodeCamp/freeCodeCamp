---
id: 587d78b2367417b2b2512b10
title: Remove Items Using splice()
challengeType: 1
videoUrl: ''
localeTitle: Remover itens usando splice ()
---

## Description
<section id="description"> Ok, aprendemos como remover elementos do início e do fim de arrays usando <code>shift()</code> e <code>pop()</code> , mas e se quisermos remover um elemento de algum lugar no meio? Ou remover mais de um elemento de uma só vez? Bem, é aí que <code>splice()</code> entra. <code>splice()</code> nos permite fazer exatamente isso: <strong>remover qualquer número de elementos consecutivos</strong> de qualquer lugar em um array. <code>splice()</code> pode levar até 3 parâmetros, mas por enquanto, vamos nos concentrar apenas no primeiro 2. Os dois primeiros parâmetros de <code>splice()</code> são inteiros que representam índices, ou posições, do array que <code>splice()</code> está sendo chamado a. E lembre-se, as matrizes são <em>indexadas com zero</em> , portanto, para indicar o primeiro elemento de uma matriz, usaríamos <code>0</code> . O primeiro parâmetro do <code>splice()</code> representa o índice no array do qual começar a remover elementos, enquanto o segundo parâmetro indica o número de elementos a serem deletados. Por exemplo: <blockquote> vamos array = [&#39;hoje&#39;, &#39;foi&#39;, &#39;não&#39;, &#39;so&#39;, &#39;ótimo&#39;]; <br><br> array.splice (2, 2); <br> // remove 2 elementos começando com o terceiro elemento <br> // array agora é igual a [&#39;today&#39;, &#39;was&#39;, &#39;great&#39;] </blockquote> <code>splice()</code> não apenas modifica o array que está sendo chamado, mas também retorna um novo array contendo o valor dos elementos removidos: <blockquote> deixe array = [&#39;eu&#39;, &#39;sou&#39;, &#39;sentindo&#39;, &#39;realmente&#39;, &#39;feliz&#39;]; <br><br> deixe newArray = array.splice (3, 2); <br> // newArray é igual a [&#39;really&#39;, &#39;happy&#39;] </blockquote></section>

## Instructions
<section id="instructions"> Nós definimos uma função, <code>sumOfTen</code> , que usa um array como argumento e retorna a soma dos elementos do array. Modifique a função, usando <code>splice()</code> , para que ela retorne um valor de <code>10</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumOfTen</code> deve retornar 10
    testString: 'assert.strictEqual(sumOfTen([2, 5, 1, 5, 2, 1]), 10, "<code>sumOfTen</code> should return 10");'
  - text: A função <code>sumOfTen</code> deve utilizar o método <code>splice()</code>
    testString: 'assert.notStrictEqual(sumOfTen.toString().search(/\.splice\(/), -1, "The <code>sumOfTen</code> function should utilize the <code>splice()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumOfTen(arr) {
  // change code below this line

  // change code above this line
  return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
