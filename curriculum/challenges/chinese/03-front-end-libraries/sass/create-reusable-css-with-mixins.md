---
id: 587d7dbd367417b2b2512bb6
challengeType: 0
forumTopicId: 301455
title: 用 Mixins 创建可重用 CSS
---

## Description
<section id='description'>
在 Sass 中，<code>mixin</code>是一组 CSS 声明，可以在整个样式表中重复使用。
CSS 的新功能需要一段时间适配后，所有浏览器后才能完全使用。随着浏览器的不断升级，使用这些 CSS 规则时可能需要添加浏览器前缀。比如 "box-shadow":

```scss
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

对于所有具有<code>box-shadow</code>属性的元素重写此规则，或者更改每个值以测试不同的效果，需要花费大量的精力。
<code>Mixins</code>就像 CSS 的函数。以下是一个例子：

```scss
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

定义以<code>@mixin</code>开头，后跟自定义名称。参数（<code>$x</code>，<code>$y</code>，<code>$blur</code>，以及上例中的<code>$c</code>是可选的。
现在，只要在需要的地方使用<code>@include</code>调用上面定义的<code>mixin</code>，就可以自动添加好所有的浏览器前缀：<code>mixin</code>使用<code>@include</code>指令调用：

```scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

</section>

## Instructions
<section id='instructions'>
为<code>border-radius</code>写一个<code>mixin</code>，并给它一个<code>$radius</code>参数。它应该使用示例中的所有浏览器前缀，然后使用<code>border-radius mixin</code>为<code>#awesome</code>元素提供 15px 的边框半径。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应声明名为<code>border-radius</code>的<code>mixin</code>，其中包含名为<code>$radius</code>的参数。
    testString: assert(code.match(/@mixin\s+?border-radius\s*?\(\s*?\$radius\s*?\)\s*?{/gi));
  - text: 你应该给<code>$radius</code>添加<code>-webkit-border-radius</code>浏览器前缀。
    testString: assert(code.match(/-webkit-border-radius:\s*?\$radius;/gi));
  - text: 你应该给<code>$radius</code>添加<code>-moz-border-radius</code>浏览器前缀。
    testString: assert(code.match(/-moz-border-radius:\s*?\$radius;/gi));
  - text: 你应该给<code>$radius</code>添加<code>-ms-border-radius</code>浏览器前缀。
    testString: assert(code.match(/-ms-border-radius:\s*?\$radius;/gi));
  - text: 你应该给<code>$radius</code>添加<code>border-radius</code>。
    testString: assert(code.match(/border-radius:\s*?\$radius;/gi).length == 4);
  - text: 你应使用<code>@include</code>关键字调用<code>border-radius mixin</code>，并将其设置为 15px。
    testString: assert(code.match(/@include\s+?border-radius\(\s*?15px\s*?\);/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;

  }
</style>

<div id="awesome"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```html
<style type='text/sass'>
  @mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    -ms-border-radius: $radius;
    border-radius: $radius;
  }

  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    @include border-radius(15px);
  }
</style>

<div id="awesome"></div>
```

</section>
