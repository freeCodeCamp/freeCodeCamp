---
id: 587d78a7367417b2b2512ae0
title: Use CSS Animation to Change the Hover State of a Button
challengeType: 0
videoUrl: ''
localeTitle: 使用CSS动画更改按钮的悬停状态
---

## Description
<section id="description">您可以使用CSS <code>@keyframes</code>更改悬停状态下按钮的颜色。以下是在悬停时更改图像宽度的示例： <blockquote> &lt;风格&gt; <br> img：hover { <br>动画名称：宽度; <br>动画持续时间：500ms; <br> } <br><br> @keyframes width { <br> 100％{ <br>宽度：40px; <br> } <br> } <br> &lt;/样式&gt; <br><br> &lt;img src =“https://bit.ly/smallgooglelogo&quot;alt =”Google的徽标“/&gt; </blockquote></section>

## Instructions
<section id="instructions">请注意， <code>ms</code>表示毫秒，其中1000毫秒等于1秒。使用CSS <code>@keyframes</code>更改<code>button</code>元素的<code>background-color</code> ，以便当用户将鼠标悬停在其上时变为<code>#4791d0</code> 。 <code>@keyframes</code>规则应该只有<code>100%</code>的条目。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '@keyframes规则应使用<code>animation-name</code> background-color。'
    testString: 'assert(code.match(/@keyframes\s+?background-color\s*?{/g), "The @keyframes rule should use the <code>animation-name</code> background-color.");'
  - text: '<code>@keyframes</code>下应该有一条规则将<code>background-color</code>更改为<code>#4791d0</code>为100％。'
    testString: 'assert(code.match(/100%\s*?{\s*?background-color:\s*?#4791d0;\s*?}/gi), "There should be one rule under <code>@keyframes</code> that changes the <code>background-color</code> to <code>#4791d0</code> at 100%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }

  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }


</style>

<button>Register</button>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
