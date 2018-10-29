---
title: Carousel
localeTitle: 圆盘传送带
---
## 圆盘传送带

Carousel是一个幻灯片组件，用于循环播放图像或文本幻灯片等元素。 它以平滑的方式提供了一种通过滑动或循环来表示大量数据（文本或图像）的动态方式

图像滑块的示例代码如下：

```html

<html> 
 <head> 
 
 <!-- BootStrap's minified CSS version --> 
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"> 
 
 
 </head> 
 
 <style> 
 
 .carousel-indicators li 
 { 
 background-color:red; 
 } 
 
 .carousel-indicators .active 
 { 
 background-color:blue; 
 } 
 
 .carousel-indicators .item 
 { 
 height:700 px; 
 width :800 px; 
 } 
 </style> 
 
 
 <body> 
  <!-- Declaring div for Carousel to appear inside it --> 
 <div class="container"> 
 
 <div id="myCarousel" class="carousel slide" data-ride="carousel"> 
 
 <!-- Indicators --> 
 
 <ol class="carousel-indicators"> 
   <li data-target="#myCarousel" data-slide-to="0" class="active"></li> 
   <li data-target="#myCarousel" data-slide-to="1" ></li> 
   <li data-target="#myCarousel" data-slide-to="2"></li> 
 </ol> 
 
  <!-- Wrapper for Slides  --> 
 <div class="carousel-inner"> 
 
 <div  class="item active"> 
  <img src="http://res.cloudinary.com/dneh1l9vl/image/upload/v1506241850/Hello_bootstrap_ohtphr.png" alt="Hello_Bootstrap" > 
 </div> 
 
 <div  class="item"> 
  <img src="http://res.cloudinary.com/dneh1l9vl/image/upload/v1506613859/devices_bootstrap_nk4zlk.jpg" alt="Device_Bootstrap" > 
 </div> 
 
 <div  class="item"> 
  <img src="http://res.cloudinary.com/dneh1l9vl/image/upload/v1506613966/responsive_bootstrap_nzuo9l.jpg" alt="Responsive_Bootstrap"> 
 </div> 
 
 </div> 
 
 <!-- Left and Right Controls for sliding through the slides  --> 
 
 <a class="left carousel-control"  href="#myCarousel" data-slide="prev"> 
 <span class="glyphicon glyphicon-chevron-left"></span> 
 </a> 
 
 <a class="right carousel-control"  href="#myCarousel" data-slide="next"> 
 <span class="glyphicon glyphicon-chevron-right"></span> 
 </a> 
 
 </div> 
 </div> 
 
 
 <!-- Optional JavaScript --> 
 <!-- jQuery first, then Popper.js, then Bootstrap JS --> 
 <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script> 
 
 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script> 
 
 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script> 
 
 </body> 
 </html> 
```

理解上面示例中使用的属性和类：

### 1）属性

a） `data-ride` ： - `data-ride ="carousel"`允许页面加载动画开始。

b） `data-target` ： - 它指向轮播的id

c） `data-slide-to` ： - 它指定在单击指示器（特定点）时要移动到哪个幻灯片。

### 2）课程

a） `carousel` ： - `class="carousel"`指定div包含轮播。

b） `slide` ： - 此类添加CSS过渡。

c） `carousel-inner` ： - 这表示将保存要在幻灯片中显示的文本/图像的代码部分。

d） `item` ： - 它指的是要在轮播中显示的内容。

e） `left carousal-control` ： - 这增加了后退按钮，允许滑动到上一张幻灯片。

f） `right carousal-control` ： - 这增加了下一个按钮，允许滑动到下一张幻灯片。

g） `carousel-caption` ： - 此类允许您为每张幻灯片添加标题。

注意：为每个项目添加`class="carousel-caption"` 。

### 用法

#### 1）通过数据属性

`data-ride="carousel"`属性用于将轮播标记为从页面加载开始的动画。 `data-slide`接受关键字`prev`或`next` ，这会改变相对于当前位置的幻灯片位置。

#### 2）通过JavaScript

手动调用轮播：

`$('.carousel').carousel()`

### 选项

选项可以通过数据属性或JavaScript传递。对于数据属性，将选项名称附加到`data-` ，如`data-interval=""` 。

一些常用的选项是：

*   间隔
*   暂停
*   骑
*   包

## 额外细节

*   [Bootstrap Carousel](https://getbootstrap.com/docs/4.0/components/carousel/)