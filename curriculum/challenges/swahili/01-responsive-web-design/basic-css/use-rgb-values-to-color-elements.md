---
id: bad87fee1348bd9aede08718
title: Use RGB values to Color Elements
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkp2fr'
forumTopicId: 18369
dashedName: use-rgb-values-to-color-elements
---

# --description--

Another way you can represent colors in CSS is by using `RGB` values.

The `RGB` value for black looks like this:

```css
rgb(0, 0, 0)
```

The `RGB` value for white looks like this:

```css
rgb(255, 255, 255)
```

Instead of using six hexadecimal digits like you do with hex code, with `RGB` you specify the brightness of each color with a number between 0 and 255.

If you do the math, the two digits for one color equal 16 times 16, which gives us 256 total values. So `RGB`, which starts counting from zero, has the exact same number of possible values as hex code.

Here's an example of how you'd change the `body` background to orange using its RGB code.

```css
body {
  background-color: rgb(255, 165, 0);
}
```

# --instructions--

Let's replace the hex code in our `body` element's background color with the RGB value for black: `rgb(0, 0, 0)`

# --hints--

Your `body` element should have a black background.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

You should use `rgb` to give your `body` element a background of black.

```js
assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #F00;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: rgb(0, 0, 0);
  }
</style>
```
