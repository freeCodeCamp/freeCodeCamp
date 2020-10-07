---
id: 587d7dbf367417b2b2512bba
challengeType: 0
forumTopicId: 301461
title: 使用 @each 遍历列表中的项目
---

## Description
<section id='description'>

最后一个挑战显示了<code>@for</code>指令如何使用起始值和结束值循环一定次数。Sass 还提供<code>@each</code>指令，该指令循环遍历列表或映射中的每个项目。
在每次迭代时，变量将从列表映射赋值给当前值。

```scss
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
```

map 的语法略有不同。这是一个例子：

```scss
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```

请注意，需要<code>$key</code>变量来引用 map 中的键。否则，编译后的 CSS 将包含<code>color1</code>，<code>color2</code>......
以上两个代码示例都转换为以下 CSS：

```scss
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```

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
    testString: assert(code.match(/@each /g));
  - text: <code>.blue-bg</code>class 背景色应为蓝色。
    testString: assert($('.blue-bg').css('background-color') == 'rgb(0, 0, 255)');
  - text: <code>.black-bg</code>class 背景色应为黑色。
    testString: assert($('.black-bg').css('background-color') == 'rgb(0, 0, 0)');
  - text: <code>.red-bg</code>class 背景色应为红色。
    testString: assert($('.red-bg').css('background-color') == 'rgb(255, 0, 0)');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

</div>

</section>

## Solution
<section id='solution'>

The solution requires using the $color variable twice: once for the class name and once for setting the background color. You can use either the list or map data type.

### List Data type

```html
<style type='text/sass'>

  @each $color in blue, black, red {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

### Map Data type

```html
<style type='text/sass'>

  $colors: (color1: blue, color2: black, color3: red);

  @each $key, $color in $colors {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

</section>
