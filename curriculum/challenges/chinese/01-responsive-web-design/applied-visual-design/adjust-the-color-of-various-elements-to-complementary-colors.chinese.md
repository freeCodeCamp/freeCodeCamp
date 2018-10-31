---
id: 587d78a4367417b2b2512ad3
title: Adjust the Color of Various Elements to Complementary Colors
challengeType: 0
videoUrl: ''
localeTitle: 将各种元素的颜色调整为互补色
---

## Description
<section id="description">互补色挑战表明，色轮上的相反颜色可以使并排放置时彼此显得更加生动。然而，如果在网站上过度使用，强烈的视觉对比可能会很刺耳，如果将文本置于互补色背景上，有时可能会使文本难以阅读。在实践中，其中一种颜色通常占主导地位，补充用于将视觉注意力集中在页面上的某些内容上。 </section>

## Instructions
<section id="instructions">此页面将使用深青色（ <code>#09A7A1</code> ）作为主色，其橙色（ <code>#FF790E</code> ）补充以在视觉上突出显示注册按钮。将<code>header</code>和<code>footer</code>的<code>background-color</code>从黑色更改为青色。然后将<code>h2</code>文本<code>color</code>更改为蓝绿色。最后，将<code>button</code>的<code>background-color</code>更改为橙色。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>header</code>元素的<code>background-color</code>为＃09A7A1。
    testString: 'assert($("header").css("background-color") == "rgb(9, 167, 161)", "The <code>header</code> element should have a <code>background-color</code> of #09A7A1.");'
  - text: <code>footer</code>元素的<code>background-color</code>为＃09A7A1。
    testString: 'assert($("footer").css("background-color") == "rgb(9, 167, 161)", "The <code>footer</code> element should have a <code>background-color</code> of #09A7A1.");'
  - text: <code>h2</code>元素的<code>color</code>应为＃09A7A1。
    testString: 'assert($("h2").css("color") == "rgb(9, 167, 161)", "The <code>h2</code> element should have a <code>color</code> of #09A7A1.");'
  - text: <code>button</code>元素的<code>background-color</code>为＃FF790E。
    testString: 'assert($("button").css("background-color") == "rgb(255, 121, 14)", "The <code>button</code> element should have a <code>background-color</code> of #FF790E.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: white;
  }
  header {
    background-color: black;
    color: white;
    padding: 0.25em;
  }
  h2 {
    color: black;
  }
  button {
    background-color: white;
  }
  footer {
    background-color: black;
    color: white;
    padding: 0.5em;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
</header>
<main>
  <article>
    <h2>Machine Learning in the Kitchen</h2>
    <p>Join this two day workshop that walks through how to implement cutting-edge snack-getting algorithms with a command line interface. Coding usually involves writing exact instructions, but sometimes you need your computer to execute flexible commands, like <code>fetch Pringles</code>.</p>
    <button>Sign Up</button>
  </article>
  <article>
    <h2>Bisection Vegetable Chopping</h2>
    <p>This week-long retreat will level-up your coding ninja skills to actual ninja skills. No longer is the humble bisection search limited to sorted arrays or coding interview questions, applying its concepts in the kitchen will have you chopping carrots in O(log n) time before you know it.</p>
    <button>Sign Up</button>
  </article>
</main>
<br>
<footer>&copy; 2018 FCC Kitchen</footer>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
