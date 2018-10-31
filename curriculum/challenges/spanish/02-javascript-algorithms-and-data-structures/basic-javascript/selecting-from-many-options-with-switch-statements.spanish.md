---
id: 56533eb9ac21ba0edf2244dd
title: Selecting from Many Options with Switch Statements
challengeType: 1
videoUrl: ''
localeTitle: Selección de muchas opciones con instrucciones de cambio
---

## Description
<section id="description"> Si tiene muchas opciones para elegir, use una instrucción de <code>switch</code> . Una instrucción de <code>switch</code> prueba un valor y puede tener muchas declaraciones de <code>case</code> que definen varios valores posibles. Las declaraciones se ejecutan desde el primer valor de <code>case</code> coincidente hasta que se encuentra una <code>break</code> . Aquí hay un ejemplo de <dfn>pseudocódigo</dfn> : <blockquote> interruptor (núm) { <br> valor de caso1: <br> sentencia1; <br> descanso; <br> valor de caso2: <br> declaración2; <br> descanso; <br> ... <br> valor de casoN: <br> declaración N; <br> descanso; <br> } </blockquote> <code>case</code> valores de <code>case</code> se prueban con igualdad estricta ( <code>===</code> ). La <code>break</code> le dice a JavaScript que deje de ejecutar sentencias. Si se omite la <code>break</code> , se ejecutará la siguiente instrucción. </section>

## Instructions
<section id="instructions"> Escriba una instrucción de conmutación que pruebe <code>val</code> y establezca la <code>answer</code> para las siguientes condiciones: <br> <code>1</code> - &quot;alfa&quot; <br> <code>2</code> - &quot;beta&quot; <br> <code>3</code> - &quot;gamma&quot; <br> <code>4</code> - &quot;delta&quot; </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>caseInSwitch(1)</code> debe tener un valor de &quot;alfa&quot;
    testString: 'assert(caseInSwitch(1) === "alpha", "<code>caseInSwitch(1)</code> should have a value of "alpha"");'
  - text: <code>caseInSwitch(2)</code> debe tener un valor de &quot;beta&quot;
    testString: 'assert(caseInSwitch(2) === "beta", "<code>caseInSwitch(2)</code> should have a value of "beta"");'
  - text: <code>caseInSwitch(3)</code> debe tener un valor de &quot;gamma&quot;
    testString: 'assert(caseInSwitch(3) === "gamma", "<code>caseInSwitch(3)</code> should have a value of "gamma"");'
  - text: <code>caseInSwitch(4)</code> debe tener un valor de &quot;delta&quot;
    testString: 'assert(caseInSwitch(4) === "delta", "<code>caseInSwitch(4)</code> should have a value of "delta"");'
  - text: No debes usar ninguna declaración <code>if</code> o <code>else</code>
    testString: 'assert(!/else/g.test(code) || !/if/g.test(code), "You should not use any <code>if</code> or <code>else</code> statements");'
  - text: Debe tener al menos 3 declaraciones de <code>break</code>
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
