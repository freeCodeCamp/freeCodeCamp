---
title: Carousel
---
## Carousel

Carousel is a slideshow component for cycling through elements like images or slides of text.
It provides a dynamic way of representing large amount of data (text or images) by sliding or cycling through, in a smooth fashion.

Sample Code of Image Slider is below :

```html
<html>
<head>
  
<!-- BootStrap's minified CSS version -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">


 </head>

<style>
  
.carousel-indicators li
{
background-color:red;
} 

.carousel-indicators .active
{
background-color:blue;
}

.carousel-indicators .item
{
height:700 px;
width :800 px;
}
</style>


<body>
  <!-- Declaring div for Carousel to appear inside it -->
<div class="container">

<div id="myCarousel" class="carousel slide" data-ride="carousel">
  
<!-- Indicators -->
  
<ol class="carousel-indicators">
   <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
   <li data-target="#myCarousel" data-slide-to="1" ></li>
   <li data-target="#myCarousel" data-slide-to="2"></li>
</ol>

  <!-- Wrapper for Slides  -->
<div class="carousel-inner">

<div  class="item active">
  <img src="http://res.cloudinary.com/dneh1l9vl/image/upload/v1506241850/Hello_bootstrap_ohtphr.png" alt="Hello_Bootstrap" >
</div>

<div  class="item"> 
  <img src="http://res.cloudinary.com/dneh1l9vl/image/upload/v1506613859/devices_bootstrap_nk4zlk.jpg" alt="Device_Bootstrap" >
</div>

<div  class="item">
  <img src="http://res.cloudinary.com/dneh1l9vl/image/upload/v1506613966/responsive_bootstrap_nzuo9l.jpg" alt="Responsive_Bootstrap">
</div>

</div>
  
<!-- Left and Right Controls for sliding through the slides  -->
  
<a class="left carousel-control"  href="#myCarousel" data-slide="prev">
<span class="glyphicon glyphicon-chevron-left"></span>
</a>

<a class="right carousel-control"  href="#myCarousel" data-slide="next">
<span class="glyphicon glyphicon-chevron-right"></span>
</a>

</div>
</div>

  
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
  
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>  
  
</body>
</html>
```


Understanding the attributes and classes used in above example:

### 1) Attributes

a) `data-ride`  :-  `data-ride ="carousel"`  allows on page load animation to begin.

b) `data-target` :- It points to the `id` of the carousel.

c) `data-slide-to` :- It specifies which slide to move on to when clicking on the indicators (specific dots).

### 2) Classes

a) `carousel`  :- `class="carousel"` specifies that the `div` contains carousel.

b) `slide` :- This class adds CSS transitions.

c) `carousel-inner` :- This denotes the section of code which will hold the text/image to be displayed in slides.

d) `item` :- It refers to the content to be displayed in the carousel.

e) `left carousal-control` :- This adds the back button allowing sliding to the previous slide.

f) `right carousal-control` :- This adds the next button allowing sliding to the next slide.

g) `carousel-caption` :- This class let you add captions to each slide.

Note: Add `class="carousel-caption"` for each item.

### Usage
#### 1) Via data attributes
The `data-ride="carousel"` attribute is used to mark a carousel as animating starting at page load.
`data-slide` accepts the keywords `prev` or `next`, which alters the slide position relative to its current position. 
#### 2) Via JavaScript
Call carousel manually with:
```javascript
$('.carousel').carousel()
```
### Options
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-interval=""`.

Some frequently used options are:

* interval: specifies how long to wait in miliseconds before going to the next slide.
* pause: if set to false, the carousel will not pause when the mouse hovers over it.
* ride: if set to true, the carousel autoplays after the user clicks through the first slide.
* wrap: if set to false, the carousel pauses at the last item.

## Additional Details
- [Bootstrap Carousel](https://getbootstrap.com/docs/4.1/components/carousel/)


