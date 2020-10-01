---
id: 587d78a8367417b2b2512ae5
title: Animate Elements at Variable Rates
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ89WA4'
forumTopicId: 301040
localeTitle: 以可变速率来给元素添加动画
---

## Description
<section id='description'>
改变相似元素的动画频率的方法有很多。目前接触到的就有 <code>animation-iteration-count</code> 和 <code>@keyframes</code>。
举例说明，右边的动画包含了两个小星星，每个小星星都在 20% <code>@keyframes</code> 处变小并且 opacity 变为 20%，也就是一闪一闪的动画效果。你可以通过改变其中一个星星的 <code>@keyframes</code> 规则以使两个小星星以不同的频率闪烁。
</section>

## Instructions
<section id='instructions'>
通过改变 class 为 <code>star-1</code> 的元素的 <code>@keyframes</code> 为 50% 以改变其动画频率。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>star-1</code> class 的 <code>@keyframes</code> 规则应该为50%。'
    testString: assert(code.match(/twinkle-1\s*?{\s*?50%/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%; 
    margin-left: 60%;
    animation-name: twinkle-1;
    animation-duration: 1s;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-name: twinkle-2;
    animation-duration: 1s;
  }

  @keyframes twinkle-1 {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  @keyframes twinkle-2 {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>

<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
```

</div>



</section>

## Solution
<section id='solution'>


```html
// solution required
```

</section>
              