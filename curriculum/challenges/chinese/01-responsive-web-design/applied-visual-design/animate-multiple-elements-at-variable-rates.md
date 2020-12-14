---
id: 587d78a8367417b2b2512ae6
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpWZc9'
forumTopicId: 301042
title: 以可变速率来给多个元素添加动画
---

## Description
<section id='description'>
在前面的关卡里，你通过改变 <code>@keyframes</code> 改变了两个相似动画元素的频率。你也可以通过改变多个元素的 <code>animation-duration</code> 来达到同样的效果。
在编辑器代码运行的动画里，天空中有三个以同样频率不停的闪烁的星星。你可以设置每一个星星的 <code>animation-duration</code> 属性为不同的值来使其具有不同的闪烁频率。
</section>

## Instructions
<section id='instructions'>
依次设置 class 为 <code>star-1</code>、<code>star-2</code>、<code>star-3</code> 的 <code>animation-duration</code> 为 1s、0.9s、1.1s。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'class 为 <code>star-1</code> 的 <code>animation-duration</code> 属性值应该 1s。'
    testString: assert($('.star-1').css('animation-duration') == '1s');
  - text: 'class 为 <code>star-2</code> 的 <code>animation-duration</code> 属性值应该 0.9s。'
    testString: assert($('.star-2').css('animation-duration') == '0.9s');
  - text: 'class 为 <code>star-3</code> 的 <code>animation-duration</code> 属性值应该 1.1s。'
    testString: assert($('.star-3').css('animation-duration') == '1.1s');

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
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
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
<div class="star-3 stars"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              