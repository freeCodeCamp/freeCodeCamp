---
title: Grid Examples
localeTitle: 网格示例
---
## 网格示例

#### 树等于列

```html

<div class="container"> 
  <div class="row"> 
    <div class="col-sm"> 
      One of three columns 
    </div> 
    <div class="col-sm"> 
      One of three columns 
    </div> 
    <div class="col-sm"> 
      One of three columns 
    </div> 
  </div> 
 </div> 
```

上面的示例使用我们预定义的网格类在小型，中型，大型和超大型设备上创建三个等宽列。这些列在页面中居中，父级为`.container` 。

#### 三个不平等的列

```html

 <div class="row"> 
  <div class="col-sm-3">.col-sm-3</div> 
  <div class="col-sm-6">.col-sm-6</div> 
  <div class="col-sm-3">.col-sm-3</div> 
 </div> 
```

#### 两个不等的列

```html

 <div class="row"> 
  <div class="col-sm-4">.col-sm-4</div> 
  <div class="col-sm-8">.col-sm-8</div> 
 </div> 
```

#### 两列嵌套列的两列

```html

 <div class="row"> 
  <div class="col-sm-8"> 
    .col-sm-8 
    <div class="row"> 
      <div class="col-sm-6">.col-sm-6</div> 
      <div class="col-sm-6">.col-sm-6</div> 
    </div> 
  </div> 
  <div class="col-sm-4">.col-sm-4</div> 
 </div> 
```

#### 混合移动和桌面

\`\`\`HTML

.col-xs-7 .col-sm-6 .col-lg-8

.col-xs-5 .col-sm-6 .col-lg-4

.col-xs-6 .col-sm-8 .col-lg-10

.col-xs-6 .col-sm-4 .col-lg-2
```
#### Clear Floats 
 
 Clear floats (with the `.clearfix` class) at specific breakpoints to prevent strange wrapping with uneven content: 
```

HTML

第1栏 调整浏览器窗口的大小以查看效果。

第2栏

第3栏

第4栏
```
#### Offsetting Columns 
 Move columns to the right using `.col-md-offset-*` classes. These classes increase the left margin of a column by * columns: 
```

HTML

.col-sm-5 .col-md-6

.col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0
```
#### Push And Pull - Change Column Ordering 
 Change the order of the grid columns with `.col-md-push-*` and `.col-md-pull-*` classes: 
```

HTML

.col-sm-4 .col-sm-push-8

.col-sm-8 .col-sm-pull-4

\`\`\`

#### 更多信息：

[Bootstrap网格](https://getbootstrap.com/docs/4.0/layout/grid/)