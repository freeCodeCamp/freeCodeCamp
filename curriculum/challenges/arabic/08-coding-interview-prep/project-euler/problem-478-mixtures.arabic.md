---
id: 5900f54c1000cf542c51005e
challengeType: 5
title: 'Problem 478: Mixtures'
videoUrl: ''
localeTitle: 'المشكلة 478: المزائج'
---

## Description
<section id="description"> دعونا ننظر في الخلطات المكونة من ثلاثة مواد: A و B و C. يمكن وصف الخليط بنسبة من كميات A و B و C فيه ، أي (a: b: c). على سبيل المثال ، يحتوي الخليط الموصوف بالنسبة (2: 3: 5) على 20٪ A و 30٪ B و 50٪ C. <p style=";text-align:right;direction:rtl"> لأغراض هذه المشكلة ، لا يمكننا فصل المكونات الفردية من الخليط. ومع ذلك ، يمكننا الجمع بين كميات مختلفة من خلائط مختلفة لتشكيل مخاليط بنسب جديدة. </p><p style=";text-align:right;direction:rtl"> على سبيل المثال ، لنفرض أن لدينا ثلاثة مخاليط بنسب (3: 0: 2) ، (3: 6: 11) و (3: 3: 4). من خلال خلط 10 وحدات من الوحدة الأولى ، 20 وحدة من الثانية و 30 وحدة من الثلث ، نحصل على خليط جديد بنسبة (6: 5: 9) ، حيث: (10 * 3/5 + 20 · 3/20 +) 30 · 3/10: 10 · 0/5 + 20 · 6/20 + 30 · 3/10: 10 · 2/5 + 20 · 11/20 + 30 · 4/10) = (18: 15: 27) = (6: 5: 9) </p><p style=";text-align:right;direction:rtl"> ومع ذلك ، مع نفس المخاليط الثلاثة ، من المستحيل تكوين النسبة (3: 2: 1) ، لأن مقدار B يكون دائماً أقل من مقدار C. </p><p style=";text-align:right;direction:rtl"> دعونا ن يكون عدد صحيح موجب. لنفترض أنه لكل ثلاثة أضعاف (أ ، ب ، ج) مع 0، a و b و c ≤ n و gcd (a، b، c) = 1 ، لدينا خليط مع نسبة (a: b: c). اسمحوا M (ن) أن تكون مجموعة من جميع هذه المخاليط. </p><p style=";text-align:right;direction:rtl"> على سبيل المثال ، يحتوي M (2) على 19 مخلوط مع النسب التالية: {(0: 0: 1) ، (0: 1: 0) ، (0: 1: 1) ، (0: 1: 2) ، ( 0: 2: 1) ، (1: 0: 0) ، (1: 0: 1) ، (1: 0: 2) ، (1: 1: 0) ، (1: 1: 1) ، (1: 1: 2) ، (1: 2: 0) ، (1: 2: 1) ، (1: 2: 2) ، (2: 0: 1) ، (2: 1: 0) ، (2: 1: 1) ، (2: 1: 2) ، (2: 2: 1)}. </p><p style=";text-align:right;direction:rtl"> دع E (n) هو عدد المجموعات الفرعية لـ M (n) التي يمكن أن تنتج المخلوط بنسبة (1: 1: 1) ، أي الخليط بأجزاء متساوية A و B و C. يمكننا التحقق من E (1) ) = 103، E (2) = 520447، E (10) mod 118 = 82608406 and E (500) mod 118 = 13801403. Find E (000 000 000) mod 118. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يقوم <code>euler478()</code> بإرجاع 59510340.
    testString: 'assert.strictEqual(euler478(), 59510340, "<code>euler478()</code> should return 59510340.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler478() {
  // Good luck!
  return true;
}

euler478();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
