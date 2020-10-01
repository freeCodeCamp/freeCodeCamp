---
id: bad82fee1348bd9aedf08721
title: Use RGB to Mix Colors
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24JU6'
forumTopicId: 18368
localeTitle: 使用 RGB 混合颜色
---

## Description
<section id='description'>
就像使用十六进制编码一样，你可以通过不同值的组合，来混合得到不同的 RGB 颜色。
</section>

## Instructions
<section id='instructions'>
将<code>style</code>标签里面中的十六进制编码替换为正确的 RGB 值。
<table class='table table-striped'><tr><th>Color</th><th>RGB</th></tr><tr><td>Blue</td><td><code>rgb(0, 0, 255)</code></td></tr><tr><td>Red</td><td><code>rgb(255, 0, 0)</code></td></tr><tr><td>Orchid</td><td><code>rgb(218, 112, 214)</code></td></tr><tr><td>Sienna</td><td><code>rgb(160, 82, 45)</code></td></tr></table>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '文本内容为<code>I am red!</code>的<code>h1</code>元素的字体颜色应该为<code>red</code>。'
    testString: assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
  - text: '<code>red</code>颜色应使用<code>RGB</code>值。'
    testString: assert(code.match(/\.red-text\s*?{\s*?color:\s*?rgb\(\s*?255\s*?,\s*?0\s*?,\s*?0\s*?\)\s*?;\s*?}/gi));
  - text: '文本内容为<code>I am orchid!</code>的<code>h1</code>元素的字体颜色应该为<code>orchid</code>。'
    testString: assert($('.orchid-text').css('color') === 'rgb(218, 112, 214)');
  - text: '<code>orchid</code>颜色应使用<code>RGB</code>值。'
    testString: assert(code.match(/\.orchid-text\s*?{\s*?color:\s*?rgb\(\s*?218\s*?,\s*?112\s*?,\s*?214\s*?\)\s*?;\s*?}/gi));
  - text: '文本内容为<code>I am blue!</code>的<code>h1</code>元素的字体颜色应该为<code>blue</code>。'
    testString: assert($('.blue-text').css('color') === 'rgb(0, 0, 255)');
  - text: '<code>blue</code>颜色应使用<code>RGB</code>值。'
    testString: assert(code.match(/\.blue-text\s*?{\s*?color:\s*?rgb\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?\)\s*?;\s*?}/gi));
  - text: '文本内容为<code>I am sienna!</code>的<code>h1</code>元素的字体颜色应该为<code>sienna</code>。'
    testString: assert($('.sienna-text').css('color') === 'rgb(160, 82, 45)');
  - text: '<code>sienna</code>颜色应使用<code>RGB</code>值。'
    testString: assert(code.match(/\.sienna-text\s*?{\s*?color:\s*?rgb\(\s*?160\s*?,\s*?82\s*?,\s*?45\s*?\)\s*?;\s*?}/gi));

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
  .orchid-text {
    color: #000000;
  }
  .sienna-text {
    color: #000000;
  }
  .blue-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
              