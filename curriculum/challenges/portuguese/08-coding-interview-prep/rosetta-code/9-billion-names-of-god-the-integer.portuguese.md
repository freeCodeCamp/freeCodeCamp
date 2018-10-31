---
title: 9 billion names of God the integer
id: 5949b579404977fbaefcd736
challengeType: 5
videoUrl: ''
localeTitle: 9 bilhões de nomes de Deus o inteiro
---

## Description
<section id="description"><p> Esta tarefa é uma variação do <a href="https://en.wikipedia.org/wiki/The Nine Billion Names of God#Plot_summary" title="wp: Os nove bilhões de nomes de Deus # Plot_summary">conto de Arthur C. Clarke</a> . </p><p> (Os solucionadores devem estar cientes das conseqüências de completar essa tarefa.) </p><p> Em detalhes, para especificar o que se entende por “nome”: </p><p> O inteiro 1 tem 1 nome “1”. </p><p> O inteiro 2 tem 2 nomes “1 + 1” e “2”. </p><p> O inteiro 3 tem 3 nomes “1 + 1 + 1”, “2 + 1” e “3”. </p><p> O inteiro 4 tem 5 nomes “1 + 1 + 1 + 1”, “2 + 1 + 1”, “2 + 2”, “3 + 1”, “4”. </p><p> O inteiro 5 tem 7 nomes “1 + 1 + 1 + 1 + 1”, “2 + 1 + 1 + 1”, “2 + 2 + 1”, “3 + 1 + 1”, “3 + 2”, &quot;4 + 1&quot;, &quot;5&quot;. </p><p> Isso pode ser visualizado da seguinte forma: </p><pre> 1
        1 1
      1 1 1
    1 2 1 1
  1 2 2 1 1
1 3 3 2 1 1
</pre><p> Onde a linha $ n $ corresponde ao inteiro $ n $, e cada coluna $ C $ na linha $ m $ da esquerda para a direita corresponde ao número de nomes que começam com $ C $. </p><p> Opcionalmente, observe que a soma da $ n $ -th row $ P (n) $ é a <a href="http://mathworld.wolfram.com/PartitionFunctionP.html" title="link: http://mathworld.wolfram.com/PartitionFunctionP.html">função de partição inteira</a> . </p> Tarefa <p> Implemente uma função que retorne a soma da linha $ n $ -th. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>numberOfNames</code> é uma função.
    testString: 'assert(typeof numberOfNames === "function", "<code>numberOfNames</code> is a function.");'
  - text: <code>numberOfNames(5)</code> deve ser igual a 7.
    testString: 'assert.equal(numberOfNames(5), 7, "<code>numberOfNames(5)</code> should equal 7.");'
  - text: <code>numberOfNames(12)</code> deve ser igual a 77.
    testString: 'assert.equal(numberOfNames(12), 77, "<code>numberOfNames(12)</code> should equal 77.");'
  - text: <code>numberOfNames(18)</code> deve ser igual a 385.
    testString: 'assert.equal(numberOfNames(18), 385, "<code>numberOfNames(18)</code> should equal 385.");'
  - text: <code>numberOfNames(23)</code> deve ser igual a 1255.
    testString: 'assert.equal(numberOfNames(23), 1255, "<code>numberOfNames(23)</code> should equal 1255.");'
  - text: <code>numberOfNames(42)</code> deve ser igual a 53174.
    testString: 'assert.equal(numberOfNames(42), 53174, "<code>numberOfNames(42)</code> should equal 53174.");'
  - text: <code>numberOfNames(123)</code> deve ser igual a 2552338241.
    testString: 'assert.equal(numberOfNames(123), 2552338241, "<code>numberOfNames(123)</code> should equal 2552338241.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function numberOfNames (num) {
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
