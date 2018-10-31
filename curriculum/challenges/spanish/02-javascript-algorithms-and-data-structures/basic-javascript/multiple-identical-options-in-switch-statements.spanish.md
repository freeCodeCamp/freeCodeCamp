---
id: 56533eb9ac21ba0edf2244df
title: Multiple Identical Options in Switch Statements
challengeType: 1
videoUrl: ''
localeTitle: Múltiples opciones idénticas en declaraciones de cambio
---

## Description
<section id="description"> Si la declaración de <code>break</code> se omite en el <code>case</code> de una instrucción de <code>switch</code> , se ejecutan las siguientes instrucciones de <code>case</code> hasta que se encuentra una <code>break</code> . Si tiene varias entradas con la misma salida, puede representarlas en una declaración de <code>switch</code> como esta: <blockquote> interruptor (val) { <br> caso 1: <br> caso 2: <br> caso 3: <br> resultado = &quot;1, 2 o 3&quot;; <br> descanso; <br> caso 4: <br> result = &quot;4 solo&quot;; <br> } </blockquote> Los casos para 1, 2 y 3 producirán el mismo resultado. </section>

## Instructions
<section id="instructions"> Escriba una instrucción de cambio para establecer la <code>answer</code> para los siguientes rangos: <br> <code>1-3</code> - &quot;Bajo&quot; <br> <code>4-6</code> - &quot;Mid&quot; <br> <code>7-9</code> - <strong>Nota</strong> &quot;Alta&quot; <br> Deberá tener una declaración de <code>case</code> para cada número en el rango. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sequentialSizes(1)</code> debe devolver &quot;Low&quot;
    testString: 'assert(sequentialSizes(1) === "Low", "<code>sequentialSizes(1)</code> should return "Low"");'
  - text: <code>sequentialSizes(2)</code> debe devolver &quot;Low&quot;
    testString: 'assert(sequentialSizes(2) === "Low", "<code>sequentialSizes(2)</code> should return "Low"");'
  - text: <code>sequentialSizes(3)</code> debe devolver &quot;Low&quot;
    testString: 'assert(sequentialSizes(3) === "Low", "<code>sequentialSizes(3)</code> should return "Low"");'
  - text: <code>sequentialSizes(4)</code> debe devolver &quot;Mid&quot;
    testString: 'assert(sequentialSizes(4) === "Mid", "<code>sequentialSizes(4)</code> should return "Mid"");'
  - text: <code>sequentialSizes(5)</code> debe devolver &quot;Mid&quot;
    testString: 'assert(sequentialSizes(5) === "Mid", "<code>sequentialSizes(5)</code> should return "Mid"");'
  - text: <code>sequentialSizes(6)</code> debe devolver &quot;Mid&quot;
    testString: 'assert(sequentialSizes(6) === "Mid", "<code>sequentialSizes(6)</code> should return "Mid"");'
  - text: <code>sequentialSizes(7)</code> debe devolver &quot;Alto&quot;
    testString: 'assert(sequentialSizes(7) === "High", "<code>sequentialSizes(7)</code> should return "High"");'
  - text: <code>sequentialSizes(8)</code> debe devolver &quot;Alto&quot;
    testString: 'assert(sequentialSizes(8) === "High", "<code>sequentialSizes(8)</code> should return "High"");'
  - text: <code>sequentialSizes(9)</code> debe devolver &quot;Alto&quot;
    testString: 'assert(sequentialSizes(9) === "High", "<code>sequentialSizes(9)</code> should return "High"");'
  - text: No debes usar ninguna declaración <code>if</code> o <code>else</code>
    testString: 'assert(!/else/g.test(code) || !/if/g.test(code), "You should not use any <code>if</code> or <code>else</code> statements");'
  - text: Usted debe tener nueve declaraciones de <code>case</code>
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
