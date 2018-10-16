---
title: How to Create a Lightbox
---

## How to Create a Lightbox

### Introduction
A lightbox is a combination of two components, a <a href='https://en.wikipedia.org/wiki/Modal_window' target='_blank' rel='nofollow'>modal</a> and a slide show. Here you will construct a simple lightbox using `HTML`, `CSS` and `JavaScript`. 

The lightbox will be contained in the modal, which will be triggered by some `JavaScript`, from <a href='https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers' target='_blank' rel='nofollow'>event handlers</a> in the `HTML` markup.
You will build styles which will provide state with `CSS` and behavior with `JavaScript`. You will also find a reference list of the methods you use and other useful tid-bits that are related to this tutorial, at the bottom.

#### Our Images
The images we will be using are being supplied by <a href='https://www.pexels.com/' target='_blank' rel='nofollow'>Pexels</a>, 
a free stock photo gallery that allows you to provide high quality images to their projects fast, free and usually with no attributions needed.

#### Just Show Me The Code!
A live example can be found <a href='https://codepen.io/rdev-rocks/pen/KXNzvo' target='_blank' rel='nofollow'>here - CodePen/Lightbox</a> and a full draft of the code is near the bottom.

### Step 1. The Markup

The markup, or `HTML`, provides the structure for the lightbox.

```html

<!-- Here is your access point for your user, a preview of the images you wish to display. 
     You use the onclick="" event handler to execute the methods you will define in the
     JavaScript near the bottom -->

<div class="row">
  <div class="col">
     <img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" onclick="openLightbox();toSlide(1)" class="hover-shadow preview" alt="Toy car on the road." />
  </div>
  <div class="col">
     <img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" onclick="openLightbox();toSlide(2)" class="hover-shadow preview" alt="Toy car exploring offroad." />
  </div>
  <div class="col">
     <img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" onclick="openLightbox();toSlide(3)" class="hover-shadow preview" alt="Toy car in the city." />
  </div>
</div>

<!-- This is your lightbox, it is contained in a modal. Here you provide all the images,
     controls, and another set of preview images as the dots. Dots show your user which
     image is currently active. Note that you use entities (e.g. &times;), more info on
     them at the bottom. -->
     
<div id="Lightbox" class="modal">
  <span class="close pointer" onclick="closeLightbox()">&times;</span>
  <div class="modal-content">
    <div class="slide">
        <img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" class="image-slide" alt="Toy car on the road." />
    </div>
    <div class="slide">
        <img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" class="image-slide" alt="Toy car exploring offroad." />
    </div>    
    <div class="slide">
        <img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" class="image-slide" alt="Toy car in the city." />
    </div>
  
    <a class="previous" onclick="changeSlide(-1)">&#10094;</a>
    <a class="next" onclick="changeSlide(1)">&#10095;</a>
  
    <div class="dots">
      <div class="col">
        <img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" class="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road" />
      </div>
      <div class="col">
        <img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" class="modal-preview hover-shadow" onclick="toSlide(2)" alt="Toy car exploring offroad." />
      </div>
      <div class="col">
        <img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" class="modal-preview hover-shadow" onclick="toSlide(3)" alt="Toy car in the city." />
      </div>
    </div>
  </div>
</div>

```
### Step 2. Style with CSS

The `CSS` provides you with different states for your lightbox. Things like visibility, positioning, and hover effects.

Your style sheet should look like this: 

