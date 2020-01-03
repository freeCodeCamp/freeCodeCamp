---
id: 587d781e367417b2b2512acc
title: Lock an Element to the Browser Window with Fixed Positioning
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDNUR'
forumTopicId: 301061
---

## Description
<section id='description'>
The next layout scheme that CSS offers is the <code>fixed</code> position, which is a type of absolute positioning that locks an element relative to the browser window. Similar to absolute positioning, it's used with the CSS offset properties and also removes the element from the normal flow of the document. Other items no longer "realize" where it is positioned, which may require some layout adjustments elsewhere.
One key difference between the <code>fixed</code> and <code>absolute</code> positions is that an element with a fixed position won't move when the user scrolls.
</section>

## Instructions
<section id='instructions'>
The navigation bar in the code is labeled with an id of <code>navbar</code>. Change its <code>position</code> to <code>fixed</code>, and offset it 0 pixels from the <code>top</code> and 0 pixels from the <code>left</code>. After you have added the code, scroll the preview window to see how the navigation stays in place.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#navbar</code> element should have a <code>position</code> set to <code>fixed</code>.
    testString: assert($('#navbar').css('position') == 'fixed');
  - text: Your code should use the <code>top</code> CSS offset of 0 pixels on the <code>#navbar</code> element.
    testString: assert($('#navbar').css('top') == '0px');
  - text: Your code should use the <code>left</code> CSS offset of 0 pixels on the <code>#navbar</code> element.
    testString: assert($('#navbar').css('left') == '0px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {



    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```

</section>
