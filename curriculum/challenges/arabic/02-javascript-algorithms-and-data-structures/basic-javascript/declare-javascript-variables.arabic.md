---
id: bd7123c9c443eddfaeb5bdef
title: Declare JavaScript Variables
challengeType: 1
videoUrl: ''
localeTitle: تحديد متغيرات جافا سكريبت
---

## Description
<section id="description"> في علم الكمبيوتر ، <dfn>البيانات</dfn> هي أي شيء مفيد للكمبيوتر. يوفر JavaScript سبعة <dfn>أنواع بيانات</dfn> مختلفة <code>undefined</code> ، <code>null</code> ، <code>boolean</code> ، <code>string</code> ، <code>symbol</code> ، <code>number</code> ، <code>object</code> . على سبيل المثال ، تميز أجهزة الكمبيوتر بين الأرقام ، مثل الرقم <code>12</code> ، <code>strings</code> ، مثل <code>&quot;12&quot;</code> أو <code>&quot;dog&quot;</code> أو <code>&quot;123 cats&quot;</code> ، وهي مجموعات من الأحرف. يمكن لأجهزة الكمبيوتر إجراء العمليات الحسابية على عدد ، ولكن ليس على سلسلة. تسمح <dfn>المتغيرات</dfn> لأجهزة الكمبيوتر بتخزين البيانات ومعالجتها بطريقة ديناميكية. يفعلون ذلك باستخدام &quot;تسمية&quot; للإشارة إلى البيانات بدلاً من استخدام البيانات نفسها. يمكن تخزين أي من أنواع البيانات السبعة في متغير. تشبه <code>Variables</code> x و y التي تستخدمها في الرياضيات ، مما يعني أنها اسم بسيط لتمثيل البيانات التي نريد الرجوع إليها. تختلف <code>variables</code> الكمبيوتر عن <code>variables</code> الرياضية في أنها يمكن أن تخزن قيمًا مختلفة في أوقات مختلفة. نقول جافا سكريبت لإنشاء أو <dfn>تعريف</dfn> متغير عن طريق وضع الكلمة <code>var</code> أمامه، كما يلي: <blockquote style=";text-align:right;direction:rtl"> var ourName؛ </blockquote> يخلق <code>variable</code> يسمى <code>ourName</code> . في جافا سكريبت ، ننتهي من العبارات بفواصل منقوطة. يمكن أن تتكون أسماء <code>Variable</code> من أرقام وأحرف و <code>$</code> أو <code>_</code> ، لكن قد لا تحتوي على مسافات أو تبدأ برقم. </section>

## Instructions
<section id="instructions"> استخدم الكلمة الأساسية <code>var</code> لإنشاء متغير يسمى <code>myName</code> . <strong>ملحوظة</strong> <br> انظر إلى مثال <code>ourName</code> إذا واجهتك <code>ourName</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تعلن <code>myName</code> مع الكلمة الرئيسية <code>var</code> ، وتنتهي بفاصلة منقوطة
    testString: 'assert(/var\s+myName\s*;/.test(code), "You should declare <code>myName</code> with the <code>var</code> keyword, ending with a semicolon");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourName;

// Declare myName below this line

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
