---
id: 587d7dbe367417b2b2512bb9
title: 使用 @for 创建一个 Sass 循环
challengeType: 0
forumTopicId: 301462
---

# --description--

你可以在 Sass 中使用`@for`循环，它的表现类似与 JavaScript 中的`for`循环。

`@for`以两种方式使用："start through end" 或 "start to end"。主要区别在于“开始结束”*排除* 结束号码，而“开始结束”*包括* 结束号码。

这是一个开始 **到** 结束示例：

```scss
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```

`#{$i}`部分是将变量（`i`）与文本组合成字符串的语法。当 Sass 文件转换为 CSS 时，它看起来像这样：

```scss
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```

这是创建网格布局的有效方法。现在，你有 12 个可用作 CSS classes 的列宽选项。

# --instructions--

编写`@for`指令，使`$j`的值为从 1（包含）到 6（不包含）。

它应该创建 5 个名为`.text-1`的 classes 到`.text-5`，其中每个 class 的`font-size`设置为 15px 乘以索引。

# --hints--

你应使用`@for`指令。

```js
assert(code.match(/@for /g));
```

`.text-1`class 的`font-size`应为 15px。

```js
assert($('.text-1').css('font-size') == '15px');
```

`.text-2`class 的`font-size`应为 30px。

```js
assert($('.text-2').css('font-size') == '30px');
```

`.text-3`class 的`font-size`应为 45px。

```js
assert($('.text-3').css('font-size') == '45px');
```

`.text-4`class 的`font-size`应为 60px。

```js
assert($('.text-4').css('font-size') == '60px');
```

`.text-5`class 的`font-size`应为 75px。

```js
assert($('.text-5').css('font-size') == '75px');
```

# --solutions--

