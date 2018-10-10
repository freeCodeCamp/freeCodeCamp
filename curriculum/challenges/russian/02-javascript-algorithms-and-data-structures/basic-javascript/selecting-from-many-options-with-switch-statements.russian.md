---
id: 56533eb9ac21ba0edf2244dd
title: Selecting from Many Options with Switch Statements
challengeType: 1
videoUrl: ''
localeTitle: Выбор из многих параметров с помощью операторов Switch
---

## Description
<section id="description"> Если у вас есть много вариантов на выбор, используйте оператор <code>switch</code> . Оператор <code>switch</code> проверяет значение и может иметь множество операторов <code>case</code> которые определяют различные возможные значения. Заявления выполняются из первого совпадающего значения <code>case</code> до тех пор, пока не будет обнаружен <code>break</code> . Вот пример <dfn>псевдокода</dfn> : <blockquote> switch (num) { <br> значение case1: <br> statement1; <br> ломать; <br> значение case2: <br> оператор2; <br> ломать; <br> ... <br> значение caseN: <br> statementN; <br> ломать; <br> } </blockquote> значения <code>case</code> проверяются со строгим равенством ( <code>===</code> ). <code>break</code> говорит JavaScript, чтобы остановить выполнение операторов. Если <code>break</code> пропущен, следующий оператор будет выполнен. </section>

## Instructions
<section id="instructions"> Напишите оператор switch, который проверяет <code>val</code> и устанавливает <code>answer</code> для следующих условий: <br> <code>1</code> - &quot;альфа&quot; <br> <code>2</code> - &quot;бета&quot; <br> <code>3</code> - &quot;гамма&quot; <br> <code>4</code> - &quot;дельта&quot; </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>caseInSwitch(1)</code> должен иметь значение &quot;alpha&quot;
    testString: 'assert(caseInSwitch(1) === "alpha", "<code>caseInSwitch(1)</code> should have a value of "alpha"");'
  - text: '<code>caseInSwitch(2)</code> должен иметь значение «бета»,'
    testString: 'assert(caseInSwitch(2) === "beta", "<code>caseInSwitch(2)</code> should have a value of "beta"");'
  - text: <code>caseInSwitch(3)</code> должен иметь значение &quot;гамма&quot;
    testString: 'assert(caseInSwitch(3) === "gamma", "<code>caseInSwitch(3)</code> should have a value of "gamma"");'
  - text: <code>caseInSwitch(4)</code> должен иметь значение &quot;delta&quot;
    testString: 'assert(caseInSwitch(4) === "delta", "<code>caseInSwitch(4)</code> should have a value of "delta"");'
  - text: Вы не должны использовать никаких утверждений <code>if</code> или <code>else</code>
    testString: 'assert(!/else/g.test(code) || !/if/g.test(code), "You should not use any <code>if</code> or <code>else</code> statements");'
  - text: У вас должно быть как минимум 3 заявления о <code>break</code>
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
