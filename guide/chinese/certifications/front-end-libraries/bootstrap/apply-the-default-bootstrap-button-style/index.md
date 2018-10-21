---
title: Apply the Default Bootstrap Button Style
localeTitle: 应用默认引导按钮样式
---
## 应用默认引导按钮样式

最后一个挑战是你创建了6个按钮，每个井元素中有3个，这次你需要为这些按钮添加类。

### 暗示

使用以下语法声明类：

```html

<button class="class(es)Name"></button> 
```

### 解

由于您必须添加`btn`和`btn-default`类，因此以下是解决方案：

```html

<div class="container-fluid"> 
  <h3 class="text-primary text-center">jQuery Playground</h3> 
  <div class="row"> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button class="btn btn-default"></button> 
        <button class="btn btn-default"></button> 
        <button class="btn btn-default"></button> 
      </div> 
    </div> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button class="btn btn-default"></button> 
        <button class="btn btn-default"></button> 
        <button class="btn btn-default"></button> 
      </div> 
    </div> 
  </div> 
 </div> 

```