---
id: bad87fee1348bd9aedf08719
title: Use Abbreviated Hex Code
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
قد يشعر العديد من الناس بالحيرة إزاء الاحتمالات المترتبة عن وجود أكثر من 16 مليون لونا, كما أنه من الصعب تذكر الرموز الست عشرية لها (#FFFFFF للأبيض مثلا)، لكن من حسن الحظ يمكن اختصارها.

فمثلا رمز اللون الأحمر #FF0000 يمكن اختصاره إلى #F00. هذه الصيغة المختصرة تتكون من 3 أرقام بدل 6, الأول للأحمر، الثاني للأخضر و الثالت للأزرق.

هذا يقلص العدد الإجمالي للالوان الممكنة إلى 4000، و متصفحات الإنترنت ستقوم بإظهار #F00 و #FF0000 بنفس الشكل تماما.


## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($(".red-text").css("color") === "rgb(255, 0, 0)", "Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.");'
  - text: ''
    testString: 'assert(code.match(/\.red-text\s*?{\s*?color:\s*?#F00\s*?;\s*?}/gi), "Use the abbreviate <code>hex code</code> for the color red instead of the hex code <code>#FF0000</code>.");'
  - text: ''
    testString: 'assert($(".green-text").css("color") === "rgb(0, 255, 0)", "Give your <code>h1</code> element with the text <code>I am green!</code> the <code>color</code> green.");'
  - text: ''
    testString: 'assert(code.match(/\.green-text\s*?{\s*?color:\s*?#0F0\s*?;\s*?}/gi), "Use the abbreviated <code>hex code</code> for the color green instead of the hex code <code>#00FF00</code>.");'
  - text: ''
    testString: 'assert($(".cyan-text").css("color") === "rgb(0, 255, 255)", "Give your <code>h1</code> element with the text <code>I am cyan!</code> the <code>color</code> cyan.");'
  - text: ''
    testString: 'assert(code.match(/\.cyan-text\s*?{\s*?color:\s*?#0FF\s*?;\s*?}/gi), "Use the abbreviated <code>hex code</code> for the color cyan instead of the hex code <code>#00FFFF</code>.");'
  - text: ''
    testString: 'assert($(".fuchsia-text").css("color") === "rgb(255, 0, 255)", "Give your <code>h1</code> element with the text <code>I am fuchsia!</code> the <code>color</code> fuchsia.");'
  - text: ''
    testString: 'assert(code.match(/\.fuchsia-text\s*?{\s*?color:\s*?#F0F\s*?;\s*?}/gi), "Use the abbreviated <code>hex code</code> for the color fuchsia instead of the hex code <code>#FF00FF</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: #000000;
  }
  .fuchsia-text {
    color: #000000;
  }
  .cyan-text {
    color: #000000;
  }
  .green-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
