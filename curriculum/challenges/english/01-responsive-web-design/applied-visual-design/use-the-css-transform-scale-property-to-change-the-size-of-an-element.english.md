---
id: 587d78a5367417b2b2512ad9
title: Use the CSS Transform scale Property to Change the Size of an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZVSg'
---

## Description
<section id='description'>
To change the scale of an element, CSS has the <code>transform</code> property, along with its <code>scale()</code> function. The following code example doubles the size of all the paragraph elements on the page:
<blockquote>p {<br>&nbsp;&nbsp;transform: scale(2);<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
Increase the size of the element with the id of <code>ball2</code> to 1.5 times its original size.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Set the <code>transform</code> property for <code>#ball2</code> to scale it 1.5 times its size.
    testString: assert(code.match(/#ball2\s*?{\s*?left:\s*?65%;\s*?transform:\s*?scale\(1\.5\);\s*?}|#ball2\s*?{\s*?transform:\s*?scale\(1\.5\);\s*?left:\s*?65%;\s*?}/gi), 'Set the <code>transform</code> property for <code>#ball2</code> to scale it 1.5 times its size.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .ball {
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;

  }


</style>

<div class="ball" id= "ball1"></div>
<div class="ball" id= "ball2"></div>
```

</div>



</section>

## Solution
<section id='solution'>


```js
var code = "#ball2 {left: 65%; transform: scale(1.5);}"
```

</section>
