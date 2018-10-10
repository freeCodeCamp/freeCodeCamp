---
id: 56533eb9ac21ba0edf2244d9
title: Comparisons with the Logical Or Operator
challengeType: 1
videoUrl: ''
localeTitle: Сравнение с логическим или оператором
---

## Description
<section id="description"> <dfn>Логический или</dfn> оператор ( <code>||</code> ) возвращает <code>true</code> если любой из <dfn>операндов</dfn> <code>true</code> . В противном случае возвращается <code>false</code> . <dfn>Логический или</dfn> оператор состоит из двух символов трубы ( <code>|</code> ). Обычно это можно найти между клавишами Backspace и Enter. Нижеприведенный рисунок должен выглядеть знакомым с предыдущих точек: <blockquote> если (num&gt; 10) { <br> вернуть «Нет»; <br> } <br> if (num &lt;5) { <br> вернуть «Нет»; <br> } <br> вернуть «Да»; </blockquote> вернет «Да» только в том случае, если <code>num</code> находится между <code>5</code> и <code>10</code> (включено 5 и 10). Та же логика может быть записана как: <blockquote> если (num&gt; 10 || num &lt;5) { <br> вернуть «Нет»; <br> } <br> вернуть «Да»; </blockquote></section>

## Instructions
<section id="instructions"> Объедините два оператора <code>if</code> в один оператор, который возвращает <code>&quot;Outside&quot;</code> если <code>val</code> не находится между <code>10</code> и <code>20</code> , включительно. В противном случае верните <code>&quot;Inside&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Вы должны использовать <code>||</code> оператор один раз
    testString: 'assert(code.match(/\|\|/g).length === 1, "You should use the <code>||</code> operator once");'
  - text: У вас должен быть только один оператор <code>if</code>
    testString: 'assert(code.match(/if/g).length === 1, "You should only have one <code>if</code> statement");'
  - text: <code>testLogicalOr(0)</code> должен возвращать &quot;Outside&quot;
    testString: 'assert(testLogicalOr(0) === "Outside", "<code>testLogicalOr(0)</code> should return "Outside"");'
  - text: <code>testLogicalOr(9)</code> должен возвращать &quot;Outside&quot;
    testString: 'assert(testLogicalOr(9) === "Outside", "<code>testLogicalOr(9)</code> should return "Outside"");'
  - text: <code>testLogicalOr(10)</code> должен возвращать &quot;Inside&quot;
    testString: 'assert(testLogicalOr(10) === "Inside", "<code>testLogicalOr(10)</code> should return "Inside"");'
  - text: <code>testLogicalOr(15)</code> должен возвращать &quot;Inside&quot;
    testString: 'assert(testLogicalOr(15) === "Inside", "<code>testLogicalOr(15)</code> should return "Inside"");'
  - text: <code>testLogicalOr(19)</code> должен возвращать &quot;Inside&quot;
    testString: 'assert(testLogicalOr(19) === "Inside", "<code>testLogicalOr(19)</code> should return "Inside"");'
  - text: <code>testLogicalOr(20)</code> должен возвращать &quot;Inside&quot;
    testString: 'assert(testLogicalOr(20) === "Inside", "<code>testLogicalOr(20)</code> should return "Inside"");'
  - text: <code>testLogicalOr(21)</code> должен возвращать «Outside»
    testString: 'assert(testLogicalOr(21) === "Outside", "<code>testLogicalOr(21)</code> should return "Outside"");'
  - text: <code>testLogicalOr(25)</code> должен возвращать &quot;Outside&quot;
    testString: 'assert(testLogicalOr(25) === "Outside", "<code>testLogicalOr(25)</code> should return "Outside"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
