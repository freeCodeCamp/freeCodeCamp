---
id: 587d781c367417b2b2512ac2
title: Set the font-size for Multiple Heading Elements
challengeType: 0
videoUrl: ''
localeTitle: 设置多个标题元素的字体大小
---

## Description
<section id="description"> <code>font-size</code>属性用于指定给定元素中文本的大小。此规则可用于多个元素，以在页面上创建文本的视觉一致性。在此挑战中，您将设置所有<code>h1</code>到<code>h6</code>标记的值以平衡标题大小。 </section>

## Instructions
<section id="instructions"><ul><li>将<code>h1</code>标记的<code>font-size</code>设置为68px。 </li><li>将<code>h2</code>标记的<code>font-size</code>设置为52px。 </li><li>将<code>h3</code>标签的<code>font-size</code>设置为40px。 </li><li>将<code>h4</code>标记的<code>font-size</code>设置为32px。 </li><li>将<code>h5</code>标记的<code>font-size</code>设置为21px。 </li><li>将<code>h6</code>标记的<code>font-size</code>设置为14px。 </li></ul></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应将<code>h1</code>标记的<code>font-size</code>属性设置为68像素。
    testString: 'assert($("h1").css("font-size") == "68px", "Your code should set the <code>font-size</code> property for the <code>h1</code> tag to 68 pixels.");'
  - text: 您的代码应将<code>h2</code>标记的<code>font-size</code>属性设置为52像素。
    testString: 'assert($("h2").css("font-size") == "52px", "Your code should set the <code>font-size</code> property for the <code>h2</code> tag to 52 pixels.");'
  - text: 您的代码应将<code>h3</code>标记的<code>font-size</code>属性设置为40像素。
    testString: 'assert($("h3").css("font-size") == "40px", "Your code should set the <code>font-size</code> property for the <code>h3</code> tag to 40 pixels.");'
  - text: 您的代码应将<code>h4</code>标记的<code>font-size</code>属性设置为32像素。
    testString: 'assert($("h4").css("font-size") == "32px", "Your code should set the <code>font-size</code> property for the <code>h4</code> tag to 32 pixels.");'
  - text: 您的代码应将<code>h5</code>标记的<code>font-size</code>属性设置为21像素。
    testString: 'assert($("h5").css("font-size") == "21px", "Your code should set the <code>font-size</code> property for the <code>h5</code> tag to 21 pixels.");'
  - text: 您的代码应将<code>h6</code>标记的<code>font-size</code>属性设置为14像素。
    testString: 'assert($("h6").css("font-size") == "14px", "Your code should set the <code>font-size</code> property for the <code>h6</code> tag to 14 pixels.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>






</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
