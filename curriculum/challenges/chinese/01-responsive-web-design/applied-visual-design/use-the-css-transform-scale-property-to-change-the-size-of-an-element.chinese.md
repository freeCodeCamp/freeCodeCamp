---
id: 587d78a5367417b2b2512ad9
title: Use the CSS Transform scale Property to Change the Size of an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZVSg'
forumTopicId: 301076
localeTitle: 使用 CSS Transform scale 属性可以更改元素的大小
---

## Description
<section id='description'>
CSS 属性 <code>transform</code> 里面的 <code>scale()</code> 函数，可以用来改变元素的显示比例。下面的例子把页面的段落元素放大了 2 倍：

```css
p {
  transform: scale(2);
}
```

</section>

## Instructions
<section id='instructions'>
把 id 为 <code>ball2</code> 的元素放大到原始大小的 1.5 倍。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#ball2</code> 的 <code>transform</code> 属性应该为原始大小的 1.5 倍。'
    testString: assert(code.match(/#ball2\s*?{\s*?left:\s*?65%;\s*?transform:\s*?scale\(1\.5\);\s*?}|#ball2\s*?{\s*?transform:\s*?scale\(1\.5\);\s*?left:\s*?65%;\s*?}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .ball { 
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;
    
  }


</style>

<div class="ball" id= "ball1"></div>
<div class="ball" id= "ball2"></div>
```

</div>



</section>

## Solution
<section id='solution'>


```html
// solution required
```

</section>
              