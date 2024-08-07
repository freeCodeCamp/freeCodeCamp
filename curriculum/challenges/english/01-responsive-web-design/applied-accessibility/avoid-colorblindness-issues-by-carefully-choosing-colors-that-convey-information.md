---
id: 587d778f367417b2b2512aad
title: >-
  Avoid Colorblindness Issues by Carefully Choosing Colors that Convey
  Information
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437as3'
forumTopicId: 301011
dashedName: >-
  avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information
---

# --description--

There are various forms of colorblindness. These can range from a reduced sensitivity to a certain wavelength of light to the inability to see color at all. The most common form is a reduced sensitivity to detect greens.

For example, if two similar green colors are the foreground and background color of your content, a colorblind user may not be able to distinguish them. Close colors can be thought of as neighbors on the color wheel, and those combinations should be avoided when conveying important information.

**Note:** Some online color picking tools include visual simulations of how colors appear for different types of colorblindness. These are great resources in addition to online contrast checking calculators.

# --instructions--

Camper Cat is testing different styles for an important button, but the yellow (`#FFFF33`) `background-color` and the green (`#33FF33`) text `color` are neighboring hues on the color wheel and virtually indistinguishable for some colorblind users. (Their similar lightness also fails the contrast ratio check). Change the text `color` to a dark blue (`#003366`) to solve both problems.

# --hints--

Your code should change the text `color` for the `button` to the dark blue.

```js
assert($('button').css('color') == 'rgb(0, 51, 102)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  button {
    color: #33FF33;
    background-color: #FFFF33;
    font-size: 14px;
    padding: 10px;
  }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```

# --solutions--

```html
<head>
  <style>
    button {
      color: #003366;
      background-color: #FFFF33;
      font-size: 14px;
      padding: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```
