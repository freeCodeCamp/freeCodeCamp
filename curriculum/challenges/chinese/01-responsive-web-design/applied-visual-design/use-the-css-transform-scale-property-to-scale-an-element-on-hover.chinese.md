---
id: 587d78a5367417b2b2512ada
title: Use the CSS Transform scale Property to Scale an Element on Hover
challengeType: 0
videoUrl: ''
localeTitle: 使用CSS Transform scale属性在悬停上缩放元素
---

## Description
<section id="description"> <code>transform</code>属性具有多种功能，可让您缩放，移动，旋转，倾斜等元素。当与伪类（例如<code>:hover</code> ，指定元素的某个状态， <code>transform</code>属性可以轻松地为元素添加交互性。这是一个示例，当用户将鼠标悬停在原始大小上时，将段落元素缩放到原始大小的2.1倍： <blockquote> p：悬停{ <br>变换：规模（2.1）; <br> } </blockquote></section>

## Instructions
<section id="instructions">为<code>div</code>的<code>hover</code>状态添加CSS规则，并使用<code>transform</code>属性将<code>div</code>元素缩放到其原始大小的1.1倍，当用户将鼠标悬停在其上时。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 当用户将鼠标悬停在其上时， <code>div</code>元素的大小应缩放1.1倍。
    testString: 'assert(code.match(/div:hover\s*?{\s*?transform:\s*?scale\(1\.1\);/gi), "The size of the <code>div</code> element should scale 1.1 times when the user hovers over it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
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
