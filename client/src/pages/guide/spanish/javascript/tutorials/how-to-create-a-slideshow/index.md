---
title: How to Create a Slideshow
localeTitle: Cómo crear una presentación de diapositivas
---
## Cómo crear una presentación de diapositivas

Una presentación de diapositivas web es una secuencia de imágenes o texto que consiste en mostrar un elemento de esta secuencia en un intervalo de tiempo.

Para este tutorial puedes crear una presentación de diapositivas siguiendo los siguientes pasos:

### Escribe un marcado.

\`\` \`html   Diapositivas  
```
### Write styles to hide slides and show only one slide. 
 
 For hide the slides you have to give them a default style and only show one slide if this is active or you want to show it. 
```

css \[data-component = "slideshow"\] .slide { pantalla: ninguna; }

\[data-component = "slideshow"\] .slide.active { bloqueo de pantalla; }
```
### Change the slides in a time interval. 
 
 The first step to change the slides to show, is select the slide wrapper(s) and then its slides. 
 
 When you selected the slides you have to go over each slide and add or remove an active class depending on the slide that you want to show, and then just repeat the process in a time interval. 
 
 Keep it in mind when you remove a active class to a slide, you are hidden it because the styles defined in the previous step. But when you add an active class to the slide, you are overwritring the style ``display:none to display:block`` , so the slide will show to the users. 
```

js var slideshows = document.querySelectorAll ('\[data-component = "slideshow"\]');

// Aplicar a todas las presentaciones de diapositivas que defina con el marcado escrito slideshows.forEach (initSlideShow);

función initSlideShow (presentación de diapositivas) {
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

#### [Ejemplo de Codepen siguiendo este tutorial.](https://codepen.io/AndresUris/pen/rGXpvE)