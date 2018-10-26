---
id: 5690307fddb111c6084545d7
title: Logical Order in If Else Statements
challengeType: 1
videoUrl: ''
localeTitle: 'ترتيب منطقي في عبارات If Else'
---

## Description
<section id="description"> الترتيب مهم في عبارات <code>if</code>, <code>else if</code> 

يتم تنفيذ الوظيفة من أعلى إلى أسفل لذا يجب أن تكون حذراً من العبارة التي تأتي أولاً.

خذ هاتين الوظيفتين كمثال.

ها هي الأولى:

<code>function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}</code>

والثاني يغير ترتيب العبارات:

<code>function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}</code>

في حين أن هاتين الوظيفتين تبدو متطابقة تقريبًا إذا وضعنا رقمًا لكليهما نحصل على نتائج مختلفة.

<code>foo(0) // "Less than one"
bar(0) // "Less than two"</code>
</section>

## Instructions
<section id="instructions">قم بتغيير ترتيب المنطق في الوظيفة بحيث سيعود البيانات الصحيحة في جميع الحالات.</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(orderMyLogic(4) === "Less than 5", "<code>orderMyLogic(4)</code> should return "Less than 5"");'
  - text: ''
    testString: 'assert(orderMyLogic(6) === "Less than 10", "<code>orderMyLogic(6)</code> should return "Less than 10"");'
  - text: ''
    testString: 'assert(orderMyLogic(11) === "Greater than or equal to 10", "<code>orderMyLogic(11)</code> should return "Greater than or equal to 10"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
