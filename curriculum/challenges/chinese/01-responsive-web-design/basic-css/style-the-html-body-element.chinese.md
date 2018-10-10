---
id: bad87fee1348bd9aedf08736
title: Style the HTML Body Element
challengeType: 0
videoUrl: ''
localeTitle: 设置HTML Body Element的样式
---

## Description
<section id="description">现在让我们重新开始讨论CSS继承。每个HTML页面都有一个<code>body</code>元素。 </section>

## Instructions
<section id="instructions">我们可以通过给它一个黑色的<code>background-color</code>来证明<code>body</code>元素存在。我们可以通过在<code>style</code>元素中添加以下内容来实现： <blockquote>身体 { <br>背景颜色：黑色; <br> } </blockquote></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 给你的<code>body</code>元素黑色的<code>background-color</code> 。
    testString: 'assert($("body").css("background-color") === "rgb(0, 0, 0)", "Give your <code>body</code> element the <code>background-color</code> of black.");'
  - text: 确保您的CSS规则使用左右大括号正确格式化。
    testString: 'assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i), "Make sure your CSS rule is properly formatted with both opening and closing curly brackets.");'
  - text: 确保您的CSS规则以分号结尾。
    testString: 'assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i), "Make sure your CSS rule ends with a semi-colon.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
