---
id: bad87fee1348bd9aedf08746
title: Inherit Styles from the Body Element
challengeType: 0
videoUrl: ''
localeTitle: وراثة الأنماط من عنصر الجسم
---

## Description
<section id="description"> الآن لقد ثبت أن كل صفحة HTML لديها <code>body</code> عنصر، والتي لها <code>body</code> عنصر يمكن أيضا أن تكون على غرار مع CSS. تذكر أن بإمكانك تصميم عنصر <code>body</code> تمامًا مثل أي عنصر HTML آخر ، وسوف ترث جميع العناصر الأخرى أنماط عناصر <code>body</code> . </section>

## Instructions
<section id="instructions"> أولاً ، قم بإنشاء عنصر <code>h1</code> باستخدام النص <code>Hello World</code> Then ، دعنا نمنح كل العناصر على صفحتك لون <code>green</code> بإضافة <code>color: green;</code> لإعلان أسلوب عنصر <code>body</code> . أخيرًا ، امنح عنصر <code>body</code> الخاص بك <code>body</code> عائلة <code>monospace</code> من خلال إضافة <code>font-family: monospace;</code> لإعلان أسلوب عنصر <code>body</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: قم بإنشاء عنصر <code>h1</code> .
    testString: 'assert(($("h1").length > 0), "Create an <code>h1</code> element.");'
  - text: يجب أن يحتوي عنصر <code>h1</code> على نص <code>Hello World</code> .
    testString: 'assert(($("h1").length > 0 && $("h1").text().match(/hello world/i)), "Your <code>h1</code> element should have the text <code>Hello World</code>.");'
  - text: تأكد من أن عنصر <code>h1</code> لديه علامة إغلاق.
    testString: 'assert(code.match(/<\/h1>/g) && code.match(/<h1/g) && code.match(/<\/h1>/g).length === code.match(/<h1/g).length, "Make sure your <code>h1</code> element has a closing tag.");'
  - text: امنح <code>body</code> عنصر خاصية <code>color</code> <code>green</code> .
    testString: 'assert(($("body").css("color") === "rgb(0, 128, 0)"), "Give your <code>body</code> element the <code>color</code> property of <code>green</code>.");'
  - text: امنح <code>body</code> عنصر الخاصية <code>monospace</code> <code>font-family</code> <code>monospace</code> .
    testString: 'assert(($("body").css("font-family").match(/monospace/i)), "Give your <code>body</code> element the <code>font-family</code> property of <code>monospace</code>.");'
  - text: بك <code>h1</code> عنصر يجب أن يرث الخط <code>monospace</code> من هاتفك <code>body</code> العنصر.
    testString: 'assert(($("h1").length > 0 && $("h1").css("font-family").match(/monospace/i)), "Your <code>h1</code> element should inherit the font <code>monospace</code> from your <code>body</code> element.");'
  - text: بك <code>h1</code> عنصر يجب أن يرث اللون الأخضر من هاتفك <code>body</code> العنصر.
    testString: 'assert(($("h1").length > 0 && $("h1").css("color") === "rgb(0, 128, 0)"), "Your <code>h1</code> element should inherit the color green from your <code>body</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
  }

</style>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
