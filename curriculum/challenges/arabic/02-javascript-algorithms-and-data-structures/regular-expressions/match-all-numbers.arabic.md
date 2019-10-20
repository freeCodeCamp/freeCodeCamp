---
id: 5d712346c441eddfaeb5bdef
title: Match All Numbers
challengeType: 1
videoUrl: ''
localeTitle: تطابق جميع الأرقام
---

## Description
<section id="description"> لقد تعلمت اختصارات لنماذج السلسلة الشائعة مثل alphanumerics. نمط آخر شائع يبحث عن أرقام أو أرقام فقط. الاختصار للبحث عن أحرف الأرقام هو <code>\d</code> ، مع حرف صغير <code>d</code> . هذا يساوي درجة الحرف <code>[0-9]</code> ، التي تبحث عن حرف واحد لأي رقم بين صفر وتسعة. </section>

## Instructions
<section id="instructions"> استخدم فئة حرف الاختصار <code>\d</code> لحساب عدد الأرقام الموجودة في عناوين الأفلام. الأرقام المكتوبة (&quot;ستة&quot; بدلا من 6) لا تحتسب. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يستخدم تعبيرك العادي حرف الاختصار لمطابقة أحرف الأرقام
    testString: 'assert(/\\d/.test(numRegex.source), "Your regex should use the shortcut character to match digit characters");'
  - text: يجب أن يستخدم تعبيرك العادي العلم العام.
    testString: 'assert(numRegex.global, "Your regex should use the global flag.");'
  - text: يجب أن يعثر تعبيرك المنطقي على رقم واحد في <code>&quot;9&quot;</code> .
    testString: 'assert("9".match(numRegex).length == 1, "Your regex should find 1 digit in <code>"9"</code>.");'
  - text: يجب أن يعثر تعبيرك المنطقي على رقمين في <code>&quot;Catch 22&quot;</code> .
    testString: 'assert("Catch 22".match(numRegex).length == 2, "Your regex should find 2 digits in <code>"Catch 22"</code>.");'
  - text: يجب أن يعثر تعبيرك المنطقي على 3 أرقام في <code>&quot;101 Dalmatians&quot;</code> .
    testString: 'assert("101 Dalmatians".match(numRegex).length == 3, "Your regex should find 3 digits in <code>"101 Dalmatians"</code>.");'
  - text: 'يجب أن يعثر تعبيرك المنطقي على أي أرقام في <code>&quot;One, Two, Three&quot;</code> .'
    testString: 'assert("One, Two, Three".match(numRegex) == null, "Your regex should find no digits in <code>"One, Two, Three"</code>.");'
  - text: يجب أن يعثر تعبيرك المنطقي على رقمين في <code>&quot;21 Jump Street&quot;</code> .
    testString: 'assert("21 Jump Street".match(numRegex).length == 2, "Your regex should find 2 digits in <code>"21 Jump Street"</code>.");'
  - text: 'يجب أن يعثر تعبيرك المنطقي على 4 أرقام في <code>&quot;2001: A Space Odyssey&quot;</code> .'
    testString: 'assert("2001: A Space Odyssey".match(numRegex).length == 4, "Your regex should find 4 digits in <code>"2001: A Space Odyssey"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let numString = "Your sandwich will be $5.00";
let numRegex = /change/; // Change this line
let result = numString.match(numRegex).length;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
