---
id: 56533eb9ac21ba0edf2244ed
title: Appending Variables to Strings
challengeType: 1
videoUrl: ''
localeTitle: إلحاق المتغيرات بالسلاسل
---

## Description
<section id="description"> مثلما يمكننا بناء سلسلة على عدة أسطر من <dfn>القيم الحرفية</dfn> ، يمكننا أيضًا إضافة متغيرات إلى سلسلة باستخدام عامل plus equals ( <code>+=</code> ). </section>

## Instructions
<section id="instructions"> <code>someAdjective</code> إلى <code>myStr</code> باستخدام <code>+=</code> عامل التشغيل. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>someAdjective</code> يجب تعيين إلى سلسلة 3 أحرف على الأقل طويلة
    testString: 'assert(typeof someAdjective !== "undefined" && someAdjective.length > 2, "<code>someAdjective</code> should be set to a string at least 3 characters long");'
  - text: إلحاق <code>someAdjective</code> إلى <code>myStr</code> باستخدام <code>+=</code> عامل التشغيل
    testString: 'assert(code.match(/myStr\s*\+=\s*someAdjective\s*/).length > 0, "Append <code>someAdjective</code> to <code>myStr</code> using the <code>+=</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective;
var myStr = "Learning to code is ";

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
