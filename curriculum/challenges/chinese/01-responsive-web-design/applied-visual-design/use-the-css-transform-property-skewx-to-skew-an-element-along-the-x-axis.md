---
id: 587d78a6367417b2b2512adb
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLP8Sr'
forumTopicId: 301074
title: 使用 CSS Transform skex 属性沿X轴倾斜元素
---

## Description
<section id='description'>
接下来要介绍的 <code>transform</code> 属性是 <code>skewX</code>，<code>skewX</code> 使选择的元素沿着 X 轴（横向）翻转指定的角度。
下面的代码沿着 X 轴翻转段落元素 -32 度。

```css
p {
  transform: skewX(-32deg);
}
```

</section>

## Instructions
<section id='instructions'>
使用 <code>transform</code> 属性沿 X 轴翻转 id 为 <code>bottom</code> 的元素 24 度。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'id 为 <code>bottom</code> 的元素应该沿着 X 轴翻转 24 度。'
    testString: assert(code.match(/#bottom\s*?{\s*?.*?\s*?transform:\s*?skewX\(24deg\);/g));

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
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;
    
  }
</style>

<div id="top"></div>
<div id="bottom"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              