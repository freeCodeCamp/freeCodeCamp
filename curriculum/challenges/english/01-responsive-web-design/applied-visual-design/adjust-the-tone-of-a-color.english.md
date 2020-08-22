---
id: 587d78a4367417b2b2512ad5
title: Adjust the Tone of a Color
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/cEDJvT7'
forumTopicId: 301038
---

## Description
<section id='description'>
The <code>hsl()</code> option in CSS also makes it easy to adjust the tone of a color. Mixing white with a pure hue creates a tint of that color, and adding black will make a shade. Alternatively, a tone is produced by adding gray or by both tinting and shading. Recall that the 's' and 'l' of <code>hsl()</code> stand for saturation and lightness, respectively. The saturation percent changes the amount of gray and the lightness percent determines how much white or black is in the color. This is useful when you have a base hue you like, but need different variations of it.
</section>

## Instructions
<section id='instructions'>
All elements have a default <code>background-color</code> of <code>transparent</code>. Our <code>nav</code> element currently appears to have a <code>cyan</code> background, because the element behind it has a <code>background-color</code> set to <code>cyan</code>. Add a <code>background-color</code> to the <code>nav</code> element so it uses the same <code>cyan</code> hue, but has <code>80% saturation</code> and <code>25% lightness</code> values to change its tone and shade.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>nav</code> element should have a <code>background-color</code> of the adjusted cyan tone using the <code>hsl()</code> property.
    testString: assert(code.match(/nav\s*?{\s*?background-color:\s*?hsl\(180,\s*?80%,\s*?25%\)/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {

  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
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
    color: inherit;
  }
</style>

<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```

</div>



</section>

## Solution
<section id='solution'>


```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {
    background-color: hsl(180, 80%, 25%);
  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
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
    color: inherit;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```

</section>
