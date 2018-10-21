---
title: Buttons
localeTitle: 纽扣
---
## 纽扣

Bootstrap框架为您提供各种按钮样式选项。这些样式可帮助您为用户提供按钮可能执行的操作的可视化表示。

#### 如何使用：

要使用引导按钮，请按照与在HTML中创建按钮相同的步骤进行操作，除了您还将适用的CSS类应用于按钮。下面提供了一个代码示例。

**代码示例：**

`<button type="button" class="btn btn-primary">Primary</button>`

主

您还可以使用带有`<a>`和`<input>`元素的引导按钮，如下面的示例所示。

`<a class="btn btn-primary" href="#" role="button">This button is a link</a>`

[这个按钮是一个链接](#)

`<input class="btn btn-primary" type="submit" value="Submit">`

#### 引导按钮类列表：

这是bootstrap为按钮提供的CSS类的列表。

`.btn`这是bootstrap的基本按钮。

基本

`.btn-default`这是bootstrap的默认按钮。

默认

`.btn-primary`这是bootstrap的主按钮。

主

`.btn-success`这是bootstrap的成功按钮。

成功

`.btn-info`这是bootstrap的信息按钮。

信息

`.btn-warning`这是bootstrap的警告按钮。

警告

`.btn-danger`这是bootstrap的危险按钮。

危险

`.btn-link`这是bootstrap的链接按钮。

链接

`.btn-light`这是bootstrap的灯按钮。

光

#### Bootstrap按钮尺寸：

这是针对不同大小的按钮的CSS类列表。

`.btn-lg`这是bootstrap的大按钮。

大

`.btn-sm`这是bootstrap的小按钮。

小

`.btn-xs`这是bootstrap的超小按钮。

超小

#### Bootstrap概述按钮：

也可以使用轮廓按钮而不是完全着色的按钮。这是通过将中间修复`outline`放在所需的按钮类之间来实现的。示例用法如下：

`<button type="button" class="btn btn-outline-primary">Primary</button>`

从版本4开始，概述按钮是Bootstrap的一部分，如果您无法使用它们，请确保使用正确的版本。

_注意：不要在HTML类属性中包含点，指的是带有点的类仅在调整CSS中的类时使用。_

#### 更多信息：

*   [Bootstrap Buttons文档](https://getbootstrap.com/docs/4.0/components/buttons/)
*   [Bootstrap按钮组文档](http://getbootstrap.com/docs/4.0/components/button-group/)
*   [Bootstrap入门](/articles/bootstrap/bootstrap-get-started)