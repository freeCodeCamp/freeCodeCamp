---
title: Create a Class to Target with jQuery Selectors
localeTitle: 使用jQuery选择器创建一个目标类
---
## 使用jQuery选择器创建一个目标类

最后一个挑战是你在你的`html <button></button>`元素中添加了一些类来设置它们的样式，这次你需要为那些允许jQuery定位它们的按钮添加其他类。

### 暗示

编辑课程

### 解

由于您必须添加`target`类，因此以下是解决方案：

```html

<div class="container-fluid"> 
  <h3 class="text-primary text-center">jQuery Playground</h3> 
  <div class="row"> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
  </div> 
 </div> 

```