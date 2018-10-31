---
id: 56533eb9ac21ba0edf2244b1
title: Compound Assignment With Augmented Multiplication
challengeType: 1
videoUrl: ''
localeTitle: مهمة مركبة مع تكاثر مضاعف
---

## Description
<section id="description"> يقوم عامل التشغيل <code>*=</code> بضرب متغير برقم. <code>myVar = myVar * 5;</code> سوف تضاعف <code>myVar</code> بنسبة <code>5</code> . يمكن إعادة كتابة هذا كـ: <code>myVar *= 5;</code> </section>

## Instructions
<section id="instructions"> قم بتحويل التعيينات لـ <code>a</code> و <code>b</code> و <code>c</code> لاستخدام <code>*=</code> operator. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> يجب أن يساوي <code>25</code>
    testString: 'assert(a === 25, "<code>a</code> should equal <code>25</code>");'
  - text: <code>b</code> يجب أن تساوي <code>36</code>
    testString: 'assert(b === 36, "<code>b</code> should equal <code>36</code>");'
  - text: <code>c</code> يجب أن تساوي <code>46</code>
    testString: 'assert(c === 46, "<code>c</code> should equal <code>46</code>");'
  - text: يجب عليك استخدام عامل التشغيل <code>*=</code> لكل متغير
    testString: 'assert(code.match(/\*=/g).length === 3, "You should use the <code>*=</code> operator for each variable");'
  - text: لا تعدّل الشفرة فوق الخط
    testString: 'assert(/var a = 5;/.test(code) && /var b = 12;/.test(code) && /var c = 4\.6;/.test(code), "Do not modify the code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a = a * 5;
b = 3 * b;
c = c * 10;

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
