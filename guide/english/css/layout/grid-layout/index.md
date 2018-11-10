---
title: Grid Layout
---
## Grid Layout

CSS Grid Layout, simply known as Grid, is a layout scheme that is the newest and the most powerful in CSS. It is [supported by all major browsers](https://caniuse.com/#feat=css-grid) and provides a way to position items on the page and move them around. 

It can automatically assign items to _areas_, size and resize them, take care of creating columns and rows based on a pattern you define, and doing all the calculations using the newly introduced `fr` unit.

### Why Grid?  

- You can easily have a 12-column grid with one line of CSS. `grid-template-columns: repeat(12, 1fr)`
- Grid lets you move things in any direction. Unlike Flex, where you can move items either horizontally (`flex-direction: row`) or vertically (`flex-direction: column`) - not both at the same time, Grid lets you move any _grid item_ to any predefined _grid area_ on the page. The items you move do not have to be adjacent.
- With CSS Grid, you can **change the order of HTML elements using only CSS**. Move something from top to the right, move elements that were in footer to the sidebar etc. Instead of moving the `<div>` from `<footer>` to `<aside>` in the HTML, you can just change its placement with `grid-area` in the CSS stylesheet.

### Grid vs. Flex

- Flex is one-dimensional - either horizontal or vertical, while Grid is two-dimensional, meaning you can move elements in both horizontal and vertical planes
- In Grid, we apply layout styles to the parent container and not the items. Flex on the other hand targets the flex item to set properties like `flex-basis`, `flex-grow`, and `flex-shrink`
- Grid and Flex are not mutually exclusive. You can use both on the same project.


### Checking browser compatability with `@supports` 

Ideally, when you build a site, you'd design it with Grid and use Flex as a fallback. You can find out if your browser supports grid with the `@support` CSS rule (aka feature query). Here's an example:

```css
.container {
  display: grid; /* display grid by default */
}

@supports not (display: grid) { /* if grid is not supported by the browser */
  .container {
    display: flex; /* display flex instead of grid */
  }
}
```

### Getting Started

To make any element a grid, you need to assign its `display` property to `grid`, like so:  

```css
.conatiner {
  display: grid;
}
```

And that's it. You just made your `.container` a grid. Every element inside the `.container` automatically becomes a grid item.

### Defining templates

Rows and columns

```css
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: auto 300px;
```

Areas

```css
grid-template-areas: 
  "a a a a"
  "b c d e"
  "b c d e"
  "f f f f";
```

or

```css
grid-template-areas:
  "header header header header"
  "nav main main sidebar";
```

### Grid Areas

Here's some sample code on how to define and assign grid areas

```css
.site {
  display: grid;
  grid-template-areas: /* applied to grid container */
    "head head" /* you're assigning cells to areas by giving the cells an area name */
    "nav  main" /* how many values kind of depends on how many cells you have in the grid */
    "nav  foot";
}

.site > header {
  grid-area: head;
}

.site > nav {
  grid-area: nav;
}

.site > main {
    grid-area: main;
}

.site > footer {
    grid-area: foot;
}
```

### The `fr` unit
Grid introduces a new `fr` unit, which stands for _fraction_. The good thing about using the `fr` unit is that it takes care of calculations for you. Using `fr` avoids margin and padding issues. With `%` and `em` etc. it becomes a math equation when calculating `grid-gap`. If you used `fr` unit, it’ll automatically calculate both column and gutter sizes and adjust the size of the columns accordingly, plus there will be no bleeding gaps at the end either.

### Examples

#### Changing the order of elements based on screen size

Let's say you want to move the footer to the bottom on small screens and to the right on bigger screens, and there's a bunch of other HTML elements in between the two.

The simple solution is to change the `grid-template-areas` based on the screen size. You can also **change the number of columns and rows based on the screen size**, too. This is a much cleaner and simpler alternative to Bootstrap's Grid system (`col-xs-8 col-sm-6 col-md-4 col-lg-3`).

```css
.site {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title title"
    "main header"
    "main sidebar"
}

@media screen and (min-width: 34em) { /* If the screen is big enough, use a different template for grid areas */
  .site {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      "title title title"
      "main header header"
      "main sidebar footer"
  }
}
```

See the Pen [CSS Grid by example - 2 (grid areas + grid gap)](https://codepen.io/aamnah/pen/RLVVoE/) by Aamnah Akram ([@aamnah](https://codepen.io/aamnah)) on [CodePen](https://codepen.io).

#### More Information:
- [CSS Grid Palyground by Mozilla](https://mozilladevelopers.github.io/playground/) Great starting point if you're new to CSS Grids. It has visuals to help you understand the terminology easily
- [YouTube: Morten Rand-Hendriksen: CSS Grid Changes Everything (About Web Layouts)](https://www.youtube.com/watch?v=txZq7Laz7_4) This presentation will convice you in less than an hour why CSS Grids are cool and why/how you should use them
- [Videos: Learn Grid Layout Video Series by Rachel Andrew](https://gridbyexample.com/video/) Rachel Andrew is considered an expert on the subject. The video titles may look alien and overwhelming, but the content is short and to the point
- [Book: Get Ready for CSS Grid Layout by Rachel Andrew](https://abookapart.com/products/get-ready-for-css-grid-layout)
