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

### 3. Flexbox Model

The `flexbox layout model`, makes it's easier to design responsive layout structure without using float or positioning.

This layout model is one-dimensional layout model, and as a method that could offer space distribution between items in an interface and powerful alignment capabilities.

The main axis is defined by `flex-direction`, which has four possible values:

        * row
        * row-reverse
        * column
        * column-reverse

To start using the Flexbox model, you need to first define a `flex container`.
The flex container becomes flexible by setting the display property to flex:

```
    <div class="flex-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>  
    </div>

```
#### The flex container properties are:

        * flex-direction
        * flex-wrap
        * flex-flow
        * justify-content
        * align-items
        * align-content

#### The flex item properties are:

        * order
        * flex-grow
        * flex-shrink
        * flex-basis
        * flex
        * align-self

#### CSS Flexbox Properties

The following table lists the CSS properties used with flexbox:

| Property        | Description                                                                      |
| -------------   | -------------------------------------------------------------------------------- |
| display         | Specifies the type of box used for an HTML element                               |
| flex-direction  | Specifies the direction of the flexible items inside a flex container            |   
| justify-content | Horizontally aligns the flex items when the items do not use all available       |      |                 | space on the main-axis                                                           |
| flex-wrap       | Specifies whether the flex items should wrap or not,there is not enough          | 
|                 | if  room for them on one flex line                                               |   
| align-content   | Modifies the behavior of the flex-wrap property. It is similar to align-items,but|      |                 | instead of aligning flex items, it aligns flex lines                             |
| flex-flow       | A shorthand property for flex-direction and flex-wrap                            |
| order           | Specifies the order of a flexible item relative to the rest of the flex items    |      |                 | inside the same container                                                        |
| align-self      | Used on flex items. Overrides the container's align-items property               |
| flex            | A shorthand property for the flex-grow, flex-shrink, and the flex-basis          |
|                 | properties                                                                       |
| align-items     | Vertically aligns the flex items when the items do not use all available         |    
|                 | space on the cross-axis                                                          |

#### Shorthand values for the flex properties
The predefined values are as follows:

        - flex: initial
        - flex: auto
        - flex: none
        - flex: <positive-number>

### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
1. <a href='https://medium.freecodecamp.org/css-flexbox-interactive-tutorial-in-8-minutes-including-cheat-sheet-6214e00de3d2' target='_blank' rel='nofollow'>CSS Flexbox Complete tutorial in 8 minutes</a>
2. [Freecodecamp CSS section](https://guide.freecodecamp.org/css).
3. <a href="https://www.youtube.com/watch?v=zBjUEDzK-ow"/>CSS Flexbox tutorial by CodingTutorials360</a>
