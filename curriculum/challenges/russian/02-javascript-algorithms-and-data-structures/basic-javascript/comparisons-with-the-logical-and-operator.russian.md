---
id: 56533eb9ac21ba0edf2244d8
title: Comparisons with the Logical And Operator
challengeType: 1
videoUrl: https://scrimba.com/c/cvbRVtr
forumTopicId: 16799
localeTitle: Сравнение с логикой и оператором
---

## Description
<section id='description'>
Иногда вам нужно проверять несколько штук одновременно. <dfn>Логический и</dfn> operator ( <code>&amp;&amp;</code> ) возвращают <code>true</code> тогда и только тогда, когда <dfn>операнды</dfn> слева и справа от него являются истинными. Тот же эффект может быть достигнут путем вложения выражения if внутри другого, если: <blockquote> если (num&gt; 5) { <br> если (num &lt;10) { <br> вернуть «Да»; <br> } <br> } <br> вернуть «Нет»; </blockquote> будет возвращаться только «Да», если <code>num</code> больше <code>5</code> и меньше <code>10</code> . Та же логика может быть записана как: <blockquote> if (num&gt; 5 &amp;&amp; num &lt;10) { <br> вернуть «Да»; <br> } <br> вернуть «Нет»; </blockquote>
</section>

## Instructions
<section id='instructions'>
Объедините два оператора if в один оператор, который вернет <code>&quot;Yes&quot;</code> если значение <code>val</code> меньше или равно <code>50</code> и больше или равно <code>25</code> . В противном случае вернется <code>&quot;No&quot;</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should use the <code>&&</code> operator once
    testString: assert(code.match(/&&/g).length === 1);
  - text: You should only have one <code>if</code> statement
    testString: assert(code.match(/if/g).length === 1);
  - text: <code>testLogicalAnd(0)</code> should return "No"
    testString: assert(testLogicalAnd(0) === "No");
  - text: <code>testLogicalAnd(24)</code> should return "No"
    testString: assert(testLogicalAnd(24) === "No");
  - text: <code>testLogicalAnd(25)</code> should return "Yes"
    testString: assert(testLogicalAnd(25) === "Yes");
  - text: <code>testLogicalAnd(30)</code> should return "Yes"
    testString: assert(testLogicalAnd(30) === "Yes");
  - text: <code>testLogicalAnd(50)</code> should return "Yes"
    testString: assert(testLogicalAnd(50) === "Yes");
  - text: <code>testLogicalAnd(51)</code> should return "No"
    testString: assert(testLogicalAnd(51) === "No");
  - text: <code>testLogicalAnd(75)</code> should return "No"
    testString: assert(testLogicalAnd(75) === "No");
  - text: <code>testLogicalAnd(80)</code> should return "No"
    testString: assert(testLogicalAnd(80) === "No");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}
```

</section>
