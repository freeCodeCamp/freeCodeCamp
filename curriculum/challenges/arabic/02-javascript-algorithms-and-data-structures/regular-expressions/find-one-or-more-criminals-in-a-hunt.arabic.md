---
id: 587d7db7367417b2b2512b9c
title: Find One or More Criminals in a Hunt
challengeType: 1
videoUrl: ''
localeTitle: العثور على واحد أو أكثر من المجرمين في مطاردة
---

## Description
<section id="description"> حان وقت الإيقاف المؤقت واختبار مهاراتك الجديدة في الكتابة المعتادة. هربت مجموعة من المجرمين من السجن وهربت ، لكنك لا تعرف عددهم. ومع ذلك ، فأنت تعرف أنها تبقى قريبة من بعضها البعض عندما تكون حول أشخاص آخرين. أنت مسؤول عن العثور على جميع المجرمين في وقت واحد. في ما يلي مثال لمراجعة كيفية إجراء ذلك: يطابق regex <code>/z+/</code> الحرف <code>z</code> عند ظهوره مرة واحدة أو أكثر في صف واحد. سيجد تطابقات في كافة السلاسل التالية: <blockquote style=";text-align:right;direction:rtl"> &quot;ض&quot; <br> &quot;zzzzzz&quot; <br> &quot;ABCzzzz&quot; <br> &quot;zzzzABC&quot; <br> &quot;abczzzzzzzzzzzzzzzzzzzzzabc&quot; </blockquote> ولكنه لا يعثر على تطابقات في السلاسل التالية حيث لا توجد أحرف <code>z</code> حرف: <blockquote style=";text-align:right;direction:rtl"> &quot;&quot; <br> &quot;ABC&quot; <br> &quot;ABCABC&quot; </blockquote></section>

## Instructions
<section id="instructions"> اكتب regex <code>greedy</code> أن يجد واحد أو أكثر من المجرمين داخل مجموعة من الناس الآخرين. يمثل المجرم بالحرف الكبير <code>C</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يتطابق تعبيرك العادي مع <code>one</code> المجرمين ( <code>C</code>) في <code>&quot;C&quot;</code>
    testString: 'assert("C".match(reCriminals) && "C".match(reCriminals)[0] == "C", "Your regex should match <code>one</code> criminal (<code>C</code>) in <code>"C"</code>");'
  - text: يجب أن يتطابق تعبيرك العادي مع <code>two</code> المجرمين ( <code>CC</code> ) في <code>&quot;CC&quot;</code>
    testString: 'assert("CC".match(reCriminals) && "CC".match(reCriminals)[0] == "CC", "Your regex should match <code>two</code> criminals (<code>CC</code>) in <code>"CC"</code>");'
  - text: يجب أن يتطابق <code>&quot;P1P5P4CCCP2P6P3&quot;</code> العادي مع <code>three</code> مجرمين (<code>CCC</code>) في <code>&quot;P1P5P4CCCP2P6P3&quot;</code>
    testString: 'assert("P1P5P4CCCP2P6P3".match(reCriminals) && "P1P5P4CCCP2P6P3".match(reCriminals)[0] == "CCC", "Your regex should match <code>three</code> criminals (<code>CCC</code>) in <code>"P1P5P4CCCP2P6P3"</code>");'
  - text: يجب أن يتطابق <code>&quot;P6P2P7P4P5CCCCCP3P1&quot;</code> العادي مع <code>five</code> مجرمين ( <code>CCCCC</code> ) في <code>&quot;P6P2P7P4P5CCCCCP3P1&quot;</code>
    testString: 'assert("P6P2P7P4P5CCCCCP3P1".match(reCriminals) && "P6P2P7P4P5CCCCCP3P1".match(reCriminals)[0] == "CCCCC", "Your regex should match <code>five</code> criminals (<code>CCCCC</code>) in <code>"P6P2P7P4P5CCCCCP3P1"</code>");'
  - text: يجب ألا يتطابق تعبيرك العادي مع أي مجرمين في <code>&quot;&quot;</code>
    testString: 'assert(!reCriminals.test(""), "Your regex should not match any criminals in <code>""</code>");'
  - text: يجب ألا يتطابق <code>&quot;P1P2P3&quot;</code> العادي مع أي مجرمين في <code>&quot;P1P2P3&quot;</code>
    testString: 'assert(!reCriminals.test("P1P2P3"), "Your regex should not match any criminals in <code>"P1P2P3"</code>");'
  - text: يجب أن يتطابق <code>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</code> العادي مع <code>fifty</code> المجرمين ( <code>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</code> ) في <code>&quot;P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3&quot;</code> .
    testString: 'assert("P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3".match(reCriminals) && "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3".match(reCriminals)[0] == "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", "Your regex should match <code>fifty</code> criminals (<code>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</code>) in <code>"P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /./; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
