---
title: SVG Shapes
localeTitle: SVG形状
---
## SVG形状

可以使用SVG绘图创建多个形状。 SVG绘图可以使用和组合七种形状：路径，矩形，圆形，椭圆形，直线，折线和多边形。

### 路径

`path`元素是最常见的，通常由用于导出SVG代码的程序生成。

```svg
  <path d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z" /> 
```

上面的示例`path`在SVG绘图中使用时将生成“加”符号（+）。 SVG `path`元素不是手动构建的，而是通过可以操作矢量图形的设计程序生成的，例如Illustrator或Inkscape。

### 长方形

矩形元素`rect`在屏幕上绘制一个矩形，它接受六个属性。

```svg
  <rect x="0" y="0" width="100" height="50" rx="10" ry="10" /> 
```

`x`和`y`指定矩形左上角的位置， `width`和`height`指定矩形的大小。 `rx`和`ry`指定矩形角的半径，类似于CSS border-radius属性。

### 圈

圆元素`circle`接受三个属性。

```svg
  <circle cx="100" cy="100" r="50" /> 
```

`cx`和`cy`指定圆心的位置， `r`指定圆的半径（大小）。

### 椭圆

椭圆元素`ellipse`与`circle`元素类似，只是半径被分成两个属性。

```svg
  <ellipse cx="100" cy="100" rx="50" ry="20" /> 
```

同样， `cx`和`cy`指定椭圆中心的位置，现在`rx`和`ry`指定椭圆的水平和垂直半径。较大的`rx`将给出“胖”椭圆，而较大的`ry`将给出更细的椭圆。如果`rx`和`ry`相等，它将形成一个圆。

### 线

`line`元素很简单，并且接受四个属性。

```svg
  <line x1="0" x2="100" y1="50" y2="70" /> 
```

`x1`和`y1`属性指定行的第一个点， `x2`和`y2`属性指定行的第二个点。

### 折线

`polyline`是一系列连接的直线，在单个属性中指定。

```svg
  <polyline points="0 100, 50 70, 60 40, 20 0" /> 
```

`points`属性指定一个点列表，每个点用逗号分隔。

### 多边形

`polygon`元素也是一系列连接的直线，但在这种情况下，最后一行将自动重新连接到初始点。

```svg
  <polygon points="0 100, 50 70, 60 40, 20 0" /> 
```

此示例将绘制与上面的`polyline`相同的形状，但它将绘制一条额外的线以“关闭”一系列线条。

## 更多信息

MDN文档： [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)