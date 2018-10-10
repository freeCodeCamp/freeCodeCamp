---
id: 587d7dbb367417b2b2512bac
title: Remove Whitespace from Start and End
challengeType: 1
videoUrl: ''
localeTitle: إزالة Whitespace من البداية والنهاية
---

## Description
<section id="description"> في بعض الأحيان لا تكون الأحرف البيضاء حول السلاسل مطلوبة ولكن هناك. المعالجة النموذجية للسلاسل هي إزالة المسافة البيضاء في بداية ونهاية. </section>

## Instructions
<section id="instructions"> اكتب regex واستخدم أساليب السلسلة المناسبة لإزالة المسافات البيضاء في بداية ونهاية السلاسل. <strong>ملحوظة</strong> <br> <code>.trim()</code> طريقة <code>.trim()</code> هنا ، ولكن ستحتاج إلى إكمال هذا التحدي باستخدام التعبيرات العادية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن تساوي <code>result</code> <code>&quot;Hello, World!&quot;</code>'
    testString: 'assert(result == "Hello, World!", "<code>result</code> should equal to <code>"Hello, World!"</code>");'
  - text: يجب عدم استخدام طريقة <code>.trim()</code> .
    testString: 'assert(!code.match(/\.trim\(.*?\)/), "You should not use the <code>.trim()</code> method.");'
  - text: لا ينبغي تعيين متغير <code>result</code> مساو لسلسلة.
    testString: 'assert(!code.match(/result\s*=\s*".*?"/), "The <code>result</code> variable should not be set equal to a string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
