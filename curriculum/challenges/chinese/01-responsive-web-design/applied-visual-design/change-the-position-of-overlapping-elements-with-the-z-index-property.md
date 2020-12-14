---
id: 587d78a3367417b2b2512acf
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM94aHk'
forumTopicId: 301046
title: 使用 z-index 属性更改重叠元素的位置
---

## Description
<section id='description'>
当一些元素重叠时，在 HTML 里后出现的元素会默认显示在更早出现的元素的上面。你可以使用 <code>z-index</code> 属性指定元素的堆叠次序。<code>z-index</code> 的取值是整数，数值大的元素优先于数值小的元素显示。
</section>

## Instructions
<section id='instructions'>
给 class 为 <code>first</code> 的元素（红色的方块）添加 <code>z-index</code> 属性并赋值为 2，使它显示在蓝色方块的上方。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'class 为 <code>first</code> 的元素的 <code>z-index</code> 值应该为 2。'
    testString: assert($('.first').css('z-index') == '2');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }
  
  .first {
    background-color: red;
    position: absolute;
    
  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>

<div class="first"></div>
<div class="second"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              