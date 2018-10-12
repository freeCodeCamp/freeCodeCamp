---
title: Image Opacity and Transparency
localeTitle: تعتيم الصورة والشفافية
---
## تعتيم الصورة والشفافية

تسمح لك خاصية `opacity` الصورة عن طريق خفض درجة غموضها.

تأخذ `Opacity` درجة تتراوح بين 0.0 و 1.0.

1.0 هي القيمة الافتراضية لأي صورة. انها مبهمة تماما.

مثال

 `img { 
    opacity: 0.3; 
 } 
 ``` 
 
 Include ```filter: alpha(opacity=x)``` for IE8 and earlier. The x takes a value from 0-100. 
` 

المغلق img { التعتيم: 0.3 ؛ filter: alpha (opacity = 30)؛ }

 `Here's an example of an image set to the parameters in the example above. 
 ![image at 30% opacity](https://github.com/lvcoulter/images/blob/master/Opacity30percent.jpg?raw=true) 
 
 
 You can pair ```opacity``` with ```:hover``` to create a dynamic mouse-over effect. 
 
 Example: 
` 

المغلق img { التعتيم: 0.3 ؛ filter: alpha (opacity = 30)؛ } img: hover { opacity: 1.0؛ filter: alpha (opacity = 100)؛ }

 `[A codepen example to show a transparent image turning opaque on hover](https://codepen.io/lvcoulter/full/JrzxXa/) 
 <!--I cannot figure out how to embed a Codepen. I would really like to know--> 
 
 You can create the opposite effect with less code since the image is 1.0 opacity by default 
 
 Example: 
` 

المغلق img: hover { التعتيم: 0.3 ؛ filter: alpha (opacity = 30)؛ } \`\` \` [مثال codepen لإظهار الشفافية على الماوس](https://codepen.io/lvcoulter/full/xXBQoR/)

#### معلومات اكثر:

\-w3schools.com [CSS Opacity / Transparency](https://www.w3schools.com/css/css_image_transparency.asp)

\-MDN مستندات الويب [Opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)