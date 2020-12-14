---
id: 587d7dbf367417b2b2512bbb
challengeType: 0
forumTopicId: 301454
title: 使用 @while 当条件满足时样式生效
---

## Description
<section id='description'>
Sass 中的<code>@while</code>指令与 JavaScript 中的<code>while</code>类似。只要满足条件，它就会一直创建 CSS 代码。
<code>@for</code>挑战提供了一个创建简单网格系统的示例。这也适用于<code>@while</code>。

```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```

首先，定义变量<code>$x</code>并将其设置为 1。接下来，使用<code>@while</code>指令，当<code>$x</code>小于 13 时创建网格系统 。
在设置<code>width</code>的 CSS 规则后，<code>$x</code>增加 1 以避免无限循环。
</section>

## Instructions
<section id='instructions'>
使用<code>@while</code>创建一系列具有不同<code>font-sizes</code>的 class。
从<code>text-1</code>到<code>text-10</code>应该有 10 个不同的 class。然后将<code>font-size</code>设置为 15px 乘以当前索引号。注意不要写成死循环！
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的代码应使用<code>@while</code>指令。
    testString: assert(code.match(/@while /g));
  - text: 你的代码应将索引变量设置为 1 才能启动。
    testString: assert(code.match(/\$.*:\s*?1;/gi));
  - text: 你的代码应该递增计数器变量。
    testString: assert(code.match(/\$(.*)\s*?:\s*\$\1\s*\+\s*1\s*;/gi));
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
  $x: 1;
  @while $x < 6 {
    .text-#{$x}{
      font-size: 15px * $x;
    }
    $x: $x + 1;
  }
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

</section>
