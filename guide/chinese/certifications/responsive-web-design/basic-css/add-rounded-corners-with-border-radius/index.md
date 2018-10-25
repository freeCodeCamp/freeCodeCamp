---
title: Add Rounded Corners with border-radius
localeTitle: 添加带有border-radius的圆角
---
## 添加带有border-radius的圆角

有时你想要圆角而不是方角。在这种情况下，我们使用“border-radius”属性来确定我们想要角落的圆度。

要调整角落的圆度，请使用：

```css
.example { 
 border-radius: 5px; 
 } 
```

数字越高，角落越圆。

```css
.example { 
 border-radius: 20px; 
 } 
```

使用border-radius属性，我们可以对元素的角进行圆角处理，无论这是否意味着对边框，背景图像或元素本身的填充颜色进行舍入。如果颜色发生变化，您只会注意到新的圆角！

如果您只包含一个数字，则该半径将应用于所有四个角。如果使用两个值，则第一个应用于左上角和右下角，而第二个应用于右上角和左下角。

```css
.exampleTwoValues { 
 border-radius: 5px 10px; 
 } 
```

如果使用四个值，则值适用于左上角，右上角，右下角和左下角。

```css
.exampleFourValues { 
 border-radius: 5px 7px 10px 15px; 
 } 
```

如果使用三个值，则第一个适用于左上角，第二个适用于右上角和左下角，第三个适用于右下角。

```css
.exampleThreeValues { 
 border-radius: 5px 10px 15px; 
 } 

```