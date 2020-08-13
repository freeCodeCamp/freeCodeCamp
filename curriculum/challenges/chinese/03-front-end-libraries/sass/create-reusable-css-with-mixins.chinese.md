---
id: 587d7dbd367417b2b2512bb6
title: Create Reusable CSS with Mixins
challengeType: 0
videoUrl: ''
localeTitle: 使用Mixins创建可重用的CSS
---

## Description
<section id="description">在Sass中， <code>mixin</code>是一组CSS声明，可以在整个样式表中重用。较新的CSS功能需要一段时间才能完全采用并准备好在所有浏览器中使用。随着功能添加到浏览器中，使用它们的CSS规则可能需要供应商前缀。考虑“盒子阴影”： <blockquote> div { <br> -webkit-box-shadow：0px 0px 4px #fff; <br> -moz-box-shadow：0px 0px 4px #fff; <br> -ms-box-shadow：0px 0px 4px #fff; <br> box-shadow：0px 0px 4px #fff; <br> } </blockquote>对于具有<code>box-shadow</code>所有元素重写此规则，或者更改每个值以测试不同的效果，需要进行大量的输入。 <code>Mixins</code>就像CSS的功能。这是如何写一个： <blockquote> @mixin box-shadow（$x，$y，$blur，$c）{ <br> -webkit-box-shadow：$x $y $blur $c; <br> -moz-box-shadow：$x $y $blur $c; <br> -ms-box-shadow：$x $y $blur $c; <br> box-shadow：$x $y $blur $c; <br> } </blockquote>该定义以<code>@mixin</code>开头，后跟自定义名称。参数（上例中的<code>$x</code> ， <code>$y</code> ， <code>$blur</code>和<code>$c</code> ）是可选的。现在，只要需要一个<code>box-shadow</code>规则，只需要调用<code>mixin</code>一行代替必须输入所有供应商前缀。使用<code>@include</code>指令调用<code>mixin</code> ： <blockquote> div { <br> @include box-shadow（0px，0px，4px，＃fff）; <br> } </blockquote></section>

## Instructions
<section id="instructions">为<code>border-radius</code>写一个<code>mixin</code>并给它一个<code>$radius</code>参数。它应该使用示例中的所有供应商前缀。然后使用<code>border-radius</code> <code>mixin</code>为<code>#awesome</code>元素提供15px的边界半径。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的代码应该声明一个名为<code>border-radius</code>的<code>mixin</code> ，它有一个名为<code>$radius</code>的参数。
    testString: assert(code.match(/@mixin\s+?border-radius\s*?\(\s*?\$radius\s*?\)\s*?{/gi));
  - text: 您的代码应包含使用<code>$radius</code>参数的<code>-webkit-border-radius</code> vender前缀。
    testString: assert(code.match(/-webkit-border-radius:\s*?\$radius;/gi));
  - text: 您的代码应包含使用<code>$radius</code>参数的<code>-moz-border-radius</code> vender前缀。
    testString: assert(code.match(/-moz-border-radius:\s*?\$radius;/gi));
  - text: 您的代码应包含使用<code>$radius</code>参数的<code>-ms-border-radius</code> vender前缀。
    testString: assert(code.match(/-ms-border-radius:\s*?\$radius;/gi));
  - text: 您的代码应包含使用<code>$radius</code>参数的一般<code>border-radius</code>规则。
    testString: assert(code.match(/border-radius:\s*?\$radius;/gi).length == 4);
  - text: 您的代码应使用<code>@include</code>关键字调用<code>border-radius mixin</code> ，将其设置为15px。
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

```js
// solution required
```

/section>
