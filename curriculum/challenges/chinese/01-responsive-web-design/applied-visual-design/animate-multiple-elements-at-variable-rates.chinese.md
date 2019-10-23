---
id: 587d78a8367417b2b2512ae6
title: Animate Multiple Elements at Variable Rates
challengeType: 0
videoUrl: ''
localeTitle: 以可变速率动画多个元素
---

## Description
<section id="description">在之前的挑战中，您通过更改其<code>@keyframes</code>规则来更改两个相似动画元素的动画速率。您可以通过操纵多个元素的<code>animation-duration</code>来实现相同的目标。在代码编辑器中运行的动画中，天空中有三个“星星”在连续循环中以相同的速率闪烁。要使它们以不同的速率闪烁，可以将<code>animation-duration</code>属性设置为每个元素的不同值。 </section>

## Instructions
<section id="instructions">将类别为<code>star-1</code> ， <code>star-2</code>和<code>star-3</code>的元素的<code>animation-duration</code>设置为1s，0.9s和1.1s。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 具有<code>star-1</code>的星的<code>animation-duration</code>属性应保持为1秒。
    testString: 'assert($(".star-1").css("animation-duration") == "1s", "The <code>animation-duration</code> property for the star with class <code>star-1</code> should remain at 1s.");'
  - text: <code>star-2</code>的星的<code>animation-duration</code>属性应为0.9秒。
    testString: 'assert($(".star-2").css("animation-duration") == "0.9s", "The <code>animation-duration</code> property for the star with class <code>star-2</code> should be 0.9s.");'
  - text: <code>star-3</code>的星的<code>animation-duration</code>属性应为1.1秒。
    testString: 'assert($(".star-3").css("animation-duration") == "1.1s", "The <code>animation-duration</code> property for the star with class <code>star-3</code> should be 1.1s.");'

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

```js
// solution required
```
</section>
