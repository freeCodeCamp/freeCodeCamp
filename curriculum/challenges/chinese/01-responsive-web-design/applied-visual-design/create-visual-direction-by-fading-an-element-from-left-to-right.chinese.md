---
id: 587d78a7367417b2b2512ae2
title: Create Visual Direction by Fading an Element from Left to Right
challengeType: 0
videoUrl: ''
localeTitle: 通过从左到右淡化元素来创建视觉方向
---

## Description
<section id="description">对于此挑战，您将更改动画元素的<code>opacity</code> ，使其在到达屏幕右侧时逐渐变淡。在显示的动画中，具有渐变背景的圆形元素按照<code>@keyframes</code>规则向右移动动画的50％标记。 </section>

## Instructions
<section id="instructions">使用id为<code>ball</code>定位元素，并将<code>opacity</code>属性设置为0.1（ <code>50%</code> ，因此元素向右移动时会逐渐消失。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: fade的<code>keyframes</code>规则应将<code>opacity</code>属性设置为0.1为50％。
    testString: 'assert(code.match(/@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi), "The <code>keyframes</code> rule for fade should set the <code>opacity</code> property to 0.1 at 50%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;

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
