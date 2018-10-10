---
id: 587d78a8367417b2b2512ae4
title: Make a CSS Heartbeat using an Infinite Animation Count
challengeType: 0
videoUrl: ''
localeTitle: 使用无限动画计数制作CSS心跳
---

## Description
<section id="description">这是一个带有<code>animation-iteration-count</code>属性的连续动画示例，该属性使用您在之前的挑战中设计的心脏。一秒长的心跳动画由两个动画片段组成。的<code>heart</code>元件（包括<code>:before</code>和<code>:after</code>片）的动画使用改变大小<code>transform</code>特性，并且背景<code>div</code>是动画使用改变其颜色<code>background</code>属性。 </section>

## Instructions
<section id="instructions">通过为<code>back</code>类和<code>heart</code>类添加<code>animation-iteration-count</code>属性并将值设置为无限来保持心脏跳动。 <code>heart:before</code>和<code>heart:after</code>选择器<code>heart:after</code>不需要任何动画属性。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>heart</code>类的<code>animation-iteration-count</code>属性应具有无限值。
    testString: 'assert($(".heart").css("animation-iteration-count") == "infinite", "The <code>animation-iteration-count</code> property for the <code>heart</code> class should have a value of infinite.");'
  - text: <code>back</code>类的<code>animation-iteration-count</code>属性应具有无限值。
    testString: 'assert($(".back").css("animation-iteration-count") == "infinite", "The <code>animation-iteration-count</code> property for the <code>back</code> class should have a value of infinite.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s;

  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;

  }
  .heart:after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart:before {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

  @keyframes backdiv {
    50% {
      background: #ffe6f2;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.6) rotate(-45deg);
    }
  }

</style>
<div class="back"></div>
<div class="heart"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
