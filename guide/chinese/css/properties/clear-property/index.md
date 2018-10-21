---
title: Clear Property
localeTitle: 清除财产
---
## 清除财产

您可以使用`clear`属性按下元素，防止它出现在先前浮动元素旁边。

`clear`属性可以具有以下值：

在之后使用该属性`float`属性用于“清除”出`float` 。

```css
clear: none; 
 clear: left; 
 clear: right; 
 clear: both; 
 clear: inline-start; 
 clear: inline-end; 
```

### 例：

![Clear Property Image](https://image.ibb.co/defebR/clear.png "清除财产")

在上面的例子中，黄色`div`具有属性`float:left` ，并且可以适合珊瑚`div` 。但是，由于黄色`div`也具有`clear: both`的属性`clear: both`向下移动到浮动元素下方。

#### 更多信息：

*   https://css-tricks.com/almanac/properties/c/clear/
*   https://www.w3schools.com/cssref/pr _class_ clear.asp
*   https://developer.mozilla.org/en-US/docs/Web/CSS/clear