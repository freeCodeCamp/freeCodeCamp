---
id: 56533eb9ac21ba0edf2244de
title: Adding a Default Option in Switch Statements
challengeType: 1
videoUrl: ''
localeTitle: Adición de una opción predeterminada en los estados de cambio
---

## Description
<section id="description"> En una declaración de <code>switch</code> , es posible que no pueda especificar todos los valores posibles como declaraciones de <code>case</code> . En su lugar, puede agregar la declaración <code>default</code> que se ejecutará si no se encuentran declaraciones de <code>case</code> coincidentes. Piense en ello como la última instrucción <code>else</code> en una cadena <code>if/else</code> . Una declaración por <code>default</code> debe ser el último caso. <blockquote> interruptor (núm) { <br> valor de caso1: <br> sentencia1; <br> descanso; <br> valor de caso2: <br> declaración2; <br> descanso; <br> ... <br> defecto: <br> declaración por defecto; <br> descanso; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Escriba una instrucción de cambio para establecer la <code>answer</code> para las siguientes condiciones: <br> <code>&quot;a&quot;</code> - &quot;manzana&quot; <br> <code>&quot;b&quot;</code> - &quot;pájaro&quot; <br> <code>&quot;c&quot;</code> - &quot;gato&quot; <br> <code>default</code> - &quot;cosas&quot; </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>switchOfStuff(&quot;a&quot;)</code> debe tener un valor de &quot;apple&quot;
    testString: 'assert(switchOfStuff("a") === "apple", "<code>switchOfStuff("a")</code> should have a value of "apple"");'
  - text: <code>switchOfStuff(&quot;b&quot;)</code> debe tener un valor de &quot;bird&quot;
    testString: 'assert(switchOfStuff("b") === "bird", "<code>switchOfStuff("b")</code> should have a value of "bird"");'
  - text: <code>switchOfStuff(&quot;c&quot;)</code> debe tener un valor de &quot;cat&quot;
    testString: 'assert(switchOfStuff("c") === "cat", "<code>switchOfStuff("c")</code> should have a value of "cat"");'
  - text: <code>switchOfStuff(&quot;d&quot;)</code> debe tener un valor de &quot;cosas&quot;
    testString: 'assert(switchOfStuff("d") === "stuff", "<code>switchOfStuff("d")</code> should have a value of "stuff"");'
  - text: <code>switchOfStuff(4)</code> debe tener un valor de &quot;cosas&quot;
    testString: 'assert(switchOfStuff(4) === "stuff", "<code>switchOfStuff(4)</code> should have a value of "stuff"");'
  - text: No debes usar ninguna declaración <code>if</code> o <code>else</code>
    testString: 'assert(!/else/g.test(code) || !/if/g.test(code), "You should not use any <code>if</code> or <code>else</code> statements");'
  - text: Debes usar una declaración por <code>default</code>
    testString: 'assert(switchOfStuff("string-to-trigger-default-case") === "stuff", "You should use a <code>default</code> statement");'
  - text: Debe tener al menos 3 declaraciones de <code>break</code>
    testString: 'assert(code.match(/break/g).length > 2, "You should have at least 3 <code>break</code> statements");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
