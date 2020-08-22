---
id: 587d7dbe367417b2b2512bb9
title: Use @for to Create a Sass Loop
challengeType: 0
videoUrl: ''
localeTitle: 使用@for创建Sass循环
---

## Description
<section id="description"> <code>@for</code>指令在循环中添加样式，非常类似于JavaScript中的<code>for</code>循环。 <code>@for</code>以两种方式使用：“ <code>@for</code> ”或“ <code>@for</code> ”。主要区别在于“从头到尾” <em>排除</em>了结束号码，“从头到尾” <em>包括</em>结束号码。这是一个开始<b>到</b>最后的例子： <blockquote> @for $ i从1到12 { <br> .col  - ＃{$ i} {width：100％/ 12 * $ i; } <br> } </blockquote> <code>#{$i}</code>部分是将变量（ <code>i</code> ）与文本组合成字符串的语法。当Sass文件转换为CSS时，它看起来像这样： <blockquote> .col-1 { <br>宽度：8.33333％; <br> } <br><br> .col-2 { <br>宽度：16.66667％; <br> } <br><br> ... <br><br> .col-12 { <br>宽度：100％; <br> } </blockquote>这是创建网格布局的有效方法。现在，您有12个可用作CSS类的列宽选项。 </section>

## Instructions
<section id="instructions">写一个<code>@for</code>指令，它接受一个从1 <b>到</b> 6的变量<code>$j</code> 。它应该创建5个名为<code>.text-1</code>到<code>.text-5</code> ，其中每个类的<code>font-size</code>设置为10px乘以索引。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应使用<code>@for</code>指令。
    testString: assert(code.match(/@for /g));
  - text: 您的<code>.text-1</code>类的<code>font-size</code>为10px。
    testString: assert($('.text-1').css('font-size') == '15px');
  - text: 您的<code>.text-2</code>类的<code>font-size</code>为20px。
    testString: assert($('.text-2').css('font-size') == '30px');
  - text: 您的<code>.text-3</code>类的<code>font-size</code>为30px。
    testString: assert($('.text-3').css('font-size') == '45px');
  - text: 您的<code>.text-4</code>类的<code>font-size</code>为40px。
    testString: assert($('.text-4').css('font-size') == '60px');
  - text: 您的<code>.text-5</code>类的<code>font-size</code>为50px。
    testString: assert($('.text-5').css('font-size') == '75px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
