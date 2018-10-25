---
title: How to Create a Slideshow
localeTitle: 如何创建幻灯片
---
## 如何创建幻灯片

Web幻灯片是一系列图像或文本，它们在一个时间间隔中显示该序列的一个元素。

在本教程中，您可以按照以下步骤创建幻灯片：

### 写一个标记。

\`\`\`HTML  幻灯片 
```
### Write styles to hide slides and show only one slide. 
 
 For hide the slides you have to give them a default style and only show one slide if this is active or you want to show it. 
```

CSS \[data-component =“slideshow”\] .slide { display：none; }

\[data-component =“slideshow”\] .slide.active { 显示：块; }
```
### Change the slides in a time interval. 
 
 The first step to change the slides to show, is select the slide wrapper(s) and then its slides. 
 
 When you selected the slides you have to go over each slide and add or remove an active class depending on the slide that you want to show, and then just repeat the process in a time interval. 
 
 Keep it in mind when you remove a active class to a slide, you are hidden it because the styles defined in the previous step. But when you add an active class to the slide, you are overwritring the style ``display:none to display:block`` , so the slide will show to the users. 
```

JS var slideshows = document.querySelectorAll（'\[data-component =“slideshow”\]'）;

//应用于您使用markup编写的所有幻灯片 slideshows.forEach（initSlideShow）;

function initSlideShow（slideshow）{
```
var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides 
 
 var index = 0, time = 5000; 
 slides[index].classList.add('active'); 
 
 setInterval( () => { 
  slides[index].classList.remove('active'); 
 
  //Go over each slide incrementing the index 
  index++; 
 
  // If you go over all slides, restart the index to show the first slide and start again 
  if (index === slides.length) index = 0; 
 
  slides[index].classList.add('active'); 
 
 }, time); 
```

} \`\`\`

#### [本教程后面的Codepen示例](https://codepen.io/AndresUris/pen/rGXpvE)