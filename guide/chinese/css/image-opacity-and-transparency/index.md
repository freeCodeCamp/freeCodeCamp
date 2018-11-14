---
title: Image Opacity and Transparency
localeTitle: 图像不透明度和透明度
---
## 图像不透明度和透明度

`opacity`属性允许您通过降低图像的`opacity`来使图像透明。

`Opacity`的值介于0.0和1.0之间。

1.0是任何图像的默认值。它是完全不透明的。

例

```css
img { 
    opacity: 0.3; 
 } 
 ``` 
 
 Include ```filter: alpha(opacity=x)``` for IE8 and earlier. The x takes a value from 0-100. 
```

CSS img { 不透明度：0.3; filter：alpha（opacity = 30）; }
```
Here's an example of an image set to the parameters in the example above. 
 ![image at 30% opacity](https://github.com/lvcoulter/images/blob/master/Opacity30percent.jpg?raw=true) 
 
 
 You can pair ```opacity``` with ```:hover``` to create a dynamic mouse-over effect. 
 
 Example: 
```

CSS img { 不透明度：0.3; filter：alpha（opacity = 30）; } img：hover { 不透明度：1.0; filter：alpha（opacity = 100）; }
```
[A codepen example to show a transparent image turning opaque on hover](https://codepen.io/lvcoulter/full/JrzxXa/) 
 <!--I cannot figure out how to embed a Codepen. I would really like to know--> 
 
 You can create the opposite effect with less code since the image is 1.0 opacity by default 
 
 Example: 
```

CSS img：hover { 不透明度：0.3; filter：alpha（opacity = 30）; } \`\`\` [用于显示鼠标悬停透明度的codepen示例](https://codepen.io/lvcoulter/full/xXBQoR/)

#### 更多信息：

\-w3schools.com [CSS不透明度/透明度](https://www.w3schools.com/css/css_image_transparency.asp)

\-MDN web docs [Opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)