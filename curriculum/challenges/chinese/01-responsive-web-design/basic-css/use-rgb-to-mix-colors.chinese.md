---
id: bad82fee1348bd9aedf08721
title: Use RGB to Mix Colors
challengeType: 0
videoUrl: ''
localeTitle: 使用RGB混合颜色
---

## Description
<section id="description">就像使用十六进制代码一样，您可以使用不同值的组合来混合RGB中的颜色。 </section>

## Instructions
<section id="instructions">将<code>style</code>元素中的十六进制代码替换为正确的RGB值。 <table class="table table-striped"><tbody><tr><th>颜色</th><th> RGB </th></tr><tr><td>蓝色</td><td> <code>rgb(0, 0, 255)</code> </td> </tr><tr><td>红</td><td> <code>rgb(255, 0, 0)</code> </td> </tr><tr><td>兰花</td><td> <code>rgb(218, 112, 214)</code> </td> </tr><tr><td>赭色</td><td> <code>rgb(160, 82, 45)</code> </td> </tr></tbody></table></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 给你的<code>h1</code>元素添加<code>I am red!</code>的文本<code>I am red!</code> <code>color</code>红色。
    testString: 'assert($(".red-text").css("color") === "rgb(255, 0, 0)", "Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.");'
  - text: 使用<code>rgb</code>表示红色。
    testString: 'assert(code.match(/\.red-text\s*?{\s*?color:\s*?rgb\(\s*?255\s*?,\s*?0\s*?,\s*?0\s*?\)\s*?;\s*?}/gi), "Use <code>rgb</code> for the color red.");'
  - text: 给你的<code>h1</code>元素文字<code>I am orchid!</code>兰花的<code>color</code> 。
    testString: 'assert($(".orchid-text").css("color") === "rgb(218, 112, 214)", "Give your <code>h1</code> element with the text <code>I am orchid!</code> the <code>color</code> orchid.");'
  - text: 使用<code>rgb</code>作为颜色兰花。
    testString: 'assert(code.match(/\.orchid-text\s*?{\s*?color:\s*?rgb\(\s*?218\s*?,\s*?112\s*?,\s*?214\s*?\)\s*?;\s*?}/gi), "Use <code>rgb</code> for the color orchid.");'
  - text: 给你的<code>h1</code>元素添加<code>I am blue!</code>的文本<code>I am blue!</code> <code>color</code>蓝色。
    testString: 'assert($(".blue-text").css("color") === "rgb(0, 0, 255)", "Give your <code>h1</code> element with the text <code>I am blue!</code> the <code>color</code> blue.");'
  - text: 使用<code>rgb</code>作为蓝色。
    testString: 'assert(code.match(/\.blue-text\s*?{\s*?color:\s*?rgb\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?\)\s*?;\s*?}/gi), "Use <code>rgb</code> for the color blue.");'
  - text: 给你的<code>h1</code>元素添加<code>I am sienna!</code>的文本<code>I am sienna!</code> <code>color</code> sienna。
    testString: 'assert($(".sienna-text").css("color") === "rgb(160, 82, 45)", "Give your <code>h1</code> element with the text <code>I am sienna!</code> the <code>color</code> sienna.");'
  - text: 使用<code>rgb</code>作为颜色sienna。
    testString: 'assert(code.match(/\.sienna-text\s*?{\s*?color:\s*?rgb\(\s*?160\s*?,\s*?82\s*?,\s*?45\s*?\)\s*?;\s*?}/gi), "Use <code>rgb</code> for the color sienna.");'

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
