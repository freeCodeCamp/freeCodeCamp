---
id: 587d7dbe367417b2b2512bb8
title: Use @if and @else to Add Logic To Your Styles
challengeType: 0
videoUrl: ''
localeTitle: 使用@if和@else将逻辑添加到您的样式
---

## Description
<section id="description"> Sass中的<code>@if</code>指令对于测试特定情况很有用 - 它就像JavaScript中的<code>if</code>语句一样。 <blockquote> @mixin make-bold（$ bool）{ <br> @if $ bool == true { <br> font-weight：bold; <br> } <br> } </blockquote>就像在JavaScript中一样， <code>@else if</code>和<code>@else</code>测试更多条件： <blockquote> @mixin text-effect（$ val）{ <br> @if $ val == danger { <br>红色; <br> } <br> @else if $ val == alert { <br>颜色：黄色; <br> } <br> @else if $ val == success { <br>颜色：绿色; <br> } <br> @else { <br>颜色：黑色; <br> } <br> } </blockquote></section>

## Instructions
<section id="instructions">创建一个名为<code>border-stroke</code>的<code>mixin</code> ，它接受一个参数<code>$val</code> 。 <code>mixin</code>应使用<code>@if</code> ， <code>@else if</code>和<code>@else</code>检查以下条件：
<blockquote>光 - 1px纯黑色<br>中等 - 3px纯黑色<br>重 - 6px纯黑色 </blockquote>
如果<code>$val</code>不是<code>light</ code>，<code>medium</code>，或者<code>heavy</code>，则边框应该设置为<code>none</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的代码应该声明一个名为<code>border-stroke</code>的<code>mixin</code> ，它有一个名为<code>$val</code>的参数。
    testString: assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi));
  - text: 你的<code>mixin</code>应该有一个<code>@if</code>语句来检查<code>$val</code>是否很亮，并将<code>border</code>设置为1px纯黑色。
    testString: assert(code.match(/@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi));
  - text: 你的<code>mixin</code>应该有一个<code>@else if</code>语句来检查<code>$val</code>是否为中等，并将<code>border</code>设置为3px纯黑色。
    testString: assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi));
  - text: 你的<code>mixin</code>应该有一个<code>@else if</code>语句来检查<code>$val</code>是否很重，并将<code>border</code>设置为6px纯黑色。
    testString: assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi));
  - text: 你的<code>mixin</code>应该有一个<code>@else</code>语句来设置<code>border</code>为none。
    testString: assert(code.match(/@else\s*?{\s*?border\s*?:\s*?none\s*?;\s*?}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
