---
id: 587d78b1367417b2b2512b0c
title: Make Typography Responsive
challengeType: 0
videoUrl: ''
localeTitle: جعل الطباعة مستجيبة
---

## Description
<section id="description"> بدلاً من استخدام النص <code>em</code> أو <code>px</code> to size ، يمكنك استخدام وحدات viewport للطباعة المتجاوبة. وحدات Viewport ، مثل النسب المئوية ، وحدات نسبية ، ولكنها تستند إلى عناصر مختلفة. وترتبط وحدات Viewport بأبعاد إطار العرض (العرض أو الارتفاع) للجهاز ، والنسب المئوية مرتبطة بحجم عنصر الحاوية الأصل. وحدات العرض المختلفة الأربعة هي: <ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> <code>vw: 10vw</code> سيكون 10٪ من عرض إطار العرض. </li><li style=";text-align:right;direction:rtl"> <code>vh: 3vh</code> سيكون 3٪ من ارتفاع إطار العرض. </li><li style=";text-align:right;direction:rtl"> <code>vmin: 70vmin</code> سيكون <code>vmin: 70vmin</code> 70٪ من بُعد أصغر في إطار العرض (الطول مقابل العرض). </li><li style=";text-align:right;direction:rtl"> <code>vmax: 100vmax</code> سيكون <code>vmax: 100vmax</code> 100٪ من البعد الأكبر لإطار العرض (الارتفاع مقابل العرض). </li></ul></section>

## Instructions
<section id="instructions"> عيّن <code>width</code> علامة <code>h2</code> إلى 80٪ من عرض إطار العرض <code>width</code> الفقرة كـ 75٪ من البُعد الأصغر في إطار العرض. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>width</code> العلامة <code>h2</code> <code>width</code> 80vw.
    testString: 'assert(code.match(/h2\s*?{\s*?width:\s*?80vw;\s*?}/g), "Your <code>h2</code> tag should have a <code>width</code> of 80vw.");'
  - text: يجب أن يكون <code>width</code> علامة <code>p</code> <code>width</code> 75vmin.
    testString: 'assert(code.match(/p\s*?{\s*?width:\s*?75vmin;\s*?}/g), "Your <code>p</code> tag should have a <code>width</code> of 75vmin.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
