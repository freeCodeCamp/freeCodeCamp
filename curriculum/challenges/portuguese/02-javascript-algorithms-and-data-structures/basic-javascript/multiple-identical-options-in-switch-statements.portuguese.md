---
id: 56533eb9ac21ba0edf2244df
title: Multiple Identical Options in Switch Statements
challengeType: 1
videoUrl: ''
localeTitle: Múltiplas Opções Idênticas em Instruções de Comutação
---

## Description
undefined

## Instructions
<section id="instructions"> Escreva uma instrução switch para definir a <code>answer</code> para os seguintes intervalos: <br> <code>1-3</code> - &quot;baixo&quot; <br> <code>4-6</code> - &quot;Mid&quot; <br> <code>7-9</code> - <strong>Nota</strong> &quot;Alta&quot; <br> Você precisará ter uma declaração de <code>case</code> para cada número no intervalo. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sequentialSizes(1)</code> deve retornar &quot;Low&quot;
    testString: 'assert(sequentialSizes(1) === "Low", "<code>sequentialSizes(1)</code> should return "Low"");'
  - text: <code>sequentialSizes(2)</code> deve retornar &quot;Low&quot;
    testString: 'assert(sequentialSizes(2) === "Low", "<code>sequentialSizes(2)</code> should return "Low"");'
  - text: <code>sequentialSizes(3)</code> deve retornar &quot;Low&quot;
    testString: 'assert(sequentialSizes(3) === "Low", "<code>sequentialSizes(3)</code> should return "Low"");'
  - text: <code>sequentialSizes(4)</code> deve retornar &quot;Mid&quot;
    testString: 'assert(sequentialSizes(4) === "Mid", "<code>sequentialSizes(4)</code> should return "Mid"");'
  - text: <code>sequentialSizes(5)</code> deve retornar &quot;Mid&quot;
    testString: 'assert(sequentialSizes(5) === "Mid", "<code>sequentialSizes(5)</code> should return "Mid"");'
  - text: <code>sequentialSizes(6)</code> deve retornar &quot;Mid&quot;
    testString: 'assert(sequentialSizes(6) === "Mid", "<code>sequentialSizes(6)</code> should return "Mid"");'
  - text: <code>sequentialSizes(7)</code> deve retornar &quot;High&quot;
    testString: 'assert(sequentialSizes(7) === "High", "<code>sequentialSizes(7)</code> should return "High"");'
  - text: <code>sequentialSizes(8)</code> deve retornar &quot;High&quot;
    testString: 'assert(sequentialSizes(8) === "High", "<code>sequentialSizes(8)</code> should return "High"");'
  - text: <code>sequentialSizes(9)</code> deve retornar &quot;High&quot;
    testString: 'assert(sequentialSizes(9) === "High", "<code>sequentialSizes(9)</code> should return "High"");'
  - text: Você não deve usar nenhuma instrução <code>if</code> ou <code>else</code>
    testString: 'assert(!/else/g.test(code) || !/if/g.test(code), "You should not use any <code>if</code> or <code>else</code> statements");'
  - text: Você deve ter nove declarações de <code>case</code>
    testString: 'assert(code.match(/case/g).length === 9, "You should have nine <code>case</code> statements");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
