---
id: 587d7b7b367417b2b2512b14
title: Check For The Presence of an Element With indexOf()
challengeType: 1
videoUrl: ''
localeTitle: Verificar a presença de um elemento com indexOf ()
---

## Description
<section id="description"> Desde matrizes pode ser alterado, ou <em>mutante,</em> a qualquer momento, não há nenhuma garantia sobre onde uma determinada peça de dados estará em uma determinada matriz, ou se esse elemento, mesmo ainda existe. Felizmente, o JavaScript nos fornece outro método integrado, <code>indexOf()</code> , que nos permite verificar rápida e facilmente a presença de um elemento em uma matriz. <code>indexOf()</code> usa um elemento como parâmetro e, quando chamado, retorna a posição, ou índice, desse elemento, ou <code>-1</code> se o elemento não existir na matriz. Por exemplo: <blockquote> deixe frutas = [&#39;maçãs&#39;, &#39;pêras&#39;, &#39;laranjas&#39;, &#39;pêssegos&#39;, &#39;pêras&#39;]; <br><br> fruits.indexOf (&#39;datas&#39;) // retorna -1 <br> fruits.indexOf (&#39;laranjas&#39;) // retorna 2 <br> fruits.indexOf (&#39;pears&#39;) // retorna 1, o primeiro índice no qual o elemento existe </blockquote></section>

## Instructions
<section id="instructions"> <code>indexOf()</code> pode ser incrivelmente útil para verificar rapidamente a presença de um elemento em um array. Nós definimos uma função, <code>quickCheck</code> , que usa um array e um elemento como argumentos. Modifique a função usando <code>indexOf()</code> para que ela retorne <code>true</code> se o elemento passado existir na matriz e <code>false</code> se não existir. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>quickCheck([&quot;squash&quot;, &quot;onions&quot;, &quot;shallots&quot;], &quot;mushrooms&quot;)</code> devem retornar <code>false</code>'
    testString: 'assert.strictEqual(quickCheck(["squash", "onions", "shallots"], "mushrooms"), false, "<code>quickCheck(["squash", "onions", "shallots"], "mushrooms")</code> should return <code>false</code>");'
  - text: '<code>quickCheck([&quot;squash&quot;, &quot;onions&quot;, &quot;shallots&quot;], &quot;onions&quot;)</code> devem retornar <code>true</code>'
    testString: 'assert.strictEqual(quickCheck(["squash", "onions", "shallots"], "onions"), true, "<code>quickCheck(["squash", "onions", "shallots"], "onions")</code> should return <code>true</code>");'
  - text: '<code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code> deve retornar <code>true</code>'
    testString: 'assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true, "<code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code> should return <code>true</code>");'
  - text: '<code>quickCheck([true, false, false], undefined)</code> deve retornar <code>false</code>'
    testString: 'assert.strictEqual(quickCheck([true, false, false], undefined), false, "<code>quickCheck([true, false, false], undefined)</code> should return <code>false</code>");'
  - text: A função <code>quickCheck</code> deve utilizar o método <code>indexOf()</code>
    testString: 'assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1, "The <code>quickCheck</code> function should utilize the <code>indexOf()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quickCheck(arr, elem) {
  // change code below this line

  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
