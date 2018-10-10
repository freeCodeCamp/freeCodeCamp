---
id: 56533eb9ac21ba0edf2244df
title: Multiple Identical Options in Switch Statements
challengeType: 1
videoUrl: ''
localeTitle: Несколько идентичных параметров в операторах переключателей
---

## Description
<section id="description"> Если оператор <code>break</code> не <code>switch</code> в <code>case</code> оператора <code>switch</code> , следующий оператор (ы) <code>case</code> выполняются до тех пор, пока не будет обнаружен <code>break</code> . Если у вас несколько входов с одним и тем же выходом, вы можете представить их в инструкции <code>switch</code> следующим образом: <blockquote> switch (val) { <br> Дело 1: <br> случай 2: <br> случай 3: <br> result = &quot;1, 2 или 3&quot;; <br> ломать; <br> случай 4: <br> результат = &quot;4 один&quot;; <br> } </blockquote> Случаи для 1, 2 и 3 будут давать одинаковый результат. </section>

## Instructions
<section id="instructions"> Напишите оператор switch, чтобы задать <code>answer</code> для следующих диапазонов: <br> <code>1-3</code> - «Низкий» <br> <code>4-6</code> - «Середина» <br> <code>7-9</code> - «Высокое» <strong>примечание</strong> <br> Вам нужно будет иметь оператор <code>case</code> для каждого числа в диапазоне. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sequentialSizes(1)</code> должен возвращать &quot;Low&quot;
    testString: 'assert(sequentialSizes(1) === "Low", "<code>sequentialSizes(1)</code> should return "Low"");'
  - text: <code>sequentialSizes(2)</code> должен возвращать &quot;Low&quot;
    testString: 'assert(sequentialSizes(2) === "Low", "<code>sequentialSizes(2)</code> should return "Low"");'
  - text: <code>sequentialSizes(3)</code> должен возвращать &quot;Low&quot;
    testString: 'assert(sequentialSizes(3) === "Low", "<code>sequentialSizes(3)</code> should return "Low"");'
  - text: <code>sequentialSizes(4)</code> должен возвращать «Mid»
    testString: 'assert(sequentialSizes(4) === "Mid", "<code>sequentialSizes(4)</code> should return "Mid"");'
  - text: <code>sequentialSizes(5)</code> должен возвращать &quot;Mid&quot;
    testString: 'assert(sequentialSizes(5) === "Mid", "<code>sequentialSizes(5)</code> should return "Mid"");'
  - text: <code>sequentialSizes(6)</code> должен возвращать «Mid»
    testString: 'assert(sequentialSizes(6) === "Mid", "<code>sequentialSizes(6)</code> should return "Mid"");'
  - text: <code>sequentialSizes(7)</code> должен возвращать &quot;Высокий&quot;
    testString: 'assert(sequentialSizes(7) === "High", "<code>sequentialSizes(7)</code> should return "High"");'
  - text: <code>sequentialSizes(8)</code> должен возвращать &quot;Высокий&quot;
    testString: 'assert(sequentialSizes(8) === "High", "<code>sequentialSizes(8)</code> should return "High"");'
  - text: <code>sequentialSizes(9)</code> должен возвращать &quot;Высокий&quot;
    testString: 'assert(sequentialSizes(9) === "High", "<code>sequentialSizes(9)</code> should return "High"");'
  - text: Вы не должны использовать никаких утверждений <code>if</code> или <code>else</code>
    testString: 'assert(!/else/g.test(code) || !/if/g.test(code), "You should not use any <code>if</code> or <code>else</code> statements");'
  - text: Вы должны иметь девять <code>case</code> заявлений
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
