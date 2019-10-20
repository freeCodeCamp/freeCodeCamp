---
title: Babbage problem
id: 594db4d0dedb4c06a2a4cefd
challengeType: 5
videoUrl: ''
localeTitle: Problema Babbage
---

## Description
<section id="description"><p> <a href="https://en.wikipedia.org/wiki/Charles_Babbage" title="wp: Charles_Babbage">Charles Babbage</a> , olhando para os problemas que seu Mecanismo Analítico poderia resolver, deu o seguinte exemplo: </p><blockquote> Qual é o menor inteiro positivo cujo quadrado termina nos dígitos 269.696? </blockquote><p> - Babbage, carta a Lord Bowden, 1837; veja Hollingdale e Tootill, <i>Electronic Computers</i> , segunda edição, 1970, p. 125 </p><p> Ele pensou que a resposta poderia ser 99.736, cujo quadrado é 9.947.269.696; mas ele não podia ter certeza. </p><p> A tarefa é descobrir se Babbage teve a resposta certa. </p><p> Implemente uma função para retornar o inteiro mais baixo que satisfaça o problema Babbage. Se Babbage estava certo, devolva o número de Babbage. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>babbage</code> é uma função.
    testString: 'assert(typeof babbage === "function", "<code>babbage</code> is a function.");'
  - text: '<code>babbage(99736, 269696)</code> não deve retornar 99736 (há uma resposta menor).'
    testString: 'assert.equal(babbage(babbageAns, endDigits), answer, "<code>babbage(99736, 269696)</code> should not return 99736 (there is a smaller answer).");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function babbage (babbageNum, endDigits) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
