---
id: 587d78a3367417b2b2512ace
title: Push Elements Left or Right with the float Property
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/c2MDqu2'
forumTopicId: 301066
---

## Description
<section id='description'>
The next positioning tool does not actually use <code>position</code>, but sets the <code>float</code> property of an element. Floating elements are removed from the normal flow of a document and pushed to either the <code>left</code> or <code>right</code> of their containing parent element. It's commonly used with the <code>width</code> property to specify how much horizontal space the floated element requires.
</section>

## Instructions
<section id='instructions'>
The given markup would work well as a two-column layout, with the <code>section</code> and <code>aside</code> elements next to each other. Give the <code>#left</code> item a <code>float</code> of <code>left</code> and the <code>#right</code> item a <code>float</code> of <code>right</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The element with id <code>left</code> should have a <code>float</code> value of <code>left</code>.
    testString: assert($('#left').css('float') == 'left');
  - text: The element with id <code>right</code> should have a <code>float</code> value of <code>right</code>.
    testString: assert($('#right').css('float') == 'right');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
    #left {

      width: 50%;
    }
    #right {

      width: 40%;
    }
    aside, section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<head>
  <style>
    #left {
      float: left;
      width: 50%;
    }
    #right {
      float: right;
      width: 40%;
    }
    aside, section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```

</section>
