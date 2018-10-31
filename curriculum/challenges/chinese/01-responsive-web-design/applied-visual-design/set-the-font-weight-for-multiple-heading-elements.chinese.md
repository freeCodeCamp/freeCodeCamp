---
id: 587d781c367417b2b2512ac3
title: Set the font-weight for Multiple Heading Elements
challengeType: 0
videoUrl: ''
localeTitle: 设置多个标题元素的字体粗细
---

## Description
<section id="description">您在最后一次挑战中设置每个标题标记的<code>font-size</code> ，在这里您将调整<code>font-weight</code> 。 <code>font-weight</code>属性设置文本部分中字符的粗细或粗细。 </section>

## Instructions
<section id="instructions"><ul><li>将<code>h1</code>标记的<code>font-weight</code>设置为800。 </li><li>将<code>h2</code>标记的<code>font-weight</code>设置为600。 </li><li>将<code>h3</code>标记的<code>font-weight</code>设置为500。 </li><li>将<code>h4</code>标记的<code>font-weight</code>设置为400。 </li><li>将<code>h5</code>标记的<code>font-weight</code>设置为300。 </li><li>将<code>h6</code>标签的<code>font-weight</code>设置为200。 </li></ul></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应将<code>h1</code>标记的<code>font-weight</code>属性设置为800。
    testString: 'assert($("h1").css("font-weight") == "800", "Your code should set the <code>font-weight</code> property for the <code>h1</code> tag to 800.");'
  - text: 您的代码应将<code>h2</code>标记的<code>font-weight</code>属性设置为600。
    testString: 'assert($("h2").css("font-weight") == "600", "Your code should set the <code>font-weight</code> property for the <code>h2</code> tag to 600.");'
  - text: 您的代码应将<code>h3</code>标记的<code>font-weight</code>属性设置为500。
    testString: 'assert($("h3").css("font-weight") == "500", "Your code should set the <code>font-weight</code> property for the <code>h3</code> tag to 500.");'
  - text: 您的代码应将<code>h4</code>标记的<code>font-weight</code>属性设置为400。
    testString: 'assert($("h4").css("font-weight") == "400", "Your code should set the <code>font-weight</code> property for the <code>h4</code> tag to 400.");'
  - text: 您的代码应将<code>h5</code>标记的<code>font-weight</code>属性设置为300。
    testString: 'assert($("h5").css("font-weight") == "300", "Your code should set the <code>font-weight</code> property for the <code>h5</code> tag to 300.");'
  - text: 您的代码应将<code>h6</code>标记的<code>font-weight</code>属性设置为200。
    testString: 'assert($("h6").css("font-weight") == "200", "Your code should set the <code>font-weight</code> property for the <code>h6</code> tag to 200.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h1 {
    font-size: 68px;

  }
  h2 {
    font-size: 52px;

  }
  h3 {
    font-size: 40px;

  }
  h4 {
    font-size: 32px;

  }
  h5 {
    font-size: 21px;

  }
  h6 {
    font-size: 14px;

  }
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
