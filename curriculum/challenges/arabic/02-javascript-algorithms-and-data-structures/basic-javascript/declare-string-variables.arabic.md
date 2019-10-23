---
id: bd7123c9c444eddfaeb5bdef
title: Declare String Variables
challengeType: 1
videoUrl: ''
localeTitle: تعبير سلسلة المتغيرات
---

## Description
<section id="description"> سبق لنا استخدام الرمز <code>var myName = &quot;your name&quot;;</code> يسمى <code>&quot;your name&quot;</code> <dfn>سلسلة</dfn> <dfn>حرفية</dfn> . وهي سلسلة لأنها عبارة عن سلسلة من صفر أو أكثر من الأحرف محاطة بعلامات اقتباس مفردة أو مزدوجة. </section>

## Instructions
<section id="instructions"> إنشاء اثنين الجديدة <code>string</code> المتغيرات: <code>myFirstName</code> و <code>myLastName</code> وتعيينها القيم من الاسم الأول والأخير، على التوالي. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>myFirstName</code> عبارة عن سلسلة بها حرف واحد على الأقل.
    testString: 'assert((function(){if(typeof myFirstName !== "undefined" && typeof myFirstName === "string" && myFirstName.length > 0){return true;}else{return false;}})(), "<code>myFirstName</code> should be a string with at least one character in it.");'
  - text: يجب أن يكون <code>myLastName</code> عبارة عن سلسلة بها حرف واحد على الأقل.
    testString: 'assert((function(){if(typeof myLastName !== "undefined" && typeof myLastName === "string" && myLastName.length > 0){return true;}else{return false;}})(), "<code>myLastName</code> should be a string with at least one character in it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