```css

/* Here you provide a best practice's "reset", read more about it at the bottom! :) */

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
}

/* You define the style of our previews here, you are using flex to display the images 
   "responsively". */

.preview {
  width: 100%;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.row > .col {
  padding: 0 8px;
}

.col {
  float: left;
  width: 25%;
}

/* Now you want to define what the lightbox will look like. Note that you have the display
   as none. You don't want it to show until the user clicks on one of the previews. 
   You will change this display property with JavaScript below. */
   
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding: 10px 62px 0px 62px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 0 0 0 0;
  width: 80%;
  max-width: 1200px;
}

/* Same with your slides, you set the display to none, because you want to choose which 
   one is shown at a time. */

.slide {
  display: none;
}

.image-slide {
  width: 100%;
}

.modal-preview {
  width: 100%;
}

.dots {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/* You want the previews a little transparent to show that they are "inactive". 
   You then add an .active or :hover class to animate the selections for your user when
   they interact with your controls and clickable content.
 */

img.preview, img.modal-preview {
  opacity: 0.6;
}

img.active,
.preview:hover,
.modal-preview:hover {
  opacity: 1;
}

img.hover-shadow {
  transition: 0.3s;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
} 

.close {
  color: white;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}

.previous,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.previous:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

```

### Step 3. JavaScript

Now to business! Your JavaScript should look like this:

```javascript

// Initialize here and run showSlide() to give your lightbox a default state.

let slideIndex = 1;
showSlide(slideIndex);

// You are providing the functionality for your clickable content, which is 
// your previews, dots, controls and the close button.

function openLightbox() {
  document.getElementById('Lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
};

// Note that you are assigning new values here to our slidIndex.

function changeSlide(n) {
  showSlide(slideIndex += n);
};

function toSlide(n) {
  showSlide(slideIndex = n);
};

// This is your logic for the light box. It will decide which slide to show 
// and which dot is active.

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');

  if (n > slides.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
};

```
And thats it! Now put all the code together. You should now have a functional lightbox. 

### All The Code

```html
<body>
  <style>
    html {
      box-sizing: border-box;
    }
    
    *, *:before, *:after {
      box-sizing: inherit;
    }
    
    body {
      margin: 0;
    }
    
    .preview {
      width: 100%;
    }
    
    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    
    .row > .col {
      padding: 0 8px;
    }
    
    .col {
      float: left;
      width: 25%;
    }
    
    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      padding: 10px 62px 0px 62px;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: black;
    }
    
    .modal-content {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: auto;
      padding: 0 0 0 0;
      width: 80%;
      max-width: 1200px;
    }
    
    .slide {
      display: none;
    }
    
    .image-slide {
    	width: 100%;
    }
    
    .modal-preview {
    	width: 100%;
    }
    
    .dots {
    	display: flex;
    	flex-direction: row;
    	justify-content: space-between;
    }
    
    img.preview, img.modal-preview {
      opacity: 0.6;
    }
    
    img.active,
    .preview:hover,
    .modal-preview:hover {
      opacity: 1;
    }
    
    img.hover-shadow {
      transition: 0.3s;
    }
    
    .hover-shadow:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    } 
    
    .close {
      color: white;
      position: absolute;
      top: 10px;
      right: 25px;
      font-size: 35px;
      font-weight: bold;
    }
    
    .close:hover,
    .close:focus {
      color: #999;
      text-decoration: none;
      cursor: pointer;
    }
    
    .previous,
    .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      padding: 16px;
      margin-top: -50px;
      color: white;
      font-weight: bold;
      font-size: 20px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;
      -webkit-user-select: none;
    }
    
    .next {
      right: 0;
      border-radius: 3px 0 0 3px;
    }
    
    .previous:hover,
    .next:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  </style>
  <div class="row">
    <div class="col">
       <img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" onclick="openLightbox();toSlide(1)" class="hover-shadow preview" alt="Toy car on the road." />
    </div>
    <div class="col">
       <img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" onclick="openLightbox();toSlide(2)" class="hover-shadow preview" alt="Toy car exploring offroad." />
    </div>
    <div class="col">
       <img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" onclick="openLightbox();toSlide(3)" class="hover-shadow preview" alt="Toy car in the city" />
    </div>
  </div>
  
  <div id="Lightbox" class="modal">
  
    <span class="close pointer" onclick="closeLightbox()">&times;</span>
    <div class="modal-content">
      <div class="slide">
        <img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" class="image-slide" alt="Toy car on the road." />
      </div>
      <div class="slide">
        <img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" class="image-slide" alt="Toy car exploring offroad." />
      </div>    
      <div class="slide">
        <img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" class="image-slide" alt="Toy car in the city." />
      </div>
    
      <a class="previous" onclick="changeSlide(-1)">&#10094;</a>
      <a class="next" onclick="changeSlide(1)">&#10095;</a>
          
      <div class="dots">
        <div class="col">
          <img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" class="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road." />
        </div>
        <div class="col">
          <img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" class="modal-preview hover-shadow" onclick="toSlide(2)" alt="Toy car exploring offroad." />
        </div>
        <div class="col">
          <img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" class="modal-preview hover-shadow" onclick="toSlide(3)" alt="Toy car in the city" />
        </div>
      </div>
    </div> 
  </div>
  
  <script>
    let slideIndex = 1;
    showSlide(slideIndex);
    
    function openLightbox() {
      document.getElementById('Lightbox').style.display = 'block';
    };
    
    function closeLightbox() {
      document.getElementById('Lightbox').style.display = 'none';
    };
    
    function changeSlide(n) {
      showSlide(slideIndex += n);
    };
    
    function toSlide(n) {
      showSlide(slideIndex = n);
    };
    
    function showSlide(n) {
      const slides = document.getElementsByClassName('slide');
      let modalPreviews = document.getElementsByClassName('modal-preview');
    
      if (n > slides.length) {
        slideIndex = 1;	
      };
      
      if (n < 1) {
        slideIndex = slides.length;
      };
    
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      };
      
      for (let i = 0; i < modalPreviews.length; i++) {
        modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
      };
      
      slides[slideIndex - 1].style.display = 'block';
      modalPreviews[slideIndex - 1].className += ' active';
    };
  </script>
</body>
```

### More Information:
---

#### HTML

<a href='https://en.wikipedia.org/wiki/Modal_window' target='_blank' rel='nofollow'>Modal</a> - A popup window

<a href='https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers' target='_blank' rel='nofollow'>Event Handlers</a> - HTML properties that listen for user events.  

<a href='https://developer.mozilla.org/en-US/docs/Glossary/Entity' target='_blank' rel='nofollow'>Entity</a> - A string that represents a reserved charactor in HTML.

#### CSS

<a href='https://css-tricks.com/box-sizing/' target='_blank' rel='nofollow'>box-sizing:</a> - A CSS3 property that controls the way the browser renders content based on height and width. 
  
<a href='https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox' target='_blank' rel='nofollow'>Flex-box</a> - A new technology that helps with positioning HTML content in a responsive mannor. 
  
<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/:hover' target='_blank' rel='nofollow'>:hover</a> - A pseudo-selector that gets triggered when a user hovers over an element when this class is assigned to it. 

#### JavaScript

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let' target='_blank' rel='nofollow'>let</a> A block-scope variable.

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const' target='_blank' rel='nofollow'>const</a> A block-scope constant.

<a href='https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById' target='_blank' rel='nofollow'>getElementById()</a> - A document method that returns a reference to an HTML element.

<a href='https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName' target='_blank' rel='nofollow'>getElementsByClassName()</a> - A document method that returns an array of references to the html that have matching classes.

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators' target='_blank' rel='nofollow'>+=</a> - an assignment operator which will add numbers or concatenate strings.

#### Resources:

<a href='https://codepen.io/rdev-rocks/pen/KXNzvo?editors=1111' target='_blank' rel='nofollow'>Live Example</a> - A CodePen that demos the above code.

<a href='https://codepen.io/enxaneta/full/adLPwv' target='_blank' rel='nofollow'>Interactive Flex-Box</a> - An interactive CodePen that shows flex-box behavior.

<a href='https://www.pexels.com/' target='_blank' rel='nofollow'>Pexels</a> - A free stock photo gallery.

<a href='https://developer.mozilla.org/en-US/' target='_blank' rel='nofollow'>MDN</a> - A great place for information about web stuff.

<a href='https://www.w3schools.com/howto/howto_js_lightbox.asp' target='_blank' rel='nofollow'>W3School - Lightbox</a> - This code was inspired from here. Thanks W3Schools!
