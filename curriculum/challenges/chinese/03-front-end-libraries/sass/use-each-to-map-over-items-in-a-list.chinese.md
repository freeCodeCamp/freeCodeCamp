---
id: 587d7dbf367417b2b2512bba
title: Use @each to Map Over Items in a List
challengeType: 0

videoUrl: ''
localeTitle: Use @each to Map Over Items in a List
---

## Description
<section id='description'>
最后一个挑战显示了<code>@for</code>指令如何使用起始值和结束值循环一定次数。Sass 还提供<code>@each</code>指令，该指令循环遍历列表或映射中的每个项目。
在每次迭代时，变量将从列表映射赋值给当前值。
<blockquote>@each $color in blue, red, green {<br>&nbsp;&nbsp;.#{$color}-text {color: $color;}<br>}</blockquote>
map 的语法略有不同。这是一个例子：
<blockquote>$colors: (color1: blue, color2: red, color3: green);<br><br>@each $key, $color in $colors {<br>&nbsp;&nbsp;.#{$color}-text {color: $color;}<br>}</blockquote>
请注意，需要<code>$key</code>变量来引用 map 中的键。否则，编译后的 CSS 将包含<code>color1</code>，<code>color2</code>......
以上两个代码示例都转换为以下 CSS：
<blockquote>.blue-text {<br>&nbsp;&nbsp;color: blue;<br>}<br><br>.red-text {<br>&nbsp;&nbsp;color: red;<br>}<br><br>.green-text {<br>&nbsp;&nbsp;color: green;<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
编写一个<code>@each</code>指令，通过一个列表：<code>blue,black,red</code>并将每个变量分配给<code>.color-bg</code>class, 其中每个项目的“颜色”部分都会发生变化。
每个 class 都应该将<code>background-color</code>设置为相应的颜色。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的代码应使用<code>@each</code>指令。
    testString: assert(code.match(/@each /g), '你的代码应使用<code>@each</code>指令。');
  - text: <code>.blue-bg</code>class 背景色应为蓝色。
    testString: assert($('.blue-bg').css('background-color') == 'rgb(0, 0, 255)', '<code>.blue-bg</code>class 背景色应为蓝色。');
  - text: <code>.black-bg</code>class 背景色应为黑色。
    testString: assert($('.black-bg').css('background-color') == 'rgb(0, 0, 0)', '<code>.black-bg</code>class 背景色应为黑色。');
  - text: <code>.red-bg</code>class 背景色应为红色。
    testString: assert($('.red-bg').css('background-color') == 'rgb(255, 0, 0)', '<code>.red-bg</code>class 背景色应为红色。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style type='text/sass'>,  ,  ,  ,  div {,    height: 200px;,    width: 200px;,  },</style>,,<div class="blue-bg"></div>,<div class="black-bg"></div>,<div class="red-bg"></div>
```





</div>





</section>

              