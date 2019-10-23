---
id: 56533eb9ac21ba0edf2244b2
title: Compound Assignment With Augmented Division
challengeType: 1
videoUrl: ''
localeTitle: تكليف مركب مع قسم معزز
---

## Description
<section id="description"> يقوم عامل التشغيل <code>/=</code> بتقسيم متغير برقم آخر. <code>myVar = myVar / 5;</code> سوف يقسم <code>myVar</code> بنسبة <code>5</code> . يمكن إعادة كتابة هذا كـ: <code>myVar /= 5;</code> </section>

## Instructions
<section id="instructions"> قم بتحويل التعيينات لـ <code>a</code> و <code>b</code> و <code>c</code> لاستخدام <code>/=</code> operator. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> يجب أن يساوي <code>4</code>
    testString: 'assert(a === 4, "<code>a</code> should equal <code>4</code>");'
  - text: <code>b</code> يجب أن تساوي <code>27</code>
    testString: 'assert(b === 27, "<code>b</code> should equal <code>27</code>");'
  - text: <code>c</code> يجب أن يساوي <code>3</code>
    testString: 'assert(c === 3, "<code>c</code> should equal <code>3</code>");'
  - text: يجب عليك استخدام عامل التشغيل <code>/=</code> لكل متغير
    testString: 'assert(code.match(/\/=/g).length === 3, "You should use the <code>/=</code> operator for each variable");'
  - text: لا تعدّل الشفرة فوق الخط
    testString: 'assert(/var a = 48;/.test(code) && /var b = 108;/.test(code) && /var c = 33;/.test(code), "Do not modify the code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line

a = a / 12;
b = b / 4;
c = c / 11;

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
