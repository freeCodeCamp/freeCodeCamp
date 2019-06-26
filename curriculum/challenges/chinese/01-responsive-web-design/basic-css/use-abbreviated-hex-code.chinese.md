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
  - text: 測試文本
    testString: assert(true);

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
