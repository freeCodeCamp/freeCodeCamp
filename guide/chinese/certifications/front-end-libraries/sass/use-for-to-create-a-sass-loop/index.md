---
title: Use @for to Create a Sass Loop
localeTitle: 使用@for创建Sass循环
---
## 使用@for创建Sass循环

1.  SASS中`@for`循环的基本语法：

*   For - through循环：

```sass
@for $i from <start number> through <end number> { 
  // some CSS 
 } 
```

*   For - to循环：

```sass
@for $i from <start number> to <end number> { 
  // some CSS 
 } 
```

请注意，主要区别在于“开始结束” **排除**了结束编号，“从头开始” **包括**结束编号。

2.  例如：

*   For - through循环：

```sass
@for $i from 1 through 3 { 
  // some CSS 
 } 
 
 // 1 2 
```

*   For - to循环：

```sass
@for $i from 1 to 3 { 
  // some CSS 
 } 
 
 // 1 2 3 
```

3.  [SASS指南的指南](https://sass-guidelin.es/#loops)

与CSS' `:nth-*`伪类结合使用时， `@for`循环可能很有用。除了这些场景之外，如果必须迭代某些东西，则更喜欢`@each`循环。

```sass
@for $i from 1 through 10 { 
  .foo:nth-of-type(#{$i}) { 
    border-color: hsl($i * 36, 50%, 50%); 
  } 
 } 
```

总是使用`$i`作为变量名称来坚持通常的约定，除非你有充分的理由，不要使用to关键字：始终使用。许多开发人员甚至不知道Sass提供这种变化;使用它可能会导致混淆。

另外，请务必遵守这些准则以保持可读性：

*   在`@for`之前总是一个空的新行;
*   除非下一行是右括号（}），否则在右大括号（}）之后总是一个空的新行。