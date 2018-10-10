---
id: 56533eb9ac21ba0edf2244b0
title: Compound Assignment With Augmented Subtraction
challengeType: 1
videoUrl: ''
localeTitle: مهمة مركبة مع الطرح المعزز
---

## Description
<section id="description"> مثل <code>+=</code> عامل التشغيل ، <code>-=</code> طرح عدد من متغير. <code>myVar = myVar - 5;</code> سوف طرح <code>5</code> من <code>myVar</code> . يمكن إعادة كتابة هذا كـ: <code>myVar -= 5;</code> </section>

## Instructions
<section id="instructions"> قم بتحويل التعيينات لـ <code>a</code> و <code>b</code> و <code>c</code> لاستخدام عامل التشغيل <code>-=</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> يجب أن يساوي <code>5</code>
    testString: 'assert(a === 5, "<code>a</code> should equal <code>5</code>");'
  - text: <code>b</code> ينبغي أن تساوي <code>-6</code>
    testString: 'assert(b === -6, "<code>b</code> should equal <code>-6</code>");'
  - text: <code>c</code> يجب أن تساوي <code>2</code>
    testString: 'assert(c === 2, "<code>c</code> should equal <code>2</code>");'
  - text: يجب عليك استخدام <code>-=</code> عامل لكل متغير
    testString: 'assert(code.match(/-=/g).length === 3, "You should use the <code>-=</code> operator for each variable");'
  - text: لا تعدّل الشفرة فوق الخط
    testString: 'assert(/var a = 11;/.test(code) && /var b = 9;/.test(code) && /var c = 3;/.test(code), "Do not modify the code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a = a - 6;
b = b - 15;
c = c - 1;

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
