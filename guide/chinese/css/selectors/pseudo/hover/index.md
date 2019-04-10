---
title: Hover
localeTitle: 徘徊
---
## 徘徊

当你使用指针设备（通常是鼠标指针）与元素（选择器）交互时，会触发`selector:hover`伪类。悬停在其上的元素的样式将被`selector:hover`定义的样式覆盖`selector:hover`伪类。 要正确设置链接/元素的样式，应按顺序定义规则： - ：link - ：visited - ：hover - ：active

**句法 ：**

```css
 selector:hover { 
    css declarations; 
 } 
```

## 更多例子

下面是一些更复杂的示例，说明了如何使用`:hover`伪类。请记住， `.second` DIV **必须**出现在后`.first`在所有的这些例子格。

1.  当您将鼠标悬停在元素上时会更改相邻的兄弟元素。

```html

<style> 
  .first:hover + .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first">First</div> 
 <div class="second">Second</div> 
```

上面的代码将背景颜色改变`.second` ，当你将鼠标悬停在蓝色`.first` 。

2.  当您将鼠标悬停在某个元素上时，会更改一般兄弟。

```html

<style> 
  .first:hover ~ .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first">First</div> 
 <div class="middle">Middle</div> 
 <div class="second">Second</div> 
```

这个例子提供了更多的灵活性，因为两个元素不再必须直接相邻。

3.  当您将鼠标悬停在元素上时，请更改直接后代。

```html

<style> 
  .first:hover > .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first"> 
  First 
  <div class="second">Second</div> 
 </div> 
```

上面的代码将背景颜色改变`.second` ，当你将鼠标悬停在蓝色`.first` 。

4.  将鼠标悬停在元素上时，更改一般后代。

```html

<style> 
  .first:hover .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first"> 
  First 
  <div class="container"> 
    Container 
    <div class="second">Second</div> 
  </div> 
 </div> 
```

如在示例2中，这也提供了更大的灵活性，因为两个元件不再必须直接相邻。您会注意到，在示例3和4中，可悬停区域更大。这种情况发生的原因是，只要光标位于其中一个子`.first` ，您仍然会悬停在`.first` 。

#### 更多信息：

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Ahover) [W3Schools的](https://www.w3schools.com/cssref/sel_hover.asp)