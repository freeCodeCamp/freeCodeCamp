---
title: jQuery Effects Hide Method
localeTitle: jQuery效果隐藏方法
---
## jQuery隐藏方法

在最简单的形式中， **.hide（）**立即隐藏匹配的元素，没有动画。例如：

```javascript
$(".myclass").hide() 
```

将隐藏其类为_myclass的_所有元素。可以使用任何jQuery选择器。

### .hide（）作为动画方法

由于其选项， **.hide（）**可以同时为匹配元素的宽度，高度和不透明度设置动画。

*   持续时间可以以毫秒为单位，或者使用文字慢（600毫秒）和快速（200毫秒）。例如：

```javascript
$("#myobject").hide(800) 
```

*   可以指定在动画完成后调用函数，每个匹配元素调用一次。此回调主要用于将不同的动画链接在一起。例如

```javascript
$("p").hide( "slow", function() { 
      $(".titles").hide("fast"); 
      alert("No more text!"); 
 }); 
  ``` 
 * More options exist, please refer to the official website for further details. 
 
 ### .toggle() method 
 
 To show / hide elements you can use ```toggle()``` method. If element is hidden ```toggle()``` will show it and vice versa. 
 Usage: 
```

JavaScript的 $（ “MyClass的”）。切换（） \`\`\`

### .slideDown（）方法

此方法可以激活匹配元素的高度。这会导致页面的下半部分向下滑动，为显示的项目腾出空间。 用法：

```javascript
$(".myclass").slideDown(); //will expand the element with the identifier myclass for 400 ms. 
 $(".myclass").slideDown(1000); //will expand the element with the identifier myclass for 1000 ms. 
 $(".myclass").slideDown("slow"); //will expand the element with the identifier myclass for 600 ms. 
 $(".myclass").slideDown("fast"); //will expand the element with the identifier myclass for 200 ms. 
```

#### 更多信息：

[官方网站](http://api.jquery.com/hide/)上的JQuery hide（）方法