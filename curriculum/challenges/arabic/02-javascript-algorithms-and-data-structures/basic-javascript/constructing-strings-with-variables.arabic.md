---
id: 56533eb9ac21ba0edf2244b9
title: Constructing Strings with Variables
challengeType: 1
videoUrl: ''
localeTitle: بناء سلاسل مع المتغيرات
---

## Description
<section id="description"> في بعض الأحيان سوف تحتاج إلى بناء سلسلة ، نمط <a href="https://en.wikipedia.org/wiki/Mad_Libs" target="_blank">Mad Libs</a> . باستخدام عامل التشغيل السلسة ( <code>+</code> ) ، يمكنك إدراج متغير واحد أو أكثر في سلسلة تقوم ببنائها. </section>

## Instructions
<section id="instructions"> تعيين <code>myName</code> إلى سلسلة يساوي اسمك وبناء <code>myStr</code> مع <code>myName</code> بين الجمل <code>&quot;My name is &quot;</code> و <code>&quot; and I am well!&quot;</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب تعيين <code>myName</code> إلى سلسلة لا تقل عن 3 أحرف
    testString: 'assert(typeof myName !== "undefined" && myName.length > 2, "<code>myName</code> should be set to a string at least 3 characters long");'
  - text: استخدام اثنين <code>+</code> المشغلين لبناء <code>myStr</code> مع <code>myName</code> داخله
    testString: 'assert(code.match(/[""]\s*\+\s*myName\s*\+\s*[""]/g).length > 0, "Use two <code>+</code> operators to build <code>myStr</code> with <code>myName</code> inside it");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName;
var myStr;

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
