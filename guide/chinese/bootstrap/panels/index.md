---
title: Panels
localeTitle: 面板
---
## 面板

Bootstrap框架为您提供了一个名为面板的功能。面板是一个具有样式标题的框，然后是一个允许您通过一组或多个面板以有组织的方式显示信息的主体。

#### 如何使用：

要使用Bootstrap面板，您需要为您的面板类型添加一个`<div>` （类`panel panel-default`或类似的，请参阅面板示例以获取更多信息。）然后使用两个嵌套的`<div>`标记，一个用于标题（类`panel panel-heading` ）和一个用于主体（类`panel panel-body` ）。您可能会发现代码示例比书面说明更容易理解。

**代码示例**

```html

<div class="panel panel-primary"> 
  <div class="panel panel-heading">Panel Primary</div> 
  <div class="panel panel-body"> This is a panel with the primary panel style.</div> 
 </div> 
```

#### 面板示例：

这是一组显示每种类型面板的示例。每个示例上方都显示了CSS类。

`panel panel-default`

面板默认

这是一个具有默认面板样式的面板。

`panel panel-primary`

小组小学

这是一个具有主要面板样式的面板。

`panel panel-success`

小组成功

这是一个具有成功面板风格的面板。

`panel panel-info`

面板信息

这是一个具有信息面板样式的面板。

`panel panel-warning`

面板警告

这是一个带有警告面板样式的面板。

`panel panel-danger`

面板危险

这是一个危险面板样式的面板。

### 更多信息

*   [Bootstrap下拉文档](https://getbootstrap.com/docs/4.0/components/dropdowns/)