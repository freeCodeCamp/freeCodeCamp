---
id: 56533eb9ac21ba0edf2244b7
title: Concatenating Strings with Plus Operator
challengeType: 1
videoUrl: ''
localeTitle: سلاسل متسلسلة مع Plus Operator
---

## Description
<section id="description"> في JavaScript ، عندما يتم استخدام عامل التشغيل <code>+</code> مع قيمة <code>String</code> ، يطلق عليه عامل التشغيل <dfn>السلسة</dfn> . يمكنك إنشاء سلسلة جديدة خارج السلاسل الأخرى عن طريق <dfn>وصلها</dfn> معًا. <strong>مثال</strong> <blockquote style=";text-align:right;direction:rtl"> &quot;اسمي ألان ،&quot; + &quot;أنا سلسلته&quot;. </blockquote> <strong>ملحوظة</strong> <br> احترس من المساحات. لا يضيف Concatenation فراغات بين السلاسل المتسلسلة ، لذا ستحتاج إلى إضافتها بنفسك. </section>

## Instructions
<section id="instructions"> بناء <code>myStr</code> من السلاسل <code>&quot;This is the start. &quot;</code> و <code>&quot;This is the end.&quot;</code> باستخدام عامل <code>+</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون لـ <code>myStr</code> قيمة <code>This is the start. This is the end.</code>
    testString: 'assert(myStr === "This is the start. This is the end.", "<code>myStr</code> should have a value of <code>This is the start. This is the end.</code>");'
  - text: استخدم عامل التشغيل <code>+</code> لبناء <code>myStr</code>
    testString: 'assert(code.match(/([""]).*([""])\s*\+\s*([""]).*([""])/g).length > 1, "Use the <code>+</code> operator to build <code>myStr</code>");'
  - text: يجب إنشاء <code>myStr</code> باستخدام الكلمة الرئيسية <code>var</code> .
    testString: 'assert(/var\s+myStr/.test(code), "<code>myStr</code> should be created using the <code>var</code> keyword.");'
  - text: تأكد من تعيين النتيجة لمتغير <code>myStr</code> .
    testString: 'assert(/myStr\s*=/.test(code), "Make sure to assign the result to the <code>myStr</code> variable.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line

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
