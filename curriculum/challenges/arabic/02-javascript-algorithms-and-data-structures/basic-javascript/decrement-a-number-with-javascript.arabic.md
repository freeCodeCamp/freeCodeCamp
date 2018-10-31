---
id: 56533eb9ac21ba0edf2244ad
title: Decrement a Number with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: إنقاص رقم مع JavaScript
---

## Description
<section id="description"> يمكنك بسهولة <dfn>إنقاص</dfn> أو إنقاص متغير بواحد مع <code>--</code> المشغل. <code>i--;</code> يعادل <code>i = i - 1;</code> <strong>ملحوظة</strong> <br> يصبح الخط بأكمله <code>i--;</code> ، مما يلغي الحاجة إلى علامة المساواة. </section>

## Instructions
<section id="instructions"> تغيير الرمز لاستخدام <code>--</code> المشغل على <code>myVar</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يساوي <code>myVar</code> <code>10</code>
    testString: 'assert(myVar === 10, "<code>myVar</code> should equal <code>10</code>");'
  - text: <code>myVar = myVar - 1;</code> يجب تغييرها
    testString: 'assert(/var\s*myVar\s*=\s*11;\s*\/*.*\s*([-]{2}\s*myVar|myVar\s*[-]{2});/.test(code), "<code>myVar = myVar - 1;</code> should be changed");'
  - text: استخدم <code>--</code> المشغل على <code>myVar</code>
    testString: 'assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code), "Use the <code>--</code> operator on <code>myVar</code>");'
  - text: لا تغير الكود فوق الخط
    testString: 'assert(/var myVar = 11;/.test(code), "Do not change code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myVar = 11;

// Only change code below this line
myVar = myVar - 1;

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
