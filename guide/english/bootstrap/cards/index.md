---
title: Cards
---
# Bootstrap 4 Cards
------

* Using Bootstrap 4 you can create cards.

*  Cards are bordered boxes with a bit of padding around the content inside them, which can be used to conveniently display a specific set of information.

** To create a basic Bootstrap 4 card, you need to create a `<div>` container with the class `.card` and inside  another `<div>` container with the class of `.card-body` **

###### Code example:

```
<div class="card">
  <div class="card-body">Content</div>
  <!-- content of the card goes here -->
</div>
```
### Header and Footer
--------

The structure of the card can be enhanced by the addition of a header and a footer. To add one of these elements, you have to create a `<div>` container with the `.card-header` or `.card-footer` class.

###### Code example:

```
<div class="card">
  <div class="card-header">
      Header content
  </div>
  <div class="card-body">
      Body content
  </div>
  <div class="card-footer">
      Footer content
  </div>
</div>
```

### Titles, text, and links
--------

* You can add title to cards by adding `.card-title` class to the `<h>` tag.

* Subtitles can be added the same way, by adding `.card-subtitle` to the `<h>` tag.

* Links can be added by using `.card-link` in `<a>` tag.

*  `card-text` is used to add text.

###### Code example:

```
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some example text inside a card.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
```

### Cards with Images
--------
* You may also use specific classes for displaying images in cards.

* There are two classes for this purpose: `.card-img-top`, which places an image on the top of the card, and `.card-img-bottom`, which places the image on the bottom, both fitting an image to the rounded border of the card neatly.

* These classes have to be used with the `<img>` tag inside a card to work properly.

* Keep in mind, that if you want an image to span the entire width, you would add the image outside of the `<div>` container with the `.card-body` class.

###### Code example:

Image on top:

```
<div class="card">
  <img class="card-img-top" alt="Card image cap" src="picture.jpg">
  <div class="card-body">
      Body content
  </div>
</div>
```

Image on bottom:

```
<div class="card">
  <div class="card-body">
    Body content
  </div>
  <img src="picture.jpg" class="card-img-bottom">
</div>
```

### Cards Overlay
--------
* To turn an image into a card background and to display the text on top of it you need to add the class `.card-img-overlay` to the inner container of the card instead of `.card-body`.

###### Code example:

```
<div class="card">
  <img class="card-img-top" src="picture.jpg" alt="Card image">
  <div class="card-img-overlay">
    Overlay content
    <!-- this content is displayed over the image,
    which is now in the background and covers the whole element -->
  </div>
</div>
```

### Card Columns
--------
The `.card-columns` class creates a masonry-like grid of cards (like pinterest). The layout will automatically adjust as you insert more cards. It is used in place of `.card` class if you want this look.

_Note: The cards are displayed vertically on small screens (less than 576px):_

###### Code example:

```
<div class="card-columns">
  <div class="card bg-primary">
    <div class="card-body text-center">
      <p class="card-text">Some text inside the first card</p>
    </div>
  </div>
  <div class="card bg-warning">
    <div class="card-body text-center">
      <p class="card-text">Some text inside the second card</p>
    </div>
  </div>
  <div class="card bg-success">
    <div class="card-body text-center">
      <p class="card-text">Some text inside the third card</p>
    </div>
  </div>
  <div class="card bg-danger">
    <div class="card-body text-center">
      <p class="card-text">Some text inside the fourth card</p>
    </div>
  </div>
  <div class="card bg-light">
    <div class="card-body text-center">
      <p class="card-text">Some text inside the fifth card</p>
    </div>
  </div>
  <div class="card bg-info">
    <div class="card-body text-center">
      <p class="card-text">Some text inside the sixth card</p>
    </div>
  </div>
</div>
```

There are many more styles of the card element.

For more information, visit * <a href='https://getbootstrap.com/docs/4.1/components/card/' target='_blank' rel='nofollow'>Bootstrap Card documentation</a> *
