---
title: Navigation Bar
localeTitle: 导航栏
---
## 导航栏

Bootstrap框架为您提供了一个功能调用导航栏。简而言之，导航栏（也称为导航栏）是页面顶部的标题，用于显示导航信息。

#### 如何使用

要使用Bootstrap导航栏，可以在网页的`<body>`元素内部的顶部添加`<nav>`元素。您可以添加各种样式来自定义导航栏的显示。

#### 代码示例

这是制作基本导航栏所需的代码。

```html

<nav class="navbar navbar-default"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
  </div> 
 </nav> 
```

#### 导航样式

Bootstrap在Bootstrap框架中提供了一组类来设置导航栏的样式。这些课程如下：

*   `navbar navbar-default`这是`navbar navbar-default`的默认样式。
*   `navbar navbar-inverse`这与默认样式类似，但颜色是反转的。

#### 将下拉菜单添加到导航栏

您可以在导航栏中包含下拉菜单。此功能要求您包含Bootstrap的javascript文件以使其正常工作。

```html

<li class="dropdown"> 
  <a class="dropdown-toggle" data-toggle="dropdown" href="#">Drop down 
    <span class="caret"></span> 
  </a> 
 <ul class="dropdown-menu"> 
    <li><a href="#">Item 1</a></li> 
    <li><a href="#">Item 2</a></li> 
    <li><a href="#">Item 3</a></li> 
  </ul> 
 </li> 
```

#### 向导航栏添加按钮

您可以在导航栏上添加按钮。现有的Bootstrap Button类可以工作，但是您需要将类`navbar-btn`包含在类列表的末尾。

```html

<button class="btn navbar-btn">Button</button> 
```

#### 将表单添加到导航栏

您还可以向导航栏添加表单。这可以用于诸如搜索字段，快速登录字段等任务。

```html

<form class="navbar-form navbar-right"> 
  <div class="form-group"> 
      <input type="text" class="form-control" placeholder="Search"> 
  </div> 
  <button type="submit" class="btn btn-default">Search</button> 
 </form> 
```

#### 将元素对齐到导航栏上的右侧

在某些情况下，您可能希望将导航栏中的元素对齐到右侧（例如登录或注册按钮）。为此，您需要使用`navbar-right`类。

```html

<nav class="navbar navbar-default"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
    <ul class="nav navbar-nav navbar-right"> 
      <li><a href="#">Action Link #1</a></li> 
      <li><a href="#">Action Link #2</a></li> 
    </ul> 
  </div> 
 </nav> 
```

#### 独立于滚动显示导航栏

在某些情况下，您可能希望将导航栏保持在屏幕的顶部或底部，而不管滚动。您需要将`navbar-fixed-top`或`navbar-fixed-bottom`类添加到`<nav>`元素。

```html

<nav class="navbar navbar-default navbar-fixed-top"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
  </div> 
 </nav> 
```

#### 折叠导航栏

在小屏幕（例如手机或平板电脑）上，导航栏将占用太多空间。幸运的是，存在折叠导航栏的选项。您可以使用以下示例完成此操作。

```html

<nav class="navbar navbar-default"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
  </div> 
 </nav> 
```

#### Navbar示例

`navbar navbar-default`

[网站名称](#navbar-default)

*   [家](#navbar-default)
*   [第1页](#navbar-default)
*   [第2页](#navbar-default)
*   [第3页](#navbar-default)
按键

*   [行动链接＃1](#navbar-default)
*   [行动链接＃2](#navbar-default)

`navbar navbar-inverse`

[网站名称](#navbar-inverse)

*   [家](#navbar-inverse)
*   [第1页](#navbar-inverse)
*   [第2页](#navbar-inverse)
*   [第3页](#navbar-inverse)
按键

*   [行动链接＃1](#navbar-inverse)
*   [行动链接＃2](#navbar-inverse)

#### 更多信息：

[BootStrap导航栏文档](https://getbootstrap.com/docs/4.0/components/navbar/)