---
title: Responsive Web Design
localeTitle: 响应式网页设计
---
## 响应式网页设计

响应式网页设计是设计适应不同屏幕尺寸的网页的概念。它通常涉及使用不同的布局，字体大小和导航菜单的位置。

为了创建响应式网页，CSS通常用于设置HTML元素的样式。 CSS中用于创建响应式Web设计的一些常用方法是：

1.  编写[媒体查询](https://guide.freecodecamp.org/css/media-queries)
2.  使用预先存在的[CSS框架](https://guide.freecodecamp.org/css/css-frameworks)
3.  使用[Flexbox模型](https://guide.freecodecamp.org/css/layout/flexbox)
4.  使用[CSS网格](https://guide.freecodecamp.org/css/layout/grid-layout)

### 1.媒体查询

媒体查询告诉Web浏览器根据屏幕宽度等特定属性或用户是否正在打印来忽略或替换网页的属性。
```
@media (query) { 
  /* The browser will use the CSS rules within the curly braces when the query is true */ 
 } 
```

以下示例在屏幕宽度小于或等于768px时，在类`more-padding`设置`padding-left`和`padding-right` 。
```
@media screen and (max-width: 768px) { 
    .more-padding { 
        padding-left: 10px; 
        padding-right: 10px; 
    } 
 } 
```

### 2\. CSS框架

[Bootstrap](https://www.getbootstrap.com/) ， [Material Design Lite](https://getmdl.io/)和[Foundation](https://foundation.zurb.com/)等CSS框架预先构建了CSS类，使响应式设计编码更加简单。这些类的操作类似于标准HTML类。

在此示例中， `col-md-9`和`col-sm-6`根据屏幕是小型还是中型来设置`<div>`标签的宽度。

```html

<div class="col-12 col-md-6"></div> 
```

Bootstrap框架将一行划分为十二列。在上面的例子中， `<div>`将分布在其中的九个或六个中。如下图所示，网格系统是Bootstrap如何简化响应式设计的基础。

![Grid Example](https://www.javatpoint.com/bootstrappages/images/bootstrapgrid.jpg "基本网格示例")

### 更多信息：

1.  [CSS Flexbox完成教程8分钟](https://medium.freecodecamp.org/css-flexbox-interactive-tutorial-in-8-minutes-including-cheat-sheet-6214e00de3d2)
2.  [Freecodecamp CSS部分](https://guide.freecodecamp.org/css) 。
3.  [CodingTutorials360的CSS Flexbox教程](https://www.youtube.com/watch?v=zBjUEDzK-ow)