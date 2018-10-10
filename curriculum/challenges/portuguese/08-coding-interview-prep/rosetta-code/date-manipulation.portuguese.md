---
title: Date manipulation
id: 5966c21cf732a95f1b67dd28
challengeType: 5
videoUrl: ''
localeTitle: Manipulação de data
---

## Description
<section id="description"> Tarefa: <p> Dada uma string de data em EST, imprima a data fornecida como uma string com 12 horas adicionadas ao tempo. </p><p> O fuso horário deve ser preservado. </p><p> Exemplo de entrada: </p><p> <code>&quot;March 7 2009 7:30pm EST&quot;</code> </p> <p> Exemplo de saída: </p><p> <code>&quot;March 8 2009 7:30am EST&quot;</code> </p> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>add12Hours</code> é uma função.
    testString: 'assert(typeof add12Hours === "function", "<code>add12Hours</code> is a function.");'
  - text: <code>add12Hours(dateString)</code> deve retornar uma string.
    testString: 'assert(typeof add12Hours(tests[0]) === "string", "<code>add12Hours(dateString)</code> should return a string.");'
  - text: '<code>add12Hours(&quot;&quot; + tests[0] + &quot;&quot;)</code> deve retornar <code>&quot;&quot; + answers[0] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[0]) === answers[0], "<code>add12Hours("" + tests[0] + "")</code> should return <code>"" + answers[0] + ""</code>");'
  - text: 'Deve mudar o dia do handel. <code>add12Hours(&quot;&quot; + tests[1] + &quot;&quot;)</code> deve retornar <code>&quot;&quot; + answers[1] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[1]) === answers[1], "Should handel day change. <code>add12Hours("" + tests[1] + "")</code> should return <code>"" + answers[1] + ""</code>");'
  - text: 'Deve mudar mês mês em anos bissextos. <code>add12Hours(&quot;&quot; + tests[2] + &quot;&quot;)</code> deve retornar <code>&quot;&quot; + answers[2] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[2]) === answers[2], "Should handel month change in a leap years. <code>add12Hours("" + tests[2] + "")</code> should return <code>"" + answers[2] + ""</code>");'
  - text: 'Deve mudar de mês handel em anos comuns. <code>add12Hours(&quot;&quot; + tests[3] + &quot;&quot;)</code> deve retornar <code>&quot;&quot; + answers[3] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[3]) === answers[3], "Should handel month change in a common years. <code>add12Hours("" + tests[3] + "")</code> should return <code>"" + answers[3] + ""</code>");'
  - text: 'Deve mudar o ano de mão. <code>add12Hours(&quot;&quot; + tests[4] + &quot;&quot;)</code> deve retornar <code>&quot;&quot; + answers[4] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[4]) === answers[4], "Should handel year change. <code>add12Hours("" + tests[4] + "")</code> should return <code>"" + answers[4] + ""</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function add12Hours (dateString) {
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
