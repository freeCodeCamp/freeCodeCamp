---
id: 587d78a4367417b2b2512ad3
title: Adjust the Color of Various Elements to Complementary Colors
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/cWmPpud'
forumTopicId: 301033
---

## Description
<section id='description'>
The Complementary Colors challenge showed that opposite colors on the color wheel can make each other appear more vibrant when placed side-by-side. However, the strong visual contrast can be jarring if it's overused on a website, and can sometimes make text harder to read if it's placed on a complementary-colored background. In practice, one of the colors is usually dominant and the complement is used to bring visual attention to certain content on the page.
</section>

## Instructions
<section id='instructions'>
This page will use a shade of teal (<code>#09A7A1</code>) as the dominant color, and its orange (<code>#FF790E</code>) complement to visually highlight the sign-up buttons. Change the <code>background-color</code> of both the <code>header</code> and <code>footer</code> from black to the teal color. Then change the <code>h2</code> text <code>color</code> to teal as well. Finally, change the <code>background-color</code> of the <code>button</code> to the orange color.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'The <code>header</code> element should have a <code>background-color</code> of #09A7A1.'
    testString: "assert($('header').css('background-color') == 'rgb(9, 167, 161)');"
  - text: 'The <code>footer</code> element should have a <code>background-color</code> of #09A7A1.'
    testString: "assert($('footer').css('background-color') == 'rgb(9, 167, 161)');"
  - text: 'The <code>h2</code> element should have a <code>color</code> of #09A7A1.'
    testString: "assert($('h2').css('color') == 'rgb(9, 167, 161)');"
  - text: 'The <code>button</code> element should have a <code>background-color</code> of #FF790E.'
    testString: "assert($('button').css('background-color') == 'rgb(255, 121, 14)');"

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: white;
  }
  header {
    background-color: black;
    color: white;
    padding: 0.25em;
  }
  h2 {
    color: black;
  }
  button {
    background-color: white;
  }
  footer {
    background-color: black;
    color: white;
    padding: 0.5em;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
</header>
<main>
  <article>
    <h2>Machine Learning in the Kitchen</h2>
    <p>Join this two day workshop that walks through how to implement cutting-edge snack-getting algorithms with a command line interface. Coding usually involves writing exact instructions, but sometimes you need your computer to execute flexible commands, like <code>fetch Pringles</code>.</p>
    <button>Sign Up</button>
  </article>
  <article>
    <h2>Bisection Vegetable Chopping</h2>
    <p>This week-long retreat will level-up your coding ninja skills to actual ninja skills. No longer is the humble bisection search limited to sorted arrays or coding interview questions, applying its concepts in the kitchen will have you chopping carrots in O(log n) time before you know it.</p>
    <button>Sign Up</button>
  </article>
</main>
<br>
<footer>&copy; 2018 FCC Kitchen</footer>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  body {
    background-color: white;
  }
  header {
    background-color: #09A7A1;
    color: white;
    padding: 0.25em;
  }
  h2 {
    color: #09A7A1;
  }
  button {
    background-color: #FF790E;
  }
  footer {
    background-color: #09A7A1;
    color: white;
    padding: 0.5em;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
</header>
<main>
  <article>
    <h2>Machine Learning in the Kitchen</h2>
    <p>Join this two day workshop that walks through how to implement cutting-edge snack-getting algorithms with a command line interface. Coding usually involves writing exact instructions, but sometimes you need your computer to execute flexible commands, like <code>fetch Pringles</code>.</p>
    <button>Sign Up</button>
  </article>
  <article>
    <h2>Bisection Vegetable Chopping</h2>
    <p>This week-long retreat will level-up your coding ninja skills to actual ninja skills. No longer is the humble bisection search limited to sorted arrays or coding interview questions, applying its concepts in the kitchen will have you chopping carrots in O(log n) time before you know it.</p>
    <button>Sign Up</button>
  </article>
</main>
<br>
<footer>&copy; 2018 FCC Kitchen</footer>
```

</section>
