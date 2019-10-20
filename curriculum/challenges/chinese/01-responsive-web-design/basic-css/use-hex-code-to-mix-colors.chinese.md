---
id: bad87fee1348bd9aedf08721
title: Use Hex Code to Mix Colors
challengeType: 0
videoUrl: ''
localeTitle: 使用十六进制代码混合颜色
---

## Description
<section id="description">要查看，十六进制代码使用6个十六进制数字来表示颜色，红色（R），绿色（G）和蓝色（B）组件各有两个。从这三种纯色（红色，绿色和蓝色），我们可以改变每种颜色的数量，创造超过1600万种其他颜色！例如，橙色是纯红色，混合了一些绿色，没有蓝色。在十六进制代码中，这转换为<code>#FFA500</code> 。数字<code>0</code>是十六进制代码中的最小数字，表示完全没有颜色。数字<code>F</code>是十六进制代码中的最大数字，表示最大可能的亮度。 </section>

## Instructions
<section id="instructions">将<code>style</code>元素中的颜色词替换为正确的十六进制代码。 <table class="table table-striped"><tbody><tr><th>颜色</th><th> Hex代码</th></tr><tr><td>道奇蓝</td><td> <code>#1E90FF</code> </td> </tr><tr><td>绿色</td><td> <code>#00FF00</code> </td> </tr><tr><td>橙子</td><td> <code>#FFA500</code> </td> </tr><tr><td>红</td><td> <code>#FF0000</code> </td> </tr></tbody></table></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 给你的<code>h1</code>元素添加<code>I am red!</code>的文本<code>I am red!</code> <code>color</code>红色。
    testString: 'assert($(".red-text").css("color") === "rgb(255, 0, 0)", "Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.");'
  - text: 使用<code>hex code</code>为红色而不是<code>red</code> 。
    testString: 'assert(code.match(/\.red-text\s*?{\s*?color:\s*?#FF0000\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color red instead of the word <code>red</code>.");'
  - text: 给你的<code>h1</code>元素添加<code>I am green!</code>的文本<code>I am green!</code> <code>color</code>绿色。
    testString: 'assert($(".green-text").css("color") === "rgb(0, 255, 0)", "Give your <code>h1</code> element with the text <code>I am green!</code> the <code>color</code> green.");'
  - text: 使用<code>hex code</code>表示绿色而不是<code>green</code> 。
    testString: 'assert(code.match(/\.green-text\s*?{\s*?color:\s*?#00FF00\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color green instead of the word <code>green</code>.");'
  - text: 给你的<code>h1</code>元素提供<code>I am dodger blue!</code>的文字<code>I am dodger blue!</code> <code>color</code>道奇蓝色。
    testString: 'assert($(".dodger-blue-text").css("color") === "rgb(30, 144, 255)", "Give your <code>h1</code> element with the text <code>I am dodger blue!</code> the <code>color</code> dodger blue.");'
  - text: 使用颜色<code>dodgerblue</code>蓝色的<code>hex code</code>而不是单词<code>dodgerblue</code> 。
    testString: 'assert(code.match(/\.dodger-blue-text\s*?{\s*?color:\s*?#1E90FF\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color dodger blue instead of the word <code>dodgerblue</code>.");'
  - text: 给你的<code>h1</code>元素添加<code>I am orange!</code>的文本<code>I am orange!</code>在<code>color</code>为橙色。
    testString: 'assert($(".orange-text").css("color") === "rgb(255, 165, 0)", "Give your <code>h1</code> element with the text <code>I am orange!</code> the <code>color</code> orange.");'
  - text: 使用<code>hex code</code>表示橙色而不是<code>orange</code> 。
    testString: 'assert(code.match(/\.orange-text\s*?{\s*?color:\s*?#FFA500\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color orange instead of the word <code>orange</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
