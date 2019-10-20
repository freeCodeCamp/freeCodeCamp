---
id: 587d78a8367417b2b2512ae7
title: Change Animation Timing with Keywords
challengeType: 0
videoUrl: ''
localeTitle: 使用关键字更改动画计时
---

## Description
<section id="description">在CSS动画中， <code>animation-timing-function</code>属性控制动画元素在动画持续时间内的变化速度。如果动画是在给定时间（ <code>animation-duration</code> ）从A点移动到B点的汽车，则<code>animation-timing-function</code>表示汽车在行驶过程中如何加速和减速。有许多预定义的关键字可用于热门选项。例如，默认值为<code>ease</code> ，它开始缓慢，在中间加速，然后在最后再次减速。其他选项包括<code>ease-out</code> ，在开始时快速然后减速， <code>ease-in</code> ，在开始时缓慢，然后在结束时加速，或<code>linear</code> ，其在整个过程中应用恒定的动画速度。 </section>

## Instructions
<section id="instructions">用于与ID的元素<code>ball1</code>和<code>ball2</code> ，一个添加<code>animation-timing-function</code>属性的每个，并设置<code>#ball1</code>至<code>linear</code> ，和<code>#ball2</code>到<code>ease-out</code> 。注意元素在动画期间如何移动但在一起结束之间的区别，因为它们共享相同的<code>animation-duration</code> 2秒。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 具有id <code>ball1</code>的元素的<code>animation-timing-function</code>属性的值应该是线性的。
    testString: 'assert($("#ball1").css("animation-timing-function") == "linear", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball1</code> should be linear.");'
  - text: 具有id <code>ball2</code>的元素的<code>animation-timing-function</code>属性的<code>ball2</code>应该是缓出的。
    testString: 'assert($("#ball2").css("animation-timing-function") == "ease-out", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball2</code> should be ease-out.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  .balls {
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left:27%;

  }
  #ball2 {
    left:56%;

  }

@keyframes bounce {
  0% {
    top: 0px;
  }
  100% {
    top: 249px;
  }
}

</style>

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
