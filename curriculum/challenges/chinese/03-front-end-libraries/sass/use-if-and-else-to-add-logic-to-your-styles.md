---
id: 587d7dbe367417b2b2512bb8
challengeType: 0
forumTopicId: 301463
title: 使用 @if 和 @else 为你的样式添加逻辑
---

## Description
<section id='description'>
Sass 中的<code>@if</code>指令对于测试特定情况非常有用--它的工作方式与 JavaScript</code>中的<code>if</code>语句类似。

```scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

类似 JavaScript，你可以在 Sass 中使用<code>@else if</code>和<code>@else</code>添加更多条件：

```scss
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```

</section>

## Instructions
<section id='instructions'>
创建一个名为<code>border-stroke</code>的<code>mixin</code>，它接受一个参数<code>$val</code>。<code>mixin</code>应使用<code>@if</code>，<code>@else if</code>和<code>@else</code>检查以下条件：

```scss
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
```

如果 <code>$val</code> 不是 <code>light</code>、<code>medium</code> 或者 <code>heavy</code>，border 应该设置为 <code>none</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该声明一个名为<code>border-stroke</code>的<code>mixin</code>，它有一个名为<code>$val</code>的参数。
    testString: assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi));
  - text: <code>mixin</code>应该有一个<code>@if</code>语句来检查<code>$val</code>是否很轻，并将<code>border</code>设置为 1px 纯黑色。
    testString: assert(code.match(/@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi));
  - text: <code>mixin</code>应该有一个<code>@else if</code>语句来检查<code>$val</code>是否中等，并设置<code>border</code>为3px 纯黑色。
    testString: assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi));
  - text: <code>mixin</code>应该有一个<code>@else if</code>语句来检查<code>$val</code>是否很重，并设置<code>border</code>为6px 纯黑色。
    testString: assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi));
  - text: <code>mixin</code>应该有一个<code>@else</code>语句来将<code>border</code>设置为 none。
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

```html
<style type='text/sass'>
  @mixin border-stroke($val) {
    @if $val == light {
      border: 1px solid black;
    }
    @else if $val == medium {
      border: 3px solid black;
    }
    @else if $val == heavy {
      border: 6px solid black;
    }
    @else {
      border: none;
    }
  }


  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>
```

</section>
