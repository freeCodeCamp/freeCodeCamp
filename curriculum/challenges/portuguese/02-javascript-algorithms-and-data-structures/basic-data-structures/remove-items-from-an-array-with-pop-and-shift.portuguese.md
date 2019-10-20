---
id: 587d78b2367417b2b2512b0f
title: Remove Items from an Array with pop() and shift()
challengeType: 1
videoUrl: ''
localeTitle: Remover itens de uma matriz com pop () e shift ()
---

## Description
<section id="description"> Tanto <code>push()</code> quanto <code>unshift()</code> possuem métodos correspondentes que são quase opostos funcionais: <code>pop()</code> e <code>shift()</code> . Como você deve ter adivinhado agora, em vez de adicionar, <code>pop()</code> <em>remove</em> um elemento do final de um array, enquanto <code>shift()</code> remove um elemento do começo. A principal diferença entre <code>pop()</code> e <code>shift()</code> e seus primos <code>push()</code> e <code>unshift()</code> , é que nenhum método recebe parâmetros, e cada um só permite que um array seja modificado por um único elemento por vez. Vamos dar uma olhada: <blockquote> deixe saudações = [&#39;o que está acontecendo?&#39;, &#39;olá&#39;, &#39;até mais!&#39;]; <br><br> greetings.pop (); <br> // agora é igual a [&#39;whats up?&#39;, &#39;olá&#39;] <br><br> greetings.shift (); <br> // agora é igual a [&#39;olá&#39;] </blockquote> Nós também podemos retornar o valor do elemento removido com um dos métodos como este: <blockquote> deixe popped = greetings.pop (); <br> // retorna &#39;olá&#39; <br> // saudações agora é igual a [] </blockquote></section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>popShift([&quot;challenge&quot;, &quot;is&quot;, &quot;not&quot;, &quot;complete&quot;])</code> deve retornar <code>[&quot;challenge&quot;, &quot;complete&quot;]</code>'
    testString: 'assert.deepEqual(popShift(["challenge", "is", "not", "complete"]), ["challenge", "complete"], "<code>popShift(["challenge", "is", "not", "complete"])</code> should return <code>["challenge", "complete"]</code>");'
  - text: A função <code>popShift</code> deve utilizar o método <code>pop()</code>
    testString: 'assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1, "The <code>popShift</code> function should utilize the <code>pop()</code> method");'
  - text: A função <code>popShift</code> deve utilizar o método <code>shift()</code>
    testString: 'assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1, "The <code>popShift</code> function should utilize the <code>shift()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function popShift(arr) {
  let popped; // change this line
  let shifted; // change this line
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
