---
title: Guide to Build a Sliding Image Gallery
localeTitle: 构建滑动图像库的指南
---
本教程将引导您使用[jQuery](https://jquery.com/)库构建图像滑块。

[![GIF显示Slider在行动](//discourse-user-assets.s3.amazonaws.com/original/2X/0/08d83a22c28da836a06853b1f1ea669b398326b9.gif)](https://codepen.io/atjonathan/pen/BKMxxq)

本教程将包含四个部分：

*   [HTML](#html)
*   [SCSS](#scss)
*   [JS](#js)
*   [参考](#references)

## HTML

我们将在本教程中使用[Bootstrap](http://getbootstrap.com/)来保持良好的外观，而无需花费大量时间。

我们的结构如下：
```
<div class="container"> 
 
  <!-- The wrapper for our slider --> 
  <div class="slider"> 
    <ul class="slides"><!-- Each image will be inside this unordered list --></ul> 
  </div> 
 
  <div class="buttons"><!-- Pause and play buttons will go in here --></div> 
 
 </div> 
```

在我们的`ul`与`slides`类中，我们将有以下内容：
```
<li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
```

在我们的`.buttons`类中，你应该有以下内容：
```
<button type="button" class="btn btn-default pause"> 
    <span class="glyphicon glyphicon-pause"></span> 
 </button> 
 <button type="button" class="btn btn-default play"> 
    <span class="glyphicon glyphicon-play"></span> 
 </button> 
```

以下是您的`html`应该是什么样子的示例：

> 注意：您应该将image `src`属性替换为您自己的内容。
```
<div class="container"> 
 
  <div class="slider"> 
    <ul class="slides"> 
      <li class="slide"><img src="https://unsplash.it/1280/720/?image=120" /></li> 
      <li class="slide"><img src="https://unsplash.it/1280/720/?image=70" /></li> 
      <li class="slide"><img src="https://unsplash.it/1280/720/?image=50" /></li> 
      <li class="slide"><img src="https://unsplash.it/1280/720/?image=170" /></li> 
      <li class="slide"><img src="https://unsplash.it/1280/720/?image=190" /></li> 
    </ul> 
  </div> 
 
  <div class="buttons"> 
    <button type="button" class="btn btn-default pause"> 
      <span class="glyphicon glyphicon-pause"></span> 
    </button> 
    <button type="button" class="btn btn-default play"> 
      <span class="glyphicon glyphicon-play"></span> 
    </button> 
  </div> 
 
 </div> 
```

## SCSS

我们使用[Sass](http://sass-lang.com/)和SCSS语法，因此我们可以嵌套和使用变量![:heart_decoration:](//forum.freecodecamp.com/images/emoji/emoji_one/heart_decoration.png?v=2 "：heart_decoration：")

我们可以使用以下SCSS来定义我们的样式：
```
// Variables 
 $width: 720px; 
 
 .slider { 
  width: $width; 
  height: 400px; 
  overflow: hidden; 
  margin: 0 auto; 
  text-align: center; 
 
  .slides { 
    display: block; 
    width: 6000px; 
    height: 400px; 
    margin: 0; 
    padding: 0; 
  } 
 
  .slide { 
    float: left; 
    list-style-type: none; 
    width: $width; 
    height: 400px; 
 
    img { 
      width: 100%; 
      height: 100%; 
    } 
  } 
 } 
 
 .buttons { 
  margin: 0; 
  width: $width; 
  position: relative; 
  top: -40px; 
  margin: 0 auto; 
 
  .play { 
    display: none; 
  } 
 
  .btn { 
    display: flex; 
    margin: 0 auto; 
    text-align: center; 
  } 
 } 
```

## JS

#### 变量

_在下面的代码片段中，我们定义了稍后在代码中使用的变量。_
```
var animationSpeed = 1000; // How quickly the next slide animates. 
 var pause = 3000; // The pause between each slide. 
```

我们将使用一个空变量，我们将调用`setInterval`方法：
```
var interval; 
```

#### 动画我们将滑块动画包装在一个函数中：
```
function startSlider() {} 
```

我们使用`setInterval()`本机JavaScript方法在基于时间的触发器上自动化函数的内容。
```
interval = setInterval(function() {}, pause); 
```

我们使用`pause`变量来查看再次调用函数之前要等待多少毫秒。在此处阅读有关本机`setInterval`方法的更多信息：https：//developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval。在我们的函数内部，我们将使用jQuery在animationSpeed变量的速度之间淡入幻灯片：
```
$('.slides > li:first') 
  .fadeOut(animationSpeed) 
  .next() 
  .fadeIn(animationSpeed) 
  .end() 
  .appendTo('.slides'); 
```

*   我们使用`$('.slides > li:first')`定位第一`$('.slides > li:first')` 。 - `.fadeOut(animationSpeed)`将淡出第一张幻灯片，然后使用`.next()` ，我们移动到下一张幻灯片。 - 一旦我们移动到下一张幻灯片，我们将淡入淡出： `.fadeIn(animationSpeed)` 。 - 此序列将一直持续到最后一张幻灯片（ `.end()` ），然后我们停止动画。我们现在将调用`startSlider`函数来启动动画：
    
    startSlider（）;
    

#### 播放和暂停_此功能是可选的，但很容易实现。_我们将隐藏播放按钮，因此我们看不到播放和暂停按钮：
```
$('.play').hide(); // Hiding the play button. 
```

我们现在将创建暂停按钮（在页面加载时自动显示）：
```
$('.pause').click(function() { 
    clearInterval(interval); 
    $(this).hide(); 
    $('.play').show(); 
 }); 
```

*   每次使用jQuery单击暂停按钮时，我们将调用我们的函数。 - 我们将使用`clearInterval`方法删除间隔，并使用我们的`interval`变量作为参数，指示要停止的间隔。 - 因为我们的滑块已暂停，我们将使用`$(this).hide();`隐藏暂停按钮`$(this).hide();` 。注意：我们正在使用`this` ，它将引用我们的父母正在调用的内容，即`.pause` 。 - 然后我们将显示我们的播放按钮，以便用户可以恢复动画： `$('.play').show();` 。以下代码设置我们的播放按钮（在页面加载时自动隐藏）：
    
    $（'。play'）。click（function（）{ startSlider（）; $（本）.hide（）; $（ '暂停'）显示（）。 }）;
    
*   每次使用jQuery单击播放按钮时，我们将调用我们的函数。
    
    *   我们将使用`startSlider`函数启动或重新启动间隔。
    *   因为我们的滑块当前正在播放，我们将使用`$(this).hide();`隐藏播放按钮`$(this).hide();` 。注意：我们正在使用`this` ，它将引用我们的父母`.play` 。
    *   然后我们将显示我们的暂停按钮，以便用户可以随意停止动画： `$('.pause').show();` 。

## 参考

*   查看本教程的[CodePen](https://codepen.io/atjonathan/pen/BKMxxq)上的源代码和示例。