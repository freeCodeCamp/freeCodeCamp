---
id: 587d78a8367417b2b2512ae3
title: Animate Elements Continually Using an Infinite Animation Count
challengeType: 0
videoUrl: ''
localeTitle: 动画元素不断使用无限动画计数
---

## Description
<section id="description">之前的挑战涉及如何使用某些动画属性和<code>@keyframes</code>规则。另一个动画属性是<code>animation-iteration-count</code> ，它允许您控制循环动画的次数。这是一个例子： <code>animation-iteration-count: 3;</code>在这种情况下，动画将在运行3次后停止，但可以通过将该值设置为无限来使动画连续运行。 </section>

## Instructions
<section id="instructions">要使球在连续循环中保持在右侧弹跳，请将<code>animation-iteration-count</code>属性更改为无限。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>animation-iteration-count</code>属性应具有无限值。
    testString: 'assert($("#ball").css("animation-iteration-count") == "infinite", "The <code>animation-iteration-count</code> property should have a value of infinite.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: 3;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
