---
id: 587d78ab367417b2b2512af0
title: 'Use display: flex to Position Two Boxes'
challengeType: 0
videoUrl: ''
localeTitle: 使用display：flex定位两个Box
---

## Description
<section id="description">本节使用交替挑战样式来展示如何使用CSS以灵活的方式定位元素。首先，挑战将解释理论，然后使用简单推文组件的实际挑战将应用flexbox概念。放置CSS属性<code>display: flex;</code>在元素上允许您使用其他flex属性来构建响应式页面。 </section>

## Instructions
<section id="instructions">将CSS属性<code>display</code>添加到<code>#box-container</code>并将其值设置为flex。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#box-container</code>应将<code>display</code>属性设置为flex值。'
    testString: 'assert($("#box-container").css("display") == "flex", "<code>#box-container</code> should have the <code>display</code> property set to a value of flex.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    height: 500px;

  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;

  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;

  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
