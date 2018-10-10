---
id: 587d78a5367417b2b2512ad8
title: Create Texture by Adding a Subtle Pattern as a Background Image
challengeType: 0
videoUrl: ''
localeTitle: 通过添加细微图案作为背景图像来创建纹理
---

## Description
<section id="description">为背景添加纹理和兴趣并让它更突出的一种方法是添加一种微妙的图案。关键是平衡，因为你不希望背景太突出，并从前景中拿走。 <code>background</code>属性支持<code>url()</code>函数，以便链接到所选纹理或图案的图像。链接地址用括号内的引号括起来。 </section>

## Instructions
<section id="instructions">使用<code>https://i.imgur.com/MJAkxbh.png</code>的网址，使用<code>body</code>选择器设置整个页面的<code>background</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>body</code>元素应该将<code>background</code>属性设置为具有给定链接的<code>url()</code> 。
    testString: 'assert(code.match(/background:\s*?url\(\s*("|"|)https:\/\/i\.imgur\.com\/MJAkxbh\.png\1\s*\)/gi), "Your <code>body</code> element should have a <code>background</code> property set to a <code>url()</code> with the given link.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {

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
