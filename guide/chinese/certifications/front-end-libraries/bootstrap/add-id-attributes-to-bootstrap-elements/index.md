---
title: Add id Attributes to Bootstrap Elements
localeTitle: 将id属性添加到Bootstrap元素
---
## 将id属性添加到Bootstrap元素

最后一个挑战是你在按钮元素中添加了一个类，这次你必须将id添加到具有良好类的div中。

### 提示1

id声明如下：

```html

<element id="id(s)List"></element> 
```

### 提示2

编辑具有良好类的div标签

### 提示3

对两个孔使用不同的id。

### 提示4

`left-well` ，井`right-well` 。

### 解

由于您必须向两个井添加id并且两者都具有唯一ID，因此以下是解决方案：

```html

<div class="container-fluid"> 
  <h3 class="text-primary text-center">jQuery Playground</h3> 
  <div class="row"> 
    <div class="col-xs-6"> 
      <div class="well" id="left-well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
    <div class="col-xs-6"> 
      <div class="well" id="right-well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
  </div> 
 </div> 

```