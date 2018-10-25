---
title: CSS Flexbox Tips and Tricks
---
# CSS Flexbox

<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes' target='_blank' rel='nofollow'>CSS Flexbox</a> allows us to easily format our HTML like you never knew was possible. With flexbox it is possible to align vertically and horizontally, easily. Like the sound of it? Yeah me too.

It is also fantastic for general layout of your website or app, it is easy to learn, supported well (in all modern browsers) and is great to work with, not to mention it doesn't take long to get to grips with at all!

## Flexbox

Here is a list of the flexbox properties that can be used to position out elements in css:

### CSS that can be applied to the container

    display: flexbox | inline-flex;
    flex-direction: row | row-reverse | column | column-reverse;
    flex-wrap: nowrap | wrap | wrap-reverse;
    flex-flow: <‘flex-direction’> || <‘flex-wrap’>
    justify-content: flex-start | flex-end | center | space-between | space-around;
    align-items: flex-start | flex-end | center | baseline | stretch;
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;

### CSS that can be applied to items/elements in the container

    order: <integer>;
    flex-grow: <number>; /* default 0 */
    flex-shrink: <number>; /* default 1 */
    flex-basis: <length> | auto; /* default auto */
    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    align-self: auto | flex-start | flex-end | center | baseline | stretch;

So now you have your toolkit but you ask "What do I do with my tools, how do I use these?", well let me show you.

### Display Flex

`display: flex;` is just to tell your browser hey I would like to use flexbox with this container, please. This will initialize this box as a flex container and apply some default flex properties.

This is what out container looks like without `display: flex;`

![CSS playground no flex properties](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8f20f30d24cba9a7f56bf950a3f23d37d356ca51.png)

After adding `display: flex;` we get the below, the default flex properties are applied causing it to show as such

![CSS playground display flex default style](//discourse-user-assets.s3.amazonaws.com/original/2X/6/66404664f9177ae748be00f769faf67d5956034d.png)

### Flex Direction

`flex-direction:` allows us to control how the items in the container display, do you want them left to right, right to left, top to bottom or bottom to top? you can do all these easily with setting the flex direction of the container.

Flexbox applies row as the default for the direction. Here is what they all look like:

`flex-direction: row;`

![flex-direction: row; example](//discourse-user-assets.s3.amazonaws.com/original/2X/9/951cc993820547efa28e70dca905f5531a4488d5.png)

`flex-direction: row-reverse;`

![flex-direction: row-reverse example](//discourse-user-assets.s3.amazonaws.com/original/2X/c/cf738aaf83f29eccdb461e91b775b10e41b92389.png)

`flex-direction: column;`

![flex-direction: column example](//discourse-user-assets.s3.amazonaws.com/original/2X/7/7ef77565bc07ee86fd3033a531dd76b49709cf7e.png)

`flex-direction: column-reverse;`

![flex-direction: column-reverse example](//discourse-user-assets.s3.amazonaws.com/original/2X/e/ec9a1ec064bf0027fa61016ca620df14d9bd47a9.png)

### Flex Wrap

Flexbox by default will try to fit all elements into one row but you can change this with the flex-wrap property, this allows you to set if the elements will spill over or not, there are 3 properties for `flex-wrap:`

`flex-wrap: nowrap` this is the default and will look to fit everything in one row from left to right.

`flex-wrap: wrap` this will allow items to go on to create multiple rows and from left to right.

`flex-wrap: wrap-reverse` allows for items to be on multiple rows but displaying right to left this time.

### Flex Flow

Flex flow combines the use of `flex-wrap` and `flex-direction` into one property, it is used by first setting the direction and then the wrap.

`flex-flow: column wrap;` is an example if how to use this.

### Justify Content

`justify-content` is a a property to align items in the container along the main axis (this changes depending on how content is displayed). There are multiple options for this and it allows us to fill any empty space on rows but defining how we want to 'justify' it.

Here are our options when we justify our content `flex-start | flex-end | center | space-between | space-around;`.

### Align Items

Align items allows us to align items along the cross-axis. This allows content to be positioned in many different ways using justify content and align items together.

`align-items: flex-start | flex-end | center | baseline | stretch;`

### Align Content

This is for aligning items with multiple lines, it is for aligning on the cross-axis and will have no effect on content that is one line.

`align-content: flex-start | flex-end | center | space-between | space-around | stretch;`

## Games and Apps

<a href='http://www.flexboxdefense.com/' target='_blank' rel='nofollow'>Flexbox Defense</a> is a web game that teaches flexbox the fun way.

<a href='http://flexboxfroggy.com/' target='_blank' rel='nofollow'>Flexbox Froggy</a> is also a web game that teaches flexbox the fun way.

<a href='http://flexboxin5.com/' target='_blank' rel='nofollow'>Flexbox in 5</a> is a web app that allows you to be able to see how flexbox works with a few simple controls.

<a href='http://the-echoplex.net/flexyboxes/' target='_blank' rel='nofollow'>Flexyboxes</a> is an app that allows you too see code samples and change parameters to see how flexbox works visually.

<a href='http://www.flexboxpatterns.com' target='_blank' rel='nofollow'>Flexbox Patters</a> is a website that shows off loads of flexbox examples

## Documentation

<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes' target='_blank' rel='nofollow'>Mozilla Developer Network</a>

<a href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/' target='_blank' rel='nofollow'>CSS Tricks</a>

## Videos

<a href='https://www.youtube.com/watch?v=G7EIAgfkhmg' target='_blank' rel='nofollow'>Flexbox Essentials</a>

<a href='https://www.youtube.com/watch?v=H1lREysgdgc' target='_blank' rel='nofollow'>Flexbox Practical Examples</a>

<a href='https://www.youtube.com/watch?v=Vj7NZ6FiQvo&list=PLu8EoSxDXHP7xj_y6NIAhy0wuCd4uVdid' target='_blank' rel='nofollow'>What The Flexbox?!</a>