---
id: bad87fee1348bd9aedf08719
title: Use Abbreviated Hex Code
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpKAm'
forumTopicId: 18338
localeTitle: 使用缩写的十六进制编码
---

## Description
<section id='description'>
许多人对超过 1600 万种颜色的可能性感到不知所措，并且很难记住十六进制编码。幸运的是，它也提供缩写的方法。
例如，红色的<code>#FF0000</code>十六进制编码可以缩写成<code>#F00</code>。在这种缩写形式里，三个数字分别代表着红（R），绿（G），蓝（B）颜色。
这样，颜色的可能性减少到了大约 4000 种。且在浏览器里<code>#FF0000</code>和<code>#F00</code>完全是同一种颜色。
</section>

## Instructions
<section id='instructions'>
接下来，使用缩写的十六进制编码给元素设置正确的颜色。
<table class='table table-striped'><tr><th>Color</th><th>Short Hex Code</th></tr><tr><td>Cyan</td><td><code>#0FF</code></td></tr><tr><td>Green</td><td><code>#0F0</code></td></tr><tr><td>Red</td><td><code>#F00</code></td></tr><tr><td>Fuchsia</td><td><code>#F0F</code></td></tr></table>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '文本内容为<code>I am red!</code>的<code>h1</code>元素的字体颜色应该为<code>red</code>。'
    testString: assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
  - text: '要使用缩写的<code>red</code>的<code>十六进制编码</code>，而不是<code>#FF0000</code>。'
    testString: assert(code.match(/\.red-text\s*?{\s*?color:\s*?#F00\s*?;\s*?}/gi));
  - text: '文本内容为<code>I am green!</code>的<code>h1</code>元素的字体颜色应该为<code>green</code>。'
    testString: assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
  - text: '要使用缩写的<code>green</code>的<code>十六进制编码</code>，而不是<code>#00FF00</code>的十六进制编码。'
    testString: assert(code.match(/\.green-text\s*?{\s*?color:\s*?#0F0\s*?;\s*?}/gi));
  - text: '文本内容为<code>I am cyan!</code>的<code>h1</code>元素的字体颜色应该为<code>cyan</code>。'
    testString: assert($('.cyan-text').css('color') === 'rgb(0, 255, 255)');
  - text: '要使用缩写的<code>cyan</code>的<code>十六进制编码</code>，而不是<code>#00FFFF</code>的十六进制编码。'
    testString: assert(code.match(/\.cyan-text\s*?{\s*?color:\s*?#0FF\s*?;\s*?}/gi));
  - text: '文本内容为<code>I am fuchsia!</code>的<code>h1</code>元素的字体颜色应该为<code>fuchsia</code>。'
    testString: assert($('.fuchsia-text').css('color') === 'rgb(255, 0, 255)');
  - text: '要使用缩写的<code>fuchsia</code>的<code>十六进制编码</code>，而不是<code>#FF00FF</code>的十六进制编码。'
    testString: assert(code.match(/\.fuchsia-text\s*?{\s*?color:\s*?#F0F\s*?;\s*?}/gi));

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

```html
// solution required
```

</section>
              