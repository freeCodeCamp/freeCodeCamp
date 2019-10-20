---
id: 587d781d367417b2b2512ac8
title: Adjust the Hover State of an Anchor Tag
challengeType: 0
videoUrl: ''
localeTitle: 调整锚标记的悬停状态
---

## Description
<section id="description">这个挑战将涉及伪类的使用。伪类是可以添加到选择器的关键字，以便选择元素的特定状态。例如，可以使用<code>:hover</code>伪类选择器更改锚标记的样式以用于其悬停状态。这是用于在悬停状态期间将锚标记的<code>color</code>更改为红色的CSS： <blockquote> a：悬停{ <br>红色; <br> } </blockquote></section>

## Instructions
<section id="instructions">代码编辑器有一个CSS规则样式的所有<code>a</code>标签黑色。加入规则，以便当用户将鼠标悬停在<code>a</code>标签时， <code>color</code>是蓝色。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '锚标记<code>color</code>应保持黑色，仅为<code>:hover</code>状态添加CSS规则。'
    testString: 'assert($("a").css("color") == "rgb(0, 0, 0)", "The anchor tag <code>color</code> should remain black, only add CSS rules for the <code>:hover</code> state.");'
  - text: 锚标签应该有一个<code>color</code>的蓝色悬停。
    testString: 'assert(code.match(/a:hover\s*?{\s*?color:\s*?blue;\s*?}/gi), "The anchor tag should have a <code>color</code> of blue on hover.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  a {
    color: #000;
  }



</style>
<a href="http://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
