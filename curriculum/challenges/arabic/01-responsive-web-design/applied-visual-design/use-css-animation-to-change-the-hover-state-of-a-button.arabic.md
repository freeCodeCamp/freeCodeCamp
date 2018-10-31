---
id: 587d78a7367417b2b2512ae0
title: Use CSS Animation to Change the Hover State of a Button
challengeType: 0
videoUrl: ''
localeTitle: استخدم CSS Animation لتغيير حالة Hover لزر
---

## Description
<section id="description"> يمكنك استخدام <code>@keyframes</code> لتغيير لون زر في حالة التمرير الخاصة به. في ما يلي مثال على تغيير عرض الصورة على مؤشر الماوس: <blockquote style=";text-align:right;direction:rtl"> &lt;نمط&gt; <br> img: hover { <br> اسم الرسوم المتحركة: العرض ؛ <br> مدة الحركة: 500 مللي ثانية ؛ <br> } <br><br> keyframes width { <br> 100٪ { <br> العرض: 40 بكسل <br> } <br> } <br> &lt;/ النمط&gt; <br><br> &lt;img src = &quot;https://bit.ly/smallgooglelogo&quot; alt = &quot;شعار Google&quot; /&gt; </blockquote></section>

## Instructions
<section id="instructions"> لاحظ أن <code>ms</code> يقف للمللي ثانية ، حيث 1000ms تساوي 1s. استخدم <code>@keyframes</code> لتغيير <code>background-color</code> عنصر <code>button</code> بحيث يصبح <code>#4791d0</code> عندما <code>#4791d0</code> المستخدم فوقها. يجب أن يكون لقاعدة <code>@keyframes</code> إدخال <code>100%</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تستخدم قاعدةkeyframes لون خلفية <code>animation-name</code> .
    testString: 'assert(code.match(/@keyframes\s+?background-color\s*?{/g), "The @keyframes rule should use the <code>animation-name</code> background-color.");'
  - text: 'يجب أن تكون هناك قاعدة واحدة تحت <code>@keyframes</code> تغير <code>background-color</code> إلى <code>#4791d0</code> بنسبة 100٪.'
    testString: 'assert(code.match(/100%\s*?{\s*?background-color:\s*?#4791d0;\s*?}/gi), "There should be one rule under <code>@keyframes</code> that changes the <code>background-color</code> to <code>#4791d0</code> at 100%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }

  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }


</style>

<button>Register</button>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
