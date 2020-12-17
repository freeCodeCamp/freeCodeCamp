---
id: 587d7dbf367417b2b2512bba
title: 使用 @each 遍历列表中的项目
challengeType: 0
forumTopicId: 301461
---

# --description--

最后一个挑战显示了`@for`指令如何使用起始值和结束值循环一定次数。Sass 还提供`@each`指令，该指令循环遍历列表或映射中的每个项目。 在每次迭代时，变量将从列表映射赋值给当前值。

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

请注意，需要`$key`变量来引用 map 中的键。否则，编译后的 CSS 将包含`color1`，`color2`...... 以上两个代码示例都转换为以下 CSS：

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

# --instructions--

编写一个`@each`指令，通过一个列表：`blue,black,red`并将每个变量分配给`.color-bg`class, 其中每个项目的“颜色”部分都会发生变化。 每个 class 都应该将`background-color`设置为相应的颜色。

# --hints--

你的代码应使用`@each`指令。

```js
assert(code.match(/@each /g));
```

`.blue-bg`class 背景色应为蓝色。

```js
assert($('.blue-bg').css('background-color') == 'rgb(0, 0, 255)');
```

`.black-bg`class 背景色应为黑色。

```js
assert($('.black-bg').css('background-color') == 'rgb(0, 0, 0)');
```

`.red-bg`class 背景色应为红色。

```js
assert($('.red-bg').css('background-color') == 'rgb(255, 0, 0)');
```

# --solutions--

