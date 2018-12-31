---
title: How to Use Lists
localeTitle: 如何使用列表
---
## 如何使用列表

列表用于以良好形式和语义的方式指定一组连续项或相关信息，例如成分列表或程序步骤列表。 HTML标记有三种不同类型的列表- **有序** **，unordored**和**说明**列表。

### 订购列表

有序列表用于按特定顺序对一组相关项目进行分组。 此列表使用`<ol>`标记创建。每个列表项都包含`<li>`标记。

##### 码

```html

<ol> 
    <li>Mix ingredients</li> 
    <li>Bake in oven for an hour</li> 
    <li>Allow to stand for ten minutes</li> 
 </ol> 
```

##### 例

1.  混合成分
2.  在烤箱里烤一小时
3.  允许站立十分钟

### 无序列表

无序列表用于按照特定顺序对一组相关项进行分组。此列表使用`<ul>`标记创建。每个列表项都包含`<li>`标记。

##### 码

```html

<ul> 
    <li>Chocolate Cake</li> 
    <li>Black Forest Cake</li> 
    <li>Pineapple Cake</li> 
 </ul> 
```

#### 例

*   巧克力蛋糕
*   黑森林蛋糕
*   菠萝蛋糕

### 说明列表

描述列表用于指定术语列表及其描述。此列表使用`<dl>`标记创建。每个列表项都包含`<dd>`标记。

##### 码

```html

<dl> 
    <dt>Bread</dt> 
    <dd>A baked food made of flour.</dd> 
    <dt>Coffee</dt> 
    <dd>A drink made from roasted coffee beans.</dd> 
 </dl> 
```

##### 产量

面包

由面粉制成的烘焙食品。

咖啡

由烘焙过的咖啡豆制成的饮料。

#### 造型清单

您还可以控制列表的样式。您可以使用`list-style`属性。您的列表可以是子弹，方形，罗马数字，也可以是您想要的图像。

`list-style`属性是`list-style-type` ， `list-style-position` ， `list-style-image`的简写。

#### 更多信息：

\[HTML列表·Web平台文档\]（https://webplatform.github.io/docs/guides/html\_lists/ ）