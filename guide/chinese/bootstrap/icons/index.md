---
title: Icons
localeTitle: 图标
---
## 图标

Bootstrap框架为您提供Glyphicons图标。 默认情况下，Bootstrap不包含图标库，但它有一些建议供您选择。虽然大多数图标集包含多种文件格式，但我们更喜欢SVG实现，以提高其可访问性和矢量支持。

### 如何使用

要使用Bootstrap图标，请创建带有基类`glyphicon`和单个图标类的span标记。 仅在不包含文本内容且没有子元素的元素上使用它。

**代码示例：**

`<span class="glyphicon glyphicon-search" aria-hidden="true"></span>`

`<span class="glyphicon glyphicon-cog"></span>`

Bootstrap框架为您提供了超过250个名为字形的图标。它们来自Glyphicon Halflings套装的字体格式。

### 如何使用

要使用引导程序图标，只需创建`<span>`标记并为该图标应用适用的CSS类。下面提供了一个代码示例。

**代码示例：**

`<span class="glyphicon glyphicon-search" aria-hidden="true"></span>`

### Bootstrap Glyphicon类列表

这是bootstrap为glyphicons提供的CSS类的示例。 [这里有](https://getbootstrap.com/docs/3.3/components/#glyphicons)更多可用的[东西](https://getbootstrap.com/docs/3.3/components/#glyphicons)

`.glyphicon glyphicon-plus`这是bootstrap的加/添加图标。

`.glyphicon glyphicon-trash`这是bootstrap的垃圾/删除图标。

_注意：不要在HTML类属性中包含点，指的是带有点的类仅在调整CSS中的类时使用。_

### 按钮中的引导程序图标

```html

  <button type="button" class="btn btn-default" aria-label="Left Align"> 
    <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span> 
  </button> 
```

_注意：Bootstrap的Glyphicons图标在bootstrap V4上无法使用_

### 更多信息：

*   [Bootstrap Glyphicons Icons Doc](https://getbootstrap.com/docs/3.3/components/#glyphicons)