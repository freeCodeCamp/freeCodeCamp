---
id: 56533eb9ac21ba0edf2244e0
title: Replacing If Else Chains with Switch
challengeType: 1
videoUrl: ''
localeTitle: Substituindo se outras cadeias com o interruptor
---

## Description
<section id="description"> Se você tiver muitas opções para escolher, uma instrução <code>switch</code> pode ser mais fácil de gravar do que muitas instruções encadeadas <code>if</code> / <code>else if</code> . Os seguintes: <blockquote> if (val === 1) { <br> answer = &quot;a&quot;; <br> } else if (val === 2) { <br> answer = &quot;b&quot;; <br> } outro { <br> answer = &quot;c&quot;; <br> } </blockquote> pode ser substituído por: <blockquote> interruptor (val) { <br> caso 1: <br> answer = &quot;a&quot;; <br> pausa; <br> caso 2: <br> answer = &quot;b&quot;; <br> pausa; <br> padrão: <br> answer = &quot;c&quot;; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Altere as instruções encadeadas <code>if</code> / <code>else if</code> para uma instrução <code>switch</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você não deve usar nenhuma <code>else</code> instrução em nenhum lugar do editor
    testString: 'assert(!/else/g.test(code), "You should not use any <code>else</code> statements anywhere in the editor");'
  - text: Você não deve usar nenhuma instrução <code>if</code> nenhum lugar do editor
    testString: 'assert(!/if/g.test(code), "You should not use any <code>if</code> statements anywhere in the editor");'
  - text: Você deve ter pelo menos quatro declarações de <code>break</code>
    testString: 'assert(code.match(/break/g).length >= 4, "You should have at least four <code>break</code> statements");'
  - text: <code>chainToSwitch(&quot;bob&quot;)</code> deve ser &quot;Marley&quot;
    testString: 'assert(chainToSwitch("bob") === "Marley", "<code>chainToSwitch("bob")</code> should be "Marley"");'
  - text: <code>chainToSwitch(42)</code> deve ser &quot;A resposta&quot;
    testString: 'assert(chainToSwitch(42) === "The Answer", "<code>chainToSwitch(42)</code> should be "The Answer"");'
  - text: '<code>chainToSwitch(1)</code> deve ser &quot;Não existe # 1&quot;'
    testString: 'assert(chainToSwitch(1) === "There is no #1", "<code>chainToSwitch(1)</code> should be "There is no #1"");'
  - text: <code>chainToSwitch(99)</code> deve ser <code>chainToSwitch(99)</code> !
    testString: 'assert(chainToSwitch(99) === "Missed me by this much!", "<code>chainToSwitch(99)</code> should be "Missed me by this much!"");'
  - text: <code>chainToSwitch(7)</code> deve ser &quot;Ate Nine&quot;
    testString: 'assert(chainToSwitch(7) === "Ate Nine", "<code>chainToSwitch(7)</code> should be "Ate Nine"");'
  - text: <code>chainToSwitch(&quot;John&quot;)</code> deve ser &quot;&quot; (string vazia)
    testString: 'assert(chainToSwitch("John") === "", "<code>chainToSwitch("John")</code> should be "" (empty string)");'
  - text: <code>chainToSwitch(156)</code> deve ser &quot;&quot; (string vazia)
    testString: 'assert(chainToSwitch(156) === "", "<code>chainToSwitch(156)</code> should be "" (empty string)");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
