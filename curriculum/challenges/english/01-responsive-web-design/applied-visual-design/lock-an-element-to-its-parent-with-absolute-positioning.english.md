---
id: 587d781e367417b2b2512acb
title: Lock an Element to its Parent with Absolute Positioning
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/cyLJ7c3'
forumTopicId: 301060
---

## Description
<section id='description'>
The next option for the CSS <code>position</code> property is <code>absolute</code>, which locks the element in place relative to its parent container. Unlike the <code>relative</code> position, this removes the element from the normal flow of the document, so surrounding items ignore it. The CSS offset properties (top or bottom and left or right) are used to adjust the position.
One nuance with absolute positioning is that it will be locked relative to its closest <em>positioned</em> ancestor. If you forget to add a position rule to the parent item, (this is typically done using <code>position: relative;</code>), the browser will keep looking up the chain and ultimately default to the body tag.
</section>

## Instructions
<section id='instructions'>
Lock the <code>#searchbar</code> element to the top-right of its <code>section</code> parent by declaring its <code>position</code> as <code>absolute</code>. Give it <code>top</code> and <code>right</code> offsets of 50 pixels each.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#searchbar</code> element should have a <code>position</code> set to <code>absolute</code>.
    testString: assert($('#searchbar').css('position') == 'absolute');
  - text: Your code should use the <code>top</code> CSS offset of 50 pixels on the <code>#searchbar</code> element.
    testString: assert($('#searchbar').css('top') == '50px');
  - text: Your code should use the <code>right</code> CSS offset of 50 pixels on the <code>#searchbar</code> element.
    testString: assert($('#searchbar').css('right') == '50px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #searchbar {



  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  #searchbar {
    position: absolute;
    top: 50px;
    right: 50px;
  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```

</section>
