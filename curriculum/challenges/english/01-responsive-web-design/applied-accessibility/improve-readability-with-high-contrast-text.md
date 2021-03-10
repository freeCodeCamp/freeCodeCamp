---
id: 587d778e367417b2b2512aab
title: Improve Readability with High Contrast Text
challengeType: 0
videoUrl: 'https://scrimba.com/c/cKb3nCq'
forumTopicId: 301017
dashedName: improve-readability-with-high-contrast-text
---

# --description--

Low contrast between the foreground and background colors can make text difficult to read. Sufficient contrast improves your content's readability, but what exactly does "sufficient" mean?

The Web Content Accessibility Guidelines (WCAG) recommend at least a 4.5 to 1 contrast ratio for normal text. The ratio is calculated by comparing the relative luminance values of two colors. This ranges from 1:1 for the same color, or no contrast, to 21:1 for white against black, the most substantial contrast. There are many contrast checking tools available online that calculate this ratio for you.

# --instructions--

Camper Cat's choice of light gray text on a white background for his recent blog post has a 1.5:1 contrast ratio, making it hard to read. Change the `color` of the text from the current gray (`#D3D3D3`) to a darker gray (`#636363`) to improve the contrast ratio to 6:1.

# --hints--

Your code should change the text `color` for the `body` to the darker gray.

```js
assert($('body').css('color') == 'rgb(99, 99, 99)');
```

Your code should not change the `background-color` for the `body`.

```js
assert($('body').css('background-color') == 'rgb(255, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  body {
    color: #D3D3D3;
    background-color: #FFF;
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```

# --solutions--

```html
<head>
  <style>
  body {
    color: #636363;
    background-color: #FFF;
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```
