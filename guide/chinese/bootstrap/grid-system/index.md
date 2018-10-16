---
title: Grid System
localeTitle: 网格系统
---
## 网格系统

简而言之，Bootstrap网格系统可帮助您创建响应式布局，它包含一个行和列系统，可帮助您构建内容。

行是水平的列组，每行最多12列。在每行中，内容放置在列内，并且可以跨越1到12列之间的任何位置。

Bootstrap有五种不同类型的网格层，即Extra small，Small，Medium，Large和Extra large，为每个网格层定义了一个断点。

Bootstrap使用像素来定义网格层断点，作为网格层断点的不同视口宽度为：

#### 怎么运行的

###### 容器

容器是_包含_网格的最外层元素，在屏幕中间使用`container`作为固定宽度的容器（大屏幕上的额外边距）或`container-fluid`的全宽度。
```
<div class="container"></div> 
```

###### 行

使用`row`对`row`进行分组，这将使所有内容保持正确排列并帮助您构建网格。
```
<div class="row"></div> 
```

###### 列

列类指示您希望在每行可能使用的12列中使用的列数。例如`col-sm-6`将意味着你的专栏将使用了宽度的一半`row`在小屏幕上，和`col-lg-4`将使用了大屏幕上的三分之一。

以下是如何定义类前缀以在各种屏幕尺寸上使用一个列宽：

*   **超小** `col-1`
*   **小** `col-sm-1`
*   **中等** `col-md-1`
*   **大** `col-lg-1`
*   **超大** `col-xl-1`
```
<div class="col-sm-1"></div> 
```

#### 例

一个全宽网格，有四列，每个列在xs屏幕上占据整行，在sm和md屏幕上占据半行，在大屏幕和上面的屏幕上占据行宽度的四分之一。
```
<div class="container-fluid"> 
  <div class="row"> 
    <div class="col-12 col-sm-6 col-lg-4">First Column</div> 
    <div class="col-12 col-sm-6 col-lg-4">Second Column</div> 
    <div class="col-12 col-sm-6 col-lg-4">Third Column</div> 
    <div class="col-12 col-sm-6 col-lg-4">Forth Column</div> 
  </div> 
 </div> 
```

_请注意，未定义`col-md`和`col-xl` ，其中未定义大小，它将默认为下一个已指定的较小大小。_

Bootstrap提供了一个现成的12列网格系统，用于布局。请考虑以下代码。

```html

   <div class="container"> 
    <div class="row"> 
        <div class="col-md-6">Content</div> 
        <div class="col-md-6">Content</div> 
    <div> 
   </div> 
```

哪里：
```
- col = column 
 - md = screen size 
 - 6 = column width 
```

作为12列网格系统，所有用户定义的网格列宽度必须最多为12。

屏幕尺寸值可以分配如下：

*   xs - <768px手机
    
*   sm - <992px平板电脑
    
*   md - <1200px笔记本电脑
    
*   lg - > 1200px台式机
    
    Bootstrap首先是移动的并且响应迅速。
    
    移动优先意味着网格布局将自动响应较小的屏幕。然后，HTML定义更大屏幕的网格布局。
    

以下代码和图像显示了使用不同列宽的可能性。

```html

    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-6">Content</div> 
            <div class="example col-md-6">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-4">Content</div> 
            <div class="example col-md-4">Content</div> 
            <div class="example col-md-4">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-3">Content</div> 
            <div class="example col-md-3">Content</div> 
            <div class="example col-md-3">Content</div> 
            <div class="example col-md-3">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
        </div> 
    </div> 
```

![12-COL-格](https://github.com/bflatt72/bflatt72.github.io/blob/master/img/bootstrapgrid1.png)

#### 更多信息：

[Bootstrap Docs - 网格系统](https://getbootstrap.com/docs/4.0/layout/grid/)

_本指南基于Bootstrap v4（它将与v3一起使用，除了额外的小屏幕定义为`xs`且没有`xl`大小）_

*   超大： **视口宽度> = 1200px**
*   大： **视口宽度> = 992px**
*   中： **视口宽度> = 768px**
*   小： **视口宽度> = 576px**
*   超小： **视口宽度低于576px**

#### 更多信息：

https://getbootstrap.com/docs/4.0/layout/grid/