---
id: 587d78a5367417b2b2512ada
title: Use the CSS Transform scale Property to Scale an Element on Hover
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLPJuM'
forumTopicId: 301077
---

## Description
<section id='description'>
The <code>transform</code> property has a variety of functions that let you scale, move, rotate, skew, etc., your elements. When used with pseudo-classes such as <code>:hover</code> that specify a certain state of an element, the <code>transform</code> property can easily add interactivity to your elements.
Here's an example to scale the paragraph elements to 2.1 times their original size when a user hovers over them:

```css
p:hover {
  transform: scale(2.1);
}
```


  <strong>Note:</strong> Applying a transform to a <code>div</code> element will also affect any child elements contained in the div.
</section>

## Instructions
<section id='instructions'>
Add a CSS rule for the <code>hover</code> state of the <code>div</code> and use the <code>transform</code> property to scale the <code>div</code> element to 1.1 times its original size when a user hovers over it.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The size of the <code>div</code> element should scale 1.1 times when the user hovers over it.
    testString: assert(code.match(/div:hover\s*?{\s*?transform:\s*?scale\(1\.1\);/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
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
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }
  div:hover {
    transform: scale(1.1);
  }
</style>
<div></div>

```

</section>
