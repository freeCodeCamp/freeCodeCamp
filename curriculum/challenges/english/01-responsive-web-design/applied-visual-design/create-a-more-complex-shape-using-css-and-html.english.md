---
id: 587d78a6367417b2b2512ade
title: Create a More Complex Shape Using CSS and HTML
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpz4fr'
forumTopicId: 301050
---

## Description
<section id='description'>
One of the most popular shapes in the world is the heart shape, and in this challenge you'll create one using pure CSS. But first, you need to understand the <code>::before</code> and <code>::after</code> pseudo-elements. These pseudo-elements are used to add something before or after a selected element. In the following example, a <code>::before</code> pseudo-element is used to add a rectangle to an element with the class <code>heart</code>:

```css
.heart::before {
  content: "";
  background-color: yellow;
  border-radius: 25%;
  position: absolute;
  height: 50px;
  width: 70px;
  top: -50px;
  left: 5px;
}
```

For the <code>::before</code> and <code>::after</code> pseudo-elements to function properly, they must have a defined <code>content</code> property. This property is usually used to add things like a photo or text to the selected element. When the <code>::before</code> and <code>::after</code> pseudo-elements are used to make shapes, the <code>content</code> property is still required, but it's set to an empty string.
In the above example, the element with the class of <code>heart</code> has a <code>::before</code> pseudo-element that produces a yellow rectangle with <code>height</code> and <code>width</code> of 50px and 70px, respectively. This rectangle has round corners due to its 25% border radius and is positioned absolutely at 5px from the <code>left</code> and 50px above the <code>top</code> of the element.
</section>

## Instructions
<section id='instructions'>
Transform the element on the screen to a heart. In the <code>heart::after</code> selector, change the <code>background-color</code> to pink and the <code>border-radius</code> to 50%.
Next, target the element with the class <code>heart</code> (just <code>heart</code>) and fill in the <code>transform</code> property. Use the <code>rotate()</code> function with -45 degrees.
Finally, in the <code>heart::before</code> selector, set its <code>content</code> property to an empty string.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>background-color</code> property of the <code>heart::after</code> selector should be pink.
    testString: assert(code.match(/\.heart::after\s*?{\s*?background-color\s*?:\s*?pink\s*?;/gi));
  - text: The <code>border-radius</code> of the <code>heart::after</code> selector should be 50%.
    testString: assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2);
  - text: The <code>transform</code> property for the <code>heart</code> class should use a <code>rotate()</code> function set to -45 degrees.
    testString: assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi));
  - text: The <code>content</code> of the <code>heart::before</code> selector should be an empty string.
    testString: assert(code.match(/\.heart::before\s*?{\s*?content\s*?:\s*?("|')\1\s*?;/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: ;
  }
  .heart::after {
    background-color: blue;
    content: "";
    border-radius: 25%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: ;
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
  }
  .heart::after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: "";
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```

</section>
