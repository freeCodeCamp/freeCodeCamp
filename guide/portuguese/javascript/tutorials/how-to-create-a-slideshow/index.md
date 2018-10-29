---
title: How to Create a Slideshow
localeTitle: Como criar uma apresentação de slides
---
## Como criar uma apresentação de slides

Uma apresentação de slides da Web é uma sequência de imagens ou texto que consiste em mostrar um elemento dessa sequência em um intervalo de tempo.

Para este tutorial, você pode criar uma apresentação de slides seguindo as próximas etapas:

### Escreva uma marcação.

\`\` \`html   Slideshow  
```
### Write styles to hide slides and show only one slide. 
 
 For hide the slides you have to give them a default style and only show one slide if this is active or you want to show it. 
```

css \[data-component = "apresentação de slides"\] .slide { Mostrar nenhum; }

\[data-component = "apresentação de slides"\] .slide.active { display: bloco; }
```
### Change the slides in a time interval. 
 
 The first step to change the slides to show, is select the slide wrapper(s) and then its slides. 
 
 When you selected the slides you have to go over each slide and add or remove an active class depending on the slide that you want to show, and then just repeat the process in a time interval. 
 
 Keep it in mind when you remove a active class to a slide, you are hidden it because the styles defined in the previous step. But when you add an active class to the slide, you are overwritring the style ``display:none to display:block`` , so the slide will show to the users. 
```

js var slideshows = document.querySelectorAll ('\[data-componente = "apresentação de slides"\]');

// Aplica-se a todas as apresentações de slides que você define com a marcação slideshows.forEach (initSlideShow);

função initSlideShow (slideshow) {
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

#### [Exemplo de codepen seguindo este tutorial](https://codepen.io/AndresUris/pen/rGXpvE)