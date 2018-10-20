---
title: How to Create a Slideshow
---
## How to Create a Slideshow

A Web slideshow is a sequence of images or text that consist in show one element of this sequence in a time interval. 

For this tutorial you can create  a slideshow following the next steps:

### Write a markup.

```html 
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Slideshow</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <div id="slideshow-example" data-component="slideshow">
        <div role="list">
          <div class="slide">
            <img src="" alt="">
          </div>
          <div class="slide">
            <img src="" alt="">
          </div>
          <div class="slide">
            <img src="" alt="">
          </div>
        </div>
      </div>
    <script src="slideshow.js"></script>
    </body>
  </html>
```

### Write styles to hide slides and show only one slide.

For hide the slides you have to give them a default style and only show one slide if this is active or you want to show it.

```css
  [data-component="slideshow"] .slide {
    display: none;
  }

  [data-component="slideshow"] .slide.active {
    display: block;
  }
```

### Change the slides in a time interval.

The first step to change the slides to show, is select the slide wrapper(s) and then its slides.

When you selected the slides you have to go over each slide and add or remove an active class depending on the slide that you want to show, and then just repeat the process in a time interval. 

Keep it in mind when you remove a active class to a slide, you are hidden it because the styles defined in the previous step. But when you add an active class to the slide, you are overwritring the style ``display:none to display:block`` , so the slide will show to the users.

```js
  var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
  // Apply to all slideshows that you define with the markup wrote
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

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
  }
```

#### [Codepen example following this tutorial](https://codepen.io/AndresUris/pen/rGXpvE)
