---
id: 56533eb9ac21ba0edf2244dd
title: Selecting from Many Options with Switch Statements
challengeType: 1
videoUrl: ''
localeTitle: Selecionando a partir de muitas opções com instruções de troca
---

## Description
<section id="description"> Se você tiver muitas opções para escolher, use uma instrução <code>switch</code> . Uma instrução <code>switch</code> testa um valor e pode ter várias instruções <code>case</code> que definem vários valores possíveis. As declarações são executadas a partir do primeiro valor do <code>case</code> correspondente até que uma <code>break</code> seja encontrada. Aqui está um exemplo de <dfn>pseudocódigo</dfn> : <blockquote> switch (num) { <br> valor do caso1: <br> statement1; <br> pausa; <br> valor do caso2: <br> statement2; <br> pausa; <br> ... <br> case valueN: <br> statementN; <br> pausa; <br> } </blockquote> valores de <code>case</code> são testados com igualdade estrita ( <code>===</code> ). A <code>break</code> diz ao JavaScript para parar de executar instruções. Se a <code>break</code> for omitida, a próxima instrução será executada. </section>

## Instructions
<section id="instructions"> Escreva uma instrução switch que teste <code>val</code> e configure a <code>answer</code> para as seguintes condições: <br> <code>1</code> - &quot;alfa&quot; <br> <code>2</code> - &quot;beta&quot; <br> <code>3</code> - &quot;gama&quot; <br> <code>4</code> - &quot;delta&quot; </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>caseInSwitch(1)</code> deve ter um valor de &quot;alfa&quot;
    testString: 'assert(caseInSwitch(1) === "alpha", "<code>caseInSwitch(1)</code> should have a value of "alpha"");'
  - text: <code>caseInSwitch(2)</code> deve ter um valor de &quot;beta&quot;
    testString: 'assert(caseInSwitch(2) === "beta", "<code>caseInSwitch(2)</code> should have a value of "beta"");'
  - text: <code>caseInSwitch(3)</code> deve ter um valor de &quot;gamma&quot;
    testString: 'assert(caseInSwitch(3) === "gamma", "<code>caseInSwitch(3)</code> should have a value of "gamma"");'
  - text: <code>caseInSwitch(4)</code> deve ter um valor de &quot;delta&quot;
    testString: 'assert(caseInSwitch(4) === "delta", "<code>caseInSwitch(4)</code> should have a value of "delta"");'
  - text: Você não deve usar nenhuma instrução <code>if</code> ou <code>else</code>
    testString: 'assert(!/else/g.test(code) || !/if/g.test(code), "You should not use any <code>if</code> or <code>else</code> statements");'
  - text: Você deve ter pelo menos 3 declarações de <code>break</code>
    testString: 'assert(code.match(/break/g).length > 2, "You should have at least 3 <code>break</code> statements");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
