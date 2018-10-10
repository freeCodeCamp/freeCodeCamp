---
id: bad87fee1348bd9aedf08719
title: Use Abbreviated Hex Code
challengeType: 0
videoUrl: ''
localeTitle: 使用缩写的十六进制代码
---

## Description
<section id="description">许多人对超过1600万种颜色的可能性感到不知所措。并且很难记住十六进制代码。幸运的是，你可以缩短它。例如，红色的十六进制代码<code>#FF0000</code>可以缩短为<code>#F00</code> 。这个缩短的形式给出一个红色数字，一个数字表示绿色，一个数字表示蓝色。这将可能的颜色总数减少到大约4,000。但浏览器会将<code>#FF0000</code>和<code>#F00</code>解释为完全相同的颜色。 </section>

## Instructions
<section id="instructions">继续，尝试使用缩写的十六进制代码为正确的元素着色。 <table class="table table-striped"><tbody><tr><th>颜色</th><th>短十六进制代码</th></tr><tr><td>青色</td><td> <code>#0FF</code> </td> </tr><tr><td>绿色</td><td> <code>#0F0</code> </td> </tr><tr><td>红</td><td> <code>#F00</code> </td> </tr><tr><td>紫红色</td><td> <code>#F0F</code> </td> </tr></tbody></table></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 给你的<code>h1</code>元素添加<code>I am red!</code>的文本<code>I am red!</code> <code>color</code>红色。
    testString: 'assert($(".red-text").css("color") === "rgb(255, 0, 0)", "Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.");'
  - text: '使用缩写<code>hex code</code>表示红色而不是十六进制代码<code>#FF0000</code> 。'
    testString: 'assert(code.match(/\.red-text\s*?{\s*?color:\s*?#F00\s*?;\s*?}/gi), "Use the abbreviate <code>hex code</code> for the color red instead of the hex code <code>#FF0000</code>.");'
  - text: 给你的<code>h1</code>元素添加<code>I am green!</code>的文本<code>I am green!</code> <code>color</code>绿色。
    testString: 'assert($(".green-text").css("color") === "rgb(0, 255, 0)", "Give your <code>h1</code> element with the text <code>I am green!</code> the <code>color</code> green.");'
  - text: '使用缩写的<code>hex code</code>表示绿色而不是十六进制代码<code>#00FF00</code> 。'
    testString: 'assert(code.match(/\.green-text\s*?{\s*?color:\s*?#0F0\s*?;\s*?}/gi), "Use the abbreviated <code>hex code</code> for the color green instead of the hex code <code>#00FF00</code>.");'
  - text: 给你的<code>h1</code>元素添加<code>I am cyan!</code>文字<code>I am cyan!</code>在<code>color</code>青色。
    testString: 'assert($(".cyan-text").css("color") === "rgb(0, 255, 255)", "Give your <code>h1</code> element with the text <code>I am cyan!</code> the <code>color</code> cyan.");'
  - text: '使用缩写的<code>hex code</code>代替十六进制代码<code>#00FFFF</code> 。'
    testString: 'assert(code.match(/\.cyan-text\s*?{\s*?color:\s*?#0FF\s*?;\s*?}/gi), "Use the abbreviated <code>hex code</code> for the color cyan instead of the hex code <code>#00FFFF</code>.");'
  - text: 给你的<code>h1</code>元素文字<code>I am fuchsia!</code> <code>color</code>紫红色。
    testString: 'assert($(".fuchsia-text").css("color") === "rgb(255, 0, 255)", "Give your <code>h1</code> element with the text <code>I am fuchsia!</code> the <code>color</code> fuchsia.");'
  - text: '使用缩写的<code>hex code</code>作为颜色的紫红色而不是十六进制代码<code>#FF00FF</code> 。'
    testString: 'assert(code.match(/\.fuchsia-text\s*?{\s*?color:\s*?#F0F\s*?;\s*?}/gi), "Use the abbreviated <code>hex code</code> for the color fuchsia instead of the hex code <code>#FF00FF</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: #000000;
  }
  .fuchsia-text {
    color: #000000;
  }
  .cyan-text {
    color: #000000;
  }
  .green-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
