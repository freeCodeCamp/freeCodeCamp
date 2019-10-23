---
id: 56533eb9ac21ba0edf2244af
title: Compound Assignment With Augmented Addition
challengeType: 1
videoUrl: ''
localeTitle: مهمة مركبة مع إضافة مضافة
---

## Description
<section id="description"> في البرمجة ، من الشائع استخدام التعيينات لتعديل محتويات المتغير. تذكر أن كل شيء على يمين علامة المساواة يتم تقييمه أولاً ، حتى يمكننا قول: <code>myVar = myVar + 5;</code> لإضافة <code>5</code> إلى <code>myVar</code> . بما أن هذا هو النمط الشائع ، فهناك مشغلين يقومون بعملية رياضية وتعيين في خطوة واحدة. أحد هذه المشغلات هو عامل <code>+=</code> . <blockquote style=";text-align:right;direction:rtl"> var myVar = 1 ، <br> myVar + = 5؛ <br> console.log (myVar)؛ // إرجاع 6 </blockquote></section>

## Instructions
<section id="instructions"> قم بتحويل التعيينات لـ <code>a</code> و <code>b</code> و <code>c</code> لاستخدام <code>+=</code> عامل التشغيل. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> يجب أن يساوي <code>15</code>
    testString: 'assert(a === 15, "<code>a</code> should equal <code>15</code>");'
  - text: <code>b</code> يجب أن تساوي <code>26</code>
    testString: 'assert(b === 26, "<code>b</code> should equal <code>26</code>");'
  - text: <code>c</code> يجب أن تساوي <code>19</code>
    testString: 'assert(c === 19, "<code>c</code> should equal <code>19</code>");'
  - text: يجب عليك استخدام <code>+=</code> عامل لكل متغير
    testString: 'assert(code.match(/\+=/g).length === 3, "You should use the <code>+=</code> operator for each variable");'
  - text: لا تعدّل الشفرة فوق الخط
    testString: 'assert(/var a = 3;/.test(code) && /var b = 17;/.test(code) && /var c = 12;/.test(code), "Do not modify the code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line

a = a + 12;
b = 9 + b;
c = c + 7;

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
