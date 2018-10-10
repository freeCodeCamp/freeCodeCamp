---
id: 587d78a3367417b2b2512acf
title: Change the Position of Overlapping Elements with the z-index Property
challengeType: 0
videoUrl: ''
localeTitle: 使用z-index属性更改重叠元素的位置
---

## Description
<section id="description">当元素定位为重叠时，默认情况下，HTML标记中稍后出现的元素将显示在其他元素的顶部。但是， <code>z-index</code>属性可以指定元素彼此堆叠的顺序。它必须是整数（即整数而不是小数），并且元素的<code>z-index</code>属性的较高值会使其在堆栈中的移动值高于具有较低值的值。 </section>

## Instructions
<section id="instructions">将<code>z-index</code>属性添加到类名为<code>first</code> （红色矩形）的元素中，并将其设置为值2，以便覆盖另一个元素（蓝色矩形）。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 具有类<code>first</code>的元素的<code>z-index</code>值应为2。
    testString: 'assert($(".first").css("z-index") == "2", "The element with class <code>first</code> should have a <code>z-index</code> value of 2.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;

  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>

<div class="first"></div>
<div class="second"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
