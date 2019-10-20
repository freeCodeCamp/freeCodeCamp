---
id: 587d78a7367417b2b2512ae1
title: Create Movement Using CSS Animation
challengeType: 0
videoUrl: ''
localeTitle: إنشاء حركة باستخدام CSS الرسوم المتحركة
---

## Description
<section id="description"> عندما يكون للعنصر <code>position</code> محدد ، مثل <code>fixed</code> أو <code>relative</code> ، يمكن استخدام خصائص إزاحة CSS إلى <code>right</code> <code>left</code> <code>top</code> <code>bottom</code> في قواعد الرسوم المتحركة لإنشاء حركة. كما هو موضح في المثال أدناه ، يمكنك دفع العنصر إلى الأسفل ثم إلى الأعلى عن طريق تعيين الخاصية <code>top</code> للإطار الرئيسي <code>50%</code> إلى 50 بكسل ، ولكن بعد تعيينه على 0px للأول ( <code>0%</code> <code>100%</code> ) والإطار الرئيسي الأخير ( <code>100%</code> ). <blockquote style=";text-align:right;direction:rtl"> keyframes rainbow { <br> 0٪ <br> لون الخلفية: أزرق ؛ <br> العلوي: 0 بكسل ؛ <br> } <br> 50٪ { <br> background-color: green؛ <br> العلوي: 50 بكسل <br> } <br> 100٪ { <br> لون الخلفية: أصفر. <br> العلوي: 0 بكسل ؛ <br> } <br> } </blockquote></section>

## Instructions
<section id="instructions"> أضف حركة أفقية إلى الرسوم المتحركة <code>div</code> . باستخدام خاصية الإزاحة <code>left</code> ، قم بإضافة قاعدة <code>@keyframes</code> بحيث يبدأ قوس قزح عند 0 بكسل عند <code>0%</code> ، وينتقل إلى 25 بكسل عند <code>50%</code> ، وينتهي عند -25 بكسل عند <code>100%</code> . لا تحل محل الخاصية <code>top</code> في المحرر - يجب أن يكون للرسوم المتحركة حركة رأسيًا وأفقيًا. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تستخدم قاعدة <code>@keyframes</code> لـ <code>0%</code> الإزاحة <code>left</code> من 0px.
    testString: 'assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?top:\s*?0(px)?;\s*?left:\s*?0(px)?;\s*?}/gi), "The <code>@keyframes</code> rule for <code>0%</code> should use the <code>left</code> offset of 0px.");'
  - text: يجب أن تستخدم قاعدة <code>@keyframes</code> <code>50%</code> الإزاحة <code>left</code> من 25 بكسل.
    testString: 'assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?top:\s*?50px;\s*?left:\s*?25px;\s*?}/gi), "The <code>@keyframes</code> rule for <code>50%</code> should use the <code>left</code> offset of 25px.");'
  - text: يجب أن تستخدم قاعدة <code>@keyframes</code> لـ <code>100%</code> الإزاحة <code>left</code> من -25 بكسل.
    testString: 'assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?top:\s*?0(px)?;\s*?left:\s*?-25px;\s*?}/gi), "The <code>@keyframes</code> rule for <code>100%</code> should use the <code>left</code> offset of -25px.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

#rect {
  animation-name: rainbow;
  animation-duration: 4s;
}

@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;

  }
  50% {
    background-color: green;
    top: 50px;

  }
  100% {
    background-color: yellow;
    top: 0px;

  }
}
</style>

<div id="rect"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
