---
id: 587d7dbf367417b2b2512bbb
title: Apply a Style Until a Condition is Met with @while
challengeType: 0

videoUrl: ''
localeTitle: Apply a Style Until a Condition is Met with @while
---

## Description
<section id='description'>
Sass 中的<code>@while</code>指令与 JavaScript 中的<code>while</code>类似。只要满足条件，它就会一直创建 CSS 代码。
<code>@for</code>挑战提供了一个创建简单网格系统的示例。这也适用于<code>@while</code>。
<blockquote>$x: 1;<br>@while $x< 13 {<br>&nbsp;&nbsp;.col-#{$x} { width: 100%/12 * $x;}<br>&nbsp;&nbsp;$x: $x + 1;<br>}</blockquote>
首先，定义变量<code>$x</code>并将其设置为 1。接下来，使用<code>@while</code>指令，当<code>$x</code>小于 13 时创建网格系统 。
在设置<code>width</code>的 CSS 规则后，<code>$x</code>增加 1 以避免无限循环。
</section>

## Instructions
<section id='instructions'>
使用<code>@while</code>创建一系列具有不同<code>font-sizes</code>的 class。
从<code>text-1</code>到<code>text-10</code>应该有 10 个不同的 class。然后将<code>font-size</code>设置为 2px+10px 乘以当前索引号。注意不要写成死循环！
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的代码应使用<code>@while</code>指令。
    testString: assert(code.match(/@while /g), '你的代码应使用<code>@while</code>指令。');
  - text: 你的代码应将索引变量设置为 1 才能启动。
    testString: 'assert(code.match(/\$.*:\s*?1;/gi), "你的代码应将索引变量设置为 1 才能启动。");'
  - text: 你的代码应该递增计数器变量。
    testString: 'assert(code.match(/\$(.*):\s*?\$\1\s*?\+\s*?1;/gi), "你的代码应该递增计数器变量。");'
  - text: <code>.text-1</code>class 的<code>font-size</code>应为 12px。
    testString: assert($('.text-1').css('font-size') == '12px', '<code>.text-1</code>class 的<code>font-size</code>应为 12px。');
  - text: <code>.text-2</code>class 的<code>font-size</code>应为 22px。
    testString: assert($('.text-2').css('font-size') == '22px', '<code>.text-2</code>class 的<code>font-size</code>应为 22px。');
  - text: <code>.text-3</code>class 的<code>font-size</code>应为 32px。
    testString: assert($('.text-3').css('font-size') == '32px', '<code>.text-3</code>class 的<code>font-size</code>应为 32px。');
  - text: <code>.text-4</code>class 的<code>font-size</code>应为 42px。
    testString: assert($('.text-4').css('font-size') == '42px', '<code>.text-4</code>class 的<code>font-size</code>应为 42px。');
  - text: <code>.text-5</code>class 的<code>font-size</code>应为 52px。
    testString: assert($('.text-5').css('font-size') == '52px', '<code>.text-5</code>class 的<code>font-size</code>应为 52px。');
  - text: <code>.text-6</code>class 的<code>font-size</code>应为 62px。
    testString: assert($('.text-6').css('font-size') == '62px', '<code>.text-6</code>class 的<code>font-size</code>应为 62px。');
  - text: <code>.text-7</code>class 的<code>font-size</code>应为 72px。
    testString: assert($('.text-7').css('font-size') == '72px', '<code>.text-7</code>class 的<code>font-size</code>应为 72px。');
  - text: <code>.text-8</code>class 的<code>font-size</code>应为 82px。
    testString: assert($('.text-8').css('font-size') == '82px', '<code>.text-8</code>class 的<code>font-size</code>应为 82px。');
  - text: <code>.text-9</code>class 的<code>font-size</code>应为 92px。
    testString: assert($('.text-9').css('font-size') == '92px', '<code>.text-9</code>class 的<code>font-size</code>应为 92px。');
  - text: <code>.text-10</code>class 的<code>font-size</code>应为 102px。
    testString: assert($('.text-10').css('font-size') == '102px', '<code>.text-10</code>class 的<code>font-size</code>应为 102px。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style type='text/sass'>,  ,  ,  ,</style>,,<p class="text-1">Hello</p>,<p class="text-2">Hello</p>,<p class="text-3">Hello</p>,<p class="text-4">Hello</p>,<p class="text-5">Hello</p>,<p class="text-6">Hello</p>,<p class="text-7">Hello</p>,<p class="text-8">Hello</p>,<p class="text-9">Hello</p>,<p class="text-10">Hello</p>
```





</div>





</section>

              