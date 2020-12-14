---
id: 587d7dbe367417b2b2512bb9
challengeType: 0
forumTopicId: 301462
title: 使用 @for 创建一个 Sass 循环
---

## Description
<section id='description'>
你可以在 Sass 中使用<code>@for</code>循环，它的表现类似与 JavaScript 中的<code>for</code>循环。
<code>@for</code>以两种方式使用："start through end" 或 "start to end"。主要区别在于“开始结束”<em> 排除 </em> 结束号码，而“开始结束”<em> 包括 </em> 结束号码。
这是一个开始 <b> 到 </b> 结束示例：

```scss
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```

<code>#{$i}</code>部分是将变量（<code>i</code>）与文本组合成字符串的语法。当 Sass 文件转换为 CSS 时，它看起来像这样：

```scss
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```

这是创建网格布局的有效方法。现在，你有 12 个可用作 CSS classes 的列宽选项。
</section>

## Instructions
<section id='instructions'>
编写<code>@for</code>指令，使<code>$j</code>的值为从 1（包含）到 6（不包含）。
它应该创建 5 个名为<code>.text-1</code>的 classes 到<code>.text-5</code>，其中每个 class 的<code>font-size</code>设置为 15px 乘以索引。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应使用<code>@for</code>指令。
    testString: assert(code.match(/@for /g));
  - text: <code>.text-1</code>class 的<code>font-size</code>应为 15px。
    testString: assert($('.text-1').css('font-size') == '15px');
  - text: <code>.text-2</code>class 的<code>font-size</code>应为 30px。
    testString: assert($('.text-2').css('font-size') == '30px');
  - text: <code>.text-3</code>class 的<code>font-size</code>应为 45px。
    testString: assert($('.text-3').css('font-size') == '45px');
  - text: <code>.text-4</code>class 的<code>font-size</code>应为 60px。
    testString: assert($('.text-4').css('font-size') == '60px');
  - text: <code>.text-5</code>class 的<code>font-size</code>应为 75px。
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

```html
<style type='text/sass'>

@for $i from 1 through 5 {
  .text-#{$i} { font-size: 15px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

```html
<style type='text/sass'>

@for $i from 1 to 6 {
  .text-#{$i} { font-size: 15px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
</section>
