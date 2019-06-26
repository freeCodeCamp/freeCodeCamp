---
id: 587d7dbf367417b2b2512bbb
title: Apply a Style Until a Condition is Met with @while
challengeType: 0
videoUrl: ''
localeTitle: 应用样式直到满足@while的条件
---

## Description
<section id="description"> <code>@while</code>指令是一个与JavaScript <code>while</code>循环具有类似功能的选项。它会创建CSS规则，直到满足条件。 <code>@for</code>挑战给出了一个创建简单网格系统的示例。这也适用于<code>@while</code> 。 <blockquote> $ x：1; <br> @while $ x &lt;13 { <br> .col  - ＃{$ x} {width：100％/ 12 * $ x;} <br> $ x：$ x + 1; <br> } </blockquote>首先，定义变量<code>$x</code>并将其设置为1.接下来，使用<code>@while</code>指令创建网格系统， <i>而</i> <code>$x</code>小于13.在设置<code>width</code>的CSS规则后， <code>$x</code>增加1以避免无限循环。 </section>

## Instructions
<section id="instructions">使用<code>@while</code>创建一系列具有不同<code>font-sizes</code>的类。从<code>text-1</code>到<code>text-10</code>应该有10个不同的类。然后将<code>font-size</code>设置为5px乘以当前索引号。确保避免无限循环！ </section>

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
<style type='text/sass'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
<p class="text-6">Hello</p>
<p class="text-7">Hello</p>
<p class="text-8">Hello</p>
<p class="text-9">Hello</p>
<p class="text-10">Hello</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
