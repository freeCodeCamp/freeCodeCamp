---
id: 587d78a3367417b2b2512ad0
title: Center an Element Horizontally Using the margin Property
challengeType: 0
videoUrl: ''
localeTitle: توسيط عنصر أفقيًا باستخدام خاصية الهامش
---

## Description
<section id="description"> أسلوب آخر لتحديد المواقع هو مركز عنصر كتلة أفقيا. إحدى الطرق للقيام بذلك هي تعيين <code>margin</code> الخاص به إلى قيمة تلقائي. هذه الطريقة تعمل للصور أيضا. الصور هي عناصر مضمنة افتراضيًا ، ولكن يمكن تغييرها لحظر العناصر عند تعيين خاصية <code>display</code> للحظر. </section>

## Instructions
<section id="instructions"> قم <code>div</code> على الصفحة بإضافة خاصية <code>margin</code> بقيمة تلقائية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>div</code> <code>margin</code> على تلقائي.
    testString: 'assert(code.match(/margin:\s*?auto;/g), "The <code>div</code> should have a <code>margin</code> set to auto.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;

  }
</style>
<div></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
