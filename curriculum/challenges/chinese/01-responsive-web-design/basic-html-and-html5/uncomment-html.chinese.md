---
id: bad87fee1348bd9aedf08802
title: Uncomment HTML
challengeType: 0
videoUrl: ''
localeTitle: 取消注释HTML
---

## Description
<section id="description">注释是一种方法，您可以在代码中为其他开发人员留下注释，而不会影响显示给最终用户的结果输出。注释也是使代码处于非活动状态而不必完全删除它的便捷方式。 HTML中的注释以<code>&lt;!--</code>开头，以<code>--&gt;</code>结尾</section>

## Instructions
<section id="instructions">取消注释你的<code>h1</code> ， <code>h2</code>和<code>p</code>元素。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 通过取消注释，使您的<code>h1</code>元素在您的页面上可见。
    testString: 'assert($("h1").length > 0, "Make your <code>h1</code> element visible on your page by uncommenting it.");'
  - text: 通过取消注释，使您的<code>h2</code>元素在您的页面上可见。
    testString: 'assert($("h2").length > 0, "Make your <code>h2</code> element visible on your page by uncommenting it.");'
  - text: 通过取消注释，可以在页面上显示您的<code>p</code>元素。
    testString: 'assert($("p").length > 0, "Make your <code>p</code> element visible on your page by uncommenting it.");'
  - text: 请务必删除所有尾随注释标记，即<code>--&gt;</code> 。
    testString: 'assert(!/[^fc]-->/gi.test(code.replace(/ *<!--[^fc]*\n/g,"")), "Be sure to delete all trailing comment tags&#44; i.e. <code>--&#62;</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
