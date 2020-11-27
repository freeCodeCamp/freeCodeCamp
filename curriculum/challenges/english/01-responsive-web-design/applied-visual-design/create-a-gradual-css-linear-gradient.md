---
id: 587d78a5367417b2b2512ad6
title: Create a Gradual CSS Linear Gradient
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4dpt9'
forumTopicId: 301047
---

## Description

<section id='description'>

Applying a color on HTML elements is not limited to one flat hue. CSS provides the ability to use color transitions, otherwise known as gradients, on elements. This is accessed through the `background` property's `linear-gradient()` function. Here is the general syntax:

`background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);`

The first argument specifies the direction from which color transition starts - it can be stated as a degree, where `90deg` makes a horizontal gradient (from left to right) and `45deg` makes a diagonal gradient (from bottom left to top right). The following arguments specify the order of colors used in the gradient.

Example:

`background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));`

</section>

## Instructions

<section id='instructions'>

Use a `linear-gradient()` for the `div` element's `background`, and set it from a direction of 35 degrees to change the color from `#CCFFFF` to `#FFCCCC`.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: The <code>div</code> element should have a <code>linear-gradient</code> <code>background</code> with the specified direction and colors.
    testString: assert($('div').css('background-image').match(/linear-gradient\(35deg, rgb\(204, 255, 255\), rgb\(255, 204, 204\)\)/gi));

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;

  }

</style>

<div></div>
```

</div>

</section>

## Solution

<section id='solution'>

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
    background: linear-gradient(35deg, #CCFFFF, #FFCCCC);
  }
</style>
<div></div>
```

</section>
