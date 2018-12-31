---
title: jQuery Effects Show Method
localeTitle: jQuery效果显示方法
---
## jQuery效果显示方法

在最简单的形式中， **.show（）**立即显示匹配的元素，没有动画。例如：

```javascript
$(".myclass").show(); 
```

将显示其类为_myclass的_所有元素。可以使用任何jQuery选择器。

但是，此方法不会覆盖CSS样式中的`!important` ，例如`display: none !important` 。

### .show（）作为动画方法

由于其选项， **.show（）**可以同时为匹配元素的宽度，高度和不透明度设置动画。

*   持续时间可以以毫秒为单位，或者使用文字慢（600毫秒）和快速（200毫秒）。例如：

```javascript
$("#myobject").show("slow"); 
```

*   可以指定在动画完成后调用函数，每个匹配元素调用一次。例如

```javascript
$("#title").show( "slow", function() { 
    $("p").show("fast"); 
 }); 
  ``` 
 * More options exist, please refer to the official website for further details. 
 
 ### .slideDown() method 
 This method animates the height of the matched elements. This causes lower parts of the page to slide down, making way for the revealed items. 
 Usage: 
```

JavaScript的 $（ “MyClass的。”）了slideDown（）。 //将使用标识符myclass扩展元素400毫秒。 $（ “MyClass的”）了slideDown（1000）。 //将使用标识符myclass扩展元素1000毫秒。 $（ “MyClass的。 ”）了slideDown（“ 慢”）。 //将使用标识符myclass扩展元素600毫秒。 $（ “MyClass的 ”）了slideDown（“ 快”）。 //将使用标识符myclass扩展元素200毫秒。 \`\`\`

#### 更多信息：

[官方网站](http://api.jquery.com/show/)上的JQuery Show（）方法