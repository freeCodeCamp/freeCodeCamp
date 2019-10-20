---
title: Entropy
id: 599d15309e88c813a40baf58
challengeType: 5
videoUrl: ''
localeTitle: Entropia
---

## Description
<section id="description"> Tarefa: <p> Calcule a entropia de Shannon H de uma determinada string de entrada. </p><p> Dada a variável aleatória discreta $ X $ que é uma cadeia de $ N $ &quot;símbolos&quot; (caracteres totais) consistindo de $ n $ caracteres diferentes (n = 2 para binário), a entropia de Shannon de X em bits / símbolo é: </p><p> $ H_2 (X) = - \ sum_ {i = 1} ^ n \ frac {count_i} {N} \ log_2 \ left (\ frac {count_i} {N} \ right) $ </p><p> onde $ count_i $ é a contagem do caractere $ n_i $. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>entropy</code> é uma função.
    testString: 'assert(typeof entropy === "function", "<code>entropy</code> is a function.");'
  - text: <code>entropy(&quot;0&quot;)</code> deve retornar <code>0</code>
    testString: 'assert.equal(entropy("0"), 0, "<code>entropy("0")</code> should return <code>0</code>");'
  - text: <code>entropy(&quot;01&quot;)</code> deve retornar <code>1</code>
    testString: 'assert.equal(entropy("01"), 1, "<code>entropy("01")</code> should return <code>1</code>");'
  - text: <code>entropy(&quot;0123&quot;)</code> deve retornar <code>2</code>
    testString: 'assert.equal(entropy("0123"), 2, "<code>entropy("0123")</code> should return <code>2</code>");'
  - text: <code>entropy(&quot;01234567&quot;)</code> deve retornar <code>3</code>
    testString: 'assert.equal(entropy("01234567"), 3, "<code>entropy("01234567")</code> should return <code>3</code>");'
  - text: <code>entropy(&quot;0123456789abcdef&quot;)</code> deve retornar <code>4</code>
    testString: 'assert.equal(entropy("0123456789abcdef"), 4, "<code>entropy("0123456789abcdef")</code> should return <code>4</code>");'
  - text: <code>entropy(&quot;1223334444&quot;)</code> deve retornar <code>1.8464393446710154</code>
    testString: 'assert.equal(entropy("1223334444"), 1.8464393446710154, "<code>entropy("1223334444")</code> should return <code>1.8464393446710154</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function entropy (s) {
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
