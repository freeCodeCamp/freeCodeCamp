---
title: Z Index Property
localeTitle: 使用索引属性
---
## Z指数属性

z-index属性指定元素的堆栈顺序。 网页上的任何定位元素可以按特定顺序彼此重叠，模仿垂直于屏幕的第三维度。 堆栈顺序较大的元素始终位于堆栈顺序较低的元素前面。堆栈顺序由z-index控制。此属性仅适用于位置值设置为绝对值，固定值或相对值的元素。

#### 句法

z-index：auto | number | initial | inherit;

#### 例
```
div { 
  position: absolute; 
  z-index: -1; 
 } 
```

#### 值

自动：将堆栈顺序设置为等于其父项。这是默认的。 Number：设置元素的堆栈顺序。允许使用负数。值越高，元素越高。使用相同的z-index值，下面的HTML代码中描述的元素将位于前面。 Initial：将此属性设置为其默认值。 继承：从其父元素继承此属性。

#### 更多信息：

[MDN上的Z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) [Z-index onW3schools](https://www.w3schools.com/cssref/pr_pos_z-index.asp)