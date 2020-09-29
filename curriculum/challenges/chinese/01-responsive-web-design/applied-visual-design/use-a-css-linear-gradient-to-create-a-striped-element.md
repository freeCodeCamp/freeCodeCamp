---
id: 587d78a5367417b2b2512ad7
title: Use a CSS Linear Gradient to Create a Striped Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bmQh2'
forumTopicId: 301072
localeTitle: 使用 CSS 线性渐变创建条纹元素
---

## Description
<section id='description'>
<code>repeating-linear-gradient()</code> 函数和 <code>linear-gradient()</code> 很像，主要区别是 <code>repeating-linear-gradient()</code> 重复指定的渐变。 <code>repeating-linear-gradient()</code> 有很多参数，为了便于理解，本关只用到角度值和起止渐变颜色值。
角度就是渐变的方向。起止渐变颜色值代表渐变颜色及其宽度值，由颜色值和起止位置组成，起止位置用百分比或者像素值表示。
在代码编辑器的例子里，渐变开始于 0 像素位置的 <code>yellow</code>，然后过渡到距离开始位置 40 像素的 <code>blue</code>。由于下一个起止渐变颜色值的起止位置也是 40 像素，所以颜色直接渐变成第三个颜色值 <code>green</code>，然后过渡到距离开始位置 80 像素的 <code>red</code>。
下面的代码可以帮助理解成对的起止渐变颜色值是如何过渡的。
<code>0px [黄色 -- 过渡 -- 蓝色] 40px [绿色 -- 过渡 -- 红色] 80px</code> 
如果每对起止渐变颜色值的颜色都是相同的，由于是在两个相同的颜色间过渡，那么中间的过渡色也为同色，接着就是同色的过渡色和下一个起止颜色，最终产生的效果就是条纹。
</section>

## Instructions
<section id='instructions'>
修改 <code>repeating-linear-gradient()</code> 函数使其为渐变角度为 <code>45deg</code> 的条纹，第一对渐变颜色为 <code>yellow</code>, 第二对渐变颜色为 <code>black</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>repeating-linear-gradient()</code> 的渐变角度应该为 <code>45deg</code>。'
    testString: assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi));
  - text: '<code>repeating-linear-gradient()</code> 的渐变角度应该不在是 <code>90deg</code>。'
    testString: assert(!code.match(/90deg/gi));
  - text: '<code>0px</code> 处的渐变颜色应该为 <code>yellow</code>。'
    testString: assert(code.match(/yellow\s+?0(px)?/gi));
  - text: '<code>40px</code> 处的第一个渐变颜色应该为 <code>yellow</code>。'
    testString: assert(code.match(/yellow\s+?40px/gi));
  - text: '<code>40px</code> 处的第二个渐变颜色应该为 <code>black</code>。'
    testString: assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi));
  - text: '<code>80px</code> 处最后一个渐变颜色应该为 <code>black</code>。'
    testString: assert(code.match(/black\s+?80px/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  div{ 
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
  }

</style>

<div></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              