---
title: Responsive Web Design
---
## Responsive Web Design

Responsive web design is the concept of designing web pages that adapt to different screen sizes. It commonly involves the use of different layouts, font sizes, and placement of navigation menus.

A mobile first approach should be used when building a responsive website or web app which means styling for the smallest screen first, usually 320px, and then using media queries to style layout for larger screens. 

In order to create a responsive web page, CSS is commonly used to style your HTML elements. Some common methods in CSS used to create responsive web designs are:

1. Writing [media queries](https://guide.freecodecamp.org/css/media-queries)
2. Using pre-existing [CSS frameworks](https://guide.freecodecamp.org/css/css-frameworks)
3. Using the [Flexbox model](https://guide.freecodecamp.org/css/layout/flexbox)
4. Using [CSS Grid](https://guide.freecodecamp.org/css/layout/grid-layout)

### 1. Media queries

Media queries tell the web browser to ignore or replace properties of the webpage based on specific attributes like screen width or whether the user is printing.

```
@media (query) {
  /* The browser will use the CSS rules within the curly braces when the query is true */
}
```

The following example sets `padding-left` and `padding-right` within the class `more-padding` when the screen width is less than or equal to 768px.

```
@media screen and (max-width: 768px) {
    .more-padding {
        padding-left: 10px;
        padding-right: 10px; 
    } 
}
```

### 2. CSS Frameworks

CSS frameworks like [Bootstrap](https://www.getbootstrap.com/), [Material Design Lite](https://getmdl.io/), and [Foundation](https://foundation.zurb.com/) have pre-built CSS classes that make responsive design coding simpler. These classes operate like standard HTML classes.

In this example, `col-md-9` and `col-sm-6` set the width of the `<div>` tag based on whether the screen is small or medium.

```html
<div class="col-12 col-md-9 col-sm-6"></div>
```

The Bootstrap framework divides a row into twelve columns. In the above example, the `<div>` will spread across either nine or six of them. The grid system, pictured below, is fundamental to how Bootstrap eases responsive design.

![Grid Example](https://www.javatpoint.com/bootstrappages/images/bootstrapgrid.jpg "Basic Grid Example")

### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
1. <a href='https://medium.freecodecamp.org/css-flexbox-interactive-tutorial-in-8-minutes-including-cheat-sheet-6214e00de3d2' target='_blank' rel='nofollow'>CSS Flexbox Complete tutorial in 8 minutes</a>
2. [Freecodecamp CSS section](https://guide.freecodecamp.org/css).
3. <a href="https://www.youtube.com/watch?v=zBjUEDzK-ow"/>CSS Flexbox tutorial by CodingTutorials360</a>
