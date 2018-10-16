---
title: jQuery Animate
localeTitle: jQuery Animate
---
## jQuery Animate

jQuery的animate方法只需几行代码就可以轻松创建简单的动画。基本结构如下：

```javascript
$(".selector").animate(properties, duration, callbackFunction()); 
```

对于`properties`参数，您需要传递一个javascript对象，并将要作为键设置动画的CSS属性以及要作为值设置为动画的值。 在此`duration`您需要输入动画应采用的时间量（以毫秒为单位）。 动画完成后执行`callbackFunction()` 。

### 例

一个简单的例子如下所示：

```javascript
$(".awesome-animation").animate({ 
    opacity: 1, 
    bottom: += 15 
 }, 1000, function() { 
    $(".different-element").hide(); 
 }); 
```

#### 更多信息：

有关更多信息，请访问[官方网站](http://api.jquery.com/animate/)