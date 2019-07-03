---
id: 587d7dbe367417b2b2512bb8
title: Use @if and @else to Add Logic To Your Styles
challengeType: 0

videoUrl: ''
localeTitle: Use @if and @else to Add Logic To Your Styles
---

## Description
<section id='description'>
Sass 中的<code>@if</code>指令对于测试特定情况非常有用--它的工作方式与 JavaScript</code>中的<code>if</code>语句类似。
<blockquote>@mixin make-bold($bool) {<br>&nbsp;&nbsp;@if $bool == true {<br>&nbsp;&nbsp;&nbsp;&nbsp;font-weight: bold;<br>&nbsp;&nbsp;}<br>}</blockquote>
类似 JavaScript，你可以在 Sass 中使用<code>@else if</code>和<code>@else</code>添加更多条件：
<blockquote>@mixin text-effect($val) {<br>&nbsp;&nbsp;@if $val == danger {<br>&nbsp;&nbsp;&nbsp;&nbsp;color: red;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;@else if $val == alert {<br>&nbsp;&nbsp;&nbsp;&nbsp;color: yellow;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;@else if $val == success {<br>&nbsp;&nbsp;&nbsp;&nbsp;color: green;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;@else {<br>&nbsp;&nbsp;&nbsp;&nbsp;color: black;<br>&nbsp;&nbsp;}<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
创建一个名为<code>border-stroke</code>的<code>mixin</code>，它接受一个参数<code>$val</code>。<code>mixin</code>应使用<code>@if</code>，<code>@else if</code>和<code>@else</code>检查以下条件：
<blockquote>light - 1px solid black<br>medium - 3px solid black<br>heavy - 6px solid black<br>none - no border</blockquote>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该声明一个名为<code>border-stroke</code>的<code>mixin</code>，它有一个名为<code>$val</code>的参数。
    testString: assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi), '你应该声明一个名为<code>border-stroke</code>的<code>mixin</code>，它有一个名为<code>$val</code>的参数。');
  - text: <code>mixin</code>应该有一个<code>@if</code>语句来检查<code>$val</code>是否很轻，并将<code>border</code>设置为 1px 纯黑色。
    testString: 'assert(code.match(/@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi), "<code>mixin</code>应该有一个<code>@if</code>语句来检查<code>$val</code>是否很轻，并将<code>border</code>设置为 1px 纯黑色。");'
  - text: <code>mixin</code>应该有一个<code>@else if</code>语句来检查<code>$val</code>是否中等，并设置<code>border</code>为3px 纯黑色。
    testString: 'assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi), "<code>mixin</code>应该有一个<code>@else if</code>语句来检查<code>$val</code>是否中等，并设置<code>border</code>为3px 纯黑色。");'
  - text: <code>mixin</code>应该有一个<code>@else if</code>语句来检查<code>$val</code>是否很重，并设置<code>border</code>为6px 纯黑色。
    testString: 'assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi), "<code>mixin</code>应该有一个<code>@else if</code>语句来检查<code>$val</code>是否很重，并设置<code>border</code>为6px 纯黑色。");'
  - text: <code>mixin</code>应该有一个<code>@else</code>语句来将<code>border</code>设置为 none。
    testString: 'assert(code.match(/@else\s*?{\s*?border\s*?:\s*?none\s*?;\s*?}/gi), "<code>mixin</code>应该有一个<code>@else</code>语句来将<code>border</code>设置为 none。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style type='text/sass'>,  ,  ,  ,  #box {,    width: 150px;,    height: 150px;,    background-color: red;,    @include border-stroke(medium);,  }  ,</style>,,<div id="box"></div>
```





</div>





</section>

              