---
title: Cards
---
# Bootstrap 4 Cards
------

* Using Bootstrap 4 you can create cards.

*  Cards are bordered boxes with a bit of padding around the content inside them, which can be used to conveniently display a specific set of information.

** To create a basic Bootstrap 4 card, you need to create a `<div>` container with the class `.card` and inside  another `<div>` container with the class of `.card-body` **

###### Code example:

```html
<div class="card">
  <div class="card-body">Content</div>
  <!-- content of the card goes here -->
</div>
```

### Header and Footer
--------

The structure of the card can be enhanced by the addition of a header and a footer. To add one of these elements, you have to create a `<div>` container with the `.card-header` or `.card-footer` class.

###### Code example:

```html
<div class="card">
  <div class="card-header">
      <!-- Header content -->
  </div>
  <div class="card-body">
      <!-- Body content -->
  </div>
  <div class="card-footer">
      <!-- Footer content -->
  </div>
</div>
```

### Cards with Images
-----------
* You may also use specific classes for displaying images in cards.

* There are two classes for this purpose: card-img-top, which places an image on the top of the card, and card-img-bottom, which places the image on the bottom, both of them fitting them to the rounded border of the card neatly.

* These classes have to be used with the ```<img>``` tag inside a card to work properly.

* Keep in mind, that if you want an image to span the entire width, you would add the image container outside of the ```<div>``` container with the card-body class.

###### This is how it will look in an html doc


```html
<div class="card">
<!-- content of the card goes here -->
<!-- image on the top of the content -->
  <img src="picture.jpg" alt="Picture" class="card-img-top">
  <div class="card-body">Body content</div>
</div>
<div class="card">
<!-- content of the card goes here -->
  <div class="card-body">Body content</div>
<!-- image on the bottom of the content -->
  <img src="picture.jpg" alt="Picture" class="card-img-bottom"> 
</div>
```

### Cards Overlay
----
* For making an image into the background of the card and displaying the text on top of it you need to use the class card-img-overlay on the content, which you want to display over the image, instead of using the card-body class.

###### This is how it will look in an html doc

```html
<div class="card">
<!-- content of the card goes here -->
  <img src="picture.jpg" alt="Picture" class="card-img-top">
<!-- this content is displayed over the image, which is now in the background and covers the whole element -->
  <div class="card-img-overlay">Overlay content</div>
</div>
```
### Card is balanced with the image

```html
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<!--You must set the image height on all cards -->
```
