---
id: bad87fee1348bd9aedf08721
challengeType: 0
videoUrl: 'https://scrimba.com/c/cK89PhP'
forumTopicId: 18359
title: 使用十六进制编码混合颜色
---

## Description
<section id='description'>
回顾一下，<code>hex</code>使用 6 个十六进制编码来表示颜色，2 个一组，分别代表着红（R），绿（G），蓝（B）。
通过三原色，我们可以创建 1600 万种不同颜色！
例如，橘色是纯红色混合一些绿色而成的，没有蓝色的参与。在十六进制编码里面，它被转译为<code>#FFA500</code>。
<code>0</code>是十六进制里面最小的数字，表示着没有颜色。
<code>F</code>是十六进制里面最大的数字，表示着最高的亮度。
</section>

## Instructions
<section id='instructions'>
把<code>style</code>标签里面的颜色值用正确的十六进制编码替换。
<table class='table table-striped'><tr><th>Color</th><th>Hex Code</th></tr><tr><td>Dodger Blue</td><td><code>#1E90FF</code></td></tr><tr><td>Green</td><td><code>#00FF00</code></td></tr><tr><td>Orange</td><td><code>#FFA500</code></td></tr><tr><td>Red</td><td><code>#FF0000</code></td></tr></table>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '文本内容为<code>I am red!</code>的<code>h1</code>元素的字体颜色应该为<code>red</code>。'
    testString: assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
  - text: '使用<code>十六进制编码</code>替换<code>red</code>关键词。'
    testString: assert(code.match(/\.red-text\s*?{\s*?color:\s*?#FF0000\s*?;\s*?}/gi));
  - text: '文本内容为<code>I am green!</code>的<code>h1</code>元素的字体颜色应该为<code>green</code>。'
    testString: assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
  - text: '使用<code>十六进制编码</code>替换<code>green</code>关键词。'
    testString: assert(code.match(/\.green-text\s*?{\s*?color:\s*?#00FF00\s*?;\s*?}/gi));
  - text: '文本内容为<code>I am dodger blue!</code>的<code>h1</code>元素的字体颜色应该为<code>dodger blue</code>。'
    testString: assert($('.dodger-blue-text').css('color') === 'rgb(30, 144, 255)');
  - text: '使用<code>十六进制编码</code>替换<code>dodgerblue</code>关键词。'
    testString: assert(code.match(/\.dodger-blue-text\s*?{\s*?color:\s*?#1E90FF\s*?;\s*?}/gi));
  - text: '文本内容为<code>I am orange!</code>的<code>h1</code>元素的字体颜色应该为<code>orange</code>。'
    testString: assert($('.orange-text').css('color') === 'rgb(255, 165, 0)');
  - text: '使用<code>十六进制编码</code>替换<code>orange</code>关键词。'
    testString: assert(code.match(/\.orange-text\s*?{\s*?color:\s*?#FFA500\s*?;\s*?}/gi));

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

```html
// solution required
```

</section>
              