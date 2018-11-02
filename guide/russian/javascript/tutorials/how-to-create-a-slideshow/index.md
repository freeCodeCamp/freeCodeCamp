---
title: How to Create a Slideshow
localeTitle: Как создать слайд-шоу
---
## Как создать слайд-шоу

Веб-слайд-шоу представляет собой последовательность изображений или текста, которые состоят в отображении одного элемента этой последовательности за промежуток времени.

Для этого урока вы можете создать слайд-шоу следующих шагов:

### Напишите разметку.

\`\` \`\` HTML   Слайд-шоу  
```
### Write styles to hide slides and show only one slide. 
 
 For hide the slides you have to give them a default style and only show one slide if this is active or you want to show it. 
```

CSS \[data-component = "слайд-шоу"\] .slide { display: none; }

\[data-component = "слайд-шоу"\] .slide.active { display: block; }
```
### Change the slides in a time interval. 
 
 The first step to change the slides to show, is select the slide wrapper(s) and then its slides. 
 
 When you selected the slides you have to go over each slide and add or remove an active class depending on the slide that you want to show, and then just repeat the process in a time interval. 
 
 Keep it in mind when you remove a active class to a slide, you are hidden it because the styles defined in the previous step. But when you add an active class to the slide, you are overwritring the style ``display:none to display:block`` , so the slide will show to the users. 
```

JS var slideshows = document.querySelectorAll ('\[data-component = "слайд-шоу"\]');

// Применить ко всем слайд-шоу, которые вы определяете с помощью разметки slideshows.forEach (initSlideShow);

функция initSlideShow (слайд-шоу) {
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

} \`\` \`

#### [Пример Codepen после этого руководства](https://codepen.io/AndresUris/pen/rGXpvE)