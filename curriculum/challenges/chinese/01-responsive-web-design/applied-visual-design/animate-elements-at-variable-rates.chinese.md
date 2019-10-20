---
id: 587d78a8367417b2b2512ae5
title: Animate Elements at Variable Rates
challengeType: 0
videoUrl: ''
localeTitle: 以可变速率动画元素
---

## Description
<section id="description">有多种方法可以改变类似动画元素的动画速率。到目前为止，这是通过应用<code>animation-iteration-count</code>属性和设置<code>@keyframes</code>规则来实现的。为了说明，右侧的动画由两个“星星”组成，每个“星星”的大小和不透明度在<code>@keyframes</code>规则中的20％标记处<code>@keyframes</code> ，从而创建闪烁动画。您可以更改其中一个元素的<code>@keyframes</code>规则，以便星星以不同的速率闪烁。 </section>

## Instructions
<section id="instructions">通过将其<code>@keyframes</code>规则更改为50％，更改类名为<code>star-1</code>的元素的动画速率。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>star-1</code>类的<code>@keyframes</code>规则应为50％。
    testString: 'assert(code.match(/twinkle-1\s*?{\s*?50%/g), "The <code>@keyframes</code> rule for the <code>star-1</code> class should be 50%.");'

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

```js
// solution required
```
</section>
