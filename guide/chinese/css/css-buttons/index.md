---
title: CSS Buttons
localeTitle: CSS按钮
---
## CSS按钮

*   您可以设置任何可点击按钮的样式（HTML `<button>`元素）

`<button>Click Me</button>`

*   默认按钮如下所示：

![Default Button Style](https://image.ibb.co/kCweAm/button.png "默认按钮样式")

## 造型按钮

您可以更改按钮的多个属性以更改其外观。

要为按钮添加阴影，请使用`box-shadow`属性。

要为禁用效果的按钮添加透明度，请使用属性`opacity` 。

要删除边距并创建按钮组，请添加`float:left/right`属性。

要创建按钮组但使用边框，请使用`float`属性并添加`border property` 。

要创建一组垂直按钮，请使用display： `block property` 。

### 按钮颜色

要更改按钮的背景颜色，请使用background-color属性：

`button {background-color: #6ba0f4;}`

![Button Background-Color](https://image.ibb.co/f5Xpt6/button_bg_blue.png "按钮背景颜色")

要为按钮添加彩色边框，请使用border属性：
```
button { 
  background-color: #FFF; 
  color: #FFF; 
  border: 2px solid #6ba0f4; 
 } 
```

![Button Border](https://image.ibb.co/kUqymR/button_border_blue.png "按钮边框")

### 按钮文字大小

要更改按钮的文本字体大小，请使用font-size属性：

`button {font-size: 20px;}`

![Button Text Size](https://image.ibb.co/gM9r6R/button_fontsize.png "按钮文字大小")

### 按钮填充

要更改按钮的填充，请使用padding属性：

`button {padding: 15px 30px;}`

![Button Padding](https://image.ibb.co/fKer6R/button_padding.png "按钮填充")

### 按钮宽度

要更改按钮的宽度，无论文本内容如何，​​请使用width属性：

`button {width: 250px;}`

![Button Width](https://image.ibb.co/cDgSfm/button_width.png "按钮宽度")

### 圆形按钮

要创建圆角按钮，请使用border-radius属性：

`button {border-radius: 50%;}`

![Rounded Buttons](https://image.ibb.co/cfH00m/button_bradius.png "圆形按钮")

### 可怜的按钮

要在将鼠标移到按钮上时更改按钮的样式，请使用：hover选择器：
```
button:hover { 
  background-color: #0E2C5B; 
  color: #FFF; 
 } 
```

![Hoverable Buttons](https://image.ibb.co/hxQnfm/button_hover.png "可怜的按钮")

要确定悬停效果的速度，请使用属性`transition-duration` 。

### 禁用按钮

要禁用按钮，请使用cursor属性：
```
button { 
  cursor: not-allowed; 
 } 
```

#### 更多信息：

*   https://www.w3schools.com/css/css3\_buttons.asp
*   https://www.w3schools.com/howto/howto _css_ animate\_buttons.asp