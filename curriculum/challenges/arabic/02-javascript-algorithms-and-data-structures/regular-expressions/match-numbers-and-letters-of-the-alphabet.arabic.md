---
id: 587d7db5367417b2b2512b97
title: Match Numbers and Letters of the Alphabet
challengeType: 1
videoUrl: ''
localeTitle: أرقام المباراة ورسائل الأبجدية
---

## Description
<section id="description"> لا يقتصر استخدام الواصلة ( <code>-</code> ) لمطابقة نطاق من الأحرف على الأحرف. كما يعمل على مطابقة مجموعة من الأرقام. على سبيل المثال ، <code>/[0-5]/</code> تطابق أي رقم بين <code>0</code> و <code>5</code> ، بما في ذلك <code>0</code> و <code>5</code> . أيضا ، من الممكن الجمع بين مجموعة من الحروف والأرقام في مجموعة أحرف واحدة. <blockquote style=";text-align:right;direction:rtl"> let jennyStr = &quot;Jenny8675309&quot;؛ <br> let myRegex = / [a-z0-9] / ig؛ <br> // تطابق جميع الحروف والأرقام في jennyStr <br> jennyStr.match (myRegex)؛ </blockquote></section>

## Instructions
<section id="instructions"> أنشئ تعبيرًا واحدًا يتطابق مع نطاق من الأحرف بين <code>h</code> و <code>s</code> ومجموعة من الأرقام بين <code>2</code> و <code>6</code> . تذكر تضمين الأعلام المناسبة في التعابير المنطقية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يتطابق <code>myRegex</code> مع 17 عنصرًا.
    testString: 'assert(result.length == 17, "Your regex <code>myRegex</code> should match 17 items.");'
  - text: يجب أن يستخدم <code>myRegex</code> regex العلامة العامة.
    testString: 'assert(myRegex.flags.match(/g/).length == 1, "Your regex <code>myRegex</code> should use the global flag.");'
  - text: يجب أن يستخدم <code>myRegex</code> regex <code>myRegex</code> حالة الأحرف.
    testString: 'assert(myRegex.flags.match(/i/).length == 1, "Your regex <code>myRegex</code> should use the case insensitive flag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
