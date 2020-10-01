---
id: 5a9d7286424fe3d0e10cad13
title: Attach a Fallback value to a CSS Variable
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bDNfp'
forumTopicId: 301084
---

## Description

<section id='description'>
When using your variable as a CSS property value, you can attach a fallback value that your browser will revert to if the given variable is invalid.
<strong>Note:</strong> This fallback is not used to increase browser compatibility, and it will not work on IE browsers. Rather, it is used so that the browser has a color to display if it cannot find your variable.
Here's how you do it:

```css
background: var(--penguin-skin, black);
```

This will set background to black if your variable wasn't set.
Note that this can be useful for debugging.

</section>

## Instructions

<section id='instructions'>
It looks like there is a problem with the variables supplied to the <code>.penguin-top</code> and <code>.penguin-bottom</code> classes. Rather than fix the typo, add a fallback value of <code>black</code> to the <code>background</code> property of the <code>.penguin-top</code> and <code>.penguin-bottom</code> classes.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: The fallback value of <code>black</code> should be used in the <code>background</code> property of the <code>penguin-top</code> class.
    testString: assert(code.match(/.penguin-top\s*?{[\s\S]*background\s*?:\s*?var\(\s*?--pengiun-skin\s*?,\s*?black\s*?\)\s*?;[\s\S]*}[\s\S]*.penguin-bottom\s{/gi));
  - text: The fallback value of <code>black</code> should be used in <code>background</code> property of the <code>penguin-bottom</code> class.
    testString: assert(code.match(/.penguin-bottom\s*?{[\s\S]*background\s*?:\s*?var\(\s*?--pengiun-skin\s*?,\s*?black\s*?\)\s*?;[\s\S]*}/gi));
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .penguin {
    --penguin-skin: black;
    --penguin-belly: gray;
    --penguin-beak: yellow;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .penguin-top {
    top: 10%;
    left: 25%;

    /* Change code below this line */
    background: var(--pengiun-skin);
    /* Change code above this line */

    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;

    /* Change code below this line */
    background: var(--pengiun-skin);
    /* Change code above this line */

    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, black);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, black);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background: #c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```

</div>

</section>

## Solution

<section id='solution'>

```html
<style>
  .penguin-top {
    background: var(--pengiun-skin, black);
  }
  .penguin-bottom {
    background: var(--pengiun-skin, black);
  }
</style>
```

</section>
