---
title: CSS3 Gradients
localeTitle: CSS3渐变
---
## CSS3渐变

CSS3渐变可让您在两种或多种指定颜色之间显示平滑过渡。

之前，您必须使用图像来实现这些效果。但是，通过使用CSS3渐变，您可以减少下载时间和带宽使用。此外，渐变元素在缩放时看起来更好，因为渐变是由浏览器生成的。

CSS3定义了两种类型的渐变：

*   线性渐变（向下/向上/向左/向右/对角线）
*   径向梯度（由其中心定义）

### CSS3线性渐变

要创建线性渐变，您必须至少定义两个色标。颜色停止是您想要渲染平滑过渡的颜色。您还可以设置起点和方向（或角度）以及渐变效果。

#### 句法
```
background: linear-gradient(direction, color-stop1, color-stop2, ...); 
```

##### 线性渐变 - 从上到下（这是默认值）

以下示例显示从顶部开始的线性渐变。它开始变红，过渡到黄色： ![默认线性梯度](https://cdn-media-1.freecodecamp.org/imgr/2uGfleD.jpg)

#### 例
```
<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* For browsers that do not support gradients */ 
    background: -webkit-linear-gradient(red, green); /* For Safari 5.1 to 6.0 */ 
    background: -o-linear-gradient(red, green); /* For Opera 11.1 to 12.0 */ 
    background: -moz-linear-gradient(red, green); /* For Firefox 3.6 to 15 */ 
    background: linear-gradient(red, green); /* Standard syntax (must be last) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Linear Gradient - Top to Bottom</h3> 
 <p>This linear gradient starts at the top. It starts red, transitioning to yellow:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>Note:</strong> Internet Explorer 9 and earlier versions do not support gradients.</p> 
 
 </body> 
 </html> 
```

![默认线性梯度](https://cdn-media-1.freecodecamp.org/imgr/CvtXCMd.jpg)

##### 线性渐变 - 从左到右

以下示例显示从左侧开始的线性渐变。它开始变红，过渡到黄色： ![左到右](https://cdn-media-1.freecodecamp.org/imgr/e4dRvZR.jpg)

#### 例
```
<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* For browsers that do not support gradients */ 
    background: -webkit-linear-gradient(left, red , green); /* For Safari 5.1 to 6.0 */ 
    background: -o-linear-gradient(right, red, green); /* For Opera 11.1 to 12.0 */ 
    background: -moz-linear-gradient(right, red, green); /* For Firefox 3.6 to 15 */ 
    background: linear-gradient(to right, red , green); /* Standard syntax (must be last) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Linear Gradient - Left to Right</h3> 
 <p>This linear gradient starts at the left. It starts red, transitioning to yellow:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>Note:</strong> Internet Explorer 9 and earlier versions do not support gradients.</p> 
 
 </body> 
 </html> 
```

![左到右](https://cdn-media-1.freecodecamp.org/imgr/k4FSyXz.jpg)

#### 线性渐变 - 对角线

您可以通过指定水平和垂直起始位置来对角线制作渐变。

以下示例显示从左上角开始（并向右下方）的线性渐变。它开始变红，过渡到黄色：

![对角线](https://cdn-media-1.freecodecamp.org/imgr/YvtbUBH.jpg)

#### 例
```
<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* For browsers that do not support gradients */ 
    background: -webkit-linear-gradient(left top, red, green); /* For Safari 5.1 to 6.0 */ 
    background: -o-linear-gradient(bottom right, red, green); /* For Opera 11.1 to 12.0 */ 
    background: -moz-linear-gradient(bottom right, red, green); /* For Firefox 3.6 to 15 */ 
    background: linear-gradient(to bottom right, red, green); /* Standard syntax (must be last) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Linear Gradient - Diagonal</h3> 
 <p>This linear gradient starts at top left. It starts red, transitioning to yellow:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>Note:</strong> Internet Explorer 9 and earlier versions do not support gradients.</p> 
 
 </body> 
 </html> 
```

![对角线EXP](https://cdn-media-1.freecodecamp.org/imgr/8gKRhAp.jpg)

#### 更多信息：

[MDN Documentatiion](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) || [W3Schools的](https://www.w3schools.com/css/css3_gradients.asp)